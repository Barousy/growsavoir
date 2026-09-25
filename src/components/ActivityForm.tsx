/**
 * Formulaire d'une fiche d'activité.
 *
 * Tout se saisit en texte, une ligne par élément : les fiches sont des listes
 * (matériel, étapes, conseils), et une ligne par élément se relit mieux qu'un
 * tableau JSON.
 */
import { enregistrerActivite } from '@/lib/admin-actions';
import { DIFFICULTY } from '@/lib/content';

export type ActivityFormValues = {
  id?: string;
  slug?: string;
  title?: string;
  description?: string;
  duration?: string;
  difficulty?: string;
  ageGroup?: string;
  materials?: string;
  instructions?: string;
  learningObjectives?: string;
  tips?: string;
  assessment?: string;
  interactive?: boolean;
  alone?: boolean;
  supervised?: boolean;
  position?: number;
  published?: boolean;
  subjectId?: string | null;
};

const AGES = ['6-8', '9-11', '12-14', '15+'];

function toLines(value?: string) {
  if (!value) return '';
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.join('\n') : '';
  } catch {
    return '';
  }
}

export default function ActivityForm({
  values,
  subjects,
}: {
  values: ActivityFormValues;
  subjects: { id: string; name: string }[];
}) {
  return (
    <form action={enregistrerActivite} method="post" className="panel">
      {values.id ? <input type="hidden" name="id" value={values.id} /> : null}

      <div className="row">
        <div className="field">
          <label htmlFor="title">Titre</label>
          <input id="title" name="title" defaultValue={values.title ?? ''} required maxLength={240} />
        </div>
        <div className="field">
          <label htmlFor="subjectId">Matière</label>
          <select id="subjectId" name="subjectId" defaultValue={values.subjectId ?? ''}>
            <option value="">aucune</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>{subject.name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="slug">Adresse (slug)</label>
          <input id="slug" name="slug" defaultValue={values.slug ?? ''} placeholder="déduit du titre" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="description">Description</label>
        <input id="description" name="description" defaultValue={values.description ?? ''} maxLength={600} />
        <span className="hint">Sert de méta-description : une phrase qui dit ce qu’on fait et ce qu’on apprend.</span>
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="duration">Durée</label>
          <input id="duration" name="duration" defaultValue={values.duration ?? '20 min'} />
        </div>
        <div className="field">
          <label htmlFor="difficulty">Difficulté</label>
          <select id="difficulty" name="difficulty" defaultValue={values.difficulty ?? 'beginner'}>
            {Object.entries(DIFFICULTY).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="ageGroup">Âge</label>
          <select id="ageGroup" name="ageGroup" defaultValue={values.ageGroup ?? '6-8'}>
            {AGES.map((age) => (
              <option key={age} value={age}>{age} ans</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="position">Rang</label>
          <input id="position" name="position" type="number" defaultValue={values.position ?? 0} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="materials">Matériel (un par ligne)</label>
        <textarea id="materials" name="materials" defaultValue={toLines(values.materials)} />
      </div>
      <div className="field">
        <label htmlFor="instructions">Étapes (une par ligne, dans l’ordre)</label>
        <textarea id="instructions" name="instructions" rows={8} defaultValue={toLines(values.instructions)} />
      </div>
      <div className="field">
        <label htmlFor="learningObjectives">Ce que l’enfant apprend (un par ligne)</label>
        <textarea id="learningObjectives" name="learningObjectives" defaultValue={toLines(values.learningObjectives)} />
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="tips">Conseils (un par ligne)</label>
          <textarea id="tips" name="tips" defaultValue={toLines(values.tips)} />
        </div>
        <div className="field">
          <label htmlFor="assessment">Vérifier que c’est acquis (un par ligne)</label>
          <textarea id="assessment" name="assessment" defaultValue={toLines(values.assessment)} />
        </div>
      </div>

      <label className="check">
        <input type="checkbox" name="published" defaultChecked={values.published ?? false} /> Publiée
      </label>
      <label className="check">
        <input type="checkbox" name="interactive" defaultChecked={values.interactive ?? true} /> Activité interactive
      </label>
      <label className="check">
        <input type="checkbox" name="alone" defaultChecked={values.alone ?? false} /> Faisable seul
      </label>
      <label className="check">
        <input type="checkbox" name="supervised" defaultChecked={values.supervised ?? false} /> Surveillance nécessaire
      </label>

      <button className="btn btn--primary" type="submit" style={{ marginTop: '1.5rem' }}>
        {values.id ? 'Enregistrer' : 'Créer l’activité'}
      </button>
    </form>
  );
}
