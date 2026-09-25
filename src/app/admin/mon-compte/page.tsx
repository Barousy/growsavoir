import Notice from '@/components/Notice';
import { MIN_PASSWORD, ROLE_LABELS, requireRole, type Role } from '@/lib/auth';
import { changerMonMotDePasse } from '@/lib/auth-actions';
import { db } from '@/lib/db';

export const metadata = { title: 'Mon compte' };

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function MonCompte({ searchParams }: Search) {
  const params = await searchParams;
  const user = await requireRole('teacher', '/admin/mon-compte');
  const sessions = await db.session.count({ where: { userId: user.id } });

  return (
    <>
      <h1>Mon compte</h1>
      <p>
        {user.email} · {ROLE_LABELS[(user.role as Role) ?? 'student']} · {sessions} session
        {sessions > 1 ? 's' : ''} ouverte{sessions > 1 ? 's' : ''}
      </p>
      <Notice erreur={one(params.erreur)} message={one(params.message)} detail={one(params.detail)} />

      <h2>Changer mon mot de passe</h2>
      <form action={changerMonMotDePasse} method="post" className="panel" style={{ maxWidth: '28rem' }}>
        <div className="field">
          <label htmlFor="actuel">Mot de passe actuel</label>
          <input id="actuel" name="actuel" type="password" autoComplete="current-password" required />
        </div>
        <div className="field">
          <label htmlFor="nouveau">Nouveau mot de passe</label>
          <input id="nouveau" name="nouveau" type="password" autoComplete="new-password" minLength={MIN_PASSWORD} required />
          <span className="hint">{MIN_PASSWORD} caractères au minimum.</span>
        </div>
        <button className="btn btn--primary" type="submit" style={{ marginTop: '1.25rem' }}>Changer</button>
        <p className="hint">Les autres sessions seront fermées ; celle-ci reste ouverte.</p>
      </form>
    </>
  );
}
