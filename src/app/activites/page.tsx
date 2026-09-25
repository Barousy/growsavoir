/**
 * Les fiches d'activités.
 *
 * Elles viennent du site précédent, où elles n'étaient pas indexables. Ce sont
 * 43 pages de contenu réel que la refonte récupère au lieu de les perdre.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { difficultyLabel, featureEnabled, listActivities } from '@/lib/content';
import { absolute, jsonLd } from '@/lib/site';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Activités à faire à la maison ou en classe',
  description:
    'Fiches d’activités prêtes à l’emploi : matériel, étapes détaillées, objectifs et critères d’observation, en langues, sciences, informatique et sciences islamiques.',
  alternates: { canonical: '/activites' },
  openGraph: { url: absolute('/activites'), type: 'website' },
};

export default async function Activites() {
  if (!(await featureEnabled('activities'))) notFound();
  const activities = await listActivities();

  // Regroupement par matière : une liste de 43 fiches d'affilée ne se parcourt pas.
  const groups = new Map<string, typeof activities>();
  for (const activity of activities) {
    const key = activity.subject?.name ?? 'Autres';
    groups.set(key, [...(groups.get(key) ?? []), activity]);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Activités GrowSavoir',
    numberOfItems: activities.length,
    itemListElement: activities.map((activity, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: activity.title,
      url: absolute(`/activites/${activity.slug}`),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />

      <div className="container" style={{ paddingTop: '3rem' }}>
        <p className="eyebrow">Activités</p>
        <h1 style={{ fontSize: 'clamp(1.8rem, 1.2rem + 2vw, 2.5rem)', letterSpacing: '-.02em' }}>
          {activities.length} activités à faire, pas seulement à lire
        </h1>
        <p className="section-lead prose">
          Chaque fiche donne le matériel nécessaire, les étapes minutées, ce que l’enfant doit avoir
          compris à la fin, et les questions à se poser pour le vérifier. Les tranches d’âge vont
          au-delà des 6-8 ans des leçons : elle est indiquée sur chaque fiche.
        </p>

        {[...groups.entries()].map(([name, list]) => (
          <section key={name}>
            <h2>{name}</h2>
            <ul className="lesson-list" style={{ marginTop: '1rem' }}>
              {list.map((activity) => (
                <li key={activity.slug}>
                  <Link href={`/activites/${activity.slug}`}>
                    <span>
                      <span className="title">{activity.title}</span>
                      <span className="lesson-list__summary">{activity.description}</span>
                    </span>
                    <span className="time">
                      {difficultyLabel(activity.difficulty)} · {activity.ageGroup} ans · {activity.duration}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
