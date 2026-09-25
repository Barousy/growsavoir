/**
 * Partie de l'authentification utilisable hors requête HTTP.
 *
 * `src/lib/auth.ts` importe `next/headers`, ce qui l'empêche d'être appelé
 * depuis un script (le seed, les tests). Le hachage vit donc ici, et les deux
 * mondes partagent exactement le même code.
 */
import { randomBytes, scrypt as scryptCb, timingSafeEqual, type ScryptOptions } from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(scryptCb) as (
  password: Buffer, salt: Buffer, keylen: number, options: ScryptOptions,
) => Promise<Buffer>;

/** Coût du hachage : 2^15 tient en ~100 ms sur une machine de bureau. */
export const KDF = { N: 32768, r: 8, p: 1, keylen: 64, maxmem: 96 * 1024 * 1024 };
export const MIN_PASSWORD = 10;

/** NFKC : « é » tapé ou composé doit ouvrir la même session. */
const normalize = (password: string) => Buffer.from(String(password).normalize('NFKC'), 'utf8');

export async function hashPassword(password: string) {
  const salt = randomBytes(16);
  const hash = await scrypt(normalize(password), salt, KDF.keylen, KDF);
  return { passwordHash: hash.toString('base64'), passwordSalt: salt.toString('base64') };
}

export async function matchesPassword(password: string, passwordHash: string, passwordSalt: string) {
  const expected = Buffer.from(passwordHash, 'base64');
  const actual = await scrypt(normalize(password), Buffer.from(passwordSalt, 'base64'), expected.length, KDF);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

/** Hachage à vide : un compte inconnu doit coûter le même temps qu'un connu. */
export async function burnTime(password: string) {
  await scrypt(normalize(password || 'x'), randomBytes(16), KDF.keylen, KDF);
}

export function checkPassword(password: string, email = '') {
  const value = String(password ?? '');
  if (value.length < MIN_PASSWORD) return `Mot de passe trop court : ${MIN_PASSWORD} caractères au minimum.`;
  if (value.length > 512) return 'Mot de passe trop long.';
  if (email && value.toLowerCase() === email.toLowerCase()) return 'Le mot de passe ne peut pas être l’adresse e-mail.';
  return null;
}

export function sameToken(a?: string | null, b?: string | null) {
  const left = Buffer.from(String(a ?? ''), 'utf8');
  const right = Buffer.from(String(b ?? ''), 'utf8');
  if (left.length === 0 || left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}
