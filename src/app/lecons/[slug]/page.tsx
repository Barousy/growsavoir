/**
 * Page d'une leçon : le cœur du site.
 *
 * 132 pages générées au build, chacune avec son titre, sa description, son
 * fil d'Ariane, ses données structurées Course et l'intégralité de son texte
 * dans le HTML. C'est précisément ce que l'ancienne version ne faisait pas.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LessonBody from '@/components/LessonBody';
import Quiz from '@/components/Quiz';
import { allLessonSlugs, featureEnabled, getLesson, neighbours, parse, type Body, type QuizItem } from '@/lib/content';
import { marquerFaite } from '@/lib/progress-actions';
import { plainText } from '@/lib/markdown';
import { SITE_NAME, absolute, levelLabel, jsonLd } from '@/lib/site';

export const revalidate = 3600;

type Params = { params: Promise<{ slug: string }> };
type Source = { title: string; url: string; type?: string; description?: string };
type Assessment = { quiz?: QuizItem[]; passingScore?: number; timeLimit?: number };

export async function generateStaticParams() {
  return (await allLessonSlugs()).map((lesson) => ({ slug: lesson.slug }));
}

/**
 * La description vient du résumé, et à défaut du texte de l'introduction :
 * mieux vaut une phrase tirée de la leçon qu'une description absente ou
 * recopiée d'une page à l'autre.
 */
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const lesson = await getLesson(slug);
  if (!lesson) return { title: 'Leçon introuvable', robots: { index: false, follow: false } };

  const body = parse<Body>(lesson.body, {});
  const description = lesson.summary || plainText(body.introduction?.content, 155);
  const keywords = parse<string[]>(lesson.keywords, []);

  return {
    title: `${lesson.title} — ${lesson.subject.name}`,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: `/lecons/${lesson.slug}` },
    openGraph: {
      title: lesson.title,
      description,
      url: absolute(`/lecons/${lesson.slug}`),
      type: 'article',
      siteName: SITE_NAME,
    },
  };
}

export default async function Lecon({ params }: Params) {
  const { slug } = await params;
  const lesson = await getLesson(slug);
  if (!lesson) notFound();

  const body = parse<Body>(lesson.body, {});
  const assessment = parse<Assessment>(lesson.assessment, {});
  const objectives = parse<string[]>(lesson.learningObjectives, []);
  const prerequisites = parse<string[]>(lesson.prerequisites, []);
  const sources = parse<Source[]>(lesson.sources, []);
  const [{ previous, next }, quizEnabled, progressEnabled] = await Promise.all([
    neighbours(lesson.subjectId, lesson.position),
    featureEnabled('quiz'),
    featureEnabled('progress'),
  ]);

  const description = lesson.summary || plainText(body.introduction?.content, 155);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: absolute('/') },
          { '@type': 'ListItem', position: 2, name: 'Catalogue', item: absolute('/catalogue') },
          { '@type': 'ListItem', position: 3, name: lesson.subject.name, item: absolute(`/catalogue/${lesson.subject.slug}`) },
          { '@type': 'ListItem', position: 4, name: lesson.title, item: absolute(`/lecons/${lesson.slug}`) },
        ],
      },
      {
        '@type': 'Course',
        '@id': absolute(`/lecons/${lesson.slug}#course`),
        name: lesson.title,
        description,
        url: absolute(`/lecons/${lesson.slug}`),
        inLanguage: 'fr-FR',
        // GrowSavoir n'attribue pas de diplôme : le contenu est gratuit et sans
        // inscription, ce que la déclaration doit dire honnêtement.
        isAccessibleForFree: !lesson.locked,
        educationalLevel: levelLabel(lesson.level),
        typicalAgeRange: lesson.ageGroup,
        about: lesson.subject.name,
        teaches: objectives.length ? objectives : undefined,
        timeRequired: `PT${lesson.estimatedMinutes}M`,
        dateModified: lesson.updatedAt.toISOString(),
        provider: { '@type': 'EducationalOrganization', name: SITE_NAME, url: absolute('/') },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          courseWorkload: `PT${lesson.estimatedMinutes}M`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />

      <article className="container" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <nav className="breadcrumb" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link> <span aria-hidden="true">›</span>{' '}
          <Link href="/catalogue">Catalogue</Link> <span aria-hidden="true">›</span>{' '}
          <Link href={`/catalogue/${lesson.subject.slug}`}>{lesson.subject.name}</Link>{' '}
          <span aria-hidden="true">›</span> <span aria-current="page">{lesson.title}</span>
        </nav>

        <header style={{ marginTop: '1.5rem' }}>
          <p className="eyebrow">{lesson.subject.name}</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 1.2rem + 2vw, 2.4rem)', letterSpacing: '-.02em' }}>{lesson.title}</h1>
          {lesson.summary ? <p className="section-lead prose">{lesson.summary}</p> : null}
          <p className="meta-row">
            <span className="pill">{levelLabel(lesson.level)}</span>
            <span className="pill">{lesson.ageGroup}</span>
            <span className="pill">{lesson.estimatedMinutes} min</span>
          </p>
        </header>

        {objectives.length ? (
          <section className="block" aria-labelledby="objectifs">
            <p className="eyebrow">Objectifs</p>
            <h2 id="objectifs">À la fin de cette leçon</h2>
            <ul>
              {objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {prerequisites.length ? (
          <p className="card__meta">Prérequis : {prerequisites.join(', ')}.</p>
        ) : null}

        <LessonBody body={body} />

        {quizEnabled ? <Quiz items={assessment.quiz ?? []} passingScore={assessment.passingScore} /> : null}

        {sources.length ? (
          <section className="block" aria-labelledby="sources">
            <h2 id="sources">Sources</h2>
            <ul>
              {sources.map((source, index) => (
                <li key={index}>
                  <a href={source.url} rel="noopener nofollow">{source.title}</a>
                  {source.description ? ` — ${source.description}` : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {progressEnabled ? (
          /* Ce formulaire n'interroge aucun cookie à l'affichage : la page reste
             générée au build, et c'est l'action qui identifie le compte au clic. */
          <form action={marquerFaite} method="post" className="block" style={{ display: 'grid', gap: '.6rem' }}>
            <input type="hidden" name="slug" value={lesson.slug} />
            <button className="btn btn--primary" type="submit" style={{ justifySelf: 'start' }}>
              J’ai terminé cette leçon
            </button>
            <span className="card__meta">Demande d’être connecté ; sert uniquement à retrouver où l’on en est.</span>
          </form>
        ) : null}

        <nav className="pager" aria-label="Leçon précédente et suivante">
          {previous ? (
            <Link className="btn btn--ghost" href={`/lecons/${previous.slug}`}>
              ← {previous.title}
            </Link>
          ) : (
            <Link className="btn btn--ghost" href={`/catalogue/${lesson.subject.slug}`}>
              ← Toutes les leçons
            </Link>
          )}
          {next ? (
            <Link className="btn btn--primary" href={`/lecons/${next.slug}`}>
              {next.title} →
            </Link>
          ) : null}
        </nav>
      </article>
    </>
  );
}
