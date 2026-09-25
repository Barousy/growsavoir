# GrowSavoir

Plateforme éducative : 132 leçons et 43 fiches d’activités, en langues, sciences
et sciences islamiques, avec une console d’administration pour le contenu, les
comptes et les fonctionnalités.

Cette version est une reconstruction. Elle reprend le contenu du site précédent
et change la façon dont il est servi.

---

## Pourquoi une reconstruction

Le site précédent construisait chaque page dans le navigateur. Mesuré page par
page avant d’écrire une ligne de code :

| | avant | maintenant |
|---|---|---|
| Texte visible d’une page de leçon | ~100 caractères (un écran de chargement) | ~4 000 caractères |
| Balise `<h1>` | absente | présente sur chaque page |
| Liens dans le HTML | 0 | 18 à 28 selon la page |
| Titre et description | identiques sur `/`, `/catalogue`, `/contact` | propres à chaque page |
| Données structurées | aucune | `Course`, `HowTo`, `ItemList`, `BreadcrumbList`, `EducationalOrganization` |
| `og:image` | déclarée, mais en 404 | générée, différente pour chaque leçon |
| `manifest.json` | en 404 | généré |
| Pages dans le sitemap | 144, dont 12 sans contenu | 193, toutes servies |
| Vérification Google | `your-google-verification-code` | à renseigner (voir plus bas) |

Un moteur de recherche indexait donc l’écran de chargement à la place des
leçons. La correction n’était pas un réglage de balises : il fallait que les
pages soient produites sur le serveur. C’est ce que fait cette version, et tout
le reste en découle.

---

## Ce que c’est, techniquement

- **Next.js 15** (App Router), **React 19**, **TypeScript**.
- **PostgreSQL** via **Prisma**. Une seule variable, `DATABASE_URL`.
- **143 pages de contenu générées au build** (11 matières, 132 leçons) plus les
  43 activités : elles existent en HTML avant la première visite.
- **Aucune dépendance d’authentification** : `scrypt` et `timingSafeEqual` de la
  bibliothèque standard de Node.
- **Aucun JavaScript nécessaire pour lire le site**, ni pour envoyer un
  formulaire : tout passe par des Server Actions posées sur de vrais `<form>`.
- **Trois dépendances** en production : `next`, `react`, `marked` (plus le client
  Prisma). Pas de bibliothèque de composants, pas de CSS compilé.

### Organisation

```
content/lessons/*.json     les 132 leçons, telles que publiées
content/activities/*.json  les 43 fiches d'activités
prisma/schema.prisma       matières, leçons, activités, comptes, sessions,
                           progression, fonctionnalités, messages
prisma/seed.ts             charge content/ en base (idempotent)
src/app/                   pages publiques et console (/admin)
src/lib/                   accès au contenu, authentification, actions
tests/                     tests unitaires (node:test)
scripts/                   mot de passe, purge planifiable
```

---

## Démarrer en local

Node ≥ 22.6 (les scripts importent des fichiers `.ts` directement) et un
PostgreSQL accessible.

```bash
npm install
cp .env.example .env          # puis renseigner DATABASE_URL
npm run db:push               # crée les tables (en local ; en production : npm run db:migrate)
ADMIN_PASSWORD='…' npm run db:seed   # charge le contenu et crée l'administrateur
npm run dev
```

Le seed est rejouable : il met à jour par slug sans créer de doublon et sans
écraser ce qui a été modifié depuis la console.

Commandes utiles :

```bash
npm test          # tests unitaires
npm run typecheck # TypeScript
npm run build     # build de production
npm run purge     # supprime messages périmés et sessions expirées
echo -n 'nouveau-mot-de-passe' | npm run passe -- admin@growsavoir.com
```

Le mot de passe n’est jamais passé en argument de commande : la ligne de
commande est visible dans `ps` et reste dans l’historique du shell.

---

## La console d’administration

`/admin`, réservée aux comptes `enseignant` et `administrateur`.

| Section | Ce qu’on y fait | Rôle requis |
|---|---|---|
| Tableau de bord | état du site, dernières modifications | enseignant |
| Leçons | créer, modifier, publier, dépublier ; recherche et filtres | enseignant (suppression : administrateur) |
| Activités | créer et modifier les fiches | enseignant (suppression : administrateur) |
| Matières | nom, slug, icône, teinte, ordre, publication | enseignant (suppression : administrateur) |
| Messages | boîte de réception du formulaire de contact | enseignant |
| Utilisateurs | créer, changer de rôle, désactiver, réinitialiser un mot de passe | administrateur |
| Fonctionnalités | activer ou désactiver une fonctionnalité | administrateur |
| Mon compte | changer son propre mot de passe | enseignant |

**Trois rôles.** `élève` (lecture et progression), `enseignant` (rédige le
contenu), `administrateur` (comptes et fonctionnalités).

