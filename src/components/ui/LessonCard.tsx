'use client';
import Link from 'next/link';
import Locked from './Locked';

type LessonLite = {
  id: string;
  slug: string;
  title: string;
  desc?: string | null;
  minutes?: number | null;
  premium: boolean;
};

export default function LessonCard({
  lesson,
  userIsPremium = false,
  hrefPrefix = '/lesson',
}: {
  lesson: LessonLite;
  userIsPremium?: boolean;
  hrefPrefix?: string;
}) {
  const locked = lesson.premium && !userIsPremium;
  const href = locked ? '/upgrade' : `${hrefPrefix}/${lesson.slug}`;

  return (
    <div className="rounded-2xl border p-4 hover:shadow transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{lesson.title}</h3>
          {lesson.desc && <p className="text-sm opacity-80">{lesson.desc}</p>}
          <div className="mt-2 text-xs opacity-70 flex items-center gap-2">
            {lesson.minutes ? <span>{lesson.minutes} min</span> : null}
            {lesson.premium ? <span>• Premium</span> : null}
          </div>
        </div>
        <Link
          href={href}
          className="shrink-0 inline-flex items-center rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50"
        >
          {locked ? 'Débloquer' : 'Ouvrir'}
        </Link>
      </div>

      {locked && <div className="mt-4"><Locked /></div>}
    </div>
  );
}
