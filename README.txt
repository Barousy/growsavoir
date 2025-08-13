
# GrowSavoir - Site Éducatif Multilingue (Next.js + TS + Tailwind + NextAuth + Prisma + next-intl)

## 🚀 Déploiement Production - Netlify + Neon PostgreSQL

### 0) Prérequis
- Node 18+
- Compte Netlify
- Base de données Neon PostgreSQL

### 1) Configuration Locale
```bash
npm install
# Créer .env avec vos variables (voir .env.example)
npm run db:push
npm run db:seed
npm run dev
```

### 2) Variables d'Environnement (.env)
```bash
# Base de données Neon PostgreSQL
DATABASE_URL="postgresql://neondb_owner:npg_8fT3lxgkjLPh@ep-polished-frog-a2rtxuud-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# NextAuth (GÉNÉRER UNE CLÉ SÉCURISÉE)
NEXTAUTH_SECRET="votre-clé-secrète-ici-32-caractères-minimum"
NEXTAUTH_URL="https://growsavoir.com"

# Configuration du site
NEXT_PUBLIC_SITE_URL="https://growsavoir.com"
NEXT_PUBLIC_PARENT_PIN="2748"
```

### 3) Déploiement Netlify

#### Option A: Déploiement Automatique (Recommandé)
1. Connectez votre repo GitHub à Netlify
2. Configurez les variables d'environnement dans Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

#### Option B: Déploiement Manuel
```bash
npm run build
# Uploadez le dossier .next vers Netlify
```

### 4) Connexions de Test
- **Admin** : admin@example.com / **admin123**
- **Étudiant** : student@example.com / **student123**

### 5) Fonctionnalités
- ✅ **Authentification** avec rôles (ADMIN, TEACHER, PARENT, STUDENT)
- ✅ **Administration** protégée (/admin) - CRUD cours et leçons
- ✅ **Leçons interactives** avec quiz et suivi des tentatives
- ✅ **Multilingue** : Français, Anglais, Arabe
- ✅ **Base de données** PostgreSQL avec Prisma

### 6) Structure de la Base
- **Courses** : Matières et niveaux
- **Lessons** : Contenu des leçons avec sections
- **Users** : Gestion des utilisateurs et rôles
- **Enrollments** : Inscriptions aux cours
- **Attempts** : Suivi des quiz et scores

### 7) Maintenance
```bash
# Mise à jour de la base
npm run db:push

# Ajout de données de test
npm run db:seed

# Vérification du build
npm run build
```

### 8) Support
- **Build** : `npm run build` ✅
- **Types** : TypeScript configuré ✅
- **Linting** : ESLint configuré ✅
- **i18n** : next-intl configuré ✅
- **Database** : Prisma + PostgreSQL ✅

🎯 **Site prêt pour la production sur growsavoir.com !**
