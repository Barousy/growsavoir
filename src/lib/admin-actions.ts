'use server';

/**
 * Écritures de la console d'administration.
 *
 * Un principe : chaque action vérifie elle-même le rôle appelant. La garde
 * posée dans le layout protège l'affichage, pas les écritures — une action est
 * une URL comme une autre, et se contenter du layout laisserait la porte
 * ouverte à qui la connaît.
 */
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from './db';
import { checkPassword, hashPassword, normalizeEmail, requireRole, type Role } from './auth';
import { toSlug } from './slug';

const ROLES: Role[] = ['admin', 'teacher', 'student'];

const text = (value: FormDataEntryValue | null, max = 240) => String(value ?? '').trim().slice(0, max);
const flag = (value: FormDataEntryValue | null) => value === 'on' || value === 'true' || value === '1';
const number = (value: FormDataEntryValue | null, fallback = 0) => {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
};

/** Les lignes d'un textarea, en tableau JSON — le format stocké. */
function lines(value: FormDataEntryValue | null) {
  return JSON.stringify(
    String(value ?? '')
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean),
  );
}

/**
 * Un champ JSON saisi à la main. En cas d'erreur de syntaxe, on ne devine pas :
 * l'action s'arrête et rien n'est écrit, plutôt que d'enregistrer un contenu
 * tronqué qui casserait la page publique.
 */
function json(value: FormDataEntryValue | null, fallback: string) {
  const raw = String(value ?? '').trim();
  if (!raw) return fallback;
  try {
    return JSON.stringify(JSON.parse(raw));
  } catch {
    return null;
  }
}

/**
 * Les pages publiques sont générées ; après une écriture il faut leur dire de
 * se refaire, sinon la modification n'apparaîtrait qu'au bout d'une heure.
 */
function refresh(paths: string[]) {
  for (const path of ['/', '/catalogue', '/sitemap.xml', ...paths]) {
    revalidatePath(path);
  }
}

/* ------------------------------------------------------------------ leçons */

export async function enregistrerLecon(formData: FormData) {
  await requireRole('teacher');

  const id = text(formData.get('id'), 40);
  const title = text(formData.get('title'));
  const subjectId = text(formData.get('subjectId'), 40);
  const slug = (toSlug(text(formData.get('slug')) || title)) || '';
  const back = id ? `/admin/lecons/${id}` : '/admin/lecons';

  if (!title || !subjectId || !slug) redirect(`${back}?erreur=champs`);

  const subject = await db.subject.findUnique({ where: { id: subjectId }, select: { slug: true } });
  if (!subject) redirect(`${back}?erreur=introuvable`);

  const body = json(formData.get('body'), '{}');
  const assessment = json(formData.get('assessment'), '{}');
  const sources = json(formData.get('sources'), '[]');
  if (body === null || assessment === null || sources === null) redirect(`${back}?erreur=json`);

  const data = {
    slug,
    title,
    summary: text(formData.get('summary'), 400),
    subjectId,
    level: text(formData.get('level'), 40) || 'n1-fondamentaux',
    ageGroup: text(formData.get('ageGroup'), 40) || '6-8 ans',
    estimatedMinutes: Math.min(Math.max(number(formData.get('estimatedMinutes'), 20), 1), 600),
    position: number(formData.get('position'), 0),
    published: flag(formData.get('published')),
    locked: flag(formData.get('locked')),
    author: text(formData.get('author'), 120) || 'GrowSavoir',
    learningObjectives: lines(formData.get('learningObjectives')),
    keywords: lines(formData.get('keywords')),
    prerequisites: lines(formData.get('prerequisites')),
    sources,
    body,
    assessment,
  };

  // Le slug est unique : le conflit est une erreur de saisie, pas un incident.
  const clash = await db.lesson.findFirst({ where: { slug, NOT: { id: id || '—' } }, select: { id: true } });
  if (clash) redirect(`${back}?erreur=slug`);

  const saved = id
    ? await db.lesson.update({ where: { id }, data })
    : await db.lesson.create({ data });

  refresh([`/lecons/${saved.slug}`, `/catalogue/${subject.slug}`]);
  redirect(`/admin/lecons/${saved.id}?message=${id ? 'enregistre' : 'cree'}`);
}

