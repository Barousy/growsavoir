// Types & contenu minimal pour démarrer (aucune dépendance)
export type AgeKey = '3-6' | '7-10' | '11-16';
export type SubjectKey = 'ar' | 'fr' | 'en' | 'math' | 'sci' | 'it' | 'is';

export interface Lesson {
  slug: string;
  title: string;
  age: AgeKey;
  subject: SubjectKey;
  minutes: number;
  summary: string;
  body: string[]; // paragraphes simples
}

export const subjects: Record<SubjectKey, { title: string }> = {
  ar: { title: 'Arabe' },
  fr: { title: 'Français' },
  en: { title: 'Anglais' },
  math: { title: 'Maths' },
  sci: { title: 'Sciences' },
  it: { title: 'Informatique' },
  is: { title: 'Islam & Valeurs' },
};

export const ages: Record<AgeKey, { title: string; desc: string }> = {
  '3-6': { title: '3–6 ans', desc: 'Éveil, lecture, maths ludiques' },
  '7-10': { title: '7–10 ans', desc: 'Langues, maths, sciences' },
  '11-16': { title: '11–16 ans', desc: 'Langues, informatique, approfondissements' },
};

export const lessons: Lesson[] = [
  {
    slug: 'formes-geometriques',
    title: 'Les formes géométriques',
    age: '3-6',
    subject: 'math',
    minutes: 4,
    summary: 'Identifier cercle, carré, triangle grâce à des exemples du quotidien.',
    body: [
      'Observe des objets : une roue (cercle), une fenêtre (carré), un panneau (triangle).',
      'Jeu: retrouve 3 objets ronds et 3 carrés dans la maison.',
    ],
  },
  {
    slug: 'alphabet-arabe-lettres-solaires',
    title: 'Alphabet arabe — lettres solaires',
    age: '7-10',
    subject: 'ar',
    minutes: 6,
    summary: 'Comprendre la notion de lettres solaires et la prononciation de ال.',
    body: [
      'Les lettres solaires assimilent le ل de ال, par ex. الرَّجُل (ar-rajul).',
      'Exemples: ت ث د ذ ر ز س ش ص ض ط ظ ل ن.',
    ],
  },
  {
    slug: 'cycle-eau',
    title: "Le cycle de l'eau",
    age: '7-10',
    subject: 'sci',
    minutes: 5,
    summary: 'Évaporation, condensation, précipitations: le trajet de l’eau.',
    body: [
      "L'eau s’évapore, forme des nuages (condensation), puis retombe (pluie/neige).",
      'Expérience: couvre un bol d’eau chaude avec un film, observe la condensation.',
    ],
  },
  {
    slug: 'fractions-simplifiees',
    title: 'Fractions simplifiées',
    age: '11-16',
    subject: 'math',
    minutes: 8,
    summary: 'Réduire une fraction en divisant numérateur et dénominateur par un même nombre.',
    body: [
      'Ex: 18/24 ÷6 = 3/4. Cherche le PGCD pour aller plus vite.',
      'Exercices: simplifie 12/30, 21/28, 45/60.',
    ],
  },
  {
    slug: 'html-balises-base',
    title: 'HTML — balises de base',
    age: '11-16',
    subject: 'it',
    minutes: 7,
    summary: 'Découvrir <h1>, <p>, <a>, <ul>/<li> et créer une mini page.',
    body: [
      'Une page minimale: <!doctype html><html><body><h1>Titre</h1><p>Texte</p></body></html>',
      'Lien: <a href=\"https://example.com\">visiter</a>. Liste: <ul><li>un</li><li>deux</li></ul>.',
    ],
  },
];

// Helpers
export const getLesson = (slug: string) => lessons.find(l => l.slug === slug);
export const lessonsByAge = (age: AgeKey) => lessons.filter(l => l.age === age);
export const lessonsBySubject = (s: SubjectKey) => lessons.filter(l => l.subject === s);
export const allAges = Object.keys(ages) as AgeKey[];
export const allSubjects = Object.keys(subjects) as SubjectKey[];
