import Link from 'next/link';
import { notFound } from 'next/navigation';
import { subjects, lessonsBySubject, allSubjects, type SubjectKey } from '@/data/gs-content';

type Props = { params: { subject: SubjectKey } };

export function generateStaticParams() {
  return allSubjects.map(s => ({ subject: s }));
}
export function generateMetadata({ params }: Props) {
  const s = subjects[params.subject];
  return { title: s ? `${s.title} • Activités` : 'Matière • Activités' };
}

export default function SubjectList({ params }: Props) {
  const sConf = subjects[params.subject];
  if (!sConf) return notFound();
  const items = lessonsBySubject(params.subject);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-extrabold">{sConf.title} — Activités</h1>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(l => (
          <Link key={l.slug} href={`/lesson/${l.slug}`} className="rounded-2xl p-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow">
            <div className="font-semibold">{l.title}</div>
            <div className="text-xs text-slate-500">{l.minutes} min</div>
            <div className="mt-1 text-sm opacity-80">{l.summary}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
