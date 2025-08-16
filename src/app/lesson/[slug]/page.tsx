import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLesson, lessons } from '@/data/gs-content';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return lessons.map(l => ({ slug: l.slug }));
}

export function generateMetadata({ params }: Props) {
  const l = getLesson(params.slug);
  return {
    title: l ? `${l.title} • GrowSavoir` : 'Leçon • GrowSavoir',
    description: l?.summary ?? 'Leçon éducative GrowSavoir',
  };
}

export default function LessonPage({ params }: Props) {
  const l = getLesson(params.slug);
  if (!l) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="mb-4 text-sm">
        <Link className="underline" href={`/list/age/${l.age}`}>← Retour</Link>
      </nav>

      <h1 className="text-3xl font-extrabold">{l.title}</h1>
      <p className="mt-2 text-slate-500">{l.summary} • {l.minutes} min</p>
      <div className="mt-6 space-y-4 text-lg">
        {l.body.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>

      <div className="mt-8">
        <Link className="inline-block rounded-xl bg-sky-600 text-white px-4 py-2"
              href={`/list/subject/${l.subject}`}>
          Voir plus en {/**/}{l.subject.toUpperCase()}
        </Link>
      </div>
    </main>
  );
}
