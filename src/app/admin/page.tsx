import Link from 'next/link';
import Notice from '@/components/Notice';
import { db } from '@/lib/db';
import { atLeast, requireRole } from '@/lib/auth';

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function Tableau({ searchParams }: Search) {
  const params = await searchParams;
  const user = await requireRole('teacher');

  const [subjects, lessons, drafts, users, features, recent] = await Promise.all([
    db.subject.count(),
    db.lesson.count(),
    db.lesson.count({ where: { published: false } }),
    db.user.count({ where: { active: true } }),
    db.feature.count({ where: { enabled: true } }),
    db.lesson.findMany({
      orderBy: { updatedAt: 'desc' },
      take: 8,
      select: { id: true, title: true, slug: true, updatedAt: true, published: true, subject: { select: { name: true } } },
    }),
  ]);

  return (
    <>
      <h1>Tableau de bord</h1>
      <p>Bonjour {user.name || user.email}. Voici l’état du site.</p>
      <Notice erreur={one(params.erreur)} message={one(params.message)} detail={one(params.detail)} />

      <div className="tiles">
        <div className="tile"><b>{subjects}</b><span>matières</span></div>
        <div className="tile"><b>{lessons}</b><span>leçons</span></div>
        <div className="tile"><b>{drafts}</b><span>brouillons</span></div>
        <div className="tile"><b>{users}</b><span>comptes actifs</span></div>
        <div className="tile"><b>{features}</b><span>fonctionnalités actives</span></div>
      </div>

      <h2>Modifié récemment</h2>
      <table className="data">
        <thead>
          <tr><th>Leçon</th><th>Matière</th><th>État</th><th>Mise à jour</th><th /></tr>
        </thead>
        <tbody>
          {recent.map((lesson) => (
            <tr key={lesson.id}>
              <td><Link href={`/admin/lecons/${lesson.id}`}>{lesson.title}</Link></td>
              <td>{lesson.subject.name}</td>
              <td>
                <span className={`state state--${lesson.published ? 'on' : 'off'}`}>
                  {lesson.published ? 'publiée' : 'brouillon'}
                </span>
              </td>
              <td>{lesson.updatedAt.toLocaleDateString('fr-FR')}</td>
              <td className="right"><Link href={`/lecons/${lesson.slug}`}>voir</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Raccourcis</h2>
      <div className="row" style={{ marginTop: '1rem' }}>
        <Link className="btn btn--primary" href="/admin/lecons?nouvelle=1">Nouvelle leçon</Link>
        <Link className="btn btn--ghost" href="/admin/matieres">Gérer les matières</Link>
        {atLeast(user.role, 'admin') ? (
          <>
            <Link className="btn btn--ghost" href="/admin/utilisateurs">Gérer les utilisateurs</Link>
            <Link className="btn btn--ghost" href="/admin/fonctionnalites">Fonctionnalités</Link>
          </>
        ) : null}
      </div>
    </>
  );
}
