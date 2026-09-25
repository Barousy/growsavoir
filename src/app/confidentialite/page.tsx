import type { Metadata } from 'next';
import Link from 'next/link';
import { LEGAL, value } from '@/lib/legal';
import { SESSION_DAYS } from '@/lib/auth';
import { absolute } from '@/lib/site';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Quelles données GrowSavoir traite, pourquoi, combien de temps, et comment exercer vos droits. Aucun traceur publicitaire, aucune mesure d’audience.',
  alternates: { canonical: '/confidentialite' },
  openGraph: { url: absolute('/confidentialite'), type: 'website' },
};

export default function Confidentialite() {
  return (
    <div className="container" style={{ paddingTop: '3rem' }}>
      <h1 style={{ fontSize: 'clamp(1.7rem, 1.2rem + 2vw, 2.3rem)' }}>Politique de confidentialité</h1>
      <p className="section-lead prose">
        Ce site est consultable sans compte et sans cookie. Les seules données traitées le sont parce que
        vous les avez fournies : en écrivant depuis le formulaire de contact, ou en créant un compte.
      </p>

      <div className="lesson-body prose">
        <h2>Lire une leçon</h2>
        <p>
          Aucune inscription n’est demandée, aucun cookie n’est posé et aucun traceur n’est chargé : pas de
          mesure d’audience, pas de réseau publicitaire, pas de bouton de réseau social. Aucune bannière de
          consentement n’est donc nécessaire, faute de traitement à consentir.
        </p>
        <p>
          Comme tout serveur web, l’hébergeur journalise techniquement les requêtes reçues (adresse IP,
          date, page demandée) pour assurer le service et sa sécurité. Ces journaux sont gérés par
          l’hébergeur — {value(LEGAL.host)} — selon sa propre politique de conservation.
        </p>

        <h2>Écrire depuis le formulaire de contact</h2>
        <ul>
          <li><b>Données :</b> le nom que vous indiquez, votre adresse e-mail, le sujet et le texte du message.</li>
          <li><b>Pourquoi :</b> vous répondre et, le cas échéant, corriger la leçon signalée.</li>
          <li><b>Base légale :</b> votre demande — l’intérêt légitime à traiter une sollicitation qui nous est adressée.</li>
          <li><b>Conservation :</b> {LEGAL.messageRetentionDays} jours, puis suppression. Un message peut être supprimé plus tôt sur demande.</li>
          <li><b>Destinataires :</b> les personnes chargées du site. Le message n’est ni revendu, ni transmis à un tiers, ni utilisé pour vous envoyer autre chose qu’une réponse.</li>
        </ul>

        <h2>Créer un compte</h2>
        <ul>
          <li><b>Données :</b> adresse e-mail, nom d’usage si vous en indiquez un, mot de passe, et l’avancement dans les leçons.</li>
          <li><b>Mot de passe :</b> conservé sous forme de condensat scrypt avec sel propre à chaque compte. Il n’est jamais stocké en clair et personne, administrateur compris, ne peut le relire.</li>
          <li><b>Cookies :</b> deux cookies strictement nécessaires, posés seulement après connexion — un identifiant de session et un jeton anti-falsification. Ils expirent au bout de {SESSION_DAYS} jours, ou immédiatement à la déconnexion.</li>
          <li><b>Conservation :</b> tant que le compte existe. Un compte supprimé emporte ses sessions et son avancement.</li>
        </ul>

        <h2>Comptes d’enfants</h2>
        <p>
          Le site s’adresse à de jeunes enfants, qui ne créent pas de compte seuls : c’est un parent, un
          enseignant ou l’administrateur du site qui ouvre un compte. Aucune donnée n’est demandée au-delà
          de ce qui est listé ci-dessus, et notamment ni date de naissance, ni école, ni photo.
        </p>

        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander l’accès à vos données, leur rectification, leur suppression, la limitation de
          leur traitement, ainsi que leur portabilité. Écrivez à {value(LEGAL.email)} ou depuis la{' '}
          <Link href="/contact">page de contact</Link> : la demande est traitée dans un délai d’un mois.
          Vous pouvez également saisir la CNIL (cnil.fr) si la réponse ne vous satisfait pas.
        </p>

        <h2>Transferts hors Union européenne</h2>
        <p>
          Les données du site sont stockées dans sa base de données, chez son hébergeur. Aucun traitement
          n’est délégué à un prestataire publicitaire ou analytique. Si l’hébergement est situé hors de
          l’Union européenne, l’information figure dans les{' '}
          <Link href="/mentions-legales">mentions légales</Link>.
        </p>

        <h2>Modification de cette politique</h2>
        <p>
          Toute évolution est publiée sur cette page. En cas de changement substantiel — un nouveau
          traitement, une nouvelle durée de conservation — la page le signalera explicitement.
        </p>
      </div>
    </div>
  );
}
