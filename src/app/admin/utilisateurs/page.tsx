/**
 * Utilisateurs. Réservé aux administrateurs.
 *
 * Trois rôles : élève, enseignant (rédige le contenu), administrateur (gère les
 * comptes et les fonctionnalités). Les garde-fous — ne pas se rétrograder
 * soi-même, garder au moins un administrateur actif — sont dans les actions,
 * pas seulement dans cet affichage.
 */
import Notice from '@/components/Notice';
import {
  basculerUtilisateur, changerRole, enregistrerUtilisateur, reinitialiserMotDePasse, supprimerUtilisateur,
} from '@/lib/admin-actions';
import { MIN_PASSWORD, ROLE_LABELS, requireRole, type Role } from '@/lib/auth';
import { db } from '@/lib/db';

export const metadata = { title: 'Utilisateurs' };

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);
const ROLES: Role[] = ['student', 'teacher', 'admin'];

export default async function Utilisateurs({ searchParams }: Search) {
  const params = await searchParams;
  const me = await requireRole('admin', '/admin/utilisateurs');

  const users = await db.user.findMany({
    orderBy: [{ role: 'asc' }, { email: 'asc' }],
    include: { _count: { select: { sessions: true, progress: true } } },
  });

  return (
    <>
      <h1>Utilisateurs</h1>
      <p>{users.length} compte{users.length > 1 ? 's' : ''}. Un compte désactivé ne peut plus se connecter et ses sessions sont fermées.</p>
      <Notice erreur={one(params.erreur)} message={one(params.message)} detail={one(params.detail)} />

      <table className="data">
        <thead>
          <tr><th>Compte</th><th>Rôle</th><th>État</th><th>Sessions</th><th>Créé</th><th className="right">Actions</th></tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const self = user.id === me.id;
            return (
              <tr key={user.id}>
                <td>
                  <b>{user.name || '—'}</b><br />
                  <span className="hint">{user.email}{self ? ' (vous)' : ''}</span>
                </td>
                <td>
                  {self ? (
                    ROLE_LABELS[(user.role as Role) ?? 'student']
                  ) : (
                    <form action={changerRole} method="post">
                      <input type="hidden" name="id" value={user.id} />
                      <select name="role" defaultValue={user.role} aria-label={`Rôle de ${user.email}`}>
                        {ROLES.map((role) => (
                          <option key={role} value={role}>{ROLE_LABELS[role]}</option>
                        ))}
                      </select>{' '}
                      <button className="btn btn--ghost btn--small" type="submit">appliquer</button>
                    </form>
                  )}
                </td>
                <td>
                  <span className={`state state--${user.active ? 'on' : 'off'}`}>
                    {user.active ? 'actif' : 'désactivé'}
                  </span>
                </td>
                <td>{user._count.sessions}</td>
                <td>{user.createdAt.toLocaleDateString('fr-FR')}</td>
                <td className="right">
                  {self ? (
                    <span className="hint">gérer depuis « Mon compte »</span>
                  ) : (
                    <>
                      <form action={basculerUtilisateur} method="post">
                        <input type="hidden" name="id" value={user.id} />
                        <button className="btn btn--ghost btn--small" type="submit">
                          {user.active ? 'désactiver' : 'réactiver'}
                        </button>
                      </form>{' '}
                      <form action={supprimerUtilisateur} method="post">
                        <input type="hidden" name="id" value={user.id} />
                        <button className="btn btn--danger btn--small" type="submit">supprimer</button>
                      </form>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Ajouter un compte</h2>
      <form action={enregistrerUtilisateur} method="post" className="panel">
        <div className="row">
          <div className="field">
            <label htmlFor="nom">Nom</label>
            <input id="nom" name="nom" />
          </div>
          <div className="field">
            <label htmlFor="email">Adresse e-mail</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="role">Rôle</label>
            <select id="role" name="role" defaultValue="student">
              {ROLES.map((role) => (
                <option key={role} value={role}>{ROLE_LABELS[role]}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="motdepasse">Mot de passe initial</label>
            <input id="motdepasse" name="motdepasse" type="password" minLength={MIN_PASSWORD} required autoComplete="new-password" />
          </div>
          <button className="btn btn--primary" type="submit">Créer</button>
        </div>
        <p className="hint">
          {MIN_PASSWORD} caractères au minimum. Transmettez-le par un autre canal que l’e-mail du compte,
          et demandez à la personne de le changer depuis « Mon compte ».
        </p>
      </form>

      <h2>Réinitialiser un mot de passe</h2>
      <form action={reinitialiserMotDePasse} method="post" className="panel">
        <div className="row">
          <div className="field">
            <label htmlFor="reset-id">Compte</label>
            <select id="reset-id" name="id" required>
              {users.map((user) => (
                <option key={user.id} value={user.id}>{user.email}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="reset-password">Nouveau mot de passe</label>
            <input id="reset-password" name="motdepasse" type="password" minLength={MIN_PASSWORD} required autoComplete="new-password" />
          </div>
          <button className="btn btn--ghost" type="submit">Réinitialiser</button>
        </div>
        <p className="hint">Toutes les sessions ouvertes de ce compte sont fermées immédiatement.</p>
      </form>
    </>
  );
}
