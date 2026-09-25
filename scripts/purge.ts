/**
 * Purge planifiable : messages de contact périmés et sessions expirées.
 *
 *   DATABASE_URL=… node --experimental-strip-types scripts/purge.ts
 *
 * À lancer une fois par jour (cron, tâche planifiée de l'hébergeur). La console
 * fait la même purge quand elle ouvre la boîte de réception ; ce script sert
 * aux sites peu visités par leur administrateur.
 */
import { db } from '../src/lib/db.ts';
import { purgeExpiredSessions, purgeOldMessages } from '../src/lib/retention.ts';

const messages = await purgeOldMessages();
const sessions = await purgeExpiredSessions();
console.log(`${messages} message(s) purgé(s), ${sessions} session(s) expirée(s) supprimée(s).`);
await db.$disconnect();
