import type { Metadata } from 'next';
import Link from 'next/link';
import { featureEnabled, listSubjects, stats } from '@/lib/content';
import { db } from '@/lib/db';
import { absolute, jsonLd } from '@/lib/site';

/** L'accueil aussi a besoin d'une canonique : sans elle, /?utm_source=… et /
 *  sont deux pages différentes pour un moteur de recherche. */
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: absolute('/'), type: 'website' },
};

/** L'accueil est régénérée toutes les heures : le contenu bouge rarement. */
export const revalidate = 3600;

export default async function Accueil() {
  const [subjects, counts, activities, activityCount] = await Promise.all([
    listSubjects(),
    stats(),
    featureEnabled('activities'),
    db.activity.count({ where: { published: true } }),
  ]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': absolute('/#organisation'),
        name: 'GrowSavoir',
        url: absolute('/'),
        description: 'Plateforme éducative : langues, sciences et sciences islamiques pour les 6-8 ans.',
      },
      {
        '@type': 'WebSite',
        '@id': absolute('/#site'),
        url: absolute('/'),
        name: 'GrowSavoir',
        inLanguage: 'fr-FR',
        publisher: { '@id': absolute('/#organisation') },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />

      <div className="container hero">
        <p className="eyebrow">Plateforme éducative</p>
        <h1>Apprendre l’arabe, les langues et les sciences, une leçon à la fois</h1>
        <p>
          {counts.lessons} leçons structurées pour les 6-8 ans : on lit, on manipule, on vérifie
          ce qu’on a compris. Chaque leçon tient en vingt minutes et se termine par un exercice.
        </p>
        <div className="hero__actions">
          <Link className="btn btn--primary" href="/catalogue">Voir le catalogue</Link>
          <Link className="btn btn--ghost" href="/lecons/arabe-n1-fondamentaux-01">Commencer par l’alphabet arabe</Link>
        </div>
        <div className="stats">
          <div><b>{counts.subjects}</b><span>matières</span></div>
          <div><b>{counts.lessons}</b><span>leçons</span></div>
          <div><b>{counts.hours} h</b><span>de contenu</span></div>
        </div>
      </div>

      <section className="container">
        <h2>Les matières</h2>
        <p className="section-lead">Onze parcours, chacun en douze leçons progressives.</p>
        <div className="grid" style={{ marginTop: '1.5rem' }}>
          {subjects.map((subject) => (
            <Link className="card" key={subject.id} href={`/catalogue/${subject.slug}`}>
              <span className="card__icon" style={{ background: `${subject.color}1a`, color: subject.color }} aria-hidden="true">
                {subject.icon}
              </span>
              <h3>{subject.name}</h3>
              <p>{subject.description}</p>
              <p className="card__meta">{subject._count.lessons} leçons</p>
            </Link>
          ))}
        </div>
      </section>

      {activities && activityCount ? (
        <section className="container">
          <h2>Et pour mettre les mains dedans</h2>
          <p className="section-lead prose">
            {activityCount} fiches d’activités : le matériel, les étapes minutées et les questions à
            poser à la fin pour vérifier que c’est compris.
          </p>
          <p style={{ marginTop: '1.25rem' }}>
            <Link className="btn btn--ghost" href="/activites">Voir les activités</Link>
          </p>
        </section>
      ) : null}
    </>
  );
}
