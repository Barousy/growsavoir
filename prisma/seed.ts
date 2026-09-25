/**
 * Amorçage de la base.
 *
 * Les leçons viennent de `content/lessons/*.json` : ce sont les 132 leçons
 * réellement publiées sur growsavoir.com, récupérées telles quelles. Le seed
 * est idempotent — on peut le relancer sans créer de doublon ni perdre les
 * modifications faites depuis la console (upsert sur le slug).
 *
 *   npm run db:seed
 */
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/lib/auth-core.ts';

const db = new PrismaClient();
const LESSONS = path.join(process.cwd(), 'content', 'lessons');
const ACTIVITIES = path.join(process.cwd(), 'content', 'activities');

/**
 * Les activités de l'ancien site rangeaient leurs matières sous d'autres noms.
 * « sciences-islamiques » recouvre du fiqh, du hadith et du tajwîd : il est
 * rattaché au fiqh, faute de mieux, et la console permet de le corriger fiche
 * par fiche.
 */
const ACTIVITY_SUBJECTS: Record<string, string> = {
  anglais: 'anglais',
  arabe: 'arabe',
  francais: 'francais',
  mathematiques: 'mathematiques',
  sciences: 'sciences',
  informatique: 'informatique',
  'sciences-islamiques': 'fiqh',
  'histoire-islam': 'histoire',
  'prophete-muhammad': 'sira',
  'developpement-personnel': 'devperso',
};

/** Présentation des matières : ordre, icône et teinte du catalogue. */
const SUBJECTS: Record<string, { slug: string; icon: string; color: string; position: number; description: string }> = {
  'Langue Arabe': { slug: 'arabe', icon: '📖', color: '#0e7490', position: 1, description: 'L’alphabet, les voyelles et la lecture, pas à pas et de droite à gauche.' },
  'Langue Française': { slug: 'francais', icon: '🇫🇷', color: '#1d4ed8', position: 2, description: 'Alphabet, sons et premiers mots, pour lire et écrire avec assurance.' },
  'Langue Anglaise': { slug: 'anglais', icon: '🇬🇧', color: '#b91c1c', position: 3, description: 'Salutations, mots courants et premières phrases du quotidien.' },
  'Mathématiques': { slug: 'mathematiques', icon: '🔢', color: '#7c3aed', position: 4, description: 'Nombres, calcul et logique, avec des exercices qui se manipulent.' },
  Sciences: { slug: 'sciences', icon: '🔬', color: '#059669', position: 5, description: 'Observer, questionner et comprendre le monde qui nous entoure.' },
  Informatique: { slug: 'informatique', icon: '💻', color: '#0891b2', position: 6, description: 'Le clavier, la souris et les premiers gestes d’un outil numérique.' },
  'Aqîda (Creed)': { slug: 'aqida', icon: '🕌', color: '#15803d', position: 7, description: 'Les fondements de la croyance, expliqués simplement et sans raccourci.' },
  'Fiqh (Jurisprudence)': { slug: 'fiqh', icon: '📜', color: '#a16207', position: 8, description: 'Les actes du quotidien : la purification, la prière, les gestes et leur sens.' },
  'Sîra (Biographie du Prophète ﷺ)': { slug: 'sira', icon: '🌙', color: '#4338ca', position: 9, description: 'La vie du Prophète ﷺ, racontée dans l’ordre et replacée dans son époque.' },
  "Histoire de l'Islam": { slug: 'histoire', icon: '🏛️', color: '#92400e', position: 10, description: 'Les grandes étapes, les lieux et les figures, sans survol ni légende.' },
  'Développement Personnel': { slug: 'devperso', icon: '🌱', color: '#be185d', position: 11, description: 'Se fixer un objectif, s’organiser et persévérer — des habitudes qui servent partout.' },
};

const fallback = (name: string) => ({
  slug: name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
  icon: '📘', color: '#4f46e5', position: 99, description: '',
});

