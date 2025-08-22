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

export const frenchLevels: Level[] = [
  {
    id: 1,
    name: "Niveau 1 - Fondamentaux",
    description: "Bases de la langue française",
    lessonCount: 6,
    color: "bg-green-500",
    lessons: [
      {
        id: "francais-alphabet",
        title: "L'alphabet français",
        description: "Lettres et sons de base",
        duration: 15,
        difficulty: "beginner",
        emoji: "🔤",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-voyelles",
        title: "Les voyelles",
        description: "A, E, I, O, U et leurs sons",
        duration: 18,
        difficulty: "beginner",
        emoji: "🔊",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-consonnes",
        title: "Les consonnes",
        description: "B, C, D, F, G et autres",
        duration: 20,
        difficulty: "beginner",
        emoji: "🔤",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-mots-simples",
        title: "Mots simples",
        description: "Lecture de mots basiques",
        duration: 22,
        difficulty: "beginner",
        emoji: "📖",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-phrases-courtes",
        title: "Phrases courtes",
        description: "Construction de phrases simples",
        duration: 25,
        difficulty: "beginner",
        emoji: "💬",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-vocabulaire-basique",
        title: "Vocabulaire de base",
        description: "Mots du quotidien",
        duration: 28,
        difficulty: "beginner",
        emoji: "📚",
        isCompleted: false,
        isLocked: false
      }
    ]
  },
  {
    id: 2,
    name: "Niveau 2 - Intermédiaire",
    description: "Grammaire et conjugaison",
    lessonCount: 6,
    color: "bg-blue-500",
    lessons: [
      {
        id: "francais-articles",
        title: "Les articles",
        description: "Le, la, les, un, une, des",
        duration: 25,
        difficulty: "intermediate",
        emoji: "📝",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-noms",
        title: "Les noms",
        description: "Genre et nombre",
        duration: 28,
        difficulty: "intermediate",
        emoji: "📖",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-adjectifs",
        title: "Les adjectifs",
        description: "Accord et placement",
        duration: 30,
        difficulty: "intermediate",
        emoji: "✨",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-verbes-present",
        title: "Verbes au présent",
        description: "Conjugaison des verbes courants",
        duration: 35,
        difficulty: "intermediate",
        emoji: "🔄",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-pronoms",
        title: "Les pronoms",
        description: "Personnels, possessifs, démonstratifs",
        duration: 32,
        difficulty: "intermediate",
        emoji: "👤",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-questions",
        title: "Poser des questions",
        description: "Interrogation et intonation",
        duration: 28,
        difficulty: "intermediate",
        emoji: "❓",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 3,
    name: "Niveau 3 - Avancé",
    description: "Grammaire avancée et expression",
    lessonCount: 6,
    color: "bg-yellow-500",
    lessons: [
      {
        id: "francais-temps-verbaux",
        title: "Temps verbaux",
        description: "Passé, futur, conditionnel",
        duration: 40,
        difficulty: "advanced",
        emoji: "⏰",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-subjonctif",
        title: "Le subjonctif",
        description: "Formes et emplois",
        duration: 45,
        difficulty: "advanced",
        emoji: "🧠",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-connecteurs",
        title: "Connecteurs logiques",
        description: "Mais, donc, car, cependant",
        duration: 35,
        difficulty: "advanced",
        emoji: "🔗",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-expression-ecrite",
        title: "Expression écrite",
        description: "Rédaction et composition",
        duration: 50,
        difficulty: "advanced",
        emoji: "✍️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-litterature",
        title: "Littérature française",
        description: "Auteurs et œuvres classiques",
        duration: 48,
        difficulty: "advanced",
        emoji: "📚",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-culture",
        title: "Culture française",
        description: "Traditions et coutumes",
        duration: 42,
        difficulty: "advanced",
        emoji: "🇫🇷",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 4,
    name: "Niveau 4 - Expert",
    description: "Maîtrise et perfectionnement",
    lessonCount: 6,
    color: "bg-red-500",
    lessons: [
      {
        id: "francais-stylistique",
        title: "Stylistique",
        description: "Figures de style et rhétorique",
        duration: 55,
        difficulty: "advanced",
        emoji: "🎨",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-linguistique",
        title: "Linguistique",
        description: "Étude scientifique de la langue",
        duration: 60,
        difficulty: "advanced",
        emoji: "🔬",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-traduction",
        title: "Traduction",
        description: "Techniques et méthodologie",
        duration: 52,
        difficulty: "advanced",
        emoji: "🌐",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-ecriture-creative",
        title: "Écriture créative",
        description: "Poésie, nouvelles, théâtre",
        duration: 58,
        difficulty: "advanced",
        emoji: "✍️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-debats",
        title: "Débats et argumentation",
        description: "Art de convaincre",
        duration: 50,
        difficulty: "advanced",
        emoji: "💭",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-perfectionnement",
        title: "Perfectionnement",
        description: "Affiner sa maîtrise",
        duration: 65,
        difficulty: "advanced",
        emoji: "🌟",
        isCompleted: false,
        isLocked: true
      }
    ]
  }
];