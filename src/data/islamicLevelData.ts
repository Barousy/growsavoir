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

export const islamicLevels: Level[] = [
  {
    id: 1,
    name: "Niveau 1 - Fondamentaux",
    description: "Bases de la foi et des pratiques",
    lessonCount: 6,
    color: "bg-green-500",
    lessons: [
      {
        id: "islamique-shahada",
        title: "La Shahada",
        description: "Témoignage de foi et sa signification",
        duration: 15,
        difficulty: "beginner",
        emoji: "🕌",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "islamique-prieres-quotidiennes",
        title: "Les 5 prières quotidiennes",
        description: "Horaires et étapes de la prière",
        duration: 20,
        difficulty: "beginner",
        emoji: "🕐",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "islamique-ablutions",
        title: "Les ablutions (Wudu)",
        description: "Purification avant la prière",
        duration: 18,
        difficulty: "beginner",
        emoji: "💧",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "islamique-direction-priere",
        title: "Direction de la prière (Qibla)",
        description: "S'orienter vers la Kaaba",
        duration: 12,
        difficulty: "beginner",
        emoji: "🧭",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "islamique-invocations-basiques",
        title: "Invocations de base",
        description: "Dhikr et supplications simples",
        duration: 16,
        difficulty: "beginner",
        emoji: "🙏",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "islamique-prophete-muhammad",
        title: "Le Prophète Muhammad ﷺ",
        description: "Vie et enseignements de base",
        duration: 22,
        difficulty: "beginner",
        emoji: "📖",
        isCompleted: false,
        isLocked: false
      }
    ]
  },
  {
    id: 2,
    name: "Niveau 2 - Intermédiaire",
    description: "Pratiques avancées et compréhension",
    lessonCount: 6,
    color: "bg-blue-500",
    lessons: [
      {
        id: "islamique-jeune-ramadan",
        title: "Le jeûne du Ramadan",
        description: "Règles et spiritualité du jeûne",
        duration: 25,
        difficulty: "intermediate",
        emoji: "🌙",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-zakat",
        title: "La Zakat (aumône légale)",
        description: "Calcul et distribution",
        duration: 22,
        difficulty: "intermediate",
        emoji: "💰",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-hajj-umra",
        title: "Hajj et Umra",
        description: "Pèlerinage à La Mecque",
        duration: 28,
        difficulty: "intermediate",
        emoji: "🕋",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-ethique-islamique",
        title: "Éthique islamique",
        description: "Vertus et comportements",
        duration: 26,
        difficulty: "intermediate",
        emoji: "✨",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-famille-islam",
        title: "Famille en Islam",
        description: "Relations et responsabilités",
        duration: 24,
        difficulty: "intermediate",
        emoji: "��‍��‍👧‍👦",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-communaute",
        title: "Vie communautaire",
        description: "Mosquée et solidarité",
        duration: 20,
        difficulty: "intermediate",
        emoji: "🕌",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 3,
    name: "Niveau 3 - Avancé",
    description: "Études approfondies et jurisprudence",
    lessonCount: 6,
    color: "bg-yellow-500",
    lessons: [
      {
        id: "islamique-fiqh-basique",
        title: "Fiqh de base",
        description: "Jurisprudence islamique",
        duration: 32,
        difficulty: "advanced",
        emoji: "⚖️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-hadith-sciences",
        title: "Sciences du Hadith",
        description: "Étude des traditions prophétiques",
        duration: 35,
        difficulty: "advanced",
        emoji: "📚",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-tafsir",
        title: "Tafsir (exégèse)",
        description: "Interprétation du Coran",
        duration: 38,
        difficulty: "advanced",
        emoji: "📖",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-theologie",
        title: "Théologie islamique",
        description: "Aqida et croyances",
        duration: 30,
        difficulty: "advanced",
        emoji: "🧠",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-salaf-salih",
        title: "Les pieux prédécesseurs",
        description: "Compréhension des Salaf",
        duration: 33,
        difficulty: "advanced",
        emoji: "👥",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-aqida-sahiha",
        title: "Aqida authentique",
        description: "Croyance correcte selon le Coran et la Sunna",
        duration: 36,
        difficulty: "advanced",
        emoji: "🕌",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 4,
    name: "Niveau 4 - Expert",
    description: "Recherche et transmission",
    lessonCount: 6,
    color: "bg-red-500",
    lessons: [
      {
        id: "islamique-recherche-islamique",
        title: "Recherche islamique",
        description: "Méthodologie et sources authentiques",
        duration: 40,
        difficulty: "advanced",
        emoji: "🔬",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-enseignement",
        title: "Enseignement islamique",
        description: "Transmettre le savoir authentique",
        duration: 38,
        difficulty: "advanced",
        emoji: "👨‍🏫",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-methodologie-salaf",
        title: "Méthodologie des Salaf",
        description: "Comment comprendre l'Islam",
        duration: 35,
        difficulty: "advanced",
        emoji: "📚",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-contemporain",
        title: "Islam contemporain",
        description: "Défis et adaptations",
        duration: 32,
        difficulty: "advanced",
        emoji: "🌍",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-innovation-religieuse",
        title: "Innovation religieuse",
        description: "Ijtihad et renouveau",
        duration: 36,
        difficulty: "advanced",
        emoji: "💡",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "islamique-legacy-spirituel",
        title: "Héritage spirituel",
        description: "Créer un impact durable",
        duration: 42,
        difficulty: "advanced",
        emoji: "🌟",
        isCompleted: false,
        isLocked: true
      }
    ]
  }
];
