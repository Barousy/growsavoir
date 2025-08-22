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
  
  export const englishLevels: Level[] = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Débutant",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "alphabet",
          title: "L'alphabet anglais",
          description: "Apprenez à prononcer les 26 lettres de l'alphabet anglais",
          duration: 5,
          difficulty: "beginner",
          emoji: "🔤",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "greetings",
          title: "Salutations de base",
          description: "Hello, Good morning, How are you? et plus encore",
          duration: 8,
          difficulty: "beginner",
          emoji: "👋",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "colors",
          title: "Les couleurs",
          description: "Red, blue, green, yellow et bien plus encore",
          duration: 6,
          difficulty: "beginner",
          emoji: "🎨",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "numbers",
          title: "Compter de 1 à 20",
          description: "One, two, three... jusqu'à twenty",
          duration: 7,
          difficulty: "beginner",
          emoji: "🔢",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "animals",
          title: "Les animaux",
          description: "Dog, cat, bird, fish et autres animaux",
          duration: 9,
          difficulty: "beginner",
          emoji: "🐾",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "food",
          title: "Les fruits et légumes",
          description: "Apple, banana, carrot, tomato et plus",
          duration: 8,
          difficulty: "beginner",
          emoji: "🍎",
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
          id: "family",
          title: "La famille",
          description: "Mother, father, sister, brother et plus",
          duration: 10,
          difficulty: "intermediate",
          emoji: "��‍��‍👧‍👦",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "weather",
          title: "La météo",
          description: "Sunny, rainy, cloudy, windy et plus",
          duration: 8,
          difficulty: "intermediate",
          emoji: "🌤️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "time",
          title: "L'heure",
          description: "What time is it? It's 3 o'clock",
          duration: 12,
          difficulty: "intermediate",
          emoji: "⏰",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "body",
          title: "Le corps humain",
          description: "Head, shoulders, knees, toes et plus",
          duration: 9,
          difficulty: "intermediate",
          emoji: "👤",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "clothes",
          title: "Les vêtements",
          description: "Shirt, pants, shoes, hat et plus",
          duration: 7,
          difficulty: "intermediate",
          emoji: "👕",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "house",
          title: "La maison",
          description: "Kitchen, bedroom, bathroom, living room",
          duration: 11,
          difficulty: "intermediate",
          emoji: "🏠",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "transport",
          title: "Les transports",
          description: "Car, bus, train, plane et plus",
          duration: 8,
          difficulty: "intermediate",
          emoji: "🚗",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "hobbies",
          title: "Les loisirs",
          description: "Reading, swimming, painting, cooking",
          duration: 9,
          difficulty: "intermediate",
          emoji: "🎯",
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
          id: "grammar-basic",
          title: "Grammaire de base",
          description: "Articles, pluriels, verbes simples",
          duration: 15,
          difficulty: "advanced",
          emoji: "📚",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "conversation",
          title: "Conversations simples",
          description: "Dialogues de la vie quotidienne",
          duration: 12,
          difficulty: "advanced",
          emoji: "💬",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "stories",
          title: "Histoires courtes",
          description: "Contes et récits adaptés",
          duration: 18,
          difficulty: "advanced",
          emoji: "📖",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "songs",
          title: "Chansons en anglais",
          description: "Comptines et mélodies",
          duration: 14,
          difficulty: "advanced",
          emoji: "🎵",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "games",
          title: "Jeux de mots",
          description: "Devinettes et énigmes",
          duration: 10,
          difficulty: "advanced",
          emoji: "🎮",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "culture",
          title: "Culture anglaise",
          description: "Traditions et coutumes",
          duration: 16,
          difficulty: "advanced",
          emoji: "🇬🇧",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "writing",
          title: "Écriture simple",
          description: "Phrases et petits textes",
          duration: 20,
          difficulty: "advanced",
          emoji: "✍️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "listening",
          title: "Compréhension orale",
          description: "Écouter et comprendre",
          duration: 15,
          difficulty: "advanced",
          emoji: "👂",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "vocabulary",
          title: "Vocabulaire étendu",
          description: "Mots et expressions avancés",
          duration: 18,
          difficulty: "advanced",
          emoji: "📝",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "pronunciation",
          title: "Prononciation",
          description: "Sons et accents anglais",
          duration: 16,
          difficulty: "advanced",
          emoji: "🗣️",
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
          id: "business-english",
          title: "Anglais des affaires",
          description: "Vocabulaire professionnel",
          duration: 20,
          difficulty: "advanced",
          emoji: "💼",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "literature",
          title: "Littérature anglaise",
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
          id: "academic-english",
          title: "Anglais académique",
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
          description: "Anglais pour voyager",
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
        },
        {
          id: "final-project",
          title: "Projet final",
          description: "Synthèse de tous les acquis",
          duration: 45,
          difficulty: "advanced",
          emoji: "🏆",
          isCompleted: false,
          isLocked: true
        }
      ]
    }
  ];