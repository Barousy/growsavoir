/**
 * Les options de requête refusées par MySQL.
 *
 * `mode: 'insensitive'` est propre à PostgreSQL : Prisma le rejette sur MySQL
 * au moment de la requête, donc ni le typecheck ni le build ne le voient. Ce
 * test relit le code des pages pour qu'il ne revienne pas par un report de
 * correctif depuis la branche PostgreSQL.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const full = path.join(directory, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

/** Les commentaires sont retirés : ils expliquent justement pourquoi l'option
 *  est absente, et ne doivent pas déclencher l'alerte. */
function code(file) {
  return readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:])\/\/.*$/gm, '$1');
}

test('aucun « mode: insensitive » dans le code', () => {
  const sources = walk(new URL('../src', import.meta.url).pathname)
    .filter((file) => /\.tsx?$/.test(file));

  const fautifs = sources.filter((file) => /mode:\s*'insensitive'/.test(code(file)));
  assert.deepEqual(
    fautifs.map((file) => path.relative(process.cwd(), file)),
    [],
    'option PostgreSQL utilisée sur une base MySQL',
  );
});
