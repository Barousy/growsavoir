'use server';

/**
 * Avancement d'un élève.
 *
 * Le bouton vit sur une page de leçon générée au build : il ne lit donc aucun
 * cookie à l'affichage, ce qui laisse la page statique. C'est l'action, appelée
 * au clic, qui identifie le compte — et qui renvoie vers la connexion si
 * personne n'est identifié.
 */
import { redirect } from 'next/navigation';
import { db } from './db';
import { currentUser } from './auth';
import { featureEnabled } from './content';

export async function marquerFaite(formData: FormData) {
  const slug = String(formData.get('slug') ?? '').trim().slice(0, 120);

  if (!(await featureEnabled('progress'))) redirect(`/lecons/${slug}`);

  const user = await currentUser();
  if (!user) redirect(`/connexion?suite=${encodeURIComponent('/espace')}`);

  const lesson = await db.lesson.findUnique({ where: { slug }, select: { id: true } });
  if (!lesson) redirect('/espace?erreur=introuvable');

  await db.progress.upsert({
    where: { userId_lessonId: { userId: user.id, lessonId: lesson.id } },
    update: { completed: true, completedAt: new Date() },
    create: { userId: user.id, lessonId: lesson.id, completed: true, completedAt: new Date() },
  });

  redirect('/espace?message=progression');
}

export async function annulerFaite(formData: FormData) {
  const user = await currentUser();
  if (!user) redirect('/connexion?suite=%2Fespace');

  const lessonId = String(formData.get('lessonId') ?? '').trim().slice(0, 40);
  await db.progress.deleteMany({ where: { userId: user.id, lessonId } });
  redirect('/espace?message=enregistre');
}
