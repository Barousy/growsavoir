/**
 * Boîte de réception du formulaire de contact.
 *
 * Les messages marqués « suspect » par le champ leurre restent visibles et
 * lisibles : un filtre anti-robot se trompe parfois, et perdre le message d'une
 * vraie personne coûte plus cher qu'en relire un de trop.
 */
import Notice from '@/components/Notice';
import { supprimerMessage, traiterMessage } from '@/lib/contact-actions';
import { atLeast, requireRole } from '@/lib/auth';
import { db } from '@/lib/db';
import { purgeOldMessages } from '@/lib/retention';
import { LEGAL } from '@/lib/legal';

export const metadata = { title: 'Messages' };

type Search = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function Messages({ searchParams }: Search) {
  const params = await searchParams;
  const user = await requireRole('teacher', '/admin/messages');
  const isAdmin = atLeast(user.role, 'admin');

  // La durée annoncée dans la politique de confidentialité est appliquée ici.
  await purgeOldMessages();

  const messages = await db.message.findMany({ orderBy: [{ handled: 'asc' }, { createdAt: 'desc' }], take: 200 });
  const pending = messages.filter((message) => !message.handled).length;

  return (
    <>
      <h1>Messages</h1>
      <p>
        {messages.length} message{messages.length > 1 ? 's' : ''}, dont {pending} à traiter. Les messages
        de plus de {LEGAL.messageRetentionDays} jours sont supprimés automatiquement, comme l’annonce la
        politique de confidentialité.
      </p>
      <Notice erreur={one(params.erreur)} message={one(params.message)} detail={one(params.detail)} />

      {messages.map((message) => (
        <div className="panel" key={message.id}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div>
              <b>{message.subject || 'Sans sujet'}</b>
              <p className="hint">
                {message.name} · <a href={`mailto:${message.email}`}>{message.email}</a> ·{' '}
                {message.createdAt.toLocaleString('fr-FR')}
                {message.suspect ? ' · marqué par le filtre anti-robot' : ''}
              </p>
            </div>
            <span className={`state state--${message.handled ? 'on' : 'off'}`}>
              {message.handled ? 'traité' : 'à traiter'}
            </span>
          </div>
          <p style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>{message.body}</p>
          <div className="row" style={{ marginTop: '1.25rem' }}>
            <form action={traiterMessage} method="post">
              <input type="hidden" name="id" value={message.id} />
              <button className="btn btn--ghost btn--small" type="submit">
                {message.handled ? 'remettre à traiter' : 'marquer comme traité'}
              </button>
            </form>
            {isAdmin ? (
              <form action={supprimerMessage} method="post">
                <input type="hidden" name="id" value={message.id} />
                <button className="btn btn--danger btn--small" type="submit">supprimer</button>
              </form>
            ) : null}
          </div>
        </div>
      ))}

      {!messages.length ? <p className="hint">Aucun message pour le moment.</p> : null}
    </>
  );
}
