/**
 * Hachage des mots de passe et comparaison de jetons.
 *
 * Ces fonctions portent la sécurité des comptes : elles sont testées
 * directement, sans base de données ni requête HTTP.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { checkPassword, hashPassword, matchesPassword, sameToken } from '../src/lib/auth-core.ts';

test('un mot de passe se vérifie, un autre est refusé', async () => {
  const { passwordHash, passwordSalt } = await hashPassword('correct-cheval-pile');
  assert.equal(await matchesPassword('correct-cheval-pile', passwordHash, passwordSalt), true);
  assert.equal(await matchesPassword('correct-cheval-pil', passwordHash, passwordSalt), false);
});

test('deux hachages du même mot de passe diffèrent (sel propre à chacun)', async () => {
  const a = await hashPassword('correct-cheval-pile');
  const b = await hashPassword('correct-cheval-pile');
  assert.notEqual(a.passwordHash, b.passwordHash);
  assert.notEqual(a.passwordSalt, b.passwordSalt);
});

test('« é » tapé ou composé ouvre la même session', async () => {
  const compose = 'mot-de-passe-éte'; // e + accent combinant
  const direct = 'mot-de-passe-éte';
  const { passwordHash, passwordSalt } = await hashPassword(compose);
  assert.equal(await matchesPassword(direct, passwordHash, passwordSalt), true);
});

test('checkPassword refuse le trop court, le trop long et l’e-mail', () => {
  assert.ok(checkPassword('court'));
  assert.ok(checkPassword('x'.repeat(513)));
  assert.ok(checkPassword('Admin@Growsavoir.com', 'admin@growsavoir.com'));
  assert.equal(checkPassword('assez-long-pour-passer', 'admin@growsavoir.com'), null);
});

test('sameToken compare sans se laisser piéger par des longueurs différentes', () => {
  assert.equal(sameToken('abc', 'abc'), true);
  assert.equal(sameToken('abc', 'abcd'), false);
  assert.equal(sameToken('', ''), false);
  assert.equal(sameToken(undefined, null), false);
});
