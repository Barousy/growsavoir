// src/lib/data.ts

// ---- Types ----
export type CategoryId =
  | "ar"        // Arabe
  | "en"        // Anglais
  | "fr"        // Français
  | "islam"     // Éducation islamique
  | "it"        // Informatique
  | "math"      // Maths
  | "science"   // Sciences
  | "history";  // Histoire de l'islam

export type Lesson = {
  id: string;
  title: string;
  description: string;
  category: CategoryId;
  ageMin: number;
  ageMax: number;
  lang: "fr" | "en";
  durationMin: number;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  content: {
    type: "text" | "quiz" | "activity";
    body: string;
    quiz?: { q: string; options: string[]; answerIndex: number; explanation: string }[];
  };
};

export const CATEGORY_LABELS: Record<CategoryId, string> = {
  ar: "Arabe",
  en: "Anglais",
  fr: "Français",
  islam: "Éducation islamique",
  it: "Informatique",
  math: "Maths",
  science: "Sciences",
  history: "Histoire de l'islam",
};

// ---- Cours de base (1 par carte “non série”) ----
const BASE: Lesson[] = [
  {
    id: "ar-alphabet-1",
    title: "Alphabet arabe – أ à ث",
    category: "ar",
    ageMin: 3, ageMax: 8, lang: "fr", durationMin: 6, level: "Débutant",
    description: "Prononciation correcte et tracés.",
    content: { type: "activity", body: "Prononce أ ب ت ث. Trace chaque lettre 3 fois." }
  },
  {
    id: "en-phonics-1",
    title: "English Phonics: A E I O U",
    category: "en",
    ageMin: 5, ageMax: 10, lang: "en", durationMin: 7, level: "Débutant",
    description: "Short vowels with simple words.",
    content: {
      type: "quiz", body: "Choose the right vowel sound.",
      quiz: [{ q: "c_t (a/e/i/o/u)?", options: ["a","e","i","o","u"], answerIndex: 0, explanation: "cat uses short 'a'." }]
    }
  },
  {
    id: "fr-etre-1",
    title: "Français – Verbe Être (présent)",
    category: "fr",
    ageMin: 7, ageMax: 12, lang: "fr", durationMin: 8, level: "Débutant",
    description: "Je suis, tu es… + mini-quiz.",
    content: {
      type: "quiz", body: "Complète le verbe.",
      quiz: [{ q: "Je ___ content.", options: ["es","suis","est"], answerIndex: 1, explanation: "Je suis." }]
    }
  },
  {
    id: "islam-piliers-1",
    title: "Les 5 piliers de l'Islam (initiation)",
    category: "islam",
    ageMin: 6, ageMax: 14, lang: "fr", durationMin: 10, level: "Débutant",
    description: "Introduction adaptée.",
    content: { type: "text", body: "Chahada, Salat, Zakat, Sawm, Hajj (si possible)." }
  },
  {
    id: "it-bases-1",
    title: "Informatique – Souris & Clavier",
    category: "it",
    ageMin: 6, ageMax: 12, lang: "fr", durationMin: 6, level: "Débutant",
    description: "Clic gauche/droit, touches utiles.",
    content: { type: "activity", body: "Écris ton prénom puis enregistre." }
  },
  {
    id: "math-add-20-1",
    title: "Additions jusqu'à 20",
    category: "math",
    ageMin: 5, ageMax: 9, lang: "fr", durationMin: 6, level: "Débutant",
    description: "Décomposition et calcul mental.",
    content: {
      type: "quiz", body: "Calcule.",
      quiz: [{ q: "7 + 5 ?", options: ["10","11","12"], answerIndex: 2, explanation: "7 + 5 = 12." }]
    }
  },
  {
    id: "science-water-1",
    title: "Le cycle de l'eau (simplifié)",
    category: "science",
    ageMin: 7, ageMax: 12, lang: "fr", durationMin: 7, level: "Débutant",
    description: "Évaporation, condensation, pluie.",
    content: { type: "text", body: "Le soleil chauffe l'eau → évaporation → nuages → pluie." }
  },
  {
    id: "history-seerah-1",
    title: "Sîrah – Grandes étapes",
    category: "history",
    ageMin: 8, ageMax: 16, lang: "fr", durationMin: 12, level: "Débutant",
    description: "Naissance, Révélation, Hijra…",
    content: { type: "text", body: "Récit adapté : naissance à La Mecque, Révélation, Hijra à Médine…" }
  }
];

// ---- Duplique proprement un cours en “Série 2”, “Série 3”, … (catégorie préservée) ----
function makeSeries(base: Lesson, count = 2): Lesson[] {
  const out: Lesson[] = [];
  for (let i = 2; i <= count + 1; i++) {
    out.push({
      ...base,
      id: `${base.id}-s${i}`,
      title: `${base.title} – Série ${i}`,
      // petites variations non destructives (durée / niveau), sans toucher la catégorie
      durationMin: base.durationMin + ((i % 2) ? 0 : 1),
      level: i % 3 === 0 ? "Intermédiaire" : base.level,
      content:
        base.content.type === "quiz"
          ? { ...base.content, quiz: base.content.quiz?.map(q => ({ ...q })) }
          : { ...base.content }
    });
  }
  return out;
}

// ---- Générateur public appelé par ta page ----
export function generateLessons(total = 36): Lesson[] {
  // on part des bases (catégorie correcte)
  const lessons: Lesson[] = [...BASE];

  // pour chaque base, on ajoute Série 2 et Série 3
  for (const base of BASE) {
    lessons.push(...makeSeries(base, 2)); // ajoute 2 séries
  }

  // si tu veux plus d’éléments (total plus grand), on re-boucle proprement
  let idx = 0;
  while (lessons.length < total) {
    const base = BASE[idx % BASE.length];
    const extraIndex = Math.floor(idx / BASE.length) + 4; // redémarre à Série 4
    lessons.push({
      ...base,
      id: `${base.id}-s${extraIndex}`,
      title: `${base.title} – Série ${extraIndex}`,
      durationMin: base.durationMin + (extraIndex % 2),
      level: extraIndex % 3 === 0 ? "Intermédiaire" : base.level,
      content:
        base.content.type === "quiz"
          ? { ...base.content, quiz: base.content.quiz?.map(q => ({ ...q })) }
          : { ...base.content }
    });
    idx++;
  }

  return lessons.slice(0, total);
}

