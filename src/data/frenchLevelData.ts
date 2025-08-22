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
      description: "Alphabet, sons et mots de base",
      lessonCount: 6,
      color: "bg-blue-500",
      lessons: [
        {
          id: "francais-alphabet-sons",
          title: "L'alphabet et les sons",
          description: "Apprendre les 26 lettres et leurs sons",
          duration: 10,
          difficulty: "beginner",
          emoji: "🔤",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "francais-voyelles-consonnes",
          title: "Voyelles et consonnes",
          description: "Différencier les types de lettres",
          duration: 8,
          difficulty: "beginner",
          emoji: "🔤",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "francais-mots-simples",
          title: "Mots simples",
          description: "Lire et écrire des mots courts",
          duration: 12,
          difficulty: "beginner",
          emoji: "📝",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "francais-phrases-basiques",
          title: "Phrases de base",
          description: "Construire des phrases simples",
          duration: 15,
          difficulty: "beginner",
          emoji: "💬",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "francais-nombres-ecrits",
          title: "Nombres en lettres",
          description: "Écrire les nombres de 1 à 20",
          duration: 9,
          difficulty: "beginner",
          emoji: "🔢",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "francais-couleurs-formes",
          title: "Couleurs et formes",
          description: "Nommer et décrire les couleurs",
          duration: 7,
          difficulty: "beginner",
          emoji: "🎨",
          isCompleted: false,
          isLocked: false
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Grammaire de base",
      description: "Conjugaison et accords simples",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "francais-verbe-etre",
          title: "Le verbe être",
          description: "Conjuguer être au présent",
          duration: 14,
          difficulty: "intermediate",
          emoji: "📚",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-verbe-avoir",
          title: "Le verbe avoir",
          description: "Conjuguer avoir au présent",
          duration: 14,
          difficulty: "intermediate",
          emoji: "📚",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-accords-adjectifs",
          title: "Accords des adjectifs",
          description: "Masculin, féminin, singulier, pluriel",
          duration: 16,
          difficulty: "intermediate",
          emoji: "✏️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-determinants",
          title: "Les déterminants",
          description: "Le, la, les, un, une, des",
          duration: 12,
          difficulty: "intermediate",
          emoji: "🔍",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-pronoms-personnels",
          title: "Pronoms personnels",
          description: "Je, tu, il, elle, nous, vous, ils, elles",
          duration: 13,
          difficulty: "intermediate",
          emoji: "👤",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-questions",
          title: "Poser des questions",
          description: "Qu'est-ce que, qui, où, quand",
          duration: 11,
          difficulty: "intermediate",
          emoji: "❓",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Grammaire avancée",
      description: "Temps verbaux et syntaxe",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "francais-passe-compose",
          title: "Le passé composé",
          description: "Conjuguer les verbes au passé",
          duration: 18,
          difficulty: "advanced",
          emoji: "⏰",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-futur-simple",
          title: "Le futur simple",
          description: "Parler de l'avenir",
          duration: 16,
          difficulty: "advanced",
          emoji: "🔮",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-imparfait",
          title: "L'imparfait",
          description: "Décrire le passé",
          duration: 19,
          difficulty: "advanced",
          emoji: "📖",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-subjonctif",
          title: "Le subjonctif",
          description: "Exprimer le doute et le souhait",
          duration: 22,
          difficulty: "advanced",
          emoji: "💭",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-propositions",
          title: "Propositions subordonnées",
          description: "Relier les idées",
          duration: 20,
          difficulty: "advanced",
          emoji: "🔗",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-ponctuation",
          title: "La ponctuation",
          description: "Points, virgules, guillemets",
          duration: 15,
          difficulty: "advanced",
          emoji: "📝",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Littérature et style",
      description: "Analyse littéraire et expression",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "francais-genres-litteraires",
          title: "Genres littéraires",
          description: "Roman, poésie, théâtre, essai",
          duration: 24,
          difficulty: "advanced",
          emoji: "📚",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-figures-style",
          title: "Figures de style",
          description: "Métaphore, comparaison, hyperbole",
          duration: 26,
          difficulty: "advanced",
          emoji: "✨",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-analyse-texte",
          title: "Analyse de texte",
          description: "Comprendre et interpréter",
          duration: 28,
          difficulty: "advanced",
          emoji: "🔍",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-argumentation",
          title: "L'argumentation",
          description: "Convaincre et persuader",
          duration: 25,
          difficulty: "advanced",
          emoji: "💬",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-ecriture-creative",
          title: "Écriture créative",
          description: "Créer des histoires",
          duration: 30,
          difficulty: "advanced",
          emoji: "✍️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "francais-culture-francophone",
          title: "Culture francophone",
          description: "Littérature et traditions",
          duration: 22,
          difficulty: "advanced",
          emoji: "🇫🇷",
          isCompleted: false,
          isLocked: true
        }
      ]
    }
  ];