export async function supprimerLecon(formData: FormData) {
  await requireRole('admin');
  const id = text(formData.get('id'), 40);
  const lesson = await db.lesson.findUnique({ where: { id }, include: { subject: { select: { slug: true } } } });
  if (!lesson) redirect('/admin/lecons?erreur=introuvable');

  await db.lesson.delete({ where: { id } });
  refresh([`/lecons/${lesson.slug}`, `/catalogue/${lesson.subject.slug}`]);
  redirect('/admin/lecons?message=supprime');
}

/** Publier ou dépublier depuis la liste, sans ouvrir la leçon. */
export async function basculerLecon(formData: FormData) {
  await requireRole('teacher');
  const id = text(formData.get('id'), 40);
  const lesson = await db.lesson.findUnique({ where: { id }, include: { subject: { select: { slug: true } } } });
  if (!lesson) redirect('/admin/lecons?erreur=introuvable');

  await db.lesson.update({ where: { id }, data: { published: !lesson.published } });
  refresh([`/lecons/${lesson.slug}`, `/catalogue/${lesson.subject.slug}`]);
  redirect('/admin/lecons?message=enregistre');
}

/* --------------------------------------------------------------- activités */

export async function enregistrerActivite(formData: FormData) {
  await requireRole('teacher');

  const id = text(formData.get('id'), 40);
  const title = text(formData.get('title'));
  const slug = toSlug(text(formData.get('slug')) || title);
  const back = id ? `/admin/activites/${id}` : '/admin/activites';
  if (!title || !slug) redirect(`${back}?erreur=champs`);

  const subjectId = text(formData.get('subjectId'), 40) || null;
  const data = {
    slug,
    title,
    description: text(formData.get('description'), 600),
    duration: text(formData.get('duration'), 40),
    difficulty: text(formData.get('difficulty'), 20) || 'beginner',
    ageGroup: text(formData.get('ageGroup'), 20) || '6-8',
    materials: lines(formData.get('materials')),
    instructions: lines(formData.get('instructions')),
    learningObjectives: lines(formData.get('learningObjectives')),
    tips: lines(formData.get('tips')),
    assessment: lines(formData.get('assessment')),
    interactive: flag(formData.get('interactive')),
    alone: flag(formData.get('alone')),
    supervised: flag(formData.get('supervised')),
    position: number(formData.get('position'), 0),
    published: flag(formData.get('published')),
    subjectId,
  };

  const clash = await db.activity.findFirst({ where: { slug, NOT: { id: id || '—' } }, select: { id: true } });
  if (clash) redirect(`${back}?erreur=slug`);

  const saved = id
    ? await db.activity.update({ where: { id }, data })
    : await db.activity.create({ data });

  refresh(['/activites', `/activites/${saved.slug}`]);
  redirect(`/admin/activites/${saved.id}?message=${id ? 'enregistre' : 'cree'}`);
}

export async function basculerActivite(formData: FormData) {
  await requireRole('teacher');
  const id = text(formData.get('id'), 40);
  const activity = await db.activity.findUnique({ where: { id }, select: { published: true, slug: true } });
  if (!activity) redirect('/admin/activites?erreur=introuvable');

  await db.activity.update({ where: { id }, data: { published: !activity.published } });
  refresh(['/activites', `/activites/${activity.slug}`]);
  redirect('/admin/activites?message=enregistre');
}

export async function supprimerActivite(formData: FormData) {
  await requireRole('admin');
  const id = text(formData.get('id'), 40);
  const activity = await db.activity.findUnique({ where: { id }, select: { slug: true } });
  if (!activity) redirect('/admin/activites?erreur=introuvable');

  await db.activity.delete({ where: { id } });
  refresh(['/activites', `/activites/${activity.slug}`]);
  redirect('/admin/activites?message=supprime');
}

