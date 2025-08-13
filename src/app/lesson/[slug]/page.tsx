import {notFound} from 'next/navigation';
import { prisma } from '@/lib/db';

export default async function LessonPage({ params }: { params: { slug: string } }) {
  try {
    const lesson = await prisma.lesson.findUnique({ where: { slug: params.slug } });
    if (!lesson) return notFound();

    const course = await prisma.course.findUnique({ where: { id: lesson.courseId } });

    // Safe content parsing with error handling
    let contentSections: string[] = [];
    try {
      if (lesson.content && typeof lesson.content === 'object') {
        const content = lesson.content as any;
        if (content.sections && Array.isArray(content.sections)) {
          contentSections = content.sections.filter((s: any) => typeof s === 'string');
        }
      }
    } catch (error) {
      console.warn('Error parsing lesson content:', error);
      contentSections = [];
    }

    return (
      <main className="mx-auto max-w-3xl p-6 space-y-4">
        <div className="text-xs uppercase opacity-70">
          {course ? `${course.subject} • ${course.level}` : 'Leçon'}
        </div>
        <h1 className="text-3xl font-bold">{lesson.title}</h1>

        <div className="prose">
          {contentSections.length > 0 ? (
            <ul className="list-disc pl-6">
              {contentSections.map((s: string, i: number) => <li key={i}>{s}</li>)}
            </ul>
          ) : (
            <p>Contenu à venir…</p>
          )}
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error in LessonPage:', error);
    return (
      <main className="mx-auto max-w-3xl p-6 space-y-4">
        <h1 className="text-3xl font-bold">Erreur</h1>
        <p>Une erreur s&apos;est produite lors du chargement de la leçon.</p>
      </main>
    );
  }
}
