/**
 * Corps d'une leçon.
 *
 * Composant serveur : le markdown est converti en HTML pendant le rendu, donc
 * le texte part dans la réponse. Aucun JavaScript n'est nécessaire côté
 * navigateur pour lire une leçon.
 */
import { renderMarkdown } from '@/lib/markdown';
import type { Body, Section } from '@/lib/content';

/** Chaque nature de section a son habillage ; l'inconnue reste lisible. */
const KIND: Record<string, { className: string; label: string }> = {
  concept: { className: 'block', label: 'Notion' },
  example: { className: 'block', label: 'Exemple' },
  exercise: { className: 'block block--exercise', label: 'Exercice' },
  activity: { className: 'block block--activity', label: 'Activité' },
  summary: { className: 'block block--summary', label: 'Récapitulatif' },
};

type Example = { title?: string; code?: string; description?: string; explanation?: string };

function Markdown({ source }: { source?: string | null }) {
  const html = renderMarkdown(source);
  if (!html) return null;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function Examples({ examples }: { examples: Example[] }) {
  return (
    <dl className="examples">
      {examples.map((example, index) => (
        <div key={index}>
          <dt>
            {example.title ?? `Exemple ${index + 1}`}
            {example.description ? <span className="pill">{example.description}</span> : null}
          </dt>
          {example.code ? <dd><code>{example.code}</code></dd> : null}
          {example.explanation ? <dd><Markdown source={example.explanation} /></dd> : null}
        </div>
      ))}
    </dl>
  );
}

function Block({ section, index }: { section: Section & { examples?: Example[] }; index: number }) {
  const kind = KIND[section.type] ?? { className: 'block', label: '' };
  return (
    <section className={kind.className} aria-labelledby={`section-${index}`}>
      {kind.label ? <p className="eyebrow">{kind.label}</p> : null}
      <h2 id={`section-${index}`}>{section.title ?? kind.label}</h2>
      <Markdown source={section.content} />
      {section.examples?.length ? <Examples examples={section.examples} /> : null}
    </section>
  );
}

export default function LessonBody({ body }: { body: Body }) {
  const sections = (body.mainContent ?? []) as (Section & { examples?: Example[] })[];
  const conclusion = body.conclusion;

  return (
    <div className="lesson-body prose">
      {body.introduction ? (
        <>
          {body.introduction.title ? <h2>{body.introduction.title}</h2> : null}
          <Markdown source={body.introduction.content} />
          {body.introduction.image ? (
            /* Image distante : <img> plutôt que next/image, pour ne pas lier le
               contenu à une liste d'hôtes autorisés dans la configuration. */
            <img src={body.introduction.image} alt="" loading="lazy" decoding="async" className="lesson-illustration" />
          ) : null}
        </>
      ) : null}

      {sections.map((section, index) => (
        <Block key={index} section={section} index={index} />
      ))}

      {conclusion ? (
        <section className="block block--summary" aria-labelledby="conclusion">
          <h2 id="conclusion">Ce qu’il faut retenir</h2>
          <Markdown source={conclusion.summary} />
          {conclusion.keyTakeaways?.length ? (
            <ul>
              {conclusion.keyTakeaways.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : null}
          {conclusion.nextSteps?.length ? (
            <>
              <h3>Pour aller plus loin</h3>
              <ul>
                {conclusion.nextSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </>
          ) : null}
          {conclusion.additionalResources?.length ? (
            <>
              <h3>Ressources</h3>
              <ul>
                {conclusion.additionalResources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.url} rel="noopener nofollow">{resource.title}</a>
                    {resource.description ? ` — ${resource.description}` : null}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
