
export type CategoryId = "ar" | "en" | "fr" | "islam" | "it" | "math" | "science" | "history";
export type LessonLevel = "Débutant" | "Intermédiaire" | "Avancé";
export type LessonContent =
  | { type: "text"; body: string }
  | { type: "activity"; body: string }
  | { type: "quiz"; body: string; quiz: { q: string; options: string[]; answerIndex: number; explanation: string }[] };

export type Lesson = {
  id: string;
  title: string;
  category: CategoryId;
  ageMin: number;
  ageMax: number;
  lang: "ar" | "en" | "fr";
  durationMin: number;
  level: LessonLevel;
  description: string;
  content: LessonContent;
};

const BASE: Lesson[] = [
  { id: "ar-alphabet-1", title: "Alphabet arabe – أ à ث", category: "ar", ageMin: 3, ageMax: 8, lang: "fr", durationMin: 6, level: "Débutant", description: "Prononciation correcte et tracés.", content: { type: "activity", body: "Prononce أ ب ت ث. Exercice: trace chaque lettre 3 fois." } },
  { id: "en-phonics-1", title: "English Phonics: A E I O U", category: "en", ageMin: 5, ageMax: 10, lang: "en", durationMin: 7, level: "Débutant", description: "Short vowels with simple words.", content: { type: "quiz", body: "Choose the right vowel sound.", quiz: [{ q: "c_t (a/e/i/o/u)?", options: ["a","e","i","o","u"], answerIndex: 0, explanation: "cat" }] } },
  { id: "fr-etre-1", title: "Français – Verbe Être (présent)", category: "fr", ageMin: 7, ageMax: 12, lang: "fr", durationMin: 8, level: "Débutant", description: "Je suis, tu es… + mini-quiz.", content: { type: "quiz", body: "Complète le verbe.", quiz: [{ q: "Je ___ content.", options: ["es","suis","est"], answerIndex: 1, explanation: "je suis" }] } },
  { id: "islam-piliers-1", title: "Les 5 piliers de l'Islam (initiation)", category: "islam", ageMin: 6, ageMax: 14, lang: "fr", durationMin: 10, level: "Débutant", description: "Introduction adaptée.", content: { type: "text", body: "Chahada, Salat, Zakat, Sawm, Hajj (si possible)." } },
  { id: "it-bases-1", title: "Informatique – Souris & Clavier", category: "it", ageMin: 6, ageMax: 12, lang: "fr", durationMin: 6, level: "Débutant", description: "Clic gauche/droit, touches utiles.", content: { type: "activity", body: "Écris ton prénom puis enregistre." } },
  { id: "math-add-20", title: "Additions jusqu'à 20", category: "math", ageMin: 5, ageMax: 9, lang: "fr", durationMin: 6, level: "Débutant", description: "Décomposition et calcul mental.", content: { type: "quiz", body: "Calcule.", quiz: [{ q: "7+5?", options: ["10","11","12"], answerIndex: 2, explanation: "12" }] } },
  { id: "science-water-1", title: "Le cycle de l'eau (simplifié)", category: "science", ageMin: 7, ageMax: 12, lang: "fr", durationMin: 7, level: "Débutant", description: "Évaporation, condensation, pluie.", content: { type: "text", body: "Le soleil chauffe l'eau, nuages, pluie…" } },
  { id: "history-seerah-1", title: "Sîrah – Grandes étapes", category: "history", ageMin: 8, ageMax: 16, lang: "fr", durationMin: 12, level: "Débutant", description: "Naissance, Révélation, Hijra…", content: { type: "text", body: "Récit adapté aux enfants, miséricorde et justice." } }
];

const CATS: CategoryId[] = ["ar","en","fr","islam","it","math","science","history"];

export function generateLessons(): Lesson[] {
  const out: Lesson[] = [...BASE];
  let idx = 0;
  while (out.length < 64) {
    const base = BASE[idx % BASE.length];
    const cat = CATS[(idx * 3) % CATS.length];
    const n = Math.floor(idx / BASE.length) + 2;
    const id = `${cat}-${base.id}-${n}`.replaceAll("--", "-");
    const title = `${base.title} – Série ${n}`;
    const ageMin = Math.max(3, base.ageMin);
    const ageMax = Math.min(16, base.ageMax + (n % 3));
    const durationMin = base.durationMin + (n % 2);
    const level: LessonLevel = (n % 3 === 0 ? "Intermédiaire" : base.level);
    const content: LessonContent = base.content.type === "quiz"
      ? { ...base.content, quiz: base.content.quiz }
      : { ...base.content } as LessonContent;
    out.push({ ...base, id, title, category: cat, ageMin, ageMax, durationMin, level, content });
    idx++;
  }
  return out;
}
