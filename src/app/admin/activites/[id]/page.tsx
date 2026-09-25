import Link from 'next/link';
import { notFound } from 'next/navigation';
import Notice from '@/components/Notice';
import ActivityForm from '@/components/ActivityForm';
import { supprimerActivite } from '@/lib/admin-actions';
import { atLeast, requireRole } from '@/lib/auth';
import { db } from '@/lib/db';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const activity = await db.activity.findUnique({ where: { id }, select: { title: true } });
  return { title: activity ? `Modifier « ${activity.title} »` : 'Activité introuvable' };
}

export default async function ModifierActivite({ params, searchParams }: Props) {
  const { id } = await params;
  const query = await searchParams;
  const user = await requireRole('teacher', `/admin/activites/${id}`);

  const [activity, subjects] = await Promise.all([
    db.activity.findUnique({ where: { id } }),
    db.subject.findMany({ orderBy: { position: 'asc' }, select: { id: true, name: true } }),
  ]);
  if (!activity) notFound();

  return (
    <>
      <p className="hint"><Link href="/admin/activites">← Toutes les activités</Link></p>
      <h1>{activity.title}</h1>
      <p><Link href={`/activites/${activity.slug}`}>/activites/{activity.slug}</Link></p>
      <Notice erreur={one(query.erreur)} message={one(query.message)} detail={one(query.detail)} />

      <ActivityForm subjects={subjects} values={{ ...activity }} />

      {atLeast(user.role, 'admin') ? (
        <div className="panel">
          <h3>Supprimer</h3>
          <p className="hint">Pour la retirer du site sans l’effacer, décochez « Publiée » ci-dessus.</p>
          <form action={supprimerActivite} method="post" style={{ marginTop: '1rem' }}>
            <input type="hidden" name="id" value={activity.id} />
            <button className="btn btn--danger" type="submit">Supprimer définitivement</button>
          </form>
        </div>
      ) : null}
    </>
  );
}
