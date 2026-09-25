# Mettre GrowSavoir en ligne chez o2switch

Cette procédure vise les offres mutualisées d'o2switch (Grow, Cloud, Pro —
cPanel et Phusion Passenger). Elle suppose que le nom de domaine est déjà
rattaché au compte.

Les éléments vérifiés dans la documentation d'o2switch au moment d'écrire ces
lignes :

- l'outil cPanel **Setup Node.js App** déploie une application backend Node
  derrière **Phusion Passenger**, avec les versions 6 à **24** de Node ;
- les bases **MariaDB/MySQL** sont illimitées sur le compte ;
- PostgreSQL existe, mais en **9.6**, et o2switch annonce qu'ils cesseront
  probablement de le proposer. C'est la raison d'être de cette branche : elle
  fait tourner le site sur MariaDB.

---

## 1. La base de données

Dans cPanel, **Bases de données MySQL** :

1. créer une base, par exemple `growsavoir` — cPanel la préfixe par
   l'identifiant du compte, ce qui donne `abcd1234_growsavoir` ;
2. créer un utilisateur et lui donner **tous les privilèges** sur cette base ;
3. noter le nom complet de la base, l'utilisateur complet et le mot de passe.

L'URL de connexion prend cette forme :

```
mysql://abcd1234_user:motdepasse@localhost:3306/abcd1234_growsavoir?connection_limit=5
```

`connection_limit=5` n'est pas décoratif : par défaut Prisma ouvre
(processeurs × 2 + 1) connexions, ce qui est trop pour un mutualisé.

---

## 2. Déposer le code

En SSH (ou via le gestionnaire de fichiers, mais SSH est plus simple) :

```bash
cd ~
git clone -b claude/refonte-growsavoir-mysql https://github.com/Barousy/growsavoir.git growsavoir
```

Le dossier `~/growsavoir` servira d'**Application root**. Il est volontairement
en dehors de `public_html` : Passenger sert l'application, les sources n'ont pas
à être exposées.

---

## 3. Créer l'application Node

cPanel → **Setup Node.js App** → *Create Application* :

| Champ | Valeur |
|---|---|
| Node.js version | 22 ou 24 |
| Application mode | Production |
| Application root | `growsavoir` |
| Application URL | le domaine (sous-dossier vide) |
| Application startup file | `server.js` |

`server.js` est fourni dans le dépôt : Passenger charge un fichier de démarrage
au lieu de lancer `next start`, et intercepte l'appel à `listen()`.

Ajouter ensuite les **variables d'environnement** dans le même écran :

| Variable | Valeur |
|---|---|
| `DATABASE_URL` | l'URL MySQL de l'étape 1 |
| `SITE_URL` | `https://growsavoir.com` (sans barre finale) |
| `LEGAL_PUBLISHER`, `LEGAL_STATUS`, `LEGAL_ADDRESS`, `LEGAL_EMAIL`, `LEGAL_EDITOR` | vos informations |
| `LEGAL_HOST` | `o2switch` |
| `LEGAL_HOST_ADDRESS` | `Chemin des Pardiaux, 63000 Clermont-Ferrand` (adresse figurant dans leurs CGV — à revérifier le jour venu) |

Ne pas créer `ADMIN_PASSWORD` ici : il ne sert qu'une fois, à la ligne de
commande de l'étape suivante.

---

## 4. Installer, migrer, construire

cPanel affiche, dans l'écran de l'application, une commande `source …/activate`.
**La copier depuis cPanel** — le chemin contient votre identifiant et la version
de Node :

```bash
source /home/abcd1234/nodevenv/growsavoir/22/bin/activate && cd /home/abcd1234/growsavoir

npm install                       # installe les dépendances et génère le client Prisma
npm run db:migrate                # crée les tables (prisma migrate deploy)
ADMIN_PASSWORD='un-mot-de-passe-solide' npm run db:seed
npm run build                     # construit les 143 pages de contenu
```

Sans le `source`, les commandes `node` et `npm` ne sont pas celles de
l'environnement de l'application.

Le `npm install` doit être lancé **sur le serveur** : Prisma y télécharge le
moteur correspondant à la machine. Copier un `node_modules` construit ailleurs
est la façon la plus sûre de rendre l'application muette au démarrage.

Puis, dans cPanel, cliquer sur **Restart**.

---

## 5. Vérifier

```bash
curl -I https://growsavoir.com/
curl -s https://growsavoir.com/lecons/arabe-n1-fondamentaux-01 | grep -c '<h1'
curl -s https://growsavoir.com/sitemap.xml | grep -c '<loc>'    # doit afficher 193
```

Puis à la main :

1. `/admin` demande la connexion, et le compte créé à l'étape 4 y entre ;
2. le formulaire de contact dépose bien un message dans la console ;
3. une leçon modifiée depuis la console change sur le site public.

---

## 6. Après la mise en ligne

- **Search Console** : soumettre `https://growsavoir.com/sitemap.xml` et
  remplacer la balise `google-site-verification` (l'ancienne valeur du site
  était le texte d'exemple).
- **Purge quotidienne** : dans cPanel → *Tâches Cron*, une fois par jour :

  ```
  source /home/abcd1234/nodevenv/growsavoir/22/bin/activate && cd /home/abcd1234/growsavoir && npm run purge
  ```

  Elle supprime les messages de contact périmés et les sessions expirées. La
  durée de conservation est annoncée dans la politique de confidentialité :
  l'annoncer sans l'appliquer serait une promesse fausse.
- **Mises à jour du site** : `git pull`, puis `npm install`, `npm run db:migrate`,
  `npm run build`, puis **Restart** dans cPanel.

---

## Ce qu'il faut savoir de ce type d'hébergement

- **Passenger endort l'application** quand personne ne vient. La première visite
  après une accalmie paie le réveil (quelques secondes). Les visites suivantes
  sont normales. C'est le compromis du mutualisé ; le site s'y prête bien, car
  143 pages sont du HTML déjà construit.
- **Pas de CDN** devant le site. Les pages restent légères, mais un visiteur
  lointain paie la distance jusqu'à Clermont-Ferrand.
- **La régénération périodique** (`revalidate`) fonctionne, mais seulement tant
  que le processus vit. Après une longue inactivité, la première visite
  reconstruit la page — ce qui revient au même résultat, en un peu plus lent.
- **Le build se fait sur le serveur.** Il consomme de la mémoire ; si `npm run
  build` est tué, relancer une fois : le cache Next repart où il en était.
