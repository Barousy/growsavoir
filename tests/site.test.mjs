import test from 'node:test';
import assert from 'node:assert/strict';
import { absolute, jsonLd, levelLabel } from '../src/lib/site.ts';

test('absolute produit une URL absolue, avec ou sans barre initiale', () => {
  assert.match(absolute('/catalogue'), /^https?:\/\/[^/]+\/catalogue$/);
  assert.equal(absolute('catalogue'), absolute('/catalogue'));
});

test('jsonLd neutralise un « < », qui refermerait le bloc <script>', () => {
  // Un titre de leçon malveillant ne doit pas pouvoir sortir du bloc de
  // données structurées, quelle que soit la politique de sécurité du site.
  const payload = jsonLd({ name: 'Fin </script><script>alert(1)</script>' });
  assert.doesNotMatch(payload, /<\/script>/i);
  assert.match(payload, /\\u003c/);
  assert.equal(JSON.parse(payload).name, 'Fin </script><script>alert(1)</script>');
});

test('les niveaux sont affichés en clair, et l’inconnu passe tel quel', () => {
  assert.equal(levelLabel('n1-fondamentaux'), 'Fondamentaux');
  assert.equal(levelLabel('n4-expert'), 'n4-expert');
});
