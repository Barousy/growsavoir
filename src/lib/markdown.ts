/**
 * Rendu du markdown des leçons.
 *
 * Le contenu est rédigé depuis la console par des comptes de confiance, mais
 * « de confiance » n'est pas « infaillible » : le HTML brut est échappé, de
 * sorte qu'une balise collée par mégarde s'affiche au lieu de s'exécuter.
 */
import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: false });

/**
 * « > » n'est volontairement pas échappé : en markdown il ouvre une citation,
 * et l'échapper transformait « > Objectif : … » en texte brut précédé d'un
 * chevron — ce qui s'est vu à l'écran sur les leçons. Seuls « & » et « < »
 * sont neutralisés, et « < » suffit à empêcher l'ouverture d'une balise.
 */
export function renderMarkdown(source?: string | null): string {
  if (!source) return '';
  const escaped = String(source).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return marked.parse(escaped, { async: false }) as string;
}

/** Texte nu, pour une méta-description ou un résumé. */
export function plainText(source?: string | null, max = 200): string {
  if (!source) return '';
  const text = String(source)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`~\-\[\]()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}
