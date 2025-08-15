import { useMemo, useState } from "react";

type Subject = { key: string; title: string; emoji: string; classes: string };
type Age = { key: string; title: string; emoji: string; desc: string };
type Latest = { slug: string; title: string; tag: string; minutes: number };

const SUBJECTS: Subject[] = [
  { key: "ar",   title: "Arabe",           emoji: "🕌", classes: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100" },
  { key: "fr",   title: "Français",        emoji: "📚", classes: "bg-indigo-100 text-indigo-900 dark:bg-indigo-900/40 dark:text-indigo-100" },
  { key: "en",   title: "Anglais",         emoji: "🗺️", classes: "bg-sky-100 text-sky-900 dark:bg-sky-900/40 dark:text-sky-100" },
  { key: "math", title: "Maths",           emoji: "➗", classes: "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100" },
  { key: "sci",  title: "Sciences",        emoji: "🔬", classes: "bg-teal-100 text-teal-900 dark:bg-teal-900/40 dark:text-teal-100" },
  { key: "it",   title: "Informatique",    emoji: "💻", classes: "bg-fuchsia-100 text-fuchsia-900 dark:bg-fuchsia-900/40 dark:text-fuchsia-100" },
  { key: "is",   title: "Islam & Valeurs", emoji: "🌙", classes: "bg-lime-100 text-lime-900 dark:bg-lime-900/40 dark:text-lime-100" },
];

const AGES: Age[] = [
  { key: "3-6",   title: "3–6 ans",  emoji: "🐣", desc: "Éveil, lecture, maths ludiques" },
  { key: "7-10",  title: "7–10 ans", emoji: "🎈", desc: "Langues, maths, sciences" },
  { key: "11-16", title: "11–16 ans",emoji: "🚀", desc: "Langues, informatique, approfondissements" },
];

const LATEST: Latest[] = [
  { slug: "formes-geometriques", title: "Les formes géométriques", tag: "3–6 ans • Maths", minutes: 4 },
  { slug: "alphabet-arabe-lettres-solaires", title: "Alphabet arabe – lettres solaires", tag: "7–10 ans • Arabe", minutes: 6 },
  { slug: "fractions-simplifiees", title: "Fractions simplifiées", tag: "11–16 ans • Maths", minutes: 8 },
  { slug: "cycle-eau", title: "Cycle de l'eau", tag: "7–10 ans • Sciences", minutes: 5 },
  { slug: "html-balises-base", title: "HTML: balises de base", tag: "11–16 ans • Informatique", minutes: 7 },
];

const BADGES = [
  { k: "starter", title: "Explorateur", desc: "1ère activité terminée" },
  { k: "streak",  title: "Série de 3 jours", desc: "Apprentissage régulier" },
  { k: "quiz10",  title: "Quiz 10/10", desc: "Score parfait" },
];

function cx(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}

export default function BetaPage() {
  const [dark, setDark] = useState(true);
  const [tab, setTab] = useState<"age" | "matiere">("age");
  const [search, setSearch] = useState("");
  const [openQuiz, setOpenQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizScore, setQuizScore] = useState(0);

  const filteredLatest = useMemo(() => {
    if (!search) return LATEST;
    return LATEST.filter((l) => l.title.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <div className={cx(dark ? "dark" : "", "min-h-screen font-sans")}>
      <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
            <div className="shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400" />
            <div className="text-xl md:text-2xl font-extrabold tracking-tight">GrowSavoir — BÊTA</div>
            <span className="hidden md:inline text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-100">Aperçu UI (safe)</span>
            <div className="ml-auto flex items-center gap-2">
              <div className="relative w-48 md:w-72">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher une leçon, un quiz..."
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 pr-9 text-sm outline-none focus:ring-2 focus:ring-sky-500"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">🔎</span>
              </div>
              <button
                onClick={() => setDark((d) => !d)}
                className="rounded-xl px-3 py-2 text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Basculer le thème"
              >
                {dark ? "🌙" : "☀️"}
              </button>
              <button
                onClick={() => setOpenQuiz(true)}
                className="rounded-xl px-3 py-2 text-sm bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow hover:opacity-95"
              >
                Démarrer un quiz
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 pt-8 pb-6 grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ressources ludiques et progressives pour les enfants de <span className="text-sky-600 dark:text-sky-400">3 à 16 ans</span>
            </h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Cours courts, fiches à imprimer, jeux interactifs, et un espace parents pour suivre les progrès.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => setTab("age")}
                className={cx(
                  "px-4 py-2 rounded-xl text-sm border",
                  tab === "age"
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent"
                    : "border-slate-300 dark:border-slate-700"
                )}
              >
                Par âge
              </button>
              <button
                onClick={() => setTab("matiere")}
                className={cx(
                  "px-4 py-2 rounded-xl text-sm border",
                  tab === "matiere"
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent"
                    : "border-slate-300 dark:border-slate-700"
                )}
              >
                Par matière
              </button>
              <a href="#parents" className="px-4 py-2 rounded-xl text-sm border border-slate-300 dark:border-slate-700">
                Espace parents
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-3xl p-5 bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100 dark:from-indigo-900/30 dark:via-sky-900/30 dark:to-emerald-900/30 border border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-600 dark:text-slate-300">Progression</p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {BADGES.map((b) => (
                  <div
                    key={b.k}
                    className="rounded-2xl p-3 bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="text-2xl">🏅</div>
                    <div className="mt-1 font-semibold text-sm">{b.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{b.desc}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setOpenQuiz(true)}
                className="mt-4 w-full rounded-xl bg-sky-600 text-white py-2 text-sm hover:opacity-95"
              >
                Essayer un mini-quiz
              </button>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="max-w-7xl mx-auto px-4 pb-4">
          {tab === "age" ? (
            <div className="grid sm:grid-cols-3 gap-4">
              {AGES.map((a) => (
                <div
                  key={a.key}
                  className="group rounded-3xl p-5 text-left border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl">{a.emoji}</div>
                  <div className="mt-2 text-lg font-bold">{a.title}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{a.desc}</div>
                  <div className="mt-4 text-sm text-sky-700 dark:text-sky-300 group-hover:underline">Voir les activités →</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {SUBJECTS.map((s) => (
                <div
                  key={s.key}
                  className={cx(
                    "rounded-3xl p-5 text-left border border-slate-200 dark:border-slate-800",
                    s.classes
                  )}
                >
                  <div className="text-3xl">{s.emoji}</div>
                  <div className="mt-2 text-lg font-bold">{s.title}</div>
                  <div className="text-sm opacity-80">Leçons, quiz, fiches PDF</div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Latest */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold">Derniers ajouts</h2>
            <span className="text-sm text-sky-700 dark:text-sky-300">(aperçu)</span>
          </div>
          <div className="mt-3 overflow-x-auto">
            <div className="flex gap-4 min-w-max pb-2">
              {filteredLatest.map((l) => (
                <div
                  key={l.slug}
                  className="w-72 shrink-0 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hover:shadow-md"
                >
                  <div className="h-32 rounded-2xl bg-gradient-to-br from-sky-200 to-indigo-200 dark:from-sky-900/30 dark:to-indigo-900/30 flex items-center justify-center text-5xl">
                    🎓
                  </div>
                  <div className="mt-3 font-semibold">{l.title}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {l.tag} • {l.minutes} min
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="px-3 py-1 rounded-lg text-sm bg-slate-100 dark:bg-slate-800">Aperçu</button>
                    <button
                      onClick={() => setOpenQuiz(true)}
                      className="px-3 py-1 rounded-lg text-sm bg-sky-600 text-white"
                    >
                      Quiz
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parents */}
        <section id="parents" className="max-w-7xl mx-auto px-4 py-8">
          <div className="rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-amber-50 via-white to-emerald-50 dark:from-amber-900/10 dark:via-slate-950 dark:to-emerald-900/10">
            <h2 className="text-xl font-extrabold">Espace parents</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Suivez les progrès, téléchargez des fiches, et découvrez des conseils pédagogiques adaptés à chaque âge.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700">Suivi des progrès</button>
              <button className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700">Fiches à imprimer (PDF)</button>
              <button className="px-4 py-2 rounded-xl bg-emerald-600 text-white">Conseils pédagogiques</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-extrabold text-lg">GrowSavoir</div>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Plateforme éducative moderne, respectueuse des valeurs, pour apprendre avec plaisir.
              </p>
            </div>
            <div>
              <div className="font-bold">Âges</div>
              <ul className="mt-2 space-y-1 opacity-80">
                {AGES.map((a) => (
                  <li key={a.key}>
                    <span>{a.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-bold">Matières</div>
              <ul className="mt-2 space-y-1 opacity-80">
                {SUBJECTS.map((s) => (
                  <li key={s.key}>
                    <span>{s.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-bold">Ressources</div>
              <ul className="mt-2 space-y-1 opacity-80">
                <li><span>FAQ</span></li>
                <li><span>Charte & valeurs</span></li>
                <li><span>Contact</span></li>
              </ul>
            </div>
          </div>
        </footer>

        {/* Quiz Modal (mini prototype) */}
        {openQuiz && (
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
            <div className="w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold">Mini-quiz: Les lettres arabes</h3>
                <button
                  onClick={() => {
                    setOpenQuiz(false);
                    setQuizStep(0);
                    setQuizScore(0);
                  }}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                >
                  ✖
                </button>
              </div>
              <div className="mt-4">
                {quizStep === 0 && (
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Question 1/3 · Quelle est une lettre solaire ?</p>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {[
                        { t: "الراء (ar-Râ)", correct: true },
                        { t: "اللام (al-Lâm)", correct: false },
                        { t: "الباء (al-Bâ)", correct: false },
                        { t: "الميم (al-Mîm)", correct: false },
                      ].map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (opt.correct) setQuizScore((s) => s + 1);
                            setQuizStep(1);
                          }}
                          className="rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800"
                        >
                          {opt.t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 1 && (
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Question 2/3 · 6 × 7 = ?</p>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {["36", "42", "48", "56"].map((t, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (t === "42") setQuizScore((s) => s + 1);
                            setQuizStep(2);
                          }}
                          className="rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 2 && (
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Question 3/3 · Balise HTML pour un lien ?</p>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {[
                        { t: "<div>", ok: false },
                        { t: "<a>", ok: true },
                        { t: "<p>", ok: false },
                        { t: "<ul>", ok: false },
                      ].map((o, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (o.ok) setQuizScore((s) => s + 1);
                            setQuizStep(3);
                          }}
                          className="rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800"
                        >
                          <code>{o.t}</code>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 3 && (
                  <div className="text-center">
                    <div className="text-6xl">🎉</div>
                    <h4 className="mt-2 text-xl font-extrabold">Bravo !</h4>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      Ton score: <span className="font-bold">{quizScore}/3</span>
                    </p>
                    <div className="mt-4 flex justify-center gap-3">
                      <button
                        onClick={() => {
                          setQuizStep(0);
                          setQuizScore(0);
                        }}
                        className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700"
                      >
                        Rejouer
                      </button>
                      <button onClick={() => setOpenQuiz(false)} className="px-4 py-2 rounded-xl bg-emerald-600 text-white">
                        Fermer
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
