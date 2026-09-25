/**
 * Page d'une matière : la liste de ses leçons.
 *
 * `generateStaticParams` fait générer ces pages au build. Elles existent donc
 * en HTML avant la première visite, ce qui est la condition pour qu'elles
 * soient indexées.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { getSubject } from '@/lib/content';
import { SITE_NAME, absolute, jsonLd } from '@/lib/site';

export const revalidate = 3600;

type Params = { params: Promise<{ subject: string }> };

export async function generateStaticParams() {
  const subjects = await db.subject.findMany({ where: { published: true }, select: { slug: true } });
  return subjects.map((subject) => ({ subject: subject.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = await getSubject(slug);
  if (!subject) return { title: 'Matière introuvable', robots: { index: false, follow: false } };

  const count = subject.lessons.length;
  return {
    title: `${subject.name} — ${count} leçon${count > 1 ? 's' : ''} pour les 6-8 ans`,
    description: subject.description || `${count} leçons de ${subject.name} pour les 6-8 ans, sur GrowSavoir.`,
    alternates: { canonical: `/catalogue/${subject.slug}` },
    openGraph: {
      title: `${subject.name} — ${SITE_NAME}`,
      description: subject.description,
      url: absolute(`/catalogue/${subject.slug}`),
      type: 'website',
    },
  };
}

export default async function Matiere({ params }: Params) {
  const { subject: slug } = await params;
  const subject = await getSubject(slug);
  if (!subject) notFound();

  const minutes = subject.lessons.reduce((total, lesson) => total + lesson.estimatedMinutes, 0);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: absolute('/') },
          { '@type': 'ListItem', position: 2, name: 'Catalogue', item: absolute('/catalogue') },
          { '@type': 'ListItem', position: 3, name: subject.name, item: absolute(`/catalogue/${subject.slug}`) },
        ],
      },
      {
        '@type': 'ItemList',
        name: subject.name,
        description: subject.description,
        numberOfItems: subject.lessons.length,
        itemListElement: subject.lessons.map((lesson, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: lesson.title,
          url: absolute(`/lecons/${lesson.slug}`),
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />

      <div className="container" style={{ paddingTop: '2.5rem' }}>
        <nav className="breadcrumb" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link> <span aria-hidden="true">›</span>{' '}
          <Link href="/catalogue">Catalogue</Link> <span aria-hidden="true">›</span>{' '}
          <span aria-current="page">{subject.name}</span>
        </nav>

        <header style={{ marginTop: '1.5rem' }}>
          <span className="card__icon" style={{ background: `${subject.color}1a`, color: subject.color }} aria-hidden="true">
            {subject.icon}
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 1.2rem + 2vw, 2.5rem)', letterSpacing: '-.02em' }}>{subject.name}</h1>
          <p className="section-lead prose">{subject.description}</p>
          <p className="card__meta">
            {subject.lessons.length} leçons · environ {Math.round(minutes / 60)} h de travail
          </p>
        </header>

        <section>
          <h2>Les leçons</h2>
          <ol className="lesson-list" style={{ marginTop: '1.25rem' }}>
            {subject.lessons.map((lesson, index) => (
              <li key={lesson.slug}>
                <Link href={`/lecons/${lesson.slug}`}>
                  <span className="num">{String(index + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="title">{lesson.title}</span>
                    {lesson.summary ? <span className="lesson-list__summary">{lesson.summary}</span> : null}
                  </span>
                  <span className="time">{lesson.estimatedMinutes} min</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
