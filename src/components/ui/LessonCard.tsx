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
  hrefPrefix?: string; // ex: /lesson ou /subjects/[slug]/lesson
}) {
  const href = `${hrefPrefix}/${lesson.slug}`;

  const locked = lesson.premium && !userIsPremium;

  return (
    <div className="group relative rounded-2xl border bg-white hover:shadow-md transition">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-neutral-900">{lesson.title}</h3>
          {lesson.premium && (
            <span className="text-xs rounded-full bg-amber-100 text-amber-700 px-2 py-0.5">Premium</span>
          )}
        </div>

        {lesson.desc && (
          <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{lesson.desc}</p>
        )}

        <div className="mt-3 flex items-center justify-between text-sm text-neutral-500">
          <span>{lesson.minutes ?? 5} min</span>

          {!locked ? (
            <Link
              href={href}
              className="rounded-lg px-3 py-1.5 bg-blue-600 text-white text-sm hover:bg-blue-700"
            >
              Ouvrir
            </Link>
          ) : (
            <span className="opacity-75">Verrouillé</span>
          )}
        </div>

        {locked && (
          <div className="mt-4">
            <Locked />
          </div>
        )}
      </div>
    </div>
  );
}
