import type { Metadata } from 'next';
import Notice from '@/components/Notice';
import { envoyerMessage } from '@/lib/contact-actions';
import { absolute } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Signaler une erreur dans une leçon, proposer un contenu ou poser une question à l’équipe GrowSavoir.',
  alternates: { canonical: '/contact' },
  openGraph: { url: absolute('/contact'), type: 'website' },
};

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function Contact({ searchParams }: Search) {
  const params = await searchParams;

  return (
    <div className="container" style={{ paddingTop: '3rem' }}>
      <p className="eyebrow">Contact</p>
      <h1 style={{ fontSize: 'clamp(1.8rem, 1.2rem + 2vw, 2.5rem)', letterSpacing: '-.02em' }}>Nous écrire</h1>
      <p className="section-lead prose">
        Une erreur repérée dans une leçon, une précision à apporter, une demande de contenu : ce formulaire
        arrive directement dans la console d’administration du site.
      </p>

      <div className="lesson-body prose" style={{ marginTop: '1.5rem' }}>
        <h2>Ce à quoi nous répondons</h2>
        <ul>
          <li><b>Une erreur dans une leçon.</b> Indiquez la leçon et le passage : c’est le message le plus utile que nous recevons, et il est traité en priorité.</li>
          <li><b>Une demande de contenu.</b> Une notion qui manque, un niveau à ouvrir, une matière à ajouter.</li>
          <li><b>Une question d’usage</b> en classe ou en famille : comment enchaîner les leçons, quoi faire avant, quoi faire après.</li>
          <li><b>Un signalement d’illustration</b> dont vous détenez les droits : elle sera retirée sans discussion.</li>
        </ul>
        <p>
          Les messages sont relus par une personne, pas par un automate. Comptez quelques jours ; une
          correction de leçon est publiée dès qu’elle est vérifiée.
        </p>
      </div>

      <div style={{ maxWidth: '34rem', marginTop: '2rem' }}>
        <Notice erreur={one(params.erreur)} message={one(params.message)} />

        <form action={envoyerMessage} method="post" className="panel">
          <div className="field">
            <label htmlFor="nom">Votre nom</label>
            <input id="nom" name="nom" required maxLength={120} autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Votre adresse e-mail</label>
            <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="sujet">Sujet</label>
            <input id="sujet" name="sujet" maxLength={200} placeholder="Erreur dans la leçon…" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required maxLength={5000} rows={8} style={{ fontFamily: 'inherit', fontSize: '1rem' }} />
          </div>

          {/* Champ leurre : caché des personnes, souvent rempli par un robot. */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
            <label htmlFor="site">Site web</label>
            <input id="site" name="site" tabIndex={-1} autoComplete="off" />
          </div>

          <button className="btn btn--primary" type="submit" style={{ marginTop: '1.25rem' }}>Envoyer</button>
          <p className="hint" style={{ marginTop: '.75rem' }}>
            Votre adresse ne sert qu’à vous répondre. Voir la{' '}
            <a href="/confidentialite">politique de confidentialité</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
