/**
 * Matières : liste, création et modification sur la même page.
 *
 * Onze lignes, quelques champs chacune : un formulaire par ligne évite un
 * aller-retour de page pour changer une couleur ou un rang.
 */
import Link from 'next/link';
import Notice from '@/components/Notice';
import { enregistrerMatiere, supprimerMatiere } from '@/lib/admin-actions';
import { atLeast, requireRole } from '@/lib/auth';
import { db } from '@/lib/db';

export const metadata = { title: 'Matières' };

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function Matieres({ searchParams }: Search) {
  const params = await searchParams;
  const user = await requireRole('teacher');
  const isAdmin = atLeast(user.role, 'admin');

  const subjects = await db.subject.findMany({
    orderBy: [{ position: 'asc' }, { name: 'asc' }],
    include: { _count: { select: { lessons: true } } },
  });

  return (
    <>
      <h1>Matières</h1>
      <p>{subjects.length} matières. Le rang fixe l’ordre d’affichage dans le catalogue.</p>
      <Notice erreur={one(params.erreur)} message={one(params.message)} detail={one(params.detail)} />

      {subjects.map((subject) => (
        <form key={subject.id} action={enregistrerMatiere} method="post" className="panel">
          <input type="hidden" name="id" value={subject.id} />
          <div className="row">
            <div className="field">
              <label htmlFor={`name-${subject.id}`}>Nom</label>
              <input id={`name-${subject.id}`} name="name" defaultValue={subject.name} required />
            </div>
            <div className="field">
              <label htmlFor={`slug-${subject.id}`}>Slug</label>
              <input id={`slug-${subject.id}`} name="slug" defaultValue={subject.slug} required />
            </div>
            <div className="field" style={{ flex: '0 0 5rem' }}>
              <label htmlFor={`icon-${subject.id}`}>Icône</label>
              <input id={`icon-${subject.id}`} name="icon" defaultValue={subject.icon} maxLength={8} />
            </div>
            <div className="field" style={{ flex: '0 0 7rem' }}>
              <label htmlFor={`color-${subject.id}`}>Teinte</label>
              <input id={`color-${subject.id}`} name="color" type="color" defaultValue={subject.color} />
            </div>
            <div className="field" style={{ flex: '0 0 6rem' }}>
              <label htmlFor={`position-${subject.id}`}>Rang</label>
              <input id={`position-${subject.id}`} name="position" type="number" defaultValue={subject.position} />
            </div>
          </div>
          <div className="field">
            <label htmlFor={`description-${subject.id}`}>Description</label>
            <input id={`description-${subject.id}`} name="description" defaultValue={subject.description} maxLength={400} />
          </div>
          <label className="check">
            <input type="checkbox" name="published" defaultChecked={subject.published} /> Publiée
          </label>
          <div className="row" style={{ marginTop: '1.25rem' }}>
            <button className="btn btn--primary" type="submit">Enregistrer</button>
            <Link className="btn btn--ghost" href={`/admin/lecons?matiere=${subject.slug}`}>
              {subject._count.lessons} leçons
            </Link>
            <Link className="btn btn--ghost" href={`/catalogue/${subject.slug}`}>Voir la page</Link>
          </div>
        </form>
      ))}

      <h2>Ajouter une matière</h2>
      <form action={enregistrerMatiere} method="post" className="panel">
        <div className="row">
          <div className="field">
            <label htmlFor="new-name">Nom</label>
            <input id="new-name" name="name" required placeholder="Géographie" />
          </div>
          <div className="field">
            <label htmlFor="new-slug">Slug</label>
            <input id="new-slug" name="slug" placeholder="laissé vide : déduit du nom" />
          </div>
          <div className="field" style={{ flex: '0 0 5rem' }}>
            <label htmlFor="new-icon">Icône</label>
            <input id="new-icon" name="icon" defaultValue="📘" maxLength={8} />
          </div>
          <div className="field" style={{ flex: '0 0 7rem' }}>
            <label htmlFor="new-color">Teinte</label>
            <input id="new-color" name="color" type="color" defaultValue="#4f46e5" />
          </div>
          <div className="field" style={{ flex: '0 0 6rem' }}>
            <label htmlFor="new-position">Rang</label>
            <input id="new-position" name="position" type="number" defaultValue={subjects.length + 1} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="new-description">Description</label>
          <input id="new-description" name="description" maxLength={400} />
        </div>
        <label className="check">
          <input type="checkbox" name="published" defaultChecked /> Publiée
        </label>
        <button className="btn btn--primary" type="submit" style={{ marginTop: '1.25rem' }}>Créer</button>
      </form>

      {isAdmin ? (
        <>
          <h2>Supprimer une matière</h2>
          <div className="panel">
            <p className="hint">
              Supprimer une matière supprime aussi ses leçons. Pour éviter un accident, recopiez son nom
              exactement tel qu’il apparaît ci-dessus.
            </p>
            <form action={supprimerMatiere} method="post" className="row" style={{ marginTop: '1rem' }}>
              <div className="field">
                <label htmlFor="delete-id">Matière</label>
                <select id="delete-id" name="id" required>
                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                      {subject.name} ({subject._count.lessons} leçons)
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="confirmation">Recopier le nom</label>
                <input id="confirmation" name="confirmation" required />
              </div>
              <button className="btn btn--danger" type="submit">Supprimer</button>
            </form>
          </div>
        </>
      ) : null}
    </>
  );
}
