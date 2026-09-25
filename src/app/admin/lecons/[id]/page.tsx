import Link from 'next/link';
import { notFound } from 'next/navigation';
import Notice from '@/components/Notice';
import LessonForm from '@/components/LessonForm';
import { supprimerLecon } from '@/lib/admin-actions';
import { atLeast, requireRole } from '@/lib/auth';
import { db } from '@/lib/db';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const lesson = await db.lesson.findUnique({ where: { id }, select: { title: true } });
  return { title: lesson ? `Modifier « ${lesson.title} »` : 'Leçon introuvable' };
}

export default async function ModifierLecon({ params, searchParams }: Props) {
  const { id } = await params;
  const query = await searchParams;
  const user = await requireRole('teacher', `/admin/lecons/${id}`);

  const [lesson, subjects] = await Promise.all([
    db.lesson.findUnique({ where: { id } }),
    db.subject.findMany({ orderBy: { position: 'asc' }, select: { id: true, name: true } }),
  ]);
  if (!lesson) notFound();

  return (
    <>
      <p className="hint"><Link href="/admin/lecons">← Toutes les leçons</Link></p>
      <h1>{lesson.title}</h1>
      <p>
        <Link href={`/lecons/${lesson.slug}`}>/lecons/{lesson.slug}</Link> · dernière modification le{' '}
        {lesson.updatedAt.toLocaleDateString('fr-FR')}
      </p>
      <Notice erreur={one(query.erreur)} message={one(query.message)} detail={one(query.detail)} />

      <LessonForm
        subjects={subjects}
        values={{
          id: lesson.id,
          slug: lesson.slug,
          title: lesson.title,
          summary: lesson.summary,
          subjectId: lesson.subjectId,
          level: lesson.level,
          ageGroup: lesson.ageGroup,
          estimatedMinutes: lesson.estimatedMinutes,
          position: lesson.position,
          published: lesson.published,
          locked: lesson.locked,
          author: lesson.author,
          learningObjectives: lesson.learningObjectives,
          keywords: lesson.keywords,
          prerequisites: lesson.prerequisites,
          sources: lesson.sources,
          body: lesson.body,
          assessment: lesson.assessment,
        }}
      />

      {atLeast(user.role, 'admin') ? (
        <div className="panel">
          <h3>Supprimer</h3>
          <p className="hint">
            La suppression est définitive et emporte l’avancement des élèves sur cette leçon.
            Pour la retirer du site sans l’effacer, décochez « Publiée » ci-dessus.
          </p>
          <form action={supprimerLecon} method="post" style={{ marginTop: '1rem' }}>
            <input type="hidden" name="id" value={lesson.id} />
            <button className="btn btn--danger" type="submit">Supprimer définitivement</button>
          </form>
        </div>
      ) : null}
    </>
  );
}
