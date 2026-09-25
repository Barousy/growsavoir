import test from 'node:test';
import assert from 'node:assert/strict';
import { MAX_ATTEMPTS, blockedFor, clearFailures, recordFailure, resetThrottle } from '../src/lib/throttle.ts';

test('le blocage arrive après le nombre d’essais annoncé', () => {
  resetThrottle();
  for (let index = 0; index < MAX_ATTEMPTS - 1; index += 1) recordFailure('a@example.org');
  assert.equal(blockedFor('a@example.org'), 0, 'pas encore bloqué');

  recordFailure('a@example.org');
  assert.ok(blockedFor('a@example.org') > 0, 'bloqué au dernier essai');
});

test('une connexion réussie remet le compteur à zéro', () => {
  resetThrottle();
  for (let index = 0; index <= MAX_ATTEMPTS; index += 1) recordFailure('b@example.org');
  clearFailures('b@example.org');
  assert.equal(blockedFor('b@example.org'), 0);
});

test('le blocage ne déborde pas sur un autre compte', () => {
  resetThrottle();
  for (let index = 0; index <= MAX_ATTEMPTS; index += 1) recordFailure('c@example.org');
  assert.equal(blockedFor('d@example.org'), 0);
});
