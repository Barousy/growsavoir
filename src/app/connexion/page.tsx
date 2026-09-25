import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import Notice from '@/components/Notice';
import { atLeast, currentUser } from '@/lib/auth';
import { seConnecter } from '@/lib/auth-actions';
import { featureEnabled } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Connexion',
  description: 'Accès à l’espace GrowSavoir et à la console d’administration.',
  // Une page de connexion n'a rien à apporter à un index de recherche.
  robots: { index: false, follow: true },
};

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function Connexion({ searchParams }: Search) {
  const params = await searchParams;
  const suite = one(params.suite) ?? 'auto';
  const already = await currentUser();
  if (already) {
    redirect(suite.startsWith('/') ? suite : atLeast(already.role, 'teacher') ? '/admin' : '/espace');
  }
  const signup = await featureEnabled('signup');

  return (
    <div className="container">
      <div className="card--form">
        <h1 style={{ fontSize: '1.5rem' }}>Se connecter</h1>
        <p className="card__meta">Les leçons sont libres d’accès : ce formulaire sert à l’espace personnel et à la console.</p>
        <Notice erreur={one(params.erreur)} message={one(params.message)} detail={one(params.detail)} attente={one(params.attente)} />

        <form action={seConnecter} method="post">
          <input type="hidden" name="suite" value={suite} />
          <div className="field">
            <label htmlFor="email">Adresse e-mail</label>
            <input id="email" name="email" type="email" autoComplete="username" required autoFocus />
          </div>
          <div className="field">
            <label htmlFor="motdepasse">Mot de passe</label>
            <input id="motdepasse" name="motdepasse" type="password" autoComplete="current-password" required />
          </div>
          <button className="btn btn--primary" type="submit" style={{ marginTop: '1.25rem', width: '100%' }}>
            Se connecter
          </button>
        </form>

        {signup ? (
          <p className="card__meta" style={{ marginTop: '1.25rem' }}>
            Pas encore de compte ? <Link href="/inscription">Créer un compte</Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
