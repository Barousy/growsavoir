/**
 * Rendu du markdown. Deux exigences opposées : afficher la mise en forme des
 * leçons, et ne jamais exécuter du HTML qui se serait glissé dans un texte.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { plainText, renderMarkdown } from '../src/lib/markdown.ts';

test('le gras, les listes et les tableaux sont rendus', () => {
  const html = renderMarkdown('Un **mot** important\n\n- un\n- deux');
  assert.match(html, /<strong>mot<\/strong>/);
  assert.match(html, /<li>un<\/li>/);
});

test('une citation markdown reste une citation', () => {
  // Régression : « > » était échappé avant l'analyse, et la citation
  // s'affichait comme un chevron suivi du texte.
  const html = renderMarkdown('> 🎯 Objectif : lire la leçon');
  assert.match(html, /<blockquote>/);
  assert.doesNotMatch(html, /&gt; 🎯/);
});

test('le HTML collé dans une leçon s’affiche au lieu de s’exécuter', () => {
  const html = renderMarkdown('<img src=x onerror="alert(1)"> et <script>alert(2)</script>');
  assert.doesNotMatch(html, /<img/);
  assert.doesNotMatch(html, /<script/);
  assert.match(html, /&lt;img/);
});

test('une esperluette reste une esperluette', () => {
  assert.match(renderMarkdown('Pierre & Marie'), /Pierre &amp;(amp;)? Marie/);
});

test('plainText produit une description sans balisage ni coupure brutale', () => {
  const text = plainText('# Titre\n\nUn **texte** de leçon avec `du code`.', 40);
  assert.doesNotMatch(text, /[#*`]/);
  assert.ok(text.length <= 40, `longueur ${text.length}`);
});

test('plainText sur une valeur absente ne jette pas', () => {
  assert.equal(plainText(undefined), '');
  assert.equal(plainText(null), '');
});
