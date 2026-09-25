import type { Metadata } from 'next';
import Link from 'next/link';
import { listSubjects, stats } from '@/lib/content';
import { absolute, jsonLd } from '@/lib/site';

export const revalidate = 3600;

/**
 * Le nombre de matières et de leçons est lu en base, pas écrit à la main :
 * une description qui annonce « 132 leçons » devient fausse à la première
 * publication depuis la console.
 */
export async function generateMetadata(): Promise<Metadata> {
  const counts = await stats();
  return {
    title: 'Catalogue des matières',
    description:
      `${counts.subjects} matières et ${counts.lessons} leçons pour les 6-8 ans : langue arabe, français, ` +
      'anglais, mathématiques, sciences, informatique, aqîda, fiqh, sîra, histoire de l’Islam et ' +
      'développement personnel.',
    alternates: { canonical: '/catalogue' },
    openGraph: { url: absolute('/catalogue'), type: 'website' },
  };
}

export default async function Catalogue() {
  const [subjects, counts] = await Promise.all([listSubjects(), stats()]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Catalogue GrowSavoir',
    numberOfItems: subjects.length,
    itemListElement: subjects.map((subject, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: subject.name,
      url: absolute(`/catalogue/${subject.slug}`),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <div className="container" style={{ paddingTop: '3rem' }}>
        <p className="eyebrow">Catalogue</p>
        <h1 style={{ fontSize: 'clamp(1.8rem, 1.2rem + 2vw, 2.5rem)', letterSpacing: '-.02em' }}>
          {counts.subjects} matières, {counts.lessons} leçons
        </h1>
        <p className="section-lead prose">
          Chaque matière suit douze leçons de niveau fondamental, pensées pour les 6-8 ans.
          Le contenu est libre d’accès : aucun compte n’est nécessaire pour lire une leçon.
        </p>
        <div className="grid" style={{ marginTop: '2rem' }}>
          {subjects.map((subject) => (
            <Link className="card" key={subject.id} href={`/catalogue/${subject.slug}`}>
              <span className="card__icon" style={{ background: `${subject.color}1a`, color: subject.color }} aria-hidden="true">
                {subject.icon}
              </span>
              <h2 style={{ fontSize: '1.08rem' }}>{subject.name}</h2>
              <p>{subject.description}</p>
              <p className="card__meta">{subject._count.lessons} leçons</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
