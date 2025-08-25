export interface Level {
  id: number;
  name: string;
  lessonCount: number;
  color: string;
  duration: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  emoji: string;
}

export const personalDevelopmentLevels: Level[] = [
  {
    id: 1,
    name: "Débutant",
    lessonCount: 6,
    color: "from-blue-500 to-cyan-500",
    duration: 120,
    lessons: [
      {
        id: "developpement-personnel-conscience-soi",
        title: "Conscience de soi",
        description: "Découvrir qui vous êtes et comprendre vos valeurs fondamentales",
        duration: "20 min",
        emoji: "🔍"
      },
      {
        id: "developpement-personnel-confiance-soi",
        title: "Confiance en soi",
        description: "Développer une confiance solide et une estime de soi positive",
        duration: "20 min",
        emoji: "💪"
      },
      {
        id: "developpement-personnel-gestion-emotions",
        title: "Gestion des émotions",
        description: "Apprendre à reconnaître et gérer ses émotions de manière constructive",
        duration: "20 min",
        emoji: "😊"
      },
      {
        id: "developpement-personnel-communication",
        title: "Communication efficace",
        description: "Améliorer ses compétences de communication et d'écoute",
        duration: "20 min",
        emoji: "💬"
      },
      {
        id: "developpement-personnel-objectifs",
        title: "Fixation d'objectifs",
        description: "Apprendre à se fixer des objectifs clairs et réalisables",
        duration: "20 min",
        emoji: "🎯"
      },
      {
        id: "developpement-personnel-organisation",
        title: "Organisation personnelle",
        description: "Développer des méthodes d'organisation efficaces au quotidien",
        duration: "20 min",
        emoji: "📋"
      }
    ]
  },
  {
    id: 2,
    name: "Intermédiaire",
    lessonCount: 6,
    color: "from-green-500 to-emerald-500",
    duration: 180,
    lessons: [
      {
        id: "developpement-personnel-intelligence-emotionnelle",
        title: "Intelligence émotionnelle",
        description: "Développer sa capacité à comprendre et gérer les émotions",
        duration: "30 min",
        emoji: "🧠"
      },
      {
        id: "developpement-personnel-resilience",
        title: "Résilience et adaptation",
        description: "Renforcer sa capacité à surmonter les difficultés",
        duration: "30 min",
        emoji: "🌱"
      },
      {
        id: "developpement-personnel-leadership",
        title: "Leadership personnel",
        description: "Développer ses qualités de leader et d'influenceur positif",
        duration: "30 min",
        emoji: "⭐"
      },
      {
        id: "developpement-personnel-creativite",
        title: "Créativité et innovation",
        description: "Stimuler sa créativité et sa capacité d'innovation",
        duration: "30 min",
        emoji: "✨"
      },
      {
        id: "developpement-personnel-gestion-temps",
        title: "Gestion du temps",
        description: "Maîtriser l'art de bien organiser et optimiser son temps",
        duration: "30 min",
        emoji: "⏰"
      },
      {
        id: "developpement-personnel-motivation",
        title: "Motivation et persévérance",
        description: "Maintenir sa motivation et développer sa persévérance",
        duration: "30 min",
        emoji: "🚀"
      }
    ]
  },
  {
    id: 3,
    name: "Avancé",
    lessonCount: 6,
    color: "from-purple-500 to-pink-500",
    duration: 240,
    lessons: [
      {
        id: "developpement-personnel-mindfulness",
        title: "Mindfulness et présence",
        description: "Développer la pleine conscience et la présence à soi",
        duration: "40 min",
        emoji: "🧘"
      },
      {
        id: "developpement-personnel-intelligence-sociale",
        title: "Intelligence sociale",
        description: "Améliorer ses compétences relationnelles et sociales",
        duration: "40 min",
        emoji: "🤝"
      },
      {
        id: "developpement-personnel-gestion-stress",
        title: "Gestion du stress",
        description: "Apprendre des techniques avancées de gestion du stress",
        duration: "40 min",
        emoji: "🧘‍♀️"
      },
      {
        id: "developpement-personnel-decision",
        title: "Prise de décision",
        description: "Développer sa capacité à prendre des décisions éclairées",
        duration: "40 min",
        emoji: "⚖️"
      },
      {
        id: "developpement-personnel-apprentissage",
        title: "Apprentissage continu",
        description: "Cultiver l'habitude d'apprendre tout au long de la vie",
        duration: "40 min",
        emoji: "📚"
      },
      {
        id: "developpement-personnel-equilibre-vie",
        title: "Équilibre de vie",
        description: "Trouver et maintenir un équilibre harmonieux dans sa vie",
        duration: "40 min",
        emoji: "⚖️"
      }
    ]
  },
  {
    id: 4,
    name: "Expert",
    lessonCount: 6,
    color: "from-red-500 to-orange-500",
    duration: 300,
    lessons: [
      {
        id: "developpement-personnel-mastery",
        title: "Maîtrise personnelle",
        description: "Atteindre un niveau de maîtrise dans tous les aspects du développement personnel",
        duration: "50 min",
        emoji: "👑"
      },
      {
        id: "developpement-personnel-transformation",
        title: "Transformation personnelle",
        description: "Entreprendre une transformation profonde et durable de soi",
        duration: "50 min",
        emoji: "🦋"
      },
      {
        id: "developpement-personnel-mentorat",
        title: "Mentorat et accompagnement",
        description: "Devenir mentor et accompagner les autres dans leur développement",
        duration: "50 min",
        emoji: "👨‍🏫"
      },
      {
        id: "developpement-personnel-impact",
        title: "Impact et influence positive",
        description: "Créer un impact positif durable sur son environnement",
        duration: "50 min",
        emoji: "🌟"
      },
      {
        id: "developpement-personnel-legacy",
        title: "Héritage et transmission",
        description: "Réfléchir à l'héritage que l'on souhaite laisser",
        duration: "50 min",
        emoji: "🏛️"
      },
      {
        id: "developpement-personnel-evolution",
        title: "Évolution continue",
        description: "Maintenir une dynamique d'évolution constante et adaptative",
        duration: "50 min",
        emoji: "🔄"
      }
    ]
  }
];
