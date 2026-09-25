import type { Metadata } from 'next';
import { LEGAL, incomplete, value } from '@/lib/legal';
import { SITE_URL, absolute } from '@/lib/site';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Éditeur, hébergeur, propriété intellectuelle et conditions d’utilisation du site GrowSavoir.',
  alternates: { canonical: '/mentions-legales' },
  openGraph: { url: absolute('/mentions-legales'), type: 'website' },
};

export default function MentionsLegales() {
  return (
    <div className="container" style={{ paddingTop: '3rem' }}>
      <h1 style={{ fontSize: 'clamp(1.7rem, 1.2rem + 2vw, 2.3rem)' }}>Mentions légales</h1>

      {incomplete() ? (
        <p className="alert alert--error" role="note">
          Certaines informations ci-dessous restent à renseigner par l’éditeur du site (variables
          d’environnement <code>LEGAL_*</code>). Elles sont obligatoires en France pour un site
          accessible au public.
        </p>
      ) : null}

      <div className="lesson-body prose">
        <h2>Éditeur du site</h2>
        <ul>
          <li><b>Éditeur :</b> {value(LEGAL.publisher)}</li>
          <li><b>Statut :</b> {value(LEGAL.status)}</li>
          <li><b>Adresse :</b> {value(LEGAL.address)}</li>
          <li><b>Contact :</b> {value(LEGAL.email)}</li>
          {LEGAL.registration.trim() ? <li><b>Immatriculation :</b> {LEGAL.registration}</li> : null}
          <li><b>Responsable de la publication :</b> {value(LEGAL.editor)}</li>
        </ul>

        <h2>Hébergement</h2>
        <ul>
          <li><b>Hébergeur :</b> {value(LEGAL.host)}</li>
          {LEGAL.hostAddress.trim() ? <li><b>Adresse :</b> {LEGAL.hostAddress}</li> : null}
        </ul>

        <h2>Objet du site</h2>
        <p>
          {SITE_URL} publie des contenus pédagogiques destinés aux enfants et aux adultes qui les
          accompagnent. Les leçons sont consultables librement, sans compte et sans paiement.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes des leçons sont rédigés pour ce site et en restent la propriété de l’éditeur. Vous
          pouvez les lire, les imprimer et les utiliser en classe ou en famille. Leur reproduction sur un
          autre site, en tout ou en partie, demande l’accord écrit de l’éditeur.
        </p>
        <p>
          Certaines leçons renvoient à des sources extérieures et peuvent afficher une illustration
          provenant d’un fonds libre (Wikimedia Commons notamment). Ces documents restent soumis à leur
          licence d’origine, indiquée à la source citée en bas de leçon. Une illustration utilisée à tort
          sera retirée sur simple signalement.
        </p>

        <h2>Exactitude des contenus</h2>
        <p>
          Les leçons sont relues avant publication et citent leurs sources, mais une erreur reste
          possible. Elles ne remplacent ni un programme scolaire ni l’avis d’un enseignant. Un
          signalement envoyé depuis la page de contact est traité et, s’il est fondé, corrigé.
        </p>

        <h2>Liens sortants</h2>
        <p>
          Les liens vers d’autres sites sont fournis à titre de référence. Leur contenu n’est pas sous le
          contrôle de l’éditeur, qui ne peut en garantir ni l’exactitude ni la pérennité.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Le détail des données traitées, de leur durée de conservation et de la façon d’exercer vos
          droits figure dans la <a href="/confidentialite">politique de confidentialité</a>.
        </p>

        <h2>Droit applicable</h2>
        <p>
          Le présent site est soumis au droit français. Les mentions ci-dessus répondent à l’article 6 de
          la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.
        </p>
      </div>
    </div>
  );
}
