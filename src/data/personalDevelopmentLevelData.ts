export interface Level {
  id: number;
  name: string;

  description: string;
  lessonCount: number;
  color: string;

  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;

  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';

  emoji: string;
}

export const personalDevelopmentLevels: Level[] = [
  {
    id: 1,
    name: "Débutant",

    description: "Niveau d'introduction aux concepts fondamentaux du développement personnel",
    lessonCount: 6,
    color: "from-blue-500 to-cyan-500",

    lessons: [
      {
        id: "developpement-personnel-conscience-soi",
        title: "Conscience de soi",
        description: "Découvrir qui vous êtes et comprendre vos valeurs fondamentales",

        duration: 20,
        difficulty: "beginner",

        emoji: "🔍"
      },
      {
        id: "developpement-personnel-confiance-soi",
        title: "Confiance en soi",
        description: "Développer une confiance solide et une estime de soi positive",

        duration: 20,
        difficulty: "beginner",

        emoji: "💪"
      },
      {
        id: "developpement-personnel-gestion-emotions",
        title: "Gestion des émotions",
        description: "Apprendre à reconnaître et gérer ses émotions de manière constructive",

        duration: 20,
        difficulty: "beginner",

        emoji: "😊"
      },
      {
        id: "developpement-personnel-communication",
        title: "Communication efficace",
        description: "Améliorer ses compétences de communication et d'écoute",

        duration: 20,
        difficulty: "beginner",

        emoji: "💬"
      },
      {
        id: "developpement-personnel-objectifs",
        title: "Fixation d'objectifs",
        description: "Apprendre à se fixer des objectifs clairs et réalisables",

        duration: 20,
        difficulty: "beginner",

        emoji: "🎯"
      },
      {
        id: "developpement-personnel-organisation",
        title: "Organisation personnelle",
        description: "Développer des méthodes d'organisation efficaces au quotidien",

        duration: 20,
        difficulty: "beginner",

        emoji: "📋"
      }
    ]
  },
  {
    id: 2,
    name: "Intermédiaire",

    description: "Niveau intermédiaire pour approfondir les compétences de développement personnel",
    lessonCount: 6,
    color: "from-green-500 to-emerald-500",

    lessons: [
      {
        id: "developpement-personnel-intelligence-emotionnelle",
        title: "Intelligence émotionnelle",
        description: "Développer sa capacité à comprendre et gérer les émotions",

        duration: 30,
        difficulty: "intermediate",

        emoji: "🧠"
      },
      {
        id: "developpement-personnel-resilience",
        title: "Résilience et adaptation",
        description: "Renforcer sa capacité à surmonter les difficultés",

        duration: 30,
        difficulty: "intermediate",

        emoji: "🌱"
      },
      {
        id: "developpement-personnel-leadership",
        title: "Leadership personnel",
        description: "Développer ses qualités de leader et d'influenceur positif",

        duration: 30,
        difficulty: "intermediate",

        emoji: "⭐"
      },
      {
        id: "developpement-personnel-creativite",
        title: "Créativité et innovation",

        description: "Stimuler sa créativité et développer une pensée innovante",
        duration: 30,
        difficulty: "intermediate",
        emoji: "🎨"

      },
      {
        id: "developpement-personnel-gestion-temps",
        title: "Gestion du temps",

        description: "Optimiser son temps et améliorer sa productivité",
        duration: 30,
        difficulty: "intermediate",
        emoji: "⏰"
      },
      {
        id: "developpement-personnel-prise-decision",
        title: "Prise de décision",
        description: "Améliorer sa capacité à prendre des décisions éclairées",
        duration: 30,
        difficulty: "intermediate",
        emoji: "🤔"

      }
    ]
  },
  {
    id: 3,
    name: "Avancé",

    description: "Niveau avancé pour maîtriser les techniques complexes de développement personnel",
    lessonCount: 6,
    color: "from-orange-500 to-red-500",
    lessons: [
      {
        id: "developpement-personnel-mindfulness",
        title: "Mindfulness et méditation",
        description: "Pratiquer la pleine conscience et la méditation pour la croissance personnelle",
        duration: 45,
        difficulty: "advanced",
        emoji: "🧘"
      },
      {
        id: "developpement-personnel-coaching",
        title: "Techniques de coaching",
        description: "Apprendre les techniques de coaching pour soi et pour les autres",
        duration: 45,
        difficulty: "advanced",
        emoji: "🎯"
      },
      {
        id: "developpement-personnel-psychologie-positive",
        title: "Psychologie positive",
        description: "Explorer les principes de la psychologie positive et du bonheur durable",
        duration: 45,
        difficulty: "advanced",
        emoji: "😊"
      },
      {
        id: "developpement-personnel-transformation",
        title: "Transformation personnelle",
        description: "Mener un processus de transformation personnelle profonde",
        duration: 45,
        difficulty: "advanced",
        emoji: "🦋"
      },
      {
        id: "developpement-personnel-mastery",
        title: "Maîtrise personnelle",
        description: "Atteindre un niveau de maîtrise dans ses domaines de prédilection",
        duration: 45,
        difficulty: "advanced",
        emoji: "🏆"
      },
      {
        id: "developpement-personnel-legacy",
        title: "Créer son héritage",
        description: "Réfléchir à l'impact que l'on veut laisser dans le monde",
        duration: 45,
        difficulty: "advanced",
        emoji: "🌟"

      }
    ]
  },
  {
    id: 4,
    name: "Expert",

    description: "Niveau expert pour devenir un spécialiste du développement personnel",
    lessonCount: 6,
    color: "from-purple-500 to-indigo-500",
    lessons: [
      {
        id: "developpement-personnel-mentorat",
        title: "Mentorat et accompagnement",
        description: "Devenir mentor et accompagner les autres dans leur développement",
        duration: 60,
        difficulty: "expert",
        emoji: "👨‍🏫"
      },
      {
        id: "developpement-personnel-recherche",
        title: "Recherche et innovation",
        description: "Contribuer à l'avancement des connaissances en développement personnel",
        duration: 60,
        difficulty: "expert",
        emoji: "🔬"
      },
      {
        id: "developpement-personnel-enseignement",
        title: "Enseignement et formation",
        description: "Créer et dispenser des programmes de formation de qualité",
        duration: 60,
        difficulty: "expert",
        emoji: "📚"
      },
      {
        id: "developpement-personnel-consultation",
        title: "Consultation et accompagnement",
        description: "Offrir des services de consultation professionnelle",
        duration: 60,
        difficulty: "expert",
        emoji: "💼"
      },
      {
        id: "developpement-personnel-leadership-avance",
        title: "Leadership transformationnel",
        description: "Développer un leadership qui transforme les organisations et les communautés",
        duration: 60,
        difficulty: "expert",
        emoji: "🚀"
      },
      {
        id: "developpement-personnel-impact-mondial",
        title: "Impact mondial",
        description: "Créer un impact positif à l'échelle mondiale",
        duration: 60,
        difficulty: "expert",
        emoji: "🌍"

      }
    ]
  }
];
