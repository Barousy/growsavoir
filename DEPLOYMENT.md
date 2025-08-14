# 🚀 Guide de Déploiement Rapide - GrowSavoir

## Déploiement sur Netlify en 5 minutes

### 1. Préparation du Repository

Assurez-vous que votre code est commité et poussé sur GitHub :

```bash
git add .
git commit -m "Site prêt pour le déploiement"
git push origin main
```

### 2. Connexion à Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "New site from Git"

### 3. Configuration du Repository

1. **Choisissez GitHub** comme provider
2. **Sélectionnez votre repository** `growsavoir`
3. **Cliquez sur "Deploy site"**

Netlify détectera automatiquement Next.js et utilisera la configuration de `netlify.toml`.

### 4. Configuration des Variables d'Environnement

Dans les paramètres de votre site Netlify :

1. Allez dans **Site settings** → **Environment variables**
2. Ajoutez les variables suivantes :

```env
DATABASE_URL=postgresql://neondb_owner:npg_8fT3lxgkjLPh@ep-polished-frog-a2rtxuud-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
NEXTAUTH_SECRET=growsavoir-secret-key-change-in-production
NEXTAUTH_URL=https://growsavoir.com
```

### 5. Configuration de la Base de Données

1. **Connectez-vous à votre base Neon** :
   ```bash
   # Dans votre terminal local
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```

2. **Ou utilisez Prisma Studio** :
   ```bash
   npx prisma studio
   ```

### 6. Déploiement Automatique

- Chaque push sur `main` déclenchera un nouveau déploiement
- Les déploiements prennent environ 2-3 minutes
- Vous recevrez une notification par email

### 7. Configuration du Domaine

1. Dans **Site settings** → **Domain management**
2. Cliquez sur **"Add custom domain"**
3. Entrez `growsavoir.com`
4. Suivez les instructions DNS

### 8. Vérification du Déploiement

✅ **Site accessible** : `https://growsavoir.com`
✅ **Navigation fonctionnelle** : Menu, pages, liens
✅ **Responsive design** : Test sur mobile et desktop
✅ **Authentification** : Pages de connexion/inscription

## 🔧 Dépannage Rapide

### Erreur de Build
- Vérifiez les logs dans Netlify
- Testez localement avec `npm run build`

### Erreur de Base de Données
- Vérifiez `DATABASE_URL` dans Netlify
- Testez la connexion locale

### Pages 404
- Vérifiez `netlify.toml` et `_redirects`
- Redéployez après modification

## 📱 Test du Site

### Pages à Tester
- **Accueil** (`/`) - Landing page
- **Cours** (`/courses`) - Catalogue
- **Matières** (`/subjects`) - Vue d'ensemble
- **Connexion** (`/auth/signin`) - Authentification
- **Inscription** (`/auth/signup`) - Création de compte
- **Dashboard** (`/dashboard`) - Espace utilisateur

### Fonctionnalités à Vérifier
- ✅ Navigation responsive
- ✅ Menu déroulant des matières
- ✅ Liens fonctionnels
- ✅ Design moderne
- ✅ Performance optimale

## 🎯 Prochaines Étapes

1. **Réintégrer NextAuth.js** pour l'authentification complète
2. **Configurer la base de données** avec des données réelles
3. **Ajouter du contenu** éducatif
4. **Implémenter les fonctionnalités** avancées

## 📞 Support

- **Documentation Netlify** : [docs.netlify.com](https://docs.netlify.com)
- **Documentation Next.js** : [nextjs.org/docs](https://nextjs.org/docs)
- **Logs de déploiement** : Disponibles dans Netlify

---

**🎉 Félicitations ! Votre site GrowSavoir est maintenant en ligne !**
