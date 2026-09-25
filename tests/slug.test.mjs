import test from 'node:test';
import assert from 'node:assert/strict';
import { ASSESSMENT_TEMPLATE, LESSON_TEMPLATE, toSlug } from '../src/lib/slug.ts';

test('les accents et la ponctuation deviennent une adresse lisible', () => {
  assert.equal(toSlug('Les voyelles courtes (Harakât)'), 'les-voyelles-courtes-harakat');
  assert.equal(toSlug('  Aqîda — les fondements  '), 'aqida-les-fondements');
  assert.equal(toSlug('Mathématiques & logique'), 'mathematiques-logique');
});

test('un slug ne commence ni ne finit par un tiret, et reste borné', () => {
  const slug = toSlug('!!! ' + 'très long '.repeat(40));
  assert.doesNotMatch(slug, /^-|-$/);
  assert.ok(slug.length <= 90);
});

test('une entrée vide ne produit pas d’adresse', () => {
  assert.equal(toSlug('???'), '');
  assert.equal(toSlug(''), '');
});

test('les squelettes proposés dans la console sont du JSON valide', () => {
  const body = JSON.parse(LESSON_TEMPLATE);
  assert.ok(Array.isArray(body.mainContent));
  assert.ok(body.mainContent.every((section) => section.type && section.title));
  const assessment = JSON.parse(ASSESSMENT_TEMPLATE);
  assert.ok(Array.isArray(assessment.quiz));
});
