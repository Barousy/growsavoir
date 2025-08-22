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
      name: "Niveau 1 - Découverte",
      description: "Bases du bien-être et de la santé",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "bien-etre-respiration-basique",
          title: "Respiration de base",
          description: "Techniques de respiration simples",
          duration: 8,
          difficulty: "beginner",
          emoji: "🫁",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "bien-etre-hygiene-vie",
          title: "Hygiène de vie",
          description: "Sommeil, alimentation, exercice",
          duration: 12,
          difficulty: "beginner",
          emoji: "🛏️",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "bien-etre-gestion-emotions",
          title: "Gestion des émotions",
          description: "Reconnaître et comprendre ses émotions",
          duration: 15,
          difficulty: "beginner",
          emoji: "😊",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "bien-etre-relations-basiques",
          title: "Relations de base",
          description: "Communication et respect",
          duration: 10,
          difficulty: "beginner",
          emoji: "🤝",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "bien-etre-gratitude",
          title: "Pratique de la gratitude",
          description: "Apprécier les bonnes choses",
          duration: 9,
          difficulty: "beginner",
          emoji: "🙏",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "bien-etre-relaxation-simple",
          title: "Relaxation simple",
          description: "Techniques de détente",
          duration: 11,
          difficulty: "beginner",
          emoji: "😌",
          isCompleted: false,
          isLocked: false
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Développement personnel et équilibre",
      lessonCount: 6,
      color: "bg-blue-500",
      lessons: [
        {
          id: "bien-etre-meditation-basique",
          title: "Méditation de base",
          description: "Premiers pas en méditation",
          duration: 18,
          difficulty: "intermediate",
          emoji: "🧘‍♀️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-gestion-stress",
          title: "Gestion du stress",
          description: "Techniques anti-stress",
          duration: 20,
          difficulty: "intermediate",
          emoji: "😰",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-confiance-soi",
          title: "Confiance en soi",
          description: "Développer l'estime de soi",
          duration: 22,
          difficulty: "intermediate",
          emoji: "💪",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-communication-avancee",
          title: "Communication avancée",
          description: "Écoute active et empathie",
          duration: 19,
          difficulty: "intermediate",
          emoji: "💬",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-gestion-temps",
          title: "Gestion du temps",
          description: "Organisation et priorités",
          duration: 16,
          difficulty: "intermediate",
          emoji: "⏰",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-activites-physiques",
          title: "Activités physiques douces",
          description: "Yoga, tai-chi, marche",
          duration: 21,
          difficulty: "intermediate",
          emoji: "🧘‍♂️",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Maîtrise et développement spirituel",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "bien-etre-meditation-avancee",
          title: "Méditation avancée",
          description: "Techniques de concentration",
          duration: 25,
          difficulty: "advanced",
          emoji: "🧘‍♀️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-mindfulness",
          title: "Pleine conscience",
          description: "Être présent à chaque instant",
          duration: 28,
          difficulty: "advanced",
          emoji: "🌿",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-developpement-spirituel",
          title: "Développement spirituel",
          description: "Recherche de sens et valeurs",
          duration: 30,
          difficulty: "advanced",
          emoji: "✨",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-gestion-conflits",
          title: "Gestion des conflits",
          description: "Résolution pacifique",
          duration: 24,
          difficulty: "advanced",
          emoji: "🕊️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-therapie-cognitive",
          title: "Thérapie cognitive",
          description: "Changer ses pensées",
          duration: 26,
          difficulty: "advanced",
          emoji: "🧠",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-ecologie-interieure",
          title: "Écologie intérieure",
          description: "Harmonie corps-esprit",
          duration: 23,
          difficulty: "advanced",
          emoji: "🌱",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Maîtrise et transmission",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "bien-etre-coaching",
          title: "Techniques de coaching",
          description: "Accompagner les autres",
          duration: 32,
          difficulty: "advanced",
          emoji: "👨‍🏫",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-therapie-alternative",
          title: "Thérapies alternatives",
          description: "Approches holistiques",
          duration: 29,
          difficulty: "advanced",
          emoji: "🔮",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-developpement-communautaire",
          title: "Développement communautaire",
          description: "Bien-être collectif",
          duration: 31,
          difficulty: "advanced",
          emoji: "🏘️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-innovation-bien-etre",
          title: "Innovation en bien-être",
          description: "Nouvelles approches",
          duration: 27,
          difficulty: "advanced",
          emoji: "🚀",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-recherche-interieure",
          title: "Recherche intérieure",
          description: "Voyage vers soi-même",
          duration: 35,
          difficulty: "advanced",
          emoji: "🔍",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "bien-etre-legacy",
          title: "Créer son héritage",
          description: "Impact durable sur le monde",
          duration: 33,
          difficulty: "advanced",
          emoji: "🌟",
          isCompleted: false,
          isLocked: true
        }
      ]
    }
  ];