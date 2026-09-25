/**
 * Comptes et sessions, côté requête HTTP.
 *
 * Le calcul cryptographique vit dans `auth-core.ts`, utilisable hors requête
 * (seed, tests) : ce module n'ajoute que la base de données et les cookies.
 * Un seul code de hachage, donc pas de dérive possible entre les deux.
 */
import { randomBytes } from 'node:crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { db } from './db';
import { burnTime, matchesPassword } from './auth-core';

export { checkPassword, hashPassword, sameToken, MIN_PASSWORD } from './auth-core';

export const SESSION_COOKIE = 'gs_session';
export const CSRF_COOKIE = 'gs_csrf';
export const SESSION_DAYS = 7;

export type Role = 'admin' | 'teacher' | 'student';

/** Hiérarchie des rôles : un administrateur peut tout ce que peut un élève. */
const RANK: Record<Role, number> = { student: 0, teacher: 1, admin: 2 };

export function atLeast(role: string | null | undefined, needed: Role) {
  return RANK[(role as Role) ?? 'student'] >= RANK[needed];
}

export const ROLE_LABELS: Record<Role, string> = {
  admin: 'Administrateur',
  teacher: 'Enseignant',
  student: 'Élève',
};

export const normalizeEmail = (email: unknown) => String(email ?? '').trim().toLowerCase();

/**
 * Un e-mail inconnu déclenche quand même un hachage complet : sans cela, le
 * temps de réponse révélerait quels comptes existent.
 */
export async function verifyPassword(email: string, password: string) {
  const user = await db.user.findUnique({ where: { email: normalizeEmail(email) } });
  if (!user || !user.active) {
    await burnTime(password);
    return null;
  }
  return (await matchesPassword(password, user.passwordHash, user.passwordSalt)) ? user : null;
}

export async function createSession(userId: string) {
  const id = randomBytes(32).toString('base64url');
  const csrf = randomBytes(32).toString('base64url');
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 86400_000);
  await db.session.create({ data: { id, csrf, userId, expiresAt } });
  // Ménage opportuniste : les sessions expirées ne servent plus à rien.
  await db.session.deleteMany({ where: { expiresAt: { lt: new Date() } } });
  return { id, csrf, expiresAt };
}

/**
 * Ouvre la session et pose les cookies.
 *
 * `httpOnly` met le jeton hors de portée de tout JavaScript ; `SameSite=Strict`
 * fait qu'il n'est pas envoyé depuis un autre site, ce qui bloque déjà
 * l'essentiel des requêtes forgées.
 */
export async function openSession(userId: string) {
  const session = await createSession(userId);
  const jar = await cookies();
  const common = {
    httpOnly: true,
    sameSite: 'strict' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    expires: session.expiresAt,
  };
  jar.set(SESSION_COOKIE, session.id, common);
  // Ce cookie-ci est lisible : c'est le jeton que les formulaires renvoient.
  jar.set(CSRF_COOKIE, session.csrf, { ...common, httpOnly: false });
  return session;
}

export async function closeSession() {
  const jar = await cookies();
  const id = jar.get(SESSION_COOKIE)?.value;
  if (id) await db.session.deleteMany({ where: { id } });
  jar.delete(SESSION_COOKIE);
  jar.delete(CSRF_COOKIE);
}

/** La session courante, ou null. */
export async function currentSession() {
  const jar = await cookies();
  const id = jar.get(SESSION_COOKIE)?.value;
  if (!id) return null;
  const session = await db.session.findUnique({ where: { id }, include: { user: true } });
  if (!session || session.expiresAt < new Date() || !session.user.active) return null;
  return session;
}

export async function currentUser() {
  return (await currentSession())?.user ?? null;
}

/**
 * Garde d'accès de la console. Une visite non autorisée part vers la page de
 * connexion avec l'adresse demandée, pour y revenir après identification.
 */
export async function requireRole(needed: Role, from = '/admin') {
  const user = await currentUser();
  if (!user) redirect(`/connexion?suite=${encodeURIComponent(from)}`);
  // Renvoyer vers /admin ferait rejouer cette même garde : la boucle serait
  // sans fin. Un compte élève repart donc vers son espace.
  if (!atLeast(user.role, needed)) redirect('/espace?erreur=droits');
  return user;
}
