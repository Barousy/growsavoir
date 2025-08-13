# 🚀 Guide de Déploiement GrowSavoir sur Netlify

## ✅ Prérequis Complétés
- [x] Code source vérifié et corrigé
- [x] Build Next.js fonctionnel
- [x] Configuration i18n corrigée
- [x] Base de données PostgreSQL configurée
- [x] Authentification NextAuth configurée

## 🔧 Configuration des Variables d'Environnement

### Dans Netlify (Dashboard > Site Settings > Environment Variables)

```bash
# Base de données Neon PostgreSQL
DATABASE_URL=postgresql://neondb_owner:npg_8fT3lxgkjLPh@ep-polished-frog-a2rtxuud-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

# NextAuth (GÉNÉRER UNE NOUVELLE CLÉ)
NEXTAUTH_SECRET=votre-nouvelle-clé-secrète-32-caractères-minimum
NEXTAUTH_URL=https://growsavoir.com

# Configuration du site
NEXT_PUBLIC_SITE_URL=https://growsavoir.com
NEXT_PUBLIC_PARENT_PIN=2748
```

## 📋 Étapes de Déploiement

### 1. Connexion GitHub → Netlify
1. Allez sur [netlify.com](https://netlify.com)
2. Cliquez "New site from Git"
3. Connectez votre repo GitHub
4. Sélectionnez la branche `main`

### 2. Configuration du Build
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18 (automatique via netlify.toml)

### 3. Variables d'Environnement
- Ajoutez toutes les variables ci-dessus dans Netlify
- **IMPORTANT**: Régénérez NEXTAUTH_SECRET pour la production

### 4. Déploiement
- Cliquez "Deploy site"
- Attendez la fin du build (2-3 minutes)
- Vérifiez que le site fonctionne

## 🗄️ Configuration de la Base de Données

### 1. Migration Prisma
```bash
# Après le premier déploiement
npx prisma db push --schema=./prisma/schema.prisma
```

### 2. Données de Test
```bash
# Ajouter des utilisateurs de test
npm run db:seed
```

## 🔐 Sécurité Production

### 1. NEXTAUTH_SECRET
```bash
# Générer une clé sécurisée
openssl rand -base64 32
# ou
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 2. Variables Sensibles
- ✅ DATABASE_URL (déjà configurée)
- ✅ NEXTAUTH_SECRET (à générer)
- ✅ NEXTAUTH_URL (déjà configurée)

## 🧪 Test Post-Déploiement

### 1. Fonctionnalités à Vérifier
- [ ] Page d'accueil charge
- [ ] Navigation fonctionne
- [ ] Authentification admin (admin@example.com / admin123)
- [ ] Création de cours/leçons
- [ ] Multilingue (FR/EN/AR)

### 2. URLs de Test
- **Accueil**: https://growsavoir.com
- **Admin**: https://growsavoir.com/admin
- **Cours**: https://growsavoir.com/courses
- **Connexion**: https://growsavoir.com/auth/signin

## 🚨 Résolution de Problèmes

### Build Failed
```bash
# Vérifier localement
npm run build
npm run lint
```

### Base de Données
```bash
# Vérifier la connexion
npx prisma db push
npx prisma studio
```

### Authentification
- Vérifier NEXTAUTH_SECRET
- Vérifier NEXTAUTH_URL
- Vérifier DATABASE_URL

## 📞 Support

### Logs Netlify
- Dashboard > Site > Functions > Functions log
- Dashboard > Site > Deploys > [Latest] > Deploy log

### Commandes Utiles
```bash
# Vérification locale
npm run dev
npm run build
npm run lint

# Base de données
npm run db:push
npm run db:seed
```

## 🎯 Statut Final
- ✅ **Code**: Prêt pour la production
- ✅ **Build**: Fonctionnel
- ✅ **Base de données**: PostgreSQL configurée
- ✅ **Authentification**: NextAuth configuré
- ✅ **i18n**: Multilingue fonctionnel
- ✅ **Déploiement**: Configuration Netlify complète

**🚀 Votre site GrowSavoir est prêt à être déployé sur growsavoir.com !**
