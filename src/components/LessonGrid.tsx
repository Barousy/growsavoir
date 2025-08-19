'use client';

import LessonCard from './ui/LessonCard';

type LessonLite = {
  id: string;
  slug: string;
  title: string;
  desc?: string | null;
  minutes?: number | null;
  premium: boolean;
};

export default function LessonGrid({
  lessons,
  userIsPremium = false,
  hrefPrefix = '/lesson',
}: {
  lessons: LessonLite[];
  userIsPremium?: boolean;
  hrefPrefix?: string;
}) {
  if (!lessons?.length) {
    return <p className="text-neutral-500">Aucune leçon pour le moment.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          userIsPremium={userIsPremium}
          hrefPrefix={hrefPrefix}
        />
      ))}
    </div>
  );
}
