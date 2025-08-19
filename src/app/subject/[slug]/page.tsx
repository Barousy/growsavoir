import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import LessonGrid from '@/components/LessonGrid';

type Params = { params: { slug: string } };

export default async function SubjectPage({ params }: Params) {
  const { slug } = params;

  // TODO: remplacer par ta vraie détection premium (cookie/session)
  const userIsPremium = false;

  // On charge la hiérarchie complète pour collecter toutes les leçons du subject.
  const subject = await prisma.subject.findUnique({
    where: { slug },
    include: {
      categories: {
        include: {
          subcategories: {
            include: {
              skills: {
                include: {
                  lessons: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!subject) return notFound();

  // Aplatis les leçons de toutes les skills
  const lessons = subject.categories.flatMap((cat) =>
    cat.subcategories.flatMap((sub) =>
      sub.skills.flatMap((sk) => sk.lessons)
    )
  );

  // Optionnel: tri par "order" puis titre
  lessons.sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || a.title.localeCompare(b.title));

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-bold text-neutral-900">{subject.title}</h1>
      {subject.desc && <p className="mt-1 text-neutral-600">{subject.desc}</p>}

      <div className="mt-6">
        <LessonGrid
          lessons={lessons.map(l => ({
            id: l.id,
            slug: l.slug,
            title: l.title,
            desc: l.desc,
            minutes: l.minutes ?? undefined,
            premium: !!l.premium,
          }))}
          userIsPremium={userIsPremium}
          hrefPrefix="/lesson"
        />
      </div>
    </div>
  );
}
