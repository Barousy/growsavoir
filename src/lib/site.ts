/**
 * Constantes du site.
 *
 * L'URL canonique se règle par la seule variable SITE_URL : le même code
 * tourne en local, sur une préproduction et en production sans que des
 * adresses absolues fausses ne partent dans le sitemap ou les données
 * structurées.
 */
export const SITE_URL = (process.env.SITE_URL ?? 'https://growsavoir.com').replace(/\/+$/, '');

export const SITE_NAME = 'GrowSavoir';

/** Une URL absolue, seule forme acceptée par un sitemap et par schema.org. */
export function absolute(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Les niveaux tels qu'ils apparaissent dans les slugs, en clair. */
export const LEVELS: Record<string, string> = {
  'n1-fondamentaux': 'Fondamentaux',
  'n2-intermediaire': 'Intermédiaire',
  'n3-avance': 'Avancé',
};

export const levelLabel = (level: string) => LEVELS[level] ?? level;

/**
 * Données structurées prêtes à être posées dans un <script type="application/ld+json">.
 *
 * JSON.stringify n'échappe pas « < » : un titre de leçon contenant
 * « </script> » refermerait le bloc et le reste serait interprété comme du
 * HTML. L'échappement en \u003c ferme cette porte, quelles que soient les
 * autres protections en place.
 */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
