/**
 * Garde-fou propre à la variante MySQL.
 *
 * Sur MySQL, Prisma traduit un `String` par VARCHAR(191). Les champs qui
 * stockent du JSON ou du texte rédigé dépassent largement cette taille, et
 * l'insertion échoue à l'exécution — pas au build, ni au typecheck. Ce test
 * relit le schéma et refuse qu'un champ long reparte sans annotation, y
 * compris dans un modèle ajouté plus tard.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const schema = readFileSync(new URL('../prisma/schema.prisma', import.meta.url), 'utf8');

/** Les champs dont le contenu dépasse, ou peut dépasser, 191 caractères. */
const LONG_FIELDS = [
  'description', 'summary', 'body', 'assessment', 'learningObjectives',
  'keywords', 'sources', 'prerequisites', 'materials', 'instructions', 'tips',
];

test('le schéma cible bien MySQL', () => {
  assert.match(schema, /provider\s*=\s*"mysql"/);
});

test('les champs longs sont annotés Text ou LongText', () => {
  const manquants = [];
  for (const line of schema.split('\n')) {
    const match = line.match(/^\s*(\w+)\s+String\b(.*)$/);
    if (!match) continue;
    const [, name, rest] = match;
    if (!LONG_FIELDS.includes(name)) continue;
    if (!/@db\.(Text|LongText|MediumText)/.test(rest)) manquants.push(name);
  }
  assert.deepEqual(manquants, [], `champs sans annotation : ${manquants.join(', ')}`);
});

test('le corps et le quiz d’une leçon tiennent en LongText', () => {
  // Text plafonne à 64 Ko ; la console n'impose aucune limite de taille.
  assert.match(schema, /body\s+String.*@db\.LongText/);
  assert.match(schema, /assessment\s+String\s+@default\("\{\}"\).*@db\.LongText/);
});

test('aucune option PostgreSQL ne subsiste dans le schéma', () => {
  assert.doesNotMatch(schema, /@db\.(VarChar\(\d{4,}\)|Citext|Uuid|Jsonb)/);
});
