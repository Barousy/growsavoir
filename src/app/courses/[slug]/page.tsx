import {notFound} from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/db';

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await prisma.course.findUnique({
    where: { slug: params.slug }
  });

  if (!course) return notFound();

  const lessons = await prisma.lesson.findMany({
    where: { courseId: course.id },
    orderBy: { order: 'asc' }
  });

  return (
    <main className="mx-auto max-w-4xl p-6 space-y-4">
      <div>
        <div className="text-xs uppercase opacity-70">{course.subject} • {course.level}</div>
        <h1 className="text-3xl font-bold">{course.title}</h1>
        {course.summary && <p className="opacity-80">{course.summary}</p>}
      </div>

      <ul className="space-y-2">
        {lessons.map((l) => (
          <li key={l.id}>
            <Link href={`/lesson/${l.slug}`}
                  className="block rounded-lg border p-3 hover:border-black transition">
              <div className="text-sm opacity-70">Leçon {l.order} • ~{l.duration} min</div>
              <div className="font-semibold">{l.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
