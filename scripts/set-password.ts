/**
 * Pose un mot de passe sur un compte, sans passer par la console.
 *
 * Sert au premier démarrage et au dépannage (« plus personne ne peut se
 * connecter »). Le mot de passe est lu sur l'entrée standard et jamais donné
 * en argument : la ligne de commande est visible dans `ps` et reste dans
 * l'historique du shell.
 *
 *   echo -n 'le-mot-de-passe' | npm run passe -- admin@growsavoir.com
 */
import { PrismaClient } from '@prisma/client';
import { checkPassword, hashPassword } from '../src/lib/auth-core.ts';

const email = (process.argv[2] ?? '').trim().toLowerCase();
if (!email) {
  console.error('Usage : echo -n "<mot de passe>" | npm run passe -- <e-mail>');
  process.exit(2);
}

const chunks: Buffer[] = [];
for await (const chunk of process.stdin) chunks.push(Buffer.from(chunk));
const password = Buffer.concat(chunks).toString('utf8').replace(/\r?\n$/, '');

const problem = checkPassword(password, email);
if (problem) {
  console.error(problem);
  process.exit(1);
}

const db = new PrismaClient();
const hashed = await hashPassword(password);
const user = await db.user.update({ where: { email }, data: hashed }).catch(() => null);

if (!user) {
  console.error(`Aucun compte pour ${email}.`);
  await db.$disconnect();
  process.exit(1);
}

// Un mot de passe changé doit fermer les accès ouverts ailleurs.
await db.session.deleteMany({ where: { userId: user.id } });
console.log(`Mot de passe changé pour ${user.email}. Sessions fermées.`);
await db.$disconnect();
