/**
 * Formulaire d'une leçon, partagé entre création et modification.
 *
 * Un seul formulaire pour les deux cas : les champs ne peuvent pas diverger, et
 * ce qui est éditable à la création l'est aussi à la reprise. Les champs JSON
 * sont livrés indentés, plus faciles à relire qu'une ligne compacte.
 */
import { enregistrerLecon } from '@/lib/admin-actions';
import { ASSESSMENT_TEMPLATE, LESSON_TEMPLATE } from '@/lib/slug';

export type LessonFormValues = {
  id?: string;
  slug?: string;
  title?: string;
  summary?: string;
  subjectId?: string;
  level?: string;
  ageGroup?: string;
  estimatedMinutes?: number;
  position?: number;
  published?: boolean;
  locked?: boolean;
  author?: string;
  learningObjectives?: string;
  keywords?: string;
  prerequisites?: string;
  sources?: string;
  body?: string;
  assessment?: string;
};

const LEVELS = ['n1-fondamentaux', 'n2-intermediaire', 'n3-avance'];

/** Un tableau JSON stocké, rendu ligne par ligne dans un textarea. */
function toLines(value?: string) {
  if (!value) return '';
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.join('\n') : '';
  } catch {
    return '';
  }
}

/** Du JSON compact vers du JSON indenté ; si c'est illisible, on rend tel quel. */
function pretty(value: string | undefined, fallback: string) {
  if (!value || value === '{}' || value === '[]') return fallback;
  try {
    return JSON.stringify(JSON.parse(value), null, 2);
  } catch {
    return value;
  }
}

export default function LessonForm({
  values,
  subjects,
}: {
  values: LessonFormValues;
  subjects: { id: string; name: string }[];
}) {
  const creating = !values.id;

  return (
    <form action={enregistrerLecon} method="post" className="panel">
      {values.id ? <input type="hidden" name="id" value={values.id} /> : null}

      <div className="row">
        <div className="field">
          <label htmlFor="title">Titre</label>
          <input id="title" name="title" defaultValue={values.title ?? ''} required maxLength={240} />
        </div>
        <div className="field">
          <label htmlFor="subjectId">Matière</label>
          <select id="subjectId" name="subjectId" defaultValue={values.subjectId ?? subjects[0]?.id} required>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>{subject.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="slug">Adresse (slug)</label>
        <input id="slug" name="slug" defaultValue={values.slug ?? ''} placeholder="laissé vide : déduit du titre" />
        <span className="hint">
          L’URL publique sera /lecons/&lt;slug&gt;. Changer un slug déjà en ligne casse les liens
          existants : à éviter une fois la leçon publiée.
        </span>
      </div>

      <div className="field">
        <label htmlFor="summary">Résumé</label>
        <input id="summary" name="summary" defaultValue={values.summary ?? ''} maxLength={400} />
        <span className="hint">Sert de méta-description : une phrase qui décrit la leçon, 150 caractères environ.</span>
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="level">Niveau</label>
          <select id="level" name="level" defaultValue={values.level ?? LEVELS[0]}>
            {LEVELS.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="ageGroup">Âge</label>
          <input id="ageGroup" name="ageGroup" defaultValue={values.ageGroup ?? '6-8 ans'} />
        </div>
        <div className="field">
          <label htmlFor="estimatedMinutes">Durée (min)</label>
          <input id="estimatedMinutes" name="estimatedMinutes" type="number" min={1} max={600}
            defaultValue={values.estimatedMinutes ?? 20} />
        </div>
        <div className="field">
          <label htmlFor="position">Rang dans la matière</label>
          <input id="position" name="position" type="number" defaultValue={values.position ?? 0} />
        </div>
        <div className="field">
          <label htmlFor="author">Auteur</label>
          <input id="author" name="author" defaultValue={values.author ?? 'GrowSavoir'} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="learningObjectives">Objectifs (un par ligne)</label>
        <textarea id="learningObjectives" name="learningObjectives" defaultValue={toLines(values.learningObjectives)} />
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="keywords">Mots-clés (un par ligne)</label>
          <textarea id="keywords" name="keywords" defaultValue={toLines(values.keywords)} />
        </div>
        <div className="field">
          <label htmlFor="prerequisites">Prérequis (un par ligne)</label>
          <textarea id="prerequisites" name="prerequisites" defaultValue={toLines(values.prerequisites)} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="body">Contenu (JSON)</label>
        <textarea id="body" name="body" rows={18} defaultValue={pretty(values.body, LESSON_TEMPLATE)} spellCheck={false} />
        <span className="hint">
          Sections acceptées dans <code>mainContent</code> : concept, example, activity, exercise,
          summary. Le champ <code>content</code> s’écrit en markdown (titres, listes, tableaux, gras).
          Une syntaxe JSON invalide bloque l’enregistrement : rien n’est écrit à moitié.
        </span>
      </div>

      <div className="field">
        <label htmlFor="assessment">Quiz (JSON)</label>
        <textarea id="assessment" name="assessment" rows={12} defaultValue={pretty(values.assessment, ASSESSMENT_TEMPLATE)} spellCheck={false} />
      </div>

      <div className="field">
        <label htmlFor="sources">Sources (JSON)</label>
        <textarea id="sources" name="sources" rows={6} defaultValue={pretty(values.sources, '[]')} spellCheck={false} />
        <span className="hint">Tableau d’objets : title, url, type, description.</span>
      </div>

      <label className="check">
        <input type="checkbox" name="published" defaultChecked={values.published ?? false} /> Publiée (visible sur le site)
      </label>
      <label className="check">
        <input type="checkbox" name="locked" defaultChecked={values.locked ?? false} /> Réservée aux comptes connectés
      </label>

      <button className="btn btn--primary" type="submit" style={{ marginTop: '1.5rem' }}>
        {creating ? 'Créer la leçon' : 'Enregistrer'}
      </button>
    </form>
  );
}
