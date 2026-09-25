import Link from 'next/link';
import Notice from '@/components/Notice';
import ActivityForm from '@/components/ActivityForm';
import { basculerActivite } from '@/lib/admin-actions';
import { requireRole } from '@/lib/auth';
import { difficultyLabel } from '@/lib/content';
import { db } from '@/lib/db';

export const metadata = { title: 'Activités' };

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function AdminActivites({ searchParams }: Search) {
  const params = await searchParams;
  await requireRole('teacher', '/admin/activites');
  const creating = one(params.nouvelle) === '1';

  const [activities, subjects] = await Promise.all([
    db.activity.findMany({
      orderBy: [{ position: 'asc' }, { title: 'asc' }],
      include: { subject: { select: { name: true } } },
    }),
    db.subject.findMany({ orderBy: { position: 'asc' }, select: { id: true, name: true } }),
  ]);

  return (
    <>
      <h1>Activités</h1>
      <p>{activities.length} fiches. Elles sont listées sur /activites et référencées une par une.</p>
      <Notice erreur={one(params.erreur)} message={one(params.message)} detail={one(params.detail)} />

      <p style={{ marginTop: '1.25rem' }}>
        <Link className="btn btn--primary" href="/admin/activites?nouvelle=1">Nouvelle activité</Link>
      </p>

      {creating ? (
        <>
          <h2>Nouvelle activité</h2>
          <ActivityForm values={{ published: false }} subjects={subjects} />
        </>
      ) : null}

      <table className="data">
        <thead>
          <tr><th>#</th><th>Titre</th><th>Matière</th><th>Niveau</th><th>Âge</th><th>État</th><th /></tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.position}</td>
              <td><Link href={`/admin/activites/${activity.id}`}>{activity.title}</Link></td>
              <td>{activity.subject?.name ?? <span className="hint">aucune</span>}</td>
              <td>{difficultyLabel(activity.difficulty)}</td>
              <td>{activity.ageGroup}</td>
              <td>
                <span className={`state state--${activity.published ? 'on' : 'off'}`}>
                  {activity.published ? 'publiée' : 'brouillon'}
                </span>
              </td>
              <td className="right">
                <form action={basculerActivite} method="post">
                  <input type="hidden" name="id" value={activity.id} />
                  <button className="btn btn--ghost btn--small" type="submit">
                    {activity.published ? 'dépublier' : 'publier'}
                  </button>
                </form>{' '}
                <Link href={`/activites/${activity.slug}`}>voir</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
