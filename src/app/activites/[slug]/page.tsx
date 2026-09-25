/**
 * Une fiche d'activité.
 *
 * Données structurées HowTo : c'est exactement ce que décrit la fiche — un
 * matériel, des étapes numérotées, une durée. C'est aussi le format que les
 * moteurs savent présenter en résultat enrichi.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  allActivitySlugs, difficultyLabel, featureEnabled, getActivity, parse, type ActivityLists,
} from '@/lib/content';
import { SITE_NAME, absolute, jsonLd } from '@/lib/site';

export const revalidate = 3600;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await allActivitySlugs()).map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const activity = await getActivity(slug);
  if (!activity) return { title: 'Activité introuvable', robots: { index: false, follow: false } };

  return {
    title: `${activity.title} — activité ${activity.duration}`,
    description: activity.description,
    alternates: { canonical: `/activites/${activity.slug}` },
    openGraph: {
      title: activity.title,
      description: activity.description,
      url: absolute(`/activites/${activity.slug}`),
      type: 'article',
      siteName: SITE_NAME,
    },
  };
}

/** Une durée « 20 min » ou « 1 h 30 » vers la notation ISO attendue par schema.org. */
function isoDuration(value: string) {
  const hours = Number(value.match(/(\d+)\s*h/i)?.[1] ?? 0);
  const minutes = Number(value.match(/(\d+)\s*min/i)?.[1] ?? 0);
  if (!hours && !minutes) return undefined;
  return `PT${hours ? `${hours}H` : ''}${minutes ? `${minutes}M` : ''}`;
}

export default async function Activite({ params }: Params) {
  if (!(await featureEnabled('activities'))) notFound();

  const { slug } = await params;
  const activity = await getActivity(slug);
  if (!activity) notFound();

  const lists: ActivityLists = {
    materials: parse<string[]>(activity.materials, []),
    instructions: parse<string[]>(activity.instructions, []),
    learningObjectives: parse<string[]>(activity.learningObjectives, []),
    tips: parse<string[]>(activity.tips, []),
    assessment: parse<string[]>(activity.assessment, []),
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: absolute('/') },
          { '@type': 'ListItem', position: 2, name: 'Activités', item: absolute('/activites') },
          { '@type': 'ListItem', position: 3, name: activity.title, item: absolute(`/activites/${activity.slug}`) },
        ],
      },
      {
        '@type': 'HowTo',
        name: activity.title,
        description: activity.description,
        url: absolute(`/activites/${activity.slug}`),
        inLanguage: 'fr-FR',
        totalTime: isoDuration(activity.duration),
        supply: lists.materials.map((item) => ({ '@type': 'HowToSupply', name: item })),
        step: lists.instructions.map((instruction, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          // Le titre de l'étape est la partie avant « : » quand il y en a une.
          name: instruction.split(':')[0].slice(0, 110),
          text: instruction,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />

      <article className="container" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <nav className="breadcrumb" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link> <span aria-hidden="true">›</span>{' '}
          <Link href="/activites">Activités</Link> <span aria-hidden="true">›</span>{' '}
          <span aria-current="page">{activity.title}</span>
        </nav>

        <header style={{ marginTop: '1.5rem' }}>
          <p className="eyebrow">{activity.subject?.name ?? 'Activité'}</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 1.2rem + 2vw, 2.4rem)', letterSpacing: '-.02em' }}>{activity.title}</h1>
          <p className="section-lead prose">{activity.description}</p>
          <p className="meta-row">
            <span className="pill">{difficultyLabel(activity.difficulty)}</span>
            <span className="pill">{activity.ageGroup} ans</span>
            <span className="pill">{activity.duration}</span>
            <span className="pill">{activity.alone ? 'faisable seul' : 'avec un adulte'}</span>
            {activity.supervised ? <span className="pill">surveillance nécessaire</span> : null}
          </p>
        </header>

        <div className="lesson-body prose">
          {lists.materials.length ? (
            <section className="block" aria-labelledby="materiel">
              <p className="eyebrow">Avant de commencer</p>
              <h2 id="materiel">Matériel</h2>
              <ul>
                {lists.materials.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {lists.instructions.length ? (
            <section className="block block--activity" aria-labelledby="etapes">
              <p className="eyebrow">Déroulé</p>
              <h2 id="etapes">Étapes</h2>
              <ol>
                {lists.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </section>
          ) : null}

          {lists.learningObjectives.length ? (
            <section className="block" aria-labelledby="objectifs">
              <h2 id="objectifs">Ce que l’enfant apprend</h2>
              <ul>
                {lists.learningObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {lists.tips.length ? (
            <section className="block" aria-labelledby="conseils">
              <h2 id="conseils">Conseils</h2>
              <ul>
                {lists.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {lists.assessment.length ? (
            <section className="block block--summary" aria-labelledby="observation">
              <h2 id="observation">Vérifier que c’est acquis</h2>
              <ul>
                {lists.assessment.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <nav className="pager" aria-label="Retour">
          <Link className="btn btn--ghost" href="/activites">← Toutes les activités</Link>
          {activity.subject ? (
            <Link className="btn btn--primary" href={`/catalogue/${activity.subject.slug}`}>
              Les leçons de {activity.subject.name} →
            </Link>
          ) : null}
        </nav>
      </article>
    </>
  );
}