/* ---------------------------------------------------------------- matières */

export async function enregistrerMatiere(formData: FormData) {
  await requireRole('teacher');
  const id = text(formData.get('id'), 40);
  const name = text(formData.get('name'), 120);
  const slug = (toSlug(text(formData.get('slug')) || name)) || '';
  if (!name || !slug) redirect('/admin/matieres?erreur=champs');

  const color = /^#[0-9a-fA-F]{6}$/.test(text(formData.get('color'), 7))
    ? text(formData.get('color'), 7)
    : '#4f46e5';

  const data = {
    slug,
    name,
    description: text(formData.get('description'), 400),
    icon: text(formData.get('icon'), 8) || '📘',
    color,
    position: number(formData.get('position'), 0),
    published: flag(formData.get('published')),
  };

  const clash = await db.subject.findFirst({ where: { slug, NOT: { id: id || '—' } }, select: { id: true } });
  if (clash) redirect('/admin/matieres?erreur=slug');

  const saved = id ? await db.subject.update({ where: { id }, data }) : await db.subject.create({ data });
  refresh([`/catalogue/${saved.slug}`]);
  redirect(`/admin/matieres?message=${id ? 'enregistre' : 'cree'}`);
}

/**
 * Supprimer une matière emporte ses leçons (cascade). La confirmation demandée
 * est le nom de la matière recopié : un clic seul ne peut pas effacer douze
 * leçons par accident.
 */
export async function supprimerMatiere(formData: FormData) {
  await requireRole('admin');
  const id = text(formData.get('id'), 40);
  const subject = await db.subject.findUnique({ where: { id }, select: { slug: true, name: true } });
  if (!subject) redirect('/admin/matieres?erreur=introuvable');
  if (text(formData.get('confirmation'), 120) !== subject.name) redirect('/admin/matieres?erreur=champs');

  await db.subject.delete({ where: { id } });
  refresh([`/catalogue/${subject.slug}`]);
  redirect('/admin/matieres?message=supprime');
}

/* ------------------------------------------------------------ utilisateurs */

export async function enregistrerUtilisateur(formData: FormData) {
  await requireRole('admin');
  const email = normalizeEmail(formData.get('email'));
  const password = String(formData.get('motdepasse') ?? '');
  const role = ROLES.includes(text(formData.get('role'), 20) as Role) ? (text(formData.get('role'), 20) as Role) : 'student';

  if (!/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(email)) redirect('/admin/utilisateurs?erreur=email');
  const problem = checkPassword(password, email);
  if (problem) redirect(`/admin/utilisateurs?erreur=faible&detail=${encodeURIComponent(problem)}`);

  const existing = await db.user.findUnique({ where: { email }, select: { id: true } });
  if (existing) redirect('/admin/utilisateurs?erreur=emailpris');

  const hashed = await hashPassword(password);
  await db.user.create({
    data: { email, name: text(formData.get('nom'), 120), role, ...hashed },
  });
  redirect('/admin/utilisateurs?message=cree');
}

export async function changerRole(formData: FormData) {
  const me = await requireRole('admin');
  const id = text(formData.get('id'), 40);
  const role = text(formData.get('role'), 20) as Role;
  if (!ROLES.includes(role)) redirect('/admin/utilisateurs?erreur=champs');
  if (id === me.id) redirect('/admin/utilisateurs?erreur=soimeme');

  const user = await db.user.findUnique({ where: { id }, select: { role: true } });
  if (!user) redirect('/admin/utilisateurs?erreur=introuvable');
  if (user.role === 'admin' && role !== 'admin' && (await lastAdmin(id))) {
    redirect('/admin/utilisateurs?erreur=dernieradmin');
  }

  await db.user.update({ where: { id }, data: { role } });
  redirect('/admin/utilisateurs?message=enregistre');
}

