/**
 * robots.txt.
 *
 * La console et les routes d'API ne sont pas du contenu : les exclure évite
 * qu'un robot dépense son budget d'exploration sur des pages qui lui
 * renverront une redirection vers la page de connexion.
 */
import type { MetadataRoute } from 'next';
import { absolute } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api/', '/connexion', '/inscription', '/espace'] }],
    sitemap: absolute('/sitemap.xml'),
    host: absolute('/'),
  };
}
