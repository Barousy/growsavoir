/**
 * Fonctionnalités.
 *
 * C'est le mécanisme qui répond à « pouvoir ajouter des fonctionnalités » : le
 * code interroge `featureEnabled('clé')`, cette page décide de la réponse. Une
 * fonctionnalité se prépare, se livre éteinte, puis s'allume ici — sans
 * redéploiement et sans toucher au code.
 */
import Notice from '@/components/Notice';
import { basculerFonctionnalite, creerFonctionnalite, supprimerFonctionnalite } from '@/lib/admin-actions';
import { requireRole } from '@/lib/auth';
import { db } from '@/lib/db';

export const metadata = { title: 'Fonctionnalités' };

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

/** Ce que le code lit déjà : utile pour savoir ce qu'une bascule change. */
const WIRED: Record<string, string> = {
  quiz: 'Affiche le quiz au bas de chaque leçon.',
  signup: 'Ouvre la création de compte en libre-service (/inscription).',
  progress: 'Enregistre l’avancement des élèves (préparé, à câbler côté page élève).',
  comments: 'Commentaires sous les leçons (préparé, à câbler).',
};

export default async function Fonctionnalites({ searchParams }: Search) {
  const params = await searchParams;
  await requireRole('admin', '/admin/fonctionnalites');
  const features = await db.feature.findMany({ orderBy: { key: 'asc' } });

  return (
    <>
      <h1>Fonctionnalités</h1>
      <p>Chaque interrupteur agit tout de suite sur le site, sans redéploiement.</p>
      <Notice erreur={one(params.erreur)} message={one(params.message)} detail={one(params.detail)} />

      <table className="data">
        <thead>
          <tr><th>Clé</th><th>Nom</th><th>Effet</th><th>État</th><th className="right">Actions</th></tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.key}>
              <td><code>{feature.key}</code></td>
              <td>{feature.label}</td>
              <td>{feature.description || WIRED[feature.key] || <span className="hint">clé libre, lue par du code à venir</span>}</td>
              <td>
                <span className={`state state--${feature.enabled ? 'on' : 'off'}`}>
                  {feature.enabled ? 'active' : 'inactive'}
                </span>
              </td>
              <td className="right">
                <form action={basculerFonctionnalite} method="post">
                  <input type="hidden" name="key" value={feature.key} />
                  <button className="btn btn--ghost btn--small" type="submit">
                    {feature.enabled ? 'désactiver' : 'activer'}
                  </button>
                </form>{' '}
                <form action={supprimerFonctionnalite} method="post">
                  <input type="hidden" name="key" value={feature.key} />
                  <button className="btn btn--danger btn--small" type="submit">supprimer</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Déclarer une fonctionnalité</h2>
      <form action={creerFonctionnalite} method="post" className="panel">
        <div className="row">
          <div className="field">
            <label htmlFor="key">Clé</label>
            <input id="key" name="key" required placeholder="badges" />
          </div>
          <div className="field">
            <label htmlFor="label">Nom lisible</label>
            <input id="label" name="label" required placeholder="Badges de progression" />
          </div>
          <div className="field">
            <label htmlFor="description">Effet</label>
            <input id="description" name="description" maxLength={400} />
          </div>
          <button className="btn btn--primary" type="submit">Déclarer</button>
        </div>
        <label className="check">
          <input type="checkbox" name="enabled" /> Activer tout de suite
        </label>
        <p className="hint">
          Côté code, la clé se lit avec <code>featureEnabled(&apos;clé&apos;)</code> ; tant qu’aucun code ne la
          lit, la déclarer ne change rien — c’est justement ce qui permet de la préparer à l’avance.
        </p>
      </form>
    </>
  );
}