export async function basculerUtilisateur(formData: FormData) {
  const me = await requireRole('admin');
  const id = text(formData.get('id'), 40);
  if (id === me.id) redirect('/admin/utilisateurs?erreur=soimeme');

  const user = await db.user.findUnique({ where: { id }, select: { active: true, role: true } });
  if (!user) redirect('/admin/utilisateurs?erreur=introuvable');
  if (user.active && user.role === 'admin' && (await lastAdmin(id))) {
    redirect('/admin/utilisateurs?erreur=dernieradmin');
  }

  await db.user.update({ where: { id }, data: { active: !user.active } });
  // Désactiver un compte doit couper l'accès tout de suite, pas à l'expiration.
  if (user.active) await db.session.deleteMany({ where: { userId: id } });
  redirect('/admin/utilisateurs?message=enregistre');
}

export async function reinitialiserMotDePasse(formData: FormData) {
  await requireRole('admin');
  const id = text(formData.get('id'), 40);
  const password = String(formData.get('motdepasse') ?? '');

  const user = await db.user.findUnique({ where: { id }, select: { email: true } });
  if (!user) redirect('/admin/utilisateurs?erreur=introuvable');

  const problem = checkPassword(password, user.email);
  if (problem) redirect(`/admin/utilisateurs?erreur=faible&detail=${encodeURIComponent(problem)}`);

  const hashed = await hashPassword(password);
  await db.user.update({ where: { id }, data: hashed });
  await db.session.deleteMany({ where: { userId: id } });
  redirect('/admin/utilisateurs?message=motdepasse');
}

export async function supprimerUtilisateur(formData: FormData) {
  const me = await requireRole('admin');
  const id = text(formData.get('id'), 40);
  if (id === me.id) redirect('/admin/utilisateurs?erreur=soimeme');

  const user = await db.user.findUnique({ where: { id }, select: { role: true } });
  if (!user) redirect('/admin/utilisateurs?erreur=introuvable');
  if (user.role === 'admin' && (await lastAdmin(id))) redirect('/admin/utilisateurs?erreur=dernieradmin');

  await db.user.delete({ where: { id } });
  redirect('/admin/utilisateurs?message=supprime');
}

/** Vrai s'il ne resterait plus aucun administrateur actif sans celui-ci. */
async function lastAdmin(id: string) {
  const others = await db.user.count({ where: { role: 'admin', active: true, NOT: { id } } });
  return others === 0;
}

/* -------------------------------------------------------- fonctionnalités */

export async function basculerFonctionnalite(formData: FormData) {
  await requireRole('admin');
  const key = text(formData.get('key'), 60);
  const feature = await db.feature.findUnique({ where: { key } });
  if (!feature) redirect('/admin/fonctionnalites?erreur=introuvable');

  await db.feature.update({ where: { key }, data: { enabled: !feature.enabled } });
  refresh(['/lecons', '/inscription']);
  redirect('/admin/fonctionnalites?message=bascule');
}

/**
 * Déclarer une fonctionnalité. C'est ce qui permet d'en ajouter une sans
 * redéploiement : le code lit `featureEnabled('clé')`, la console décide.
 */
export async function creerFonctionnalite(formData: FormData) {
  await requireRole('admin');
  const key = toSlug(text(formData.get('key'), 60));
  const label = text(formData.get('label'), 120);
  if (!key || !label) redirect('/admin/fonctionnalites?erreur=champs');

  const existing = await db.feature.findUnique({ where: { key }, select: { key: true } });
  if (existing) redirect('/admin/fonctionnalites?erreur=clepris');

  await db.feature.create({
    data: { key, label, description: text(formData.get('description'), 400), enabled: flag(formData.get('enabled')) },
  });
  redirect('/admin/fonctionnalites?message=cree');
}

export async function supprimerFonctionnalite(formData: FormData) {
  await requireRole('admin');
  const key = text(formData.get('key'), 60);
  const feature = await db.feature.findUnique({ where: { key }, select: { key: true } });
  if (!feature) redirect('/admin/fonctionnalites?erreur=introuvable');

  await db.feature.delete({ where: { key } });
  redirect('/admin/fonctionnalites?message=supprime');
}
