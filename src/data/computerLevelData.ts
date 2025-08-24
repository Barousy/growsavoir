export interface Level {

  id: number;
  name: string;
  description: string;
  lessonCount: number;
  color: string;
  lessons: Array<{
    id: string;
    title: string;
    description: string;
    duration: number;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    isCompleted?: boolean;
    isLocked?: boolean;
    emoji: string;
  }>;
}

export const computerLevels: Level[] = [
  {
    id: 1,
    name: "Niveau 1 - Fondamentaux",
    description: "Bases de l'informatique",
    lessonCount: 6,
    color: "bg-green-500",
    lessons: [
      {
        id: "informatique-ordinateur",
        title: "Qu'est-ce qu'un ordinateur ?",
        description: "Composants de base et fonctionnement",
        duration: 20,
        difficulty: "beginner",
        emoji: "💻",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "informatique-souris-clavier",
        title: "Souris et clavier",
        description: "Utilisation des périphériques d'entrée",
        duration: 18,
        difficulty: "beginner",
        emoji: "🖱️",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "informatique-systeme-exploitation",
        title: "Système d'exploitation",
        description: "Windows, macOS, Linux - bases",
        duration: 25,
        difficulty: "beginner",
        emoji: "🖥️",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "informatique-fichiers-dossiers",
        title: "Fichiers et dossiers",
        description: "Organisation et gestion des données",
        duration: 22,
        difficulty: "beginner",
        emoji: "📁",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "informatique-internet-basique",
        title: "Internet de base",
        description: "Navigation web et recherche",
        duration: 24,
        difficulty: "beginner",
        emoji: "🌐",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "informatique-securite-basique",
        title: "Sécurité informatique",
        description: "Virus, mots de passe, prudence en ligne",
        duration: 26,
        difficulty: "beginner",
        emoji: "🔒",
        isCompleted: false,
        isLocked: false
      }
    ]
  },
  {
    id: 2,
    name: "Niveau 2 - Intermédiaire",
    description: "Applications et logiciels",
    lessonCount: 6,
    color: "bg-blue-500",
    lessons: [
      {
        id: "informatique-traitement-texte",
        title: "Traitement de texte",
        description: "Word, Google Docs - bases",
        duration: 30,
        difficulty: "intermediate",
        emoji: "📝",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-tableur",
        title: "Tableurs",
        description: "Excel, Google Sheets - calculs",
        duration: 32,
        difficulty: "intermediate",
        emoji: "📊",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-presentation",
        title: "Présentations",
        description: "PowerPoint, Google Slides",
        duration: 28,
        difficulty: "intermediate",
        emoji: "📽️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-image",
        title: "Traitement d'image",
        description: "Paint, GIMP - bases du dessin numérique",
        duration: 35,
        difficulty: "intermediate",
        emoji: "🎨",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-email",
        title: "Email et communication",
        description: "Gmail, Outlook, bonnes pratiques",
        duration: 26,
        difficulty: "intermediate",
        emoji: "📧",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-reseaux-sociaux",
        title: "Réseaux sociaux",
        description: "Facebook, Instagram, TikTok - sécurité",
        duration: 24,
        difficulty: "intermediate",
        emoji: "📱",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 3,
    name: "Niveau 3 - Avancé",
    description: "Programmation et création",
    lessonCount: 6,
    color: "bg-yellow-500",
    lessons: [
      {
        id: "informatique-programmation-basique",
        title: "Programmation de base",
        description: "Scratch, logique algorithmique",
        duration: 40,
        difficulty: "advanced",
        emoji: "🧩",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-html-css",
        title: "HTML et CSS",
        description: "Création de pages web simples",
        duration: 45,
        difficulty: "advanced",
        emoji: "🌐",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-python",
        title: "Python pour débutants",
        description: "Premiers programmes en Python",
        duration: 50,
        difficulty: "advanced",
        emoji: "🐍",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-base-donnees",
        title: "Bases de données",
        description: "Concepts et utilisation simple",
        duration: 38,
        difficulty: "advanced",
        emoji: "🗄️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-robotique",
        title: "Robotique éducative",
        description: "Lego Mindstorms, Arduino",
        duration: 42,
        difficulty: "advanced",
        emoji: "🤖",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-intelligence-artificielle",
        title: "Intelligence artificielle",
        description: "Machine learning, chatbots",
        duration: 48,
        difficulty: "advanced",
        emoji: "🧠",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 4,
    name: "Niveau 4 - Expert",
    description: "Spécialisation et projets",
    lessonCount: 6,
    color: "bg-red-500",
    lessons: [
      {
        id: "informatique-developpement-web",
        title: "Développement web avancé",
        description: "JavaScript, frameworks, APIs",
        duration: 55,
        difficulty: "advanced",
        emoji: "💻",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-applications-mobiles",
        title: "Applications mobiles",
        description: "Développement pour Android/iOS",
        duration: 60,
        difficulty: "advanced",
        emoji: "📱",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-jeux-video",
        title: "Développement de jeux",
        description: "Unity, GameMaker, logique de jeu",
        duration: 58,
        difficulty: "advanced",
        emoji: "🎮",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-cybersecurite",
        title: "Cybersécurité",
        description: "Protection, éthique, hacking éthique",
        duration: 52,
        difficulty: "advanced",
        emoji: "🛡️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-cloud",
        title: "Cloud computing",
        description: "AWS, Google Cloud, Azure",
        duration: 50,
        difficulty: "advanced",
        emoji: "☁️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "informatique-projet-final",
        title: "Projet final",
        description: "Création d'une application complète",
        duration: 65,
        difficulty: "advanced",
        emoji: "🚀",
        isCompleted: false,
        isLocked: true
      }
    ]
  }
];

