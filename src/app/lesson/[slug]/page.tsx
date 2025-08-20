import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import InlineQuiz from '@/components/quiz/InlineQuiz';

export default async function LessonPage({
    params,
  }: {
    params: Promise<{ slug: string }>; // ← Next 15 : params est un Promise
  }) {
    const { slug } = await params;     // ← on “await” params
  
    const lesson = await prisma.lesson.findFirst({
      where: { slug },
      include: {
        ageGroup: true,
        quiz: { include: { questions: { include: { options: true } } } },
        skill: {
          include: {
            subcategory: { include: { category: { include: { subject: true } } } },
          },
        },
      },
    });

  if (!lesson) return notFound();

  const subject = lesson.skill.subcategory.category.subject;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="text-sm opacity-70">
        {subject.title} · {lesson.ageGroup?.title ?? 'Sans tranche'} · {lesson.minutes ?? 8} min
      </div>
      <h1 className="mt-1 text-2xl md:text-3xl font-bold">{lesson.title}</h1>
      {lesson.desc && <p className="mt-2 text-slate-600">{lesson.desc}</p>}

      <article className="prose max-w-none mt-6">
        {typeof lesson.content === 'string' && lesson.content.trim().length > 0
          ? lesson.content
          : 'Contenu à venir.'}
      </article>

      {lesson.quiz && lesson.quiz.questions.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Quiz</h2>
          <InlineQuiz quiz={lesson.quiz} lessonSlug={lesson.slug} />
        </section>
      )}
    </main>
  );
}
