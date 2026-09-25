/**
 * Point d'entrée pour Phusion Passenger (cPanel, hébergement o2switch).
 *
 * Passenger ne lance pas `next start` : il charge un fichier de démarrage et
 * intercepte l'appel à listen() pour brancher l'application sur son propre
 * socket. Le port indiqué ici est donc ignoré sous Passenger, et sert
 * uniquement si le fichier est lancé à la main pour un essai.
 *
 * Ce fichier est en CommonJS à dessein : c'est ce que Passenger charge le plus
 * sûrement, quelle que soit la configuration du projet.
 */
const { createServer } = require('node:http');
const next = require('next');

const port = Number(process.env.PORT) || 3000;
const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((request, response) => handle(request, response)).listen(port, () => {
      // Visible dans les journaux de l'application, côté cPanel.
      console.log(`GrowSavoir prêt (port ${port}, ${process.env.NODE_ENV ?? 'production'})`);
    });
  })
  .catch((error) => {
    // Sans cette sortie explicite, Passenger redémarre en boucle une
    // application qui ne démarrera jamais — et le journal reste muet.
    console.error('Démarrage impossible :', error);
    process.exit(1);
  });
