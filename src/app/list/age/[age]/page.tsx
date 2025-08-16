import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ages, lessonsByAge, allAges, type AgeKey } from '@/data/gs-content';

type Props = { params: { age: AgeKey } };

export function generateStaticParams() {
  return allAges.map(a => ({ age: a }));
}
export function generateMetadata({ params }: Props) {
  const a = ages[params.age];
  return { title: a ? `${a.title} • Activités` : 'Âge • Activités' };
}

export default function AgeList({ params }: Props) {
  const aConf = ages[params.age];
  if (!aConf) return notFound();
  const items = lessonsByAge(params.age);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-extrabold">{aConf.title} — Activités</h1>
      <p className="text-slate-500">{aConf.desc}</p>

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
