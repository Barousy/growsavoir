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

export const wellnessLevels: Level[] = [
  {
    id: 1,
    name: "Niveau 1 - Fondamentaux",
    description: "Bases du bien-être",
    lessonCount: 6,
    color: "bg-green-500",
    lessons: [
      {
        id: "bien-etre-respiration",
        title: "Respiration consciente",
        description: "Techniques de base",
        duration: 15,
        difficulty: "beginner",
        emoji: "🫁",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "bien-etre-hygiene-vie",
        title: "Hygiène de vie",
        description: "Sommeil, alimentation, exercice",
        duration: 20,
        difficulty: "beginner",
        emoji: "💤",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "bien-etre-emotions",
        title: "Reconnaître les émotions",
        description: "Identifier ses sentiments",
        duration: 18,
        difficulty: "beginner",
        emoji: "😊",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "bien-etre-relaxation",
        title: "Techniques de relaxation",
        description: "Détente musculaire et mentale",
        duration: 22,
        difficulty: "beginner",
        emoji: "🧘",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "bien-etre-concentration",
        title: "Améliorer la concentration",
        description: "Exercices d'attention",
        duration: 25,
        difficulty: "beginner",
        emoji: "🎯",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "bien-etre-confiance-soi",
        title: "Confiance en soi",
        description: "Développer l'estime de soi",
        duration: 28,
        difficulty: "beginner",
        emoji: "💪",
        isCompleted: false,
        isLocked: false
      }
    ]
  },
  {
    id: 2,
    name: "Niveau 2 - Intermédiaire",
    description: "Pratiques avancées",
    lessonCount: 6,
    color: "bg-blue-500",
    lessons: [
      {
        id: "bien-etre-meditation",
        title: "Méditation guidée",
        description: "Pratiques de pleine conscience",
        duration: 30,
        difficulty: "intermediate",
        emoji: "🧘‍♀️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-gestion-stress",
        title: "Gestion du stress",
        description: "Techniques anti-stress",
        duration: 32,
        difficulty: "intermediate",
        emoji: "😌",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-communication",
        title: "Communication bienveillante",
        description: "Parler et écouter avec cœur",
        duration: 35,
        difficulty: "intermediate",
        emoji: "💬",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-gratitude",
        title: "Pratique de la gratitude",
        description: "Reconnaître les bonnes choses",
        duration: 28,
        difficulty: "intermediate",
        emoji: "🙏",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-creativite",
        title: "Développer la créativité",
        description: "Expression artistique",
        duration: 40,
        difficulty: "intermediate",
        emoji: "🎨",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-resilience",
        title: "Bâtir la résilience",
        description: "Surmonter les difficultés",
        duration: 38,
        difficulty: "intermediate",
        emoji: "🛡️",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 3,
    name: "Niveau 3 - Avancé",
    description: "Maîtrise et approfondissement",
    lessonCount: 6,
    color: "bg-yellow-500",
    lessons: [
      {
        id: "bien-etre-mindfulness",
        title: "Mindfulness avancé",
        description: "Pratiques approfondies",
        duration: 45,
        difficulty: "advanced",
        emoji: "🧠",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-therapie",
        title: "Techniques thérapeutiques",
        description: "Méthodes de guérison",
        duration: 50,
        difficulty: "advanced",
        emoji: "💆",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-spiritualite",
        title: "Développement spirituel",
        description: "Connexion avec soi-même",
        duration: 55,
        difficulty: "advanced",
        emoji: "✨",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-relations",
        title: "Relations saines",
        description: "Construire des liens authentiques",
        duration: 48,
        difficulty: "advanced",
        emoji: "🤝",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-transformation",
        title: "Transformation personnelle",
        description: "Évolution et croissance",
        duration: 52,
        difficulty: "advanced",
        emoji: "🦋",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-equilibre",
        title: "Équilibre de vie",
        description: "Harmonie entre tous les aspects",
        duration: 50,
        difficulty: "advanced",
        emoji: "⚖️",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 4,
    name: "Niveau 4 - Expert",
    description: "Transmission et leadership",
    lessonCount: 6,
    color: "bg-red-500",
    lessons: [
      {
        id: "bien-etre-enseignement",
        title: "Enseigner le bien-être",
        description: "Transmettre ses connaissances",
        duration: 60,
        difficulty: "advanced",
        emoji: "👨‍🏫",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-coaching",
        title: "Coaching et accompagnement",
        description: "Guider les autres",
        duration: 65,
        difficulty: "advanced",
        emoji: "🎯",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-recherche",
        title: "Recherche en bien-être",
        description: "Études et découvertes",
        duration: 70,
        difficulty: "advanced",
        emoji: "🔬",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-innovation",
        title: "Innovation en bien-être",
        description: "Nouvelles approches",
        duration: 58,
        difficulty: "advanced",
        emoji: "💡",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-communaute",
        title: "Bien-être communautaire",
        description: "Impact collectif",
        duration: 62,
        difficulty: "advanced",
        emoji: "🌍",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "bien-etre-legacy",
        title: "Héritage de bien-être",
        description: "Créer un impact durable",
        duration: 68,
        difficulty: "advanced",
        emoji: "🌟",
        isCompleted: false,
        isLocked: true
      }
    ]
  }
];
