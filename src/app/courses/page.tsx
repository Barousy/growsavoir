// src/app/courses/page.tsx
import { prisma } from '@/lib/db';
import type { Course } from '@prisma/client';
import Link from 'next/link';

// Important en hébergement serverless (Netlify)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function CoursesPage() {
  const courses: Course[] = await prisma.course.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="mx-auto max-w-5xl p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Cours</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c) => (
          <Link
            key={c.id}
            href={`/courses/${c.slug}`}
            className="block p-4 rounded-xl border hover:border-black transition"
          >
            <div className="text-xs uppercase opacity-70">
              {c.subject} • {c.level}
            </div>
            <div className="font-semibold">{c.title}</div>
            {c.summary && <p className="text-sm opacity-70 line-clamp-2">{c.summary}</p>}
          </Link>
        ))}
      </div>
    </main>
  );
}
