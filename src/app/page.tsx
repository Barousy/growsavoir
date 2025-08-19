// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          GrowSavoir
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Ressources ludiques et progressives pour les enfants de 3 à 16 ans :
          langues, mathématiques, informatique, sciences islamiques et histoire
          — selon la compréhension des pieux prédécesseurs.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card emoji="🍼" title="3–6 ans" href="/list?age=3-6" />
        <Card emoji="🎈" title="7–10 ans" href="/list?age=7-10" />
        <Card emoji="🚀" title="11–16 ans" href="/list?age=11-16" />

        <Card emoji="🕌" title="Langue arabe" href="/subjects/arabe" />
        <Card emoji="📘" title="Français" href="/subjects/francais" />
        <Card emoji="🧮" title="Mathématiques" href="/subjects/maths" />
        <Card emoji="🧪" title="Sciences" href="/subjects/sciences" />
        <Card emoji="💻" title="Informatique" href="/subjects/informatique" />
        <Card emoji="📖" title="Sciences islamiques" href="/subjects/islam" />
        <Card emoji="🧭" title="Histoire de l’Islam" href="/subjects/histoire" />
      </section>

      <section className="mt-14">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <h2 className="text-2xl font-semibold">Commencer</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Choisissez un âge ou une matière ci-dessus pour découvrir des leçons,
            des fiches à imprimer et des quiz rapides.
          </p>
        </div>
      </section>
    </main>
  );
}

function Card({
  emoji,
  title,
  href,
}: {
  emoji: string;
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg transition"
    >
      <div className="text-3xl">{emoji}</div>
      <div className="mt-3 text-xl font-semibold">{title}</div>
      <div className="mt-1 text-sm text-slate-500 group-hover:text-sky-600">
        Voir les activités →
      </div>
    </Link>
  );
}
