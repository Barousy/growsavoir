/**
 * Liste des leçons.
 *
 * 132 lignes : une recherche et deux filtres valent mieux qu'un défilement.
 * Le formulaire de filtre est un GET, donc l'état de la liste tient dans l'URL
 * et se partage ou se met en favori.
 */
import Link from 'next/link';
import type { Prisma } from '@prisma/client';
import Notice from '@/components/Notice';
import LessonForm from '@/components/LessonForm';
import { basculerLecon } from '@/lib/admin-actions';
import { atLeast, requireRole } from '@/lib/auth';
import { db } from '@/lib/db';

export const metadata = { title: 'Leçons' };

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function Lecons({ searchParams }: Search) {
  const params = await searchParams;
  const user = await requireRole('teacher');

  const query = (one(params.q) ?? '').trim();
  const subjectSlug = one(params.matiere) ?? '';
  const state = one(params.etat) ?? '';
  const creating = one(params.nouvelle) === '1';

  const where: Prisma.LessonWhereInput = {
    ...(query
      ? {
          OR: [
            { title: { contains: query, mode: 'insensitive' as const } },
            { slug: { contains: query, mode: 'insensitive' as const } },
            { summary: { contains: query, mode: 'insensitive' as const } },
          ],
        }
      : {}),
    ...(subjectSlug ? { subject: { slug: subjectSlug } } : {}),
    ...(state === 'publiees' ? { published: true } : state === 'brouillons' ? { published: false } : {}),
  };

  const [subjects, lessons, total] = await Promise.all([
    db.subject.findMany({ orderBy: { position: 'asc' }, select: { id: true, name: true, slug: true } }),
    db.lesson.findMany({
      where,
      orderBy: [{ subject: { position: 'asc' } }, { position: 'asc' }],
      take: 200,
      select: {
        id: true, slug: true, title: true, published: true, locked: true, position: true,
        estimatedMinutes: true, updatedAt: true, subject: { select: { name: true } },
      },
    }),
    db.lesson.count({ where }),
  ]);

  return (
    <>
      <h1>Leçons</h1>
      <p>{total} leçon{total > 1 ? 's' : ''} correspondant{total > 1 ? 'es' : 'e'} à ce filtre.</p>
      <Notice erreur={one(params.erreur)} message={one(params.message)} detail={one(params.detail)} />

      <form className="toolbar" method="get" action="/admin/lecons">
        <div className="field">
          <label htmlFor="q">Rechercher</label>
          <input id="q" name="q" defaultValue={query} placeholder="titre, slug, résumé" />
        </div>
        <div className="field">
          <label htmlFor="matiere">Matière</label>
          <select id="matiere" name="matiere" defaultValue={subjectSlug}>
            <option value="">toutes</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.slug}>{subject.name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="etat">État</label>
          <select id="etat" name="etat" defaultValue={state}>
            <option value="">tous</option>
            <option value="publiees">publiées</option>
            <option value="brouillons">brouillons</option>
          </select>
        </div>
        <button className="btn btn--ghost" type="submit">Filtrer</button>
        <Link className="btn btn--primary" href="/admin/lecons?nouvelle=1">Nouvelle leçon</Link>
      </form>

      {creating ? (
        <>
          <h2>Nouvelle leçon</h2>
          <LessonForm values={{ published: false }} subjects={subjects} />
        </>
      ) : null}

      <table className="data">
        <thead>
          <tr>
            <th>#</th><th>Titre</th><th>Matière</th><th>État</th><th>Durée</th><th>Mise à jour</th><th />
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr key={lesson.id}>
              <td>{lesson.position}</td>
              <td>
                <Link href={`/admin/lecons/${lesson.id}`}>{lesson.title}</Link>
                {lesson.locked ? <span className="pill" style={{ marginLeft: '.5rem' }}>réservée</span> : null}
              </td>
              <td>{lesson.subject.name}</td>
              <td>
                <span className={`state state--${lesson.published ? 'on' : 'off'}`}>
                  {lesson.published ? 'publiée' : 'brouillon'}
                </span>
              </td>
              <td>{lesson.estimatedMinutes} min</td>
              <td>{lesson.updatedAt.toLocaleDateString('fr-FR')}</td>
              <td className="right">
                <form action={basculerLecon} method="post">
                  <input type="hidden" name="id" value={lesson.id} />
                  <button className="btn btn--ghost btn--small" type="submit">
                    {lesson.published ? 'dépublier' : 'publier'}
                  </button>
                </form>{' '}
                <Link href={`/lecons/${lesson.slug}`}>voir</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!lessons.length ? <p className="hint">Aucune leçon ne correspond. Élargissez le filtre.</p> : null}
      {atLeast(user.role, 'admin') ? null : (
        <p className="hint">La suppression d’une leçon est réservée aux administrateurs.</p>
      )}
    </>
  );
}
