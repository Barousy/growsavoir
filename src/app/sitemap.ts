/**
 * Sitemap.
 *
 * Généré depuis la base : une leçon dépubliée disparaît du sitemap le jour
 * même, et une leçon ajoutée y entre sans qu'on pense à modifier un fichier.
 * L'ancien sitemap listait douze URL d'arabe niveau 2 qui n'existaient pas.
 */
import type { MetadataRoute } from 'next';
import { db } from '@/lib/db';
import { absolute } from '@/lib/site';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [subjects, lessons, activities] = await Promise.all([
    db.subject.findMany({ where: { published: true }, select: { slug: true, updatedAt: true } }),
    db.lesson.findMany({ where: { published: true }, select: { slug: true, updatedAt: true } }),
    db.activity.findMany({ where: { published: true }, select: { slug: true, updatedAt: true } }),
  ]);

  const now = new Date();

  return [
    { url: absolute('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: absolute('/catalogue'), lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: absolute('/activites'), lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: absolute('/a-propos'), lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: absolute('/contact'), lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: absolute('/mentions-legales'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: absolute('/confidentialite'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    ...subjects.map((subject) => ({
      url: absolute(`/catalogue/${subject.slug}`),
      lastModified: subject.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...lessons.map((lesson) => ({
      url: absolute(`/lecons/${lesson.slug}`),
      lastModified: lesson.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...activities.map((activity) => ({
      url: absolute(`/activites/${activity.slug}`),
      lastModified: activity.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