**Ajouter du contenu.** Une leçon se saisit dans un formulaire ; le corps et le
quiz sont des champs JSON, pré-remplis d’un squelette valide. Une syntaxe JSON
invalide bloque l’enregistrement au lieu d’écrire un contenu à moitié. Le texte
des sections s’écrit en markdown (titres, listes, tableaux, gras, citations).

**Ajouter une fonctionnalité.** Le code lit `featureEnabled('clé')`, la console
décide de la réponse. Une fonctionnalité se prépare, se livre éteinte, puis
s’allume — sans redéploiement. Les clés livrées : `quiz`, `progress`, `signup`,
`comments`, `activities`.

**Garde-fous.** Impossible de retirer le dernier administrateur actif, de se
rétrograder soi-même ou de supprimer son propre compte. Désactiver un compte
ferme ses sessions immédiatement. Supprimer une matière demande de recopier son
nom, parce que cela emporte ses leçons.

---

## Sécurité

- Mots de passe : `scrypt` (N = 2¹⁵, r = 8, p = 1, sortie 64 octets), sel de 16
  octets propre à chaque compte, comparaison à temps constant. Un e-mail inconnu
  déclenche quand même un hachage complet, sinon le temps de réponse révélerait
  quels comptes existent.
- Sessions en base : une révocation est immédiate et survit à un redémarrage.
  Cookie `httpOnly`, `SameSite=Strict`, `Secure` en production, 7 jours.
- Connexion : 8 tentatives par adresse, puis blocage temporaire (compteur en
  mémoire — utile contre l’essai un par un, pas contre une attaque distribuée).
- Chaque écriture revérifie le rôle de l’appelant. La garde du layout protège
  l’affichage, pas les écritures : une action est une URL comme une autre.
- Markdown : le HTML est échappé avant conversion, donc une balise collée dans
  une leçon s’affiche au lieu de s’exécuter. Les données structurées échappent
  `<`, sinon un titre contenant `</script>` sortirait du bloc.
- En-têtes : CSP, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
  `Permissions-Policy`. La CSP admet `'unsafe-inline'` pour les scripts : c’est
  un choix documenté et mesuré, expliqué en tête de `next.config.mjs`.

---

## Mise en production

### 1. Une base PostgreSQL

N’importe quel fournisseur gérant Postgres : Neon, Supabase, Railway, ou une
base gérée chez un hébergeur européen. Récupérer l’URL de connexion et la mettre
dans `DATABASE_URL`.

### 2. L’application

Le site a besoin d’un serveur Node : il rend des pages à la demande (console,
connexion, contact) en plus des pages générées.

- **Vercel** — support natif de Next.js, rien à configurer au-delà des variables
  d’environnement.
- **Netlify** — l’hébergeur actuel du site ; le runtime Next.js officiel y
  fonctionne. Supprimer l’ancien `netlify.toml` s’il reste.
- **Un serveur à soi** (VPS, Docker) — `npm run build` puis `npm start`
  derrière un reverse proxy.

L’hébergement mutualisé classique (GoDaddy, OVH mutualisé) ne convient pas : il
sert des fichiers PHP ou statiques, pas une application Node.

Variables à définir : `DATABASE_URL`, `SITE_URL`, et les `LEGAL_*` (voir
`.env.example`).

Au premier déploiement :

```bash
npm run db:migrate            # applique prisma/migrations/ à la base
ADMIN_PASSWORD='…' npm run db:seed
```

`db:migrate` (`prisma migrate deploy`) est la commande de production : elle
applique les migrations versionnées du dépôt. `db:push`, plus direct, est
réservé au développement local.

### 3. Après la mise en ligne

1. Renseigner les variables `LEGAL_*` — la page `/mentions-legales` signale
   elle-même ce qui manque.
2. Dans la Search Console, soumettre `https://growsavoir.com/sitemap.xml` et
   demander l’indexation de quelques leçons pour amorcer.
3. Vérifier que les anciennes adresses redirigent : `/lessons/…` vers
   `/lecons/…`, `/catalogue/arabic` vers `/catalogue/arabe`, etc. Les
   redirections sont permanentes (301) et listées dans `next.config.mjs`.
4. Planifier `npm run purge` une fois par jour (les messages de contact ont une
   durée de conservation annoncée dans la politique de confidentialité ; une
   durée annoncée doit être appliquée).

---

## Ce qui reste à faire

- **Vérification Google** : ajouter la balise `google-site-verification` fournie
  par la Search Console (l’ancienne valeur était le texte d’exemple).
- **Illustrations** : certaines leçons pointent vers des images de Wikimedia
  Commons. Les héberger soi-même éviterait qu’un lien meure, et supprimerait une
  requête vers un tiers.
- **Niveau 2 d’arabe** : 12 adresses étaient annoncées dans l’ancien sitemap
  sans contenu derrière. Elles ne sont pas reprises ; les leçons restent à
  écrire, et la console est faite pour ça.
- **Commentaires** et **progression détaillée** : les interrupteurs existent, la
  partie visible reste à écrire.
