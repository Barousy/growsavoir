/**
 * Intégrité des fichiers de contenu.
 *
 * Ces défauts-là ne se voient ni au typecheck ni au build : une bonne réponse
 * absente de ses options, un lien vers example.com, un slug qui ne correspond
 * pas au nom du fichier. Ils ne se voient qu'à la lecture de la page — ou ici.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const racine = new URL('../content/', import.meta.url).pathname;

function charger(dossier) {
  const base = path.join(racine, dossier);
  return readdirSync(base)
    .filter((nom) => nom.endsWith('.json'))
    .map((nom) => ({ nom, data: JSON.parse(readFileSync(path.join(base, nom), 'utf8')) }));
}

const lecons = charger('lessons');
const activites = charger('activities');

test('le contenu attendu est présent', () => {
  assert.ok(lecons.length >= 132, `${lecons.length} leçons`);
  assert.ok(activites.length >= 43, `${activites.length} activités`);
});

test('chaque leçon a les champs dont dépendent les pages', () => {
  const manques = [];
  for (const { nom, data } of lecons) {
    for (const champ of ['slug', 'title', 'summary', 'subject', 'body']) {
      if (!data[champ]) manques.push(`${nom} : ${champ}`);
    }
    if (data.slug && `${data.slug}.json` !== nom) manques.push(`${nom} : slug « ${data.slug} »`);
  }
  assert.deepEqual(manques, []);
});

test('aucune référence ne pointe vers un lien factice', () => {
  // Une leçon citait « Programme interne Aqîda N1 » vers example.com, une autre
  // un ouvrage d'Ibn Kathîr vers « # ». Un lien mort vaut moins que pas de lien.
  const fautifs = [];
  const suspect = (url) => typeof url === 'string' && /^(#|https?:\/\/(www\.)?example\.(com|org))/.test(url.trim());

  for (const { nom, data } of lecons) {
    for (const source of data.sources ?? []) {
      if (suspect(source.url)) fautifs.push(`${nom} : source ${source.url}`);
    }
    for (const ressource of data.body?.conclusion?.additionalResources ?? []) {
      if (suspect(ressource.url)) fautifs.push(`${nom} : ressource ${ressource.url}`);
    }
  }
  assert.deepEqual(fautifs, []);
});

test('chaque bonne réponse figure parmi les options proposées', () => {
  const fautifs = [];
  for (const { nom, data } of lecons) {
    for (const [index, question] of (data.assessment?.quiz ?? []).entries()) {
      const options = question.options ?? [];
      if (!options.length) continue;
      if (!options.includes(question.correctAnswer)) {
        fautifs.push(`${nom} q${index + 1} : « ${question.correctAnswer} » hors de [${options}]`);
      }
      if (new Set(options).size !== options.length) fautifs.push(`${nom} q${index + 1} : options en double`);
    }
  }
  assert.deepEqual(fautifs, []);
});

test('chaque activité garde ses étapes et son matériel', () => {
  const fautifs = [];
  for (const { nom, data } of activites) {
    if (!(data.instructions ?? []).length) fautifs.push(`${nom} : aucune étape`);
    if (!(data.materials ?? []).length) fautifs.push(`${nom} : aucun matériel`);
    if (!data.title || !data.description) fautifs.push(`${nom} : titre ou description manquant`);
  }
  assert.deepEqual(fautifs, []);
});
