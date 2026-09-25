/**
 * Manifeste d'application.
 *
 * L'ancien site en déclarait un qui renvoyait une 404. Celui-ci est produit par
 * le serveur : il existe, et il décrit ce que le site est réellement.
 */
import type { MetadataRoute } from 'next';
import { SITE_NAME } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — leçons pour les 6-8 ans`,
    short_name: SITE_NAME,
    description: 'Langues, sciences et sciences islamiques : des leçons courtes, structurées et gratuites.',
    start_url: '/',
    display: 'standalone',
    lang: 'fr',
    background_color: '#fbfbfd',
    theme_color: '#2563eb',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
