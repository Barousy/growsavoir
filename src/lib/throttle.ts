/**
 * Limitation des tentatives de connexion.
 *
 * Un compteur en mémoire, volontairement simple. Il ne survit pas à un
 * redémarrage et n'est pas partagé entre instances : ce n'est donc pas une
 * défense contre une attaque distribuée, mais cela suffit à rendre pénible
 * l'essai de mots de passe un par un, et cela ne dépend d'aucun service.
 */
const ATTEMPTS = new Map<string, { count: number; until: number }>();

export const MAX_ATTEMPTS = 8;
const WINDOW_MS = 15 * 60_000;

/** Nombre de secondes restant avant de pouvoir réessayer, 0 si la voie est libre. */
export function blockedFor(key: string) {
  const entry = ATTEMPTS.get(key);
  if (!entry) return 0;
  if (entry.until < Date.now()) {
    ATTEMPTS.delete(key);
    return 0;
  }
  return entry.count >= MAX_ATTEMPTS ? Math.ceil((entry.until - Date.now()) / 1000) : 0;
}

export function recordFailure(key: string) {
  const now = Date.now();
  const entry = ATTEMPTS.get(key);
  if (!entry || entry.until < now) {
    ATTEMPTS.set(key, { count: 1, until: now + WINDOW_MS });
    return;
  }
  entry.count += 1;
  entry.until = now + WINDOW_MS;
}

export function clearFailures(key: string) {
  ATTEMPTS.delete(key);
}

/** Pour les tests : repartir d'un état connu. */
export function resetThrottle() {
  ATTEMPTS.clear();
}
