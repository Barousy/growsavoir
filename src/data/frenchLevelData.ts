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
    name: "Niveau 1 - Débutant",
    description: "Fondamentaux du français",
    lessonCount: 8,
    color: "bg-red-500",
    lessons: [
      {
        id: "francais-alphabet",
        title: "L'alphabet français",
        description: "Les 26 lettres et leur prononciation",
        duration: 15,
        difficulty: "beginner",
        emoji: "🔤",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-voyelles",
        title: "Les voyelles et consonnes",
        description: "A, E, I, O, U et les autres sons",
        duration: 18,
        difficulty: "beginner",
        emoji: "🔊",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-nombres",
        title: "Les nombres 1-100",
        description: "Compter et écrire les nombres",
        duration: 20,
        difficulty: "beginner",
        emoji: "🔢",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-couleurs",
        title: "Les couleurs",
        description: "Apprendre les couleurs de base",
        duration: 16,
        difficulty: "beginner",
        emoji: "🎨",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-famille",
        title: "Les membres de la famille",
        description: "Père, mère, frère, sœur, etc.",
        duration: 22,
        difficulty: "beginner",
        emoji: "👨‍👩‍👧‍👦",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-animaux",
        title: "Les animaux",
        description: "Noms des animaux courants",
        duration: 19,
        difficulty: "beginner",
        emoji: "🐾",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-salutations",
        title: "Les salutations",
        description: "Bonjour, au revoir, comment allez-vous ?",
        duration: 14,
        difficulty: "beginner",
        emoji: "👋",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "francais-jours",
        title: "Les jours de la semaine",
        description: "Lundi, mardi, mercredi, etc.",
        duration: 12,
        difficulty: "beginner",
        emoji: "📅",
        isCompleted: false,
        isLocked: false
      }
    ]
  },
  {
    id: 2,
    name: "Niveau 2 - Intermédiaire",
    description: "Grammaire et vocabulaire français",
    lessonCount: 8,
    color: "bg-yellow-500",
    lessons: [
      {
        id: "francais-articles",
        title: "Les articles définis et indéfinis",
        description: "Le, la, les, un, une, des",
        duration: 25,
        difficulty: "intermediate",
        emoji: "📝",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-verbes",
        title: "Les verbes de base",
        description: "Être, avoir, aller, faire",
        duration: 28,
        difficulty: "intermediate",
        emoji: "🔗",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-adjectifs",
        title: "Les adjectifs",
        description: "Accord des adjectifs avec les noms",
        duration: 24,
        difficulty: "intermediate",
        emoji: "✨",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-questions",
        title: "Les questions",
        description: "Comment poser des questions en français",
        duration: 26,
        difficulty: "intermediate",
        emoji: "❓",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-negation",
        title: "La négation",
        description: "Ne... pas, ne... jamais, ne... plus",
        duration: 22,
        difficulty: "intermediate",
        emoji: "❌",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-temps",
        title: "Les expressions temporelles",
        description: "Hier, aujourd'hui, demain, etc.",
        duration: 20,
        difficulty: "intermediate",
        emoji: "⏰",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-lieu",
        title: "Les prépositions de lieu",
        description: "Sur, sous, dans, à côté de, etc.",
        duration: 23,
        difficulty: "intermediate",
        emoji: "📍",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "francais-possessifs",
        title: "Les pronoms possessifs",
        description: "Mon, ton, son, notre, votre, leur",
        duration: 27,
        difficulty: "intermediate",
        emoji: "💎",
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
    color: "bg-blue-500",
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
    color: "bg-purple-500",
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