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
      name: "Niveau 1 - Découverte",
      description: "Bases de l'informatique et outils",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "informatique-ordinateur-bases",
          title: "Les bases de l'ordinateur",
          description: "Composants et fonctionnement",
          duration: 12,
          difficulty: "beginner",
          emoji: "💻",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "informatique-souris-clavier",
          title: "Souris et clavier",
          description: "Utiliser les périphériques",
          duration: 10,
          difficulty: "beginner",
          emoji: "🖱️",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "informatique-systeme-exploitation",
          title: "Système d'exploitation",
          description: "Windows, Mac, Linux",
          duration: 15,
          difficulty: "beginner",
          emoji: "🖥️",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "informatique-fichiers-dossiers",
          title: "Fichiers et dossiers",
          description: "Organiser ses documents",
          duration: 11,
          difficulty: "beginner",
          emoji: "📁",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "informatique-internet-bases",
          title: "Les bases d'Internet",
          description: "Naviguer sur le web",
          duration: 13,
          difficulty: "beginner",
          emoji: "🌐",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "informatique-securite-basique",
          title: "Sécurité de base",
          description: "Protéger son ordinateur",
          duration: 9,
          difficulty: "beginner",
          emoji: "🔒",
          isCompleted: false,
          isLocked: false
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Applications",
      description: "Logiciels et outils numériques",
      lessonCount: 6,
      color: "bg-blue-500",
      lessons: [
        {
          id: "informatique-traitement-texte",
          title: "Traitement de texte",
          description: "Word, Google Docs",
          duration: 18,
          difficulty: "intermediate",
          emoji: "📝",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-tableurs",
          title: "Tableurs et calculs",
          description: "Excel, Google Sheets",
          duration: 20,
          difficulty: "intermediate",
          emoji: "📊",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-presentations",
          title: "Présentations",
          description: "PowerPoint, Google Slides",
          duration: 16,
          difficulty: "intermediate",
          emoji: "📽️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-image-numerique",
          title: "Image numérique",
          description: "Photos et retouche",
          duration: 22,
          difficulty: "intermediate",
          emoji: "🖼️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-email-communication",
          title: "Email et communication",
          description: "Gmail, Outlook",
          duration: 14,
          difficulty: "intermediate",
          emoji: "📧",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-reseaux-sociaux",
          title: "Réseaux sociaux",
          description: "Utilisation responsable",
          duration: 12,
          difficulty: "intermediate",
          emoji: "📱",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Programmation",
      description: "Logique et langages de programmation",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "informatique-logique-programmation",
          title: "Logique de programmation",
          description: "Algorithmes et résolution de problèmes",
          duration: 25,
          difficulty: "advanced",
          emoji: "🧠",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-scratch",
          title: "Programmation avec Scratch",
          description: "Créer des jeux et animations",
          duration: 28,
          difficulty: "advanced",
          emoji: "🐱",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-python-bases",
          title: "Python - Bases",
          description: "Premiers pas en programmation",
          duration: 30,
          difficulty: "advanced",
          emoji: "🐍",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-html-css",
          title: "HTML et CSS",
          description: "Créer des pages web",
          duration: 26,
          difficulty: "advanced",
          emoji: "🌐",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-bases-donnees",
          title: "Bases de données",
          description: "Organiser l'information",
          duration: 24,
          difficulty: "advanced",
          emoji: "🗄️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-cybersecurite",
          title: "Cybersécurité",
          description: "Protection en ligne",
          duration: 20,
          difficulty: "advanced",
          emoji: "🛡️",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Innovation",
      description: "Technologies avancées et projets",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "informatique-intelligence-artificielle",
          title: "Intelligence artificielle",
          description: "Machine learning et IA",
          duration: 32,
          difficulty: "advanced",
          emoji: "🤖",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-realite-virtuelle",
          title: "Réalité virtuelle",
          description: "VR et AR",
          duration: 28,
          difficulty: "advanced",
          emoji: "🥽",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-iot",
          title: "Internet des objets",
          description: "Objets connectés",
          duration: 26,
          difficulty: "advanced",
          emoji: "🔌",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-blockchain",
          title: "Blockchain",
          description: "Technologie décentralisée",
          duration: 30,
          difficulty: "advanced",
          emoji: "⛓️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-projet-final",
          title: "Projet final",
          description: "Créer une application complète",
          duration: 40,
          difficulty: "advanced",
          emoji: "🚀",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "informatique-futur-tech",
          title: "Technologies du futur",
          description: "Quantic, biotech, nanotech",
          duration: 25,
          difficulty: "advanced",
          emoji: "🔮",
          isCompleted: false,
          isLocked: true
        }
      ]
    }
  ];