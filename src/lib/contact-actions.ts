'use server';

/**
 * Réception d'un message de contact.
 *
 * Le message est écrit en base et lu depuis la console. Aucun service d'envoi
 * n'est requis pour que le formulaire fonctionne — c'est une dépendance de
 * moins, et rien ne se perd si la configuration d'un fournisseur d'e-mail
 * vient à manquer.
 */
import { redirect } from 'next/navigation';
import { db } from './db';
import { requireRole } from './auth';

const clean = (value: FormDataEntryValue | null, max: number) => String(value ?? '').trim().slice(0, max);

export async function envoyerMessage(formData: FormData) {
  const name = clean(formData.get('nom'), 120);
  const email = clean(formData.get('email'), 200).toLowerCase();
  const subject = clean(formData.get('sujet'), 200);
  const body = clean(formData.get('message'), 5000);

  if (!name || !body || !/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(email)) redirect('/contact?erreur=champs');

  // Champ leurre : invisible pour une personne, souvent rempli par un robot.
  // Rempli, le message est marqué — puis relu à la main — mais jamais jeté.
  const suspect = clean(formData.get('site'), 200).length > 0;

  await db.message.create({ data: { name, email, subject, body, suspect } });
  redirect('/contact?message=envoye');
}

export async function traiterMessage(formData: FormData) {
  await requireRole('teacher', '/admin/messages');

  const id = clean(formData.get('id'), 40);
  const message = await db.message.findUnique({ where: { id }, select: { handled: true } });
  if (!message) redirect('/admin/messages?erreur=introuvable');

  await db.message.update({ where: { id }, data: { handled: !message.handled } });
  redirect('/admin/messages?message=enregistre');
}

export async function supprimerMessage(formData: FormData) {
  await requireRole('admin', '/admin/messages');

  const id = clean(formData.get('id'), 40);
  await db.message.deleteMany({ where: { id } });
  redirect('/admin/messages?message=supprime');
}
