# GrowSavoir - Plateforme d'apprentissage moderne

Une plateforme éducative moderne et responsive construite avec Next.js 14, TypeScript, Tailwind CSS et Prisma.

## 🚀 Fonctionnalités

- **Design moderne et responsive** avec Tailwind CSS
- **Navigation intuitive** avec menu déroulant des matières
- **Structure hiérarchique** : Matières → Catégories → Niveaux → Leçons
- **Interface d'authentification** (simulée pour l'instant)
- **Dashboard utilisateur** avec statistiques et progression
- **Interface d'administration** pour la gestion du contenu
- **Optimisé pour le déploiement** sur Netlify

## 🛠️ Technologies utilisées

- **Frontend** : Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Base de données** : PostgreSQL avec Prisma ORM
- **Déploiement** : Netlify
- **Icons** : Lucide React
- **Styling** : Tailwind CSS avec plugins forms et typography

## 📁 Structure du projet

```
src/
├── app/                    # Pages et routes Next.js
│   ├── auth/              # Pages d'authentification
│   ├── courses/           # Catalogue des cours
│   ├── dashboard/         # Tableau de bord utilisateur
│   ├── admin/             # Interface d'administration
│   └── lesson/            # Pages des leçons
├── components/             # Composants réutilisables
│   └── layout/            # Composants de mise en page
├── lib/                    # Utilitaires et configuration
└── types/                  # Définitions TypeScript
```

## 🚀 Déploiement

### Prérequis

- Node.js 18+ 
- Compte Netlify
- Base de données PostgreSQL (Neon recommandé)

### 1. Configuration de l'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
# Base de données
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"

# NextAuth (à configurer plus tard)
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

### 2. Installation des dépendances

```bash
npm install
```

### 3. Configuration de la base de données

```bash
# Générer le client Prisma
npm run db:generate

# Pousser le schéma vers la base de données
npm run db:push

# (Optionnel) Seeder la base avec des données de test
npm run db:seed
```

### 4. Test local

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### 5. Déploiement sur Netlify

1. **Connectez votre repository** GitHub à Netlify
2. **Configurez les variables d'environnement** dans Netlify :
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (URL de production)
3. **Déployez** - Netlify détectera automatiquement Next.js

## 🔐 Authentification

**Note** : L'authentification est actuellement simulée pour permettre le déploiement.

### Connexion de test
- **Email** : `admin@growsavoir.com`
- **Mot de passe** : `admin123`

### Prochaines étapes pour l'authentification complète
1. Réintégrer NextAuth.js v5
2. Configurer les providers d'authentification
3. Implémenter la gestion des sessions
4. Ajouter la protection des routes

## 📊 Structure des données

Le site utilise une structure hiérarchique :

- **Matières** (Mathématiques, Sciences, Histoire, Langues)
- **Catégories** (Algèbre, Géométrie, Physique, etc.)
- **Niveaux** (Débutant, Intermédiaire, Avancé)
- **Leçons** avec contenu structuré

## 🎨 Personnalisation

### Couleurs et thème
Modifiez `tailwind.config.ts` pour personnaliser :
- Couleurs principales
- Typographie
- Animations
- Composants personnalisés

### Contenu
Modifiez `src/lib/data.ts` pour :
- Ajouter de nouvelles matières
- Modifier les catégories
- Personnaliser les leçons

## 🔧 Scripts disponibles

```bash
npm run dev          # Développement local
npm run build        # Build de production
npm run start        # Démarrer en production
npm run lint         # Vérification du code
npm run db:generate  # Générer le client Prisma
npm run db:push      # Synchroniser la base de données
npm run db:seed      # Seeder la base de données
```

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à :
- **Mobile** : Navigation hamburger, mise en page adaptée
- **Tablette** : Grilles adaptatives, espacement optimisé
- **Desktop** : Navigation complète, mise en page étendue

## 🚀 Optimisations

- **Images optimisées** avec Next.js Image
- **CSS purgé** avec Tailwind CSS
- **Code splitting** automatique avec Next.js
- **Prérendu statique** pour les pages publiques

## 🔄 Prochaines étapes

1. **Réintégrer l'authentification** NextAuth.js
2. **Implémenter la gestion des utilisateurs** complète
3. **Ajouter le suivi de progression** des utilisateurs
4. **Créer l'interface d'administration** complète
5. **Ajouter des fonctionnalités interactives** (quiz, exercices)
6. **Implémenter l'internationalisation** (i18n)

## 📞 Support

Pour toute question ou problème :
1. Vérifiez la documentation Next.js
2. Consultez les logs de build Netlify
3. Vérifiez la configuration de la base de données

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

**GrowSavoir** - Transformez votre apprentissage avec une plateforme moderne et intuitive.

