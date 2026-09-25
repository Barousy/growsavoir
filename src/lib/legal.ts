/**
 * Informations légales.
 *
 * Elles dépendent de la personne ou de la société qui publie le site, et non
 * du code : elles se règlent donc par variables d'environnement. Tant qu'une
 * valeur manque, la page l'annonce comme à compléter au lieu d'inventer un nom
 * ou une adresse — une mention légale fausse est pire qu'une mention absente.
 */
export const LEGAL = {
  publisher: process.env.LEGAL_PUBLISHER ?? '',
  status: process.env.LEGAL_STATUS ?? '',
  address: process.env.LEGAL_ADDRESS ?? '',
  email: process.env.LEGAL_EMAIL ?? '',
  registration: process.env.LEGAL_REGISTRATION ?? '',
  editor: process.env.LEGAL_EDITOR ?? '',
  host: process.env.LEGAL_HOST ?? '',
  hostAddress: process.env.LEGAL_HOST_ADDRESS ?? '',
  /** En jours. Les messages de contact ne sont pas conservés indéfiniment. */
  messageRetentionDays: Number(process.env.LEGAL_MESSAGE_RETENTION_DAYS ?? 365),
};

export const TODO = 'à compléter';

export const value = (field: string) => field.trim() || TODO;

/** Vrai s'il reste au moins un champ non renseigné : la page le signale. */
export const incomplete = () =>
  [LEGAL.publisher, LEGAL.status, LEGAL.address, LEGAL.email, LEGAL.editor, LEGAL.host].some(
    (field) => !field.trim(),
  );
