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
      difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
      isCompleted?: boolean;
      isLocked?: boolean;
      emoji: string;
    }>;
  }
  
  export const englishLevels: Level[] = [
    {
      id: 1,
      name: "Niveau 1 - Fondamentaux",
      description: "Bases de la langue anglaise",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "english-alphabet",
          title: "The English Alphabet",
          description: "Letters A-Z and their sounds",
          duration: 15,
          difficulty: "beginner",
          emoji: "🔤",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "english-numbers",
          title: "Numbers 1-100",
          description: "Counting and writing numbers from 1 to 100",
          duration: 20,
          difficulty: "beginner",
          emoji: "🔢",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "english-colors",
          title: "Basic Colors",
          description: "Red, blue, green, yellow, etc.",
          duration: 16,
          difficulty: "beginner",
          emoji: "🎨",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "english-greetings",
          title: "Greetings and Introductions",
          description: "Hello, goodbye, how are you?",
          duration: 20,
          difficulty: "beginner",
          emoji: "👋",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "english-family",
          title: "Family Members",
          description: "Mother, father, sister, brother",
          duration: 22,
          difficulty: "beginner",
          emoji: "👨‍👩‍👧‍👦",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "english-animals",
          title: "Basic Animals",
          description: "Dog, cat, bird, fish, etc.",
          duration: 19,
          difficulty: "beginner",
          emoji: "🐕",
          isCompleted: false,
          isLocked: false
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Grammaire et vocabulaire",
      lessonCount: 6,
      color: "bg-blue-500",
      lessons: [
        {
          id: "english-articles",
          title: "Articles (A, An, The)",
          description: "When to use each article",
          duration: 25,
          difficulty: "intermediate",
          emoji: "📝",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-verbs-present",
          title: "Present Tense Verbs",
          description: "To be, to have, regular verbs",
          duration: 28,
          difficulty: "intermediate",
          emoji: "🔄",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-adjectives",
          title: "Adjectives",
          description: "Big, small, happy, sad, etc.",
          duration: 24,
          difficulty: "intermediate",
          emoji: "✨",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-questions",
          title: "Asking Questions",
          description: "What, where, when, why, how",
          duration: 26,
          difficulty: "intermediate",
          emoji: "❓",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-time",
          title: "Telling Time",
          description: "Clock, hours, minutes, daily routine",
          duration: 30,
          difficulty: "intermediate",
          emoji: "🕐",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-weather",
          title: "Weather and Seasons",
          description: "Sunny, rainy, hot, cold, spring, summer",
          duration: 27,
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
          id: "english-past-tense",
          title: "Past Tense",
          description: "Regular and irregular verbs",
          duration: 35,
          difficulty: "advanced",
          emoji: "📅",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-future-tense",
          title: "Future Tense",
          description: "Will, going to, future continuous",
          duration: 32,
          difficulty: "advanced",
          emoji: "🔮",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-conditionals",
          title: "Conditional Sentences",
          description: "If clauses and hypothetical situations",
          duration: 38,
          difficulty: "advanced",
          emoji: "🎭",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-passive-voice",
          title: "Passive Voice",
          description: "Understanding passive constructions",
          duration: 34,
          difficulty: "advanced",
          emoji: "🔀",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-phrasal-verbs",
          title: "Phrasal Verbs",
          description: "Common phrasal verbs and meanings",
          duration: 40,
          difficulty: "advanced",
          emoji: "🔤",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-idioms",
          title: "Idioms and Expressions",
          description: "Popular English idioms and usage",
          duration: 36,
          difficulty: "advanced",
          emoji: "💬",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Maîtrise et fluidité",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "english-literature",
          title: "English Literature",
          description: "Classic works and literary analysis",
          duration: 45,
          difficulty: "expert",
          emoji: "📚",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-business",
          title: "Business English",
          description: "Professional communication and vocabulary",
          duration: 42,
          difficulty: "expert",
          emoji: "💼",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-academic",
          title: "Academic English",
          description: "Writing essays and academic papers",
          duration: 48,
          difficulty: "expert",
          emoji: "🎓",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-media",
          title: "Media and Journalism",
          description: "Understanding news and media language",
          duration: 44,
          difficulty: "expert",
          emoji: "📰",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-culture",
          title: "Cultural Context",
          description: "Understanding English-speaking cultures",
          duration: 50,
          difficulty: "expert",
          emoji: "🌍",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "english-fluency",
          title: "Fluency and Pronunciation",
          description: "Achieving native-like fluency",
          duration: 55,
          difficulty: "expert",
          emoji: "🎯",
          isCompleted: false,
          isLocked: true
        }
      ]
    }
  ];