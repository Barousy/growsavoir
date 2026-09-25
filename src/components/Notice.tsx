/**
 * Message d'erreur ou de confirmation.
 *
 * Les actions signalent leur résultat par un paramètre d'URL ; ce composant le
 * traduit. `role="alert"` le fait annoncer par un lecteur d'écran sans qu'il
 * faille chercher où le message est apparu.
 */
const MESSAGES: Record<string, string> = {
  identifiants: 'Adresse e-mail ou mot de passe incorrect.',
  trop: 'Trop de tentatives. Réessayez dans un moment.',
  droits: 'Votre compte n’a pas les droits nécessaires pour cette page.',
  email: 'Cette adresse e-mail ne semble pas valide.',
  motdepasse: 'Mot de passe refusé.',
  faible: 'Mot de passe refusé.',
  actuel: 'Le mot de passe actuel est incorrect.',
  ferme: 'Les inscriptions sont fermées pour le moment.',
  json: 'Le contenu JSON est invalide : rien n’a été enregistré.',
  slug: 'Cette adresse (slug) est déjà utilisée par un autre contenu.',
  emailpris: 'Un compte existe déjà avec cette adresse e-mail.',
  clepris: 'Cette clé de fonctionnalité existe déjà.',
  champs: 'Il manque un champ obligatoire.',
  introuvable: 'Élément introuvable — il a peut-être été supprimé.',
  dernieradmin: 'Impossible : il doit rester au moins un administrateur actif.',
  soimeme: 'Vous ne pouvez pas appliquer cette action à votre propre compte.',
};

const CONFIRMATIONS: Record<string, string> = {
  deconnecte: 'Vous êtes déconnecté.',
  bienvenue: 'Bienvenue ! Votre compte est créé.',
  inscrit: 'Si cette adresse n’a pas déjà un compte, il vient d’être créé. Connectez-vous.',
  motdepasse: 'Mot de passe modifié. Les autres sessions ont été fermées.',
  enregistre: 'Modifications enregistrées.',
  cree: 'Élément créé.',
  supprime: 'Élément supprimé.',
  bascule: 'Fonctionnalité mise à jour.',
};

export default function Notice({ erreur, message, detail, attente }: {
  erreur?: string; message?: string; detail?: string; attente?: string;
}) {
  if (erreur) {
    const seconds = Number(attente);
    const base = MESSAGES[erreur] ?? 'L’opération a échoué.';
    const wait = Number.isFinite(seconds) && seconds > 0 ? ` (${seconds} s)` : '';
    return (
      <p className="alert alert--error" role="alert">
        {base}{wait}{detail ? ` ${detail}` : ''}
      </p>
    );
  }
  if (message) {
    return <p className="alert alert--ok" role="status">{CONFIRMATIONS[message] ?? message}</p>;
  }
  return null;
}
