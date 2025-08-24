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

export const arabicLevels: Level[] = [
  {
    id: 1,
    name: "Niveau 1 - Fondamentaux",
    description: "Bases de la langue arabe",
    lessonCount: 6,
    color: "bg-green-500",
    lessons: [
      {
        id: "arabic-alphabet",
        title: "الحروف الأبجدية",
        description: "Les 28 lettres de l'alphabet arabe",
        duration: 20,
        difficulty: "beginner",
        emoji: "🔤",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "arabic-vowels",
        title: "الحركات",
        description: "Fatha, kasra, damma, soukoun",
        duration: 18,
        difficulty: "beginner",
        emoji: "🔊",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "arabic-numbers",
        title: "الأرقام",
        description: "Nombres de 1 à 20 en arabe",
        duration: 16,
        difficulty: "beginner",
        emoji: "🔢",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "arabic-greetings",
        title: "التحيات",
        description: "Marhaba, assalamu alaykum, etc.",
        duration: 22,
        difficulty: "beginner",
        emoji: "👋",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "arabic-family",
        title: "أفراد العائلة",
        description: "أب، أم، أخ، أخت",
        duration: 24,
        difficulty: "beginner",
        emoji: "��‍��‍👧‍👦",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "arabic-colors",
        title: "الألوان",
        description: "أحمر، أزرق، أخضر، أصفر",
        duration: 20,
        difficulty: "beginner",
        emoji: "🎨",
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
        id: "arabic-verbs-present",
        title: "الأفعال المضارعة",
        description: "Conjugaison des verbes au présent",
        duration: 30,
        difficulty: "intermediate",
        emoji: "🔄",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-nouns",
        title: "الأسماء",
        description: "Genre et nombre des noms",
        duration: 28,
        difficulty: "intermediate",
        emoji: "📖",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-adjectives",
        title: "الصفات",
        description: "Accord des adjectifs",
        duration: 26,
        difficulty: "intermediate",
        emoji: "✨",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-questions",
        title: "الأسئلة",
        description: "Comment poser des questions",
        duration: 24,
        difficulty: "intermediate",
        emoji: "❓",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-time",
        title: "الوقت",
        description: "Dire l'heure en arabe",
        duration: 32,
        difficulty: "intermediate",
        emoji: "🕐",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-weather",
        title: "الطقس",
        description: "Vocabulaire météorologique",
        duration: 28,
        difficulty: "intermediate",
        emoji: "🌤️",
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
        id: "arabic-verbs-past",
        title: "الأفعال الماضية",
        description: "Conjugaison des verbes au passé",
        duration: 35,
        difficulty: "advanced",
        emoji: "⏰",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-verbs-future",
        title: "الأفعال المستقبلية",
        description: "Conjugaison des verbes au futur",
        duration: 32,
        difficulty: "advanced",
        emoji: "🔮",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-grammar",
        title: "قواعد النحو",
        description: "Grammaire arabe avancée",
        duration: 40,
        difficulty: "advanced",
        emoji: "📚",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-conversation",
        title: "المحادثة",
        description: "Conversations quotidiennes",
        duration: 38,
        difficulty: "advanced",
        emoji: "💬",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-reading",
        title: "القراءة",
        description: "Lecture de textes arabes",
        duration: 42,
        difficulty: "advanced",
        emoji: "📖",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-writing",
        title: "الكتابة",
        description: "Rédaction en arabe",
        duration: 36,
        difficulty: "advanced",
        emoji: "✍️",
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
        id: "arabic-literature",
        title: "الأدب العربي",
        description: "Poésie et prose classiques",
        duration: 45,
        difficulty: "advanced",
        emoji: "📚",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-calligraphy",
        title: "الخط العربي",
        description: "Art de la calligraphie",
        duration: 50,
        difficulty: "advanced",
        emoji: "✒️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-dialects",
        title: "اللهجات العربية",
        description: "Différents dialectes régionaux",
        duration: 48,
        difficulty: "advanced",
        emoji: "🌍",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-media",
        title: "الإعلام العربي",
        description: "Presse, télévision, radio",
        duration: 44,
        difficulty: "advanced",
        emoji: "📺",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-business",
        title: "العربية التجارية",
        description: "Arabe des affaires",
        duration: 46,
        difficulty: "advanced",
        emoji: "💼",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arabic-translation",
        title: "الترجمة",
        description: "Techniques de traduction",
        duration: 52,
        difficulty: "advanced",
        emoji: "🌐",
        isCompleted: false,
        isLocked: true
      }
    ]
  }
];

