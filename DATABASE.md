# 🗄️ Configuration de la Base de Données - GrowSavoir

## Configuration PostgreSQL avec Neon

### 1. Connexion à la Base

Votre base de données est configurée sur Neon avec l'URL :
```
postgresql://neondb_owner:npg_8fT3lxgkjLPh@ep-polished-frog-a2rtxuud-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

### 2. Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# Base de données
DATABASE_URL="postgresql://neondb_owner:npg_8fT3lxgkjLPh@ep-polished-frog-a2rtxuud-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# NextAuth (à configurer plus tard)
NEXTAUTH_SECRET="growsavoir-secret-key-change-in-production"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Synchronisation du Schéma

```bash
# Générer le client Prisma
npm run db:generate

# Pousser le schéma vers la base de données
npm run db:push

# Vérifier la synchronisation
npx prisma db pull
```

### 4. Seeding de la Base

```bash
# Installer tsx si pas déjà fait
npm install -D tsx

# Seeder la base avec des données de test
npm run db:seed
```

### 5. Structure de la Base

#### Tables Principales

**Users** - Utilisateurs et authentification
- `id`, `email`, `name`, `password`, `role`
- `createdAt`, `updatedAt`

**Subjects** - Matières d'enseignement
- `id`, `name`, `description`, `icon`, `color`
- `order`, `isActive`

**Categories** - Catégories de cours
- `id`, `name`, `description`, `subjectId`
- `order`, `isActive`

**Levels** - Niveaux de difficulté
- `id`, `name`, `description`, `order`

**Courses** - Cours disponibles
- `id`, `title`, `description`, `subjectId`
- `categoryId`, `levelId`, `difficulty`

**Lessons** - Leçons individuelles
- `id`, `title`, `description`, `courseId`
- `content`, `duration`, `order`

#### Relations

```
User → Enrollment → Course
Course → Subject + Category + Level
Course → Lessons
User → Progress + Achievement
```

### 6. Gestion des Données

#### Prisma Studio

Interface graphique pour gérer la base :

```bash
npx prisma studio
```

Ouvre une interface web sur `http://localhost:5555`

#### Commandes Utiles

```bash
# Voir le statut de la base
npx prisma db status

# Réinitialiser la base (⚠️ ATTENTION)
npx prisma db push --force-reset

# Générer des migrations
npx prisma migrate dev --name init

# Appliquer les migrations
npx prisma migrate deploy
```

### 7. Données de Test

Le script de seed crée :

- **1 utilisateur admin** : `admin@growsavoir.com` / `admin123`
- **4 matières** : Mathématiques, Sciences, Histoire, Langues
- **3 niveaux** : Débutant, Intermédiaire, Avancé
- **2 catégories** : Algèbre, Géométrie
- **1 cours** : Bases de l'algèbre
- **1 leçon** : Variables et équations

### 8. Sécurité

#### Variables d'Environnement

- Ne jamais commiter `.env.local`
- Utiliser des secrets forts en production
- Limiter l'accès à la base de données

#### Connexions

- SSL obligatoire (`sslmode=require`)
- Binding de canal requis
- Pooler de connexions Neon

### 9. Monitoring

#### Neon Dashboard

- [console.neon.tech](https://console.neon.tech)
- Métriques de performance
- Logs de connexion
- Gestion des branches

#### Prisma

```bash
# Profiler les requêtes
npx prisma studio --experimental-features=query-profiles

# Voir les logs SQL
DEBUG="prisma:query" npm run dev
```

### 10. Sauvegarde

#### Neon

- Sauvegardes automatiques
- Point de restauration
- Branches de développement

#### Local

```bash
# Exporter le schéma
npx prisma db pull --schema=./prisma/backup.prisma

# Exporter les données
npx prisma db seed --schema=./prisma/backup.prisma
```

## 🔧 Dépannage

### Erreur de Connexion

```bash
# Tester la connexion
npx prisma db pull

# Vérifier l'URL
echo $DATABASE_URL
```

### Erreur de Schéma

```bash
# Forcer la synchronisation
npx prisma db push --force-reset

# Régénérer le client
npm run db:generate
```

### Erreur de Seed

```bash
# Vérifier les données
npx prisma studio

# Relancer le seed
npm run db:seed
```

## 📚 Ressources

- [Documentation Prisma](https://www.prisma.io/docs)
- [Documentation Neon](https://neon.tech/docs)
- [Schéma Prisma](prisma/schema.prisma)
- [Script de Seed](prisma/seed.ts)

---

**💡 Conseil** : Testez toujours les modifications de schéma en local avant de les appliquer en production.
