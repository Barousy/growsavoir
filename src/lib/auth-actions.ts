'use server';

/**
 * Actions de compte : connexion, inscription, déconnexion.
 *
 * Ce sont des Server Actions posées directement sur les <form> : les
 * formulaires fonctionnent donc sans JavaScript, et les erreurs reviennent par
 * la barre d'adresse plutôt que par un état de composant. Un navigateur sans
 * JS, un lecteur d'écran et un robot voient la même chose.
 */
import { redirect } from 'next/navigation';
import { db } from './db';
import { atLeast, checkPassword, closeSession, currentUser, hashPassword, normalizeEmail, openSession, verifyPassword } from './auth';
import { featureEnabled } from './content';
import { blockedFor, clearFailures, recordFailure } from './throttle';

/** Une destination interne seulement : « suite=https://ailleurs » est refusé. */
function safeNext(value: unknown, fallback = '/admin') {
  const path = String(value ?? '');
  return /^\/(?!\/)[\w\-/?=&.%]*$/.test(path) ? path : fallback;
}

export async function seConnecter(formData: FormData) {
  const email = normalizeEmail(formData.get('email'));
  const password = String(formData.get('motdepasse') ?? '');
  // « auto » : la destination dépend du rôle, connu seulement après vérification.
  const asked = String(formData.get('suite') ?? '');
  const suite = asked && asked !== 'auto' ? safeNext(asked) : 'auto';
  const back = (code: string) => `/connexion?erreur=${code}&suite=${encodeURIComponent(suite)}`;

  const waiting = blockedFor(email);
  if (waiting) redirect(`${back('trop')}&attente=${waiting}`);

  const user = await verifyPassword(email, password);
  if (!user) {
    recordFailure(email);
    redirect(back('identifiants'));
  }

  clearFailures(email);
  await openSession(user.id);
  redirect(suite === 'auto' ? (atLeast(user.role, 'teacher') ? '/admin' : '/espace') : suite);
}

export async function seDeconnecter() {
  await closeSession();
  redirect('/?message=deconnecte');
}

/**
 * L'inscription n'est ouverte que si la fonctionnalité `signup` est active dans
 * la console : c'est le même interrupteur que celui qui masque le lien.
 */
export async function sInscrire(formData: FormData) {
  if (!(await featureEnabled('signup'))) redirect('/inscription?erreur=ferme');

  const email = normalizeEmail(formData.get('email'));
  const name = String(formData.get('nom') ?? '').trim().slice(0, 120);
  const password = String(formData.get('motdepasse') ?? '');

  if (!/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(email)) redirect('/inscription?erreur=email');

  const problem = checkPassword(password, email);
  if (problem) redirect(`/inscription?erreur=motdepasse&detail=${encodeURIComponent(problem)}`);

  // Un compte existant ne doit pas être signalé comme tel : la page renvoie le
  // même message que pour une création réussie, et rien n'est écrit.
  const existing = await db.user.findUnique({ where: { email }, select: { id: true } });
  if (existing) redirect('/connexion?message=inscrit');

  const { passwordHash, passwordSalt } = await hashPassword(password);
  const user = await db.user.create({ data: { email, name, role: 'student', passwordHash, passwordSalt } });
  await openSession(user.id);
  redirect('/?message=bienvenue');
}

/** Change son propre mot de passe (n'importe quel rôle). */
export async function changerMonMotDePasse(formData: FormData) {
  const retour = safeNext(formData.get('retour'), '/admin/mon-compte');
  const user = await currentUser();
  if (!user) redirect(`/connexion?suite=${encodeURIComponent(retour)}`);

  const current = String(formData.get('actuel') ?? '');
  const next = String(formData.get('nouveau') ?? '');

  if (!(await verifyPassword(user.email, current))) redirect(`${retour}?erreur=actuel`);

  const problem = checkPassword(next, user.email);
  if (problem) redirect(`${retour}?erreur=faible&detail=${encodeURIComponent(problem)}`);

  const hashed = await hashPassword(next);
  await db.user.update({ where: { id: user.id }, data: hashed });
  // Toutes les autres sessions tombent : un mot de passe changé doit fermer
  // les accès ouverts ailleurs.
  await db.session.deleteMany({ where: { userId: user.id } });
  await openSession(user.id);
  redirect(`${retour}?message=motdepasse`);
}
