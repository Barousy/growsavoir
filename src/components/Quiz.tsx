/**
 * Quiz d'une leçon.
 *
 * Rendu côté serveur, sans JavaScript : la réponse est cachée dans un
 * <details>, que le navigateur ouvre tout seul. L'élève peut réfléchir avant
 * de voir la correction, et les questions restent dans le HTML — donc
 * lisibles par un lecteur d'écran comme par un moteur de recherche.
 */
import { renderMarkdown } from '@/lib/markdown';
import type { QuizItem } from '@/lib/content';

export default function Quiz({ items, passingScore }: { items: QuizItem[]; passingScore?: number }) {
  if (!items.length) return null;

  return (
    <section className="block block--exercise quiz" aria-labelledby="quiz">
      <p className="eyebrow">Vérifier</p>
      <h2 id="quiz">Quiz — {items.length} question{items.length > 1 ? 's' : ''}</h2>
      {passingScore ? <p className="card__meta">Réussite à partir de {passingScore} %.</p> : null}

      <ol className="quiz__list">
        {items.map((item, index) => (
          <li key={index}>
            <p className="quiz__question">{item.question}</p>
            {item.options?.length ? (
              <ul className="quiz__options">
                {item.options.map((option, optionIndex) => (
                  <li key={optionIndex}>{option}</li>
                ))}
              </ul>
            ) : null}
            <details>
              <summary>Voir la réponse</summary>
              <p><b>{item.correctAnswer}</b></p>
              {item.explanation ? (
                <div dangerouslySetInnerHTML={{ __html: renderMarkdown(item.explanation) }} />
              ) : null}
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
}
