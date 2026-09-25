/**
 * Enveloppe de la console.
 *
 * La garde de rôle est ici, donc aucune page de /admin ne peut oublier de la
 * poser. Les écritures la refont de leur côté : une action est joignable
 * directement, sans passer par ce layout.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { ROLE_LABELS, atLeast, requireRole, type Role } from '@/lib/auth';
import { seDeconnecter } from '@/lib/auth-actions';
import './admin.css';

export const metadata: Metadata = {
  title: { default: 'Console', template: '%s — Console GrowSavoir' },
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await requireRole('teacher');
  const isAdmin = atLeast(user.role, 'admin');

  return (
    <div className="admin">
      <nav className="admin__nav" aria-label="Console">
        <div className="container admin__nav-inner">
          <Link className="admin__brand" href="/admin">Console</Link>
          <Link href="/admin/lecons">Leçons</Link>
          <Link href="/admin/activites">Activités</Link>
          <Link href="/admin/matieres">Matières</Link>
          <Link href="/admin/messages">Messages</Link>
          {isAdmin ? <Link href="/admin/utilisateurs">Utilisateurs</Link> : null}
          {isAdmin ? <Link href="/admin/fonctionnalites">Fonctionnalités</Link> : null}
          <Link href="/admin/mon-compte">Mon compte</Link>
          <span className="admin__who">
            {user.name || user.email} · {ROLE_LABELS[(user.role as Role) ?? 'student']}
          </span>
          <Link href="/" className="admin__site">Voir le site</Link>
          <form action={seDeconnecter} method="post">
            <button className="btn btn--ghost btn--small" type="submit">Se déconnecter</button>
          </form>
        </div>
      </nav>
      <div className="container admin__body">{children}</div>
    </div>
  );
}
