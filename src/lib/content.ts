/**
 * Accès au contenu.
 *
 * Toutes les lectures publiques passent par ici : les pages restent des
 * composants serveur, et le HTML part complet. C'est exactement ce qui
 * manquait à la version précédente, où chaque page renvoyait une centaine de
 * caractères de texte et un écran de chargement.
 */
import { db } from './db';

export type Section = { type: string; title?: string; content?: string; image?: string };
export type QuizItem = { question: string; type: string; options?: string[]; correctAnswer?: string; explanation?: string; points?: number };
export type Body = {
  introduction?: { title?: string; content?: string; image?: string };
  mainContent?: Section[];
  conclusion?: { summary?: string; keyTakeaways?: string[]; nextSteps?: string[]; additionalResources?: { title: string; url?: string; description?: string }[] };
};

/** Un champ JSON stocké en texte : on ne fait jamais tomber une page dessus. */
export function parse<T>(value: string | null | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export async function listSubjects() {
  return db.subject.findMany({
    where: { published: true },
    orderBy: [{ position: 'asc' }, { name: 'asc' }],
    include: { _count: { select: { lessons: { where: { published: true } } } } },
  });
}

export async function getSubject(slug: string) {
  return db.subject.findFirst({
    where: { slug, published: true },
    include: {
      lessons: {
        where: { published: true },
        orderBy: [{ position: 'asc' }, { slug: 'asc' }],
        select: { slug: true, title: true, summary: true, estimatedMinutes: true, locked: true, position: true },
      },
    },
  });
}

export async function getLesson(slug: string) {
  return db.lesson.findFirst({ where: { slug, published: true }, include: { subject: true } });
}

/** Leçon précédente et suivante dans la matière, pour la navigation de bas de page. */
export async function neighbours(subjectId: string, position: number) {
  const [previous, next] = await Promise.all([
    db.lesson.findFirst({
      where: { subjectId, published: true, position: { lt: position } },
      orderBy: { position: 'desc' }, select: { slug: true, title: true },
    }),
    db.lesson.findFirst({
      where: { subjectId, published: true, position: { gt: position } },
      orderBy: { position: 'asc' }, select: { slug: true, title: true },
    }),
  ]);
  return { previous, next };
}

export async function allLessonSlugs() {
  return db.lesson.findMany({ where: { published: true }, select: { slug: true } });
}

export async function featureEnabled(key: string) {
  const feature = await db.feature.findUnique({ where: { key } });
  return feature?.enabled ?? false;
}

export async function stats() {
  const [subjects, lessons, minutes] = await Promise.all([
    db.subject.count({ where: { published: true } }),
    db.lesson.count({ where: { published: true } }),
    db.lesson.aggregate({ where: { published: true }, _sum: { estimatedMinutes: true } }),
  ]);
  return { subjects, lessons, hours: Math.round((minutes._sum.estimatedMinutes ?? 0) / 60) };
}

/* ------------------------------------------------------------- activités */

export type ActivityLists = {
  materials: string[];
  instructions: string[];
  learningObjectives: string[];
  tips: string[];
  assessment: string[];
};

/** Les niveaux de difficulté de l'ancien site, en clair. */
export const DIFFICULTY: Record<string, string> = {
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  advanced: 'Avancé',
  expert: 'Expert',
};

export const difficultyLabel = (value: string) => DIFFICULTY[value] ?? value;

export async function listActivities() {
  return db.activity.findMany({
    where: { published: true },
    orderBy: [{ position: 'asc' }, { title: 'asc' }],
    include: { subject: { select: { name: true, slug: true, color: true, icon: true } } },
  });
}

export async function getActivity(slug: string) {
  return db.activity.findFirst({
    where: { slug, published: true },
    include: { subject: { select: { name: true, slug: true, color: true } } },
  });
}

export async function allActivitySlugs() {
  return db.activity.findMany({ where: { published: true }, select: { slug: true } });
}
