/**
 * Purge des messages de contact.
 *
 * La politique de confidentialité annonce une durée de conservation ; une
 * durée annoncée mais jamais appliquée est une promesse fausse. La purge est
 * donc exécutée ici, au moment où la console lit la boîte de réception, et
 * peut aussi être appelée par une tâche planifiée (scripts/purge.ts).
 */
import { db } from './db';
import { LEGAL } from './legal';

export async function purgeOldMessages(days = LEGAL.messageRetentionDays) {
  if (!Number.isFinite(days) || days <= 0) return 0;
  const limit = new Date(Date.now() - days * 86400_000);
  const { count } = await db.message.deleteMany({ where: { createdAt: { lt: limit } } });
  return count;
}

/** Les sessions périmées ne servent plus à rien et gardent des identifiants. */
export async function purgeExpiredSessions() {
  const { count } = await db.session.deleteMany({ where: { expiresAt: { lt: new Date() } } });
  return count;
}