async function main() {
  const files = (await readdir(LESSONS)).filter((f) => f.endsWith('.json'));
  const lessons = await Promise.all(
    files.map(async (f) => JSON.parse(await readFile(path.join(LESSONS, f), 'utf8'))),
  );
  lessons.sort((a, b) => a.slug.localeCompare(b.slug));

  const byName = new Map<string, typeof lessons>();
  for (const lesson of lessons) {
    const list = byName.get(lesson.subject) ?? [];
    list.push(lesson);
    byName.set(lesson.subject, list);
  }

  for (const [name, group] of byName) {
    const meta = SUBJECTS[name] ?? fallback(name);
    const subject = await db.subject.upsert({
      where: { slug: meta.slug },
      update: { name, description: meta.description, icon: meta.icon, color: meta.color, position: meta.position },
      create: { slug: meta.slug, name, description: meta.description, icon: meta.icon, color: meta.color, position: meta.position },
    });

    for (const [index, lesson] of group.entries()) {
      const data = {
        title: lesson.title ?? lesson.slug,
        summary: lesson.summary ?? '',
        level: lesson.level ?? 'n1-fondamentaux',
        ageGroup: lesson.ageGroup ?? '6-8 ans',
        estimatedMinutes: Number(lesson.estimatedMinutes) || 20,
        position: index + 1,
        locked: Boolean(lesson.isLocked),
        learningObjectives: JSON.stringify(lesson.learningObjectives ?? []),
        keywords: JSON.stringify(lesson.keywords ?? []),
        sources: JSON.stringify(lesson.sources ?? []),
        prerequisites: JSON.stringify(lesson.prerequisites ?? []),
        body: JSON.stringify(lesson.body ?? {}),
        assessment: JSON.stringify(lesson.assessment ?? {}),
        author: lesson.metadata?.author ?? 'GrowSavoir',
        subjectId: subject.id,
      };
      await db.lesson.upsert({ where: { slug: lesson.slug }, update: data, create: { slug: lesson.slug, ...data } });
    }
    process.stdout.write(`  ${meta.slug.padEnd(15)} ${group.length} leçons\n`);
  }

  /* ---------------------------------------------------------- activités */
  const activityFiles = (await readdir(ACTIVITIES).catch(() => [])).filter((f) => f.endsWith('.json'));
  const activities = await Promise.all(
    activityFiles.map(async (f) => JSON.parse(await readFile(path.join(ACTIVITIES, f), 'utf8'))),
  );
  activities.sort((a, b) => String(a.id).localeCompare(String(b.id)));

  const subjectIds = new Map(
    (await db.subject.findMany({ select: { id: true, slug: true } })).map((s) => [s.slug, s.id]),
  );

  for (const [index, activity] of activities.entries()) {
    const slug = ACTIVITY_SUBJECTS[activity.subject];
    const data = {
      title: activity.title ?? activity.id,
      description: activity.description ?? '',
      duration: activity.duration ?? '',
      difficulty: activity.difficulty ?? 'beginner',
      ageGroup: activity.ageGroup ?? '6-8',
      materials: JSON.stringify(activity.materials ?? []),
      instructions: JSON.stringify(activity.instructions ?? []),
      learningObjectives: JSON.stringify(activity.learningObjectives ?? []),
      tips: JSON.stringify(activity.tips ?? []),
      assessment: JSON.stringify(activity.assessment ?? []),
      interactive: Boolean(activity.isInteractive),
      alone: Boolean(activity.canBeDoneAlone),
      supervised: Boolean(activity.requiresSupervision),
      position: index + 1,
      subjectId: slug ? subjectIds.get(slug) ?? null : null,
    };
    await db.activity.upsert({ where: { slug: activity.id }, update: data, create: { slug: activity.id, ...data } });
  }
  if (activities.length) process.stdout.write(`\n  ${activities.length} activités\n`);

  /* ------------------------------------------------------- premier compte */
  const email = (process.env.ADMIN_EMAIL ?? 'admin@growsavoir.com').toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (password) {
    const { passwordHash, passwordSalt } = await hashPassword(password);
    await db.user.upsert({
      where: { email },
      update: { role: 'admin', passwordHash, passwordSalt, active: true },
      create: { email, name: 'Administration', role: 'admin', passwordHash, passwordSalt },
    });
    process.stdout.write(`\n  compte administrateur : ${email}\n`);
  } else {
    process.stdout.write('\n  ADMIN_PASSWORD non renseigné : aucun compte créé.\n');
  }

  /* ---------------------------------------------------- interrupteurs */
  const features = [
    { key: 'quiz', label: 'Quiz de fin de leçon', description: 'Affiche le questionnaire et enregistre le score.', enabled: true },
    { key: 'progress', label: 'Suivi de progression', description: 'Mémorise les leçons terminées pour chaque élève.', enabled: true },
    { key: 'signup', label: 'Inscription libre', description: 'Permet à un visiteur de créer son compte sans invitation.', enabled: true },
    { key: 'comments', label: 'Commentaires', description: 'Zone de questions sous chaque leçon. Désactivé par défaut.', enabled: false },
    { key: 'activities', label: 'Fiches d’activités', description: 'Publie la section « Activités » et son lien dans la navigation.', enabled: true },
  ];
  for (const feature of features) {
    await db.feature.upsert({ where: { key: feature.key }, update: { label: feature.label, description: feature.description }, create: feature });
  }

  const [subjects, count, activityCount, users] = await Promise.all([
    db.subject.count(), db.lesson.count(), db.activity.count(), db.user.count(),
  ]);
  process.stdout.write(`\n${subjects} matières · ${count} leçons · ${activityCount} activités · ${users} compte(s)\n`);
}

main().catch((error) => { console.error(error); process.exit(1); }).finally(() => db.$disconnect());
