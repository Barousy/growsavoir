/**
 * Espace d'un compte élève.
 *
 * Volontairement sobre : ce que l'élève a terminé, et de quoi gérer son mot de
 * passe. Les leçons restent en accès libre, cette page ne conditionne donc rien
 * à la connexion.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import Notice from '@/components/Notice';
import { MIN_PASSWORD, ROLE_LABELS, atLeast, currentUser, type Role } from '@/lib/auth';
import { changerMonMotDePasse, seDeconnecter } from '@/lib/auth-actions';
import { annulerFaite } from '@/lib/progress-actions';
import { featureEnabled } from '@/lib/content';
import { db } from '@/lib/db';

export const metadata: Metadata = { title: 'Mon espace', robots: { index: false, follow: false } };

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function Espace({ searchParams }: Search) {
  const params = await searchParams;
  const user = await currentUser();
  if (!user) redirect('/connexion?suite=%2Fespace');

  const [progress, total, tracking] = await Promise.all([
    db.progress.findMany({
      where: { userId: user.id, completed: true },
      orderBy: { completedAt: 'desc' },
      include: { lesson: { select: { id: true, slug: true, title: true, subject: { select: { name: true } } } } },
    }),
    db.lesson.count({ where: { published: true } }),
    featureEnabled('progress'),
  ]);

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <p className="eyebrow">Mon espace</p>
      <h1 style={{ fontSize: 'clamp(1.7rem, 1.2rem + 2vw, 2.3rem)' }}>{user.name || user.email}</h1>
      <p className="section-lead">
        {ROLE_LABELS[(user.role as Role) ?? 'student']}
        {atLeast(user.role, 'teacher') ? <> · <Link href="/admin">ouvrir la console</Link></> : null}
      </p>
      <Notice erreur={one(params.erreur)} message={one(params.message)} detail={one(params.detail)} />

      <section>
        <h2>Leçons terminées</h2>
        {tracking ? (
          <p className="section-lead">
            {progress.length} sur {total}. Le bouton « J’ai terminé cette leçon » se trouve au bas de chaque leçon.
          </p>
        ) : (
          <p className="section-lead">
            Le suivi d’avancement est désactivé sur ce site. Un administrateur peut l’activer depuis la
            console, section « Fonctionnalités ».
          </p>
        )}

        {progress.length ? (
          <ul className="lesson-list" style={{ marginTop: '1.25rem' }}>
            {progress.map((entry) => (
              <li key={entry.id}>
                <Link href={`/lecons/${entry.lesson.slug}`}>
                  <span>
                    <span className="title">{entry.lesson.title}</span>
                    <span className="lesson-list__summary">{entry.lesson.subject.name}</span>
                  </span>
                  <span className="time">
                    {entry.completedAt ? entry.completedAt.toLocaleDateString('fr-FR') : ''}
                  </span>
                </Link>
                <form action={annulerFaite} method="post" style={{ marginTop: '.35rem' }}>
                  <input type="hidden" name="lessonId" value={entry.lesson.id} />
                  <button className="btn btn--ghost btn--small" type="submit">retirer</button>
                </form>
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      <section>
        <h2>Mon mot de passe</h2>
        <form action={changerMonMotDePasse} method="post" className="panel" style={{ maxWidth: '28rem' }}>
          <input type="hidden" name="retour" value="/espace" />
          <div className="field">
            <label htmlFor="actuel">Mot de passe actuel</label>
            <input id="actuel" name="actuel" type="password" autoComplete="current-password" required />
          </div>
          <div className="field">
            <label htmlFor="nouveau">Nouveau mot de passe</label>
            <input id="nouveau" name="nouveau" type="password" autoComplete="new-password" minLength={MIN_PASSWORD} required />
          </div>
          <button className="btn btn--primary" type="submit" style={{ marginTop: '1.25rem' }}>Changer</button>
        </form>
      </section>

      <form action={seDeconnecter} method="post" style={{ marginTop: '2rem' }}>
        <button className="btn btn--ghost" type="submit">Se déconnecter</button>
      </form>
    </div>
  );
}
