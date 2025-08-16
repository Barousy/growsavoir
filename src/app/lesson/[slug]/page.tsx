import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLesson, lessons } from '@/data/gs-content';
import { quizzesByLesson } from '@/data/quizzes';
import MiniQuiz from '@/components/MiniQuiz';
import PrintButton from '@/components/PrintButton';

type Props = { params: { slug: string } };

// ---------- Static params & metadata ----------
export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: Props) {
  const l = getLesson(params.slug);
  const title = l ? `${l.title} • GrowSavoir` : 'Leçon • GrowSavoir';
  const description = l?.summary ?? 'Leçon éducative GrowSavoir';
  const url = `https://growsavoir.com/lesson/${params.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'GrowSavoir',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: { canonical: url },
  };
}

// ---------- Helpers d’affichage sûrs ----------
function looksLikeHtml(s: string) {
  return /<!doctype|<[^>]+>/.test(s);
}
function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ---------- Page ----------
export default function LessonPage({ params }: Props) {
  const l = getLesson(params.slug);
  if (!l) return notFound();

  const quiz = quizzesByLesson[l.slug];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: l.title,
    about: l.subject,
    timeRequired: `PT${l.minutes}M`,
    description: l.summary,
    url: `https://growsavoir.com/lesson/${l.slug}`,
    inLanguage: 'fr',
    isAccessibleForFree: true,
    author: { '@type': 'Organization', name: 'GrowSavoir' },
    publisher: { '@type': 'Organization', name: 'GrowSavoir' },
  };

  // IMPORTANT : on utilise <section> ici car <main> est déjà dans le layout
  return (
    <section className="relative z-0 !opacity-100 max-w-4xl mx-auto px-4 py-8">
      {/* JSON-LD SEO (serveur) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav locale sous le header sticky du layout */}
      <nav className="mb-4 flex items-center gap-4">
        <Link
          href={`/list/age/${l.age}`}
          className="text-sm font-medium underline underline-offset-2
                     text-sky-700 hover:text-sky-900
                     dark:text-sky-300 dark:hover:text-white"
        >
          ← Retour
        </Link>
        <PrintButton variant="primary" />
      </nav>

      {/* En-tête lisible (fond carte) */}
      <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
        <h1 className="m-0 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          {l.title}
        </h1>
        <p className="m-0 mt-1 text-base md:text-lg text-slate-700 dark:text-slate-300">
          {l.summary} • {l.minutes} min
        </p>
      </section>

      {/* Corps de la leçon : texte vs extrait HTML */}
      <div className="mt-6 space-y-4 text-lg leading-relaxed">
        {l.body.map((p, i) =>
          looksLikeHtml(p) ? (
            <pre
              key={i}
              className="rounded-xl bg-slate-900 text-slate-100 p-4 overflow-x-auto"
            >
              <code dangerouslySetInnerHTML={{ __html: escapeHtml(p) }} />
            </pre>
          ) : (
            <p key={i} className="text-slate-800 dark:text-slate-200">
              {p}
            </p>
          )
        )}
      </div>

      {/* Quiz */}
      <div className="mt-10">
        <MiniQuiz title="Quiz rapide" questions={quiz ?? []} />
      </div>

      {/* Lien vers la matière */}
      <div className="mt-8">
        <Link
          className="inline-block rounded-xl bg-sky-600 text-white px-4 py-2 hover:opacity-95"
          href={`/list/subject/${l.subject}`}
        >
          Voir plus en {l.subject.toUpperCase()}
        </Link>
      </div>
    </section>
  );
}
