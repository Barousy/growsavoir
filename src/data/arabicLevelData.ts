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
      name: "Niveau 1 - Débutant",
      description: "Débutant",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
            id: "arabe-alphabet",  // ← Changé de "alphabet" à "arabe-alphabet"
            title: "L'alphabet arabe",
            description: "Apprenez les 28 lettres de l'alphabet arabe",
            duration: 8,
            difficulty: "beginner",
            emoji: "🔤",
            isCompleted: false,
            isLocked: false
          },
          {
            id: "arabe-greetings",  // ← Changé de "greetings" à "arabe-greetings"
            title: "Salutations de base",
            description: "Assalamu alaykum, Marhaba, Ahlan wa sahlan",
            duration: 10,
            difficulty: "beginner",
            emoji: "👋",
            isCompleted: false,
            isLocked: false
          },
          {
            id: "arabe-numbers",  // ← Changé de "numbers" à "arabe-numbers"
            title: "Compter de 1 à 10",
            description: "Wahid, ithnan, thalatha... jusqu'à ashara",
            duration: 7,
            difficulty: "beginner",
            emoji: "🔢",
            isCompleted: false,
            isLocked: false
          },
          {
            id: "arabe-colors",  // ← Changé de "colors" à "arabe-colors"
            title: "Les couleurs",
            description: "Ahmar, azraq, akhdar, asfar et plus",
            duration: 6,
            difficulty: "beginner",
            emoji: "🎨",
            isCompleted: false,
            isLocked: false
          },
          {
            id: "arabe-family",  // ← Changé de "family" à "arabe-family"
            title: "La famille",
            description: "Ab, umm, akh, ukht et autres membres",
            duration: 9,
            difficulty: "beginner",
            emoji: "‍‍👧‍👦",
            isCompleted: false,
            isLocked: false
          },
          {
            id: "arabe-animals",  // ← Changé de "animals" à "arabe-animals"
            title: "Les animaux",
            description: "Qalb, qitt, tayr, samak et autres animaux",
            duration: 8,
            difficulty: "beginner",
            emoji: "🐾",
            isCompleted: false,
            isLocked: false
          }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Intermédiaire",
      lessonCount: 8,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "grammar-basic",
          title: "Grammaire de base",
          description: "Articles, pluriels, verbes simples",
          duration: 15,
          difficulty: "intermediate",
          emoji: "📚",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "conversation",
          title: "Conversations simples",
          description: "Dialogues de la vie quotidienne",
          duration: 12,
          difficulty: "intermediate",
          emoji: "💬",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "stories",
          title: "Histoires courtes",
          description: "Contes et récits adaptés",
          duration: 18,
          difficulty: "intermediate",
          emoji: "📖",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "songs",
          title: "Chansons en arabe",
          description: "Comptines et mélodies",
          duration: 14,
          difficulty: "intermediate",
          emoji: "🎵",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "games",
          title: "Jeux de mots",
          description: "Devinettes et énigmes",
          duration: 10,
          difficulty: "intermediate",
          emoji: "🎮",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "culture",
          title: "Culture arabe",
          description: "Traditions et coutumes",
          duration: 16,
          difficulty: "intermediate",
          emoji: "🌍",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "writing",
          title: "Écriture simple",
          description: "Phrases et petits textes",
          duration: 20,
          difficulty: "intermediate",
          emoji: "✍️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "listening",
          title: "Compréhension orale",
          description: "Écouter et comprendre",
          duration: 15,
          difficulty: "intermediate",
          emoji: "👂",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Avancé",
      lessonCount: 10,
      color: "bg-orange-500",
      lessons: [
        {
          id: "advanced-grammar",
          title: "Grammaire avancée",
          description: "Temps composés, conditionnels",
          duration: 25,
          difficulty: "advanced",
          emoji: "🎓",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "literature",
          title: "Littérature arabe",
          description: "Extraits d'œuvres classiques",
          duration: 30,
          difficulty: "advanced",
          emoji: "📚",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "debate",
          title: "Débats et discussions",
          description: "Exprimer son opinion",
          duration: 22,
          difficulty: "advanced",
          emoji: "🎤",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "creative-writing",
          title: "Écriture créative",
          description: "Histoires et poèmes",
          duration: 35,
          difficulty: "advanced",
          emoji: "✒️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "idioms",
          title: "Expressions idiomatiques",
          description: "Proverbes et métaphores",
          duration: 18,
          difficulty: "advanced",
          emoji: "💡",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "academic-arabic",
          title: "Arabe académique",
          description: "Formalités et registre soutenu",
          duration: 28,
          difficulty: "advanced",
          emoji: "🎯",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "media",
          title: "Médias et actualités",
          description: "Comprendre les informations",
          duration: 24,
          difficulty: "advanced",
          emoji: "📰",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "technology",
          title: "Technologie et innovation",
          description: "Vocabulaire du numérique",
          duration: 20,
          difficulty: "advanced",
          emoji: "💻",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "travel",
          title: "Voyage et tourisme",
          description: "Arabe pour voyager",
          duration: 22,
          difficulty: "advanced",
          emoji: "✈️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science",
          title: "Sciences et découverte",
          description: "Termes scientifiques",
          duration: 26,
          difficulty: "advanced",
          emoji: "🔬",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Expert",
      lessonCount: 12,
      color: "bg-red-500",
      lessons: [
        {
          id: "classical-arabic",
          title: "Arabe classique",
          description: "Langue du Coran et de la littérature",
          duration: 40,
          difficulty: "advanced",
          emoji: "📖",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "poetry",
          title: "Poésie arabe",
          description: "Vers et rimes traditionnels",
          duration: 35,
          difficulty: "advanced",
          emoji: "📝",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "calligraphy",
          title: "Calligraphie arabe",
          description: "Art de l'écriture arabe",
          duration: 30,
          difficulty: "advanced",
          emoji: "✒️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "dialects",
          title: "Dialectes arabes",
          description: "Variations régionales",
          duration: 32,
          difficulty: "advanced",
          emoji: "🗣️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "history",
          title: "Histoire arabe",
          description: "Civilisations et empires",
          duration: 38,
          difficulty: "advanced",
          emoji: "🏛️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "philosophy",
          title: "Philosophie arabe",
          description: "Pensée et sagesse",
          duration: 45,
          difficulty: "advanced",
          emoji: "🧠",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "medicine",
          title: "Médecine arabe",
          description: "Termes médicaux et santé",
          duration: 28,
          difficulty: "advanced",
          emoji: "🏥",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "architecture",
          title: "Architecture arabe",
          description: "Bâtiments et monuments",
          duration: 26,
          difficulty: "advanced",
          emoji: "🏗️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "art",
          title: "Art arabe",
          description: "Peinture, sculpture, design",
          duration: 24,
          difficulty: "advanced",
          emoji: "🎨",
          isCompleted: false,
          isLocked: true
        },
        {
            id: "islamic-values",
            title: "Valeurs islamiques",
            description: "Principes et éthique de l'Islam",
            duration: 22,
            difficulty: "advanced",
            emoji: "🕌",
            isCompleted: false,
            isLocked: true
          },
        {
          id: "cooking",
          title: "Cuisine arabe",
          description: "Recettes et ingrédients",
          duration: 20,
          difficulty: "advanced",
          emoji: "🍳",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "final-project",
          title: "Projet final",
          description: "Synthèse de tous les acquis",
          duration: 60,
          difficulty: "advanced",
          emoji: "🏆",
          isCompleted: false,
          isLocked: true
        }
      ]
    }
  ];