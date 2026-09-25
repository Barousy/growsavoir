import type { Metadata } from 'next';
import Link from 'next/link';
import Notice from '@/components/Notice';
import { MIN_PASSWORD } from '@/lib/auth';
import { sInscrire } from '@/lib/auth-actions';
import { featureEnabled } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Créer un compte',
  description: 'Créer un compte élève GrowSavoir pour suivre son avancement.',
  robots: { index: false, follow: true },
};

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function Inscription({ searchParams }: Search) {
  const params = await searchParams;
  const open = await featureEnabled('signup');

  return (
    <div className="container">
      <div className="card--form">
        <h1 style={{ fontSize: '1.5rem' }}>Créer un compte</h1>
        <Notice erreur={one(params.erreur)} message={one(params.message)} detail={one(params.detail)} />

        {open ? (
          <form action={sInscrire} method="post">
            <div className="field">
              <label htmlFor="nom">Prénom ou nom d’usage</label>
              <input id="nom" name="nom" type="text" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Adresse e-mail</label>
              <input id="email" name="email" type="email" autoComplete="username" required />
            </div>
            <div className="field">
              <label htmlFor="motdepasse">Mot de passe</label>
              <input id="motdepasse" name="motdepasse" type="password" autoComplete="new-password" minLength={MIN_PASSWORD} required />
              <span className="card__meta">{MIN_PASSWORD} caractères au minimum.</span>
            </div>
            <button className="btn btn--primary" type="submit" style={{ marginTop: '1.25rem', width: '100%' }}>
              Créer mon compte
            </button>
          </form>
        ) : (
          <p className="card__meta" style={{ marginTop: '1rem' }}>
            Les inscriptions sont fermées pour le moment. Un administrateur peut les ouvrir depuis la
            console, section « Fonctionnalités ».
          </p>
        )}

        <p className="card__meta" style={{ marginTop: '1.25rem' }}>
          Déjà un compte ? <Link href="/connexion">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}
