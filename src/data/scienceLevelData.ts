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

export const scienceLevels: Level[] = [
  {
    id: 1,
    name: "Niveau 1 - Fondamentaux",
    description: "Bases des sciences",
    lessonCount: 6,
    color: "bg-green-500",
    lessons: [
      {
        id: "sciences-plantes",
  title: "Les plantes",
  description: "Comment poussent les plantes et les fleurs",
  duration: 12,
  difficulty: "beginner",
  emoji: "🌱",
  isCompleted: false,
  isLocked: false
      },
      {
        id: "sciences-terre",
  title: "La Terre",
  description: "Notre planète et ses merveilles",
  duration: 10,
  difficulty: "beginner",
  emoji: "🌍",
  isCompleted: false,
  isLocked: false
      },
      {
        id: "sciences-energie",
  title: "L’énergie",
  description: "Les différentes formes d’énergie",
  duration: 9,
  difficulty: "beginner",
  emoji: "⚡",
  isCompleted: false,
  isLocked: false
      },
      {
        id: "sciences-animaux",
  title: "Les animaux",
  description: "Découvrir le monde animal",
  duration: 11,
  difficulty: "beginner",
  emoji: "🐾",
  isCompleted: false,
  isLocked: false
      },
      {
        id: "sciences-eau",
  title: "L’eau",
  description: "Le cycle de l’eau et ses états",
  duration: 10,
  difficulty: "beginner",
  emoji: "💧",
  isCompleted: false,
  isLocked: false
      },
      {
        id: "sciences-air",
  title: "L’air",
  description: "L’atmosphère et la respiration",
  duration: 8,
  difficulty: "beginner",
  emoji: "🌬️",
  isCompleted: false,
  isLocked: false
      }
    ]
  },
  {
    id: 2,
    name: "Niveau 2 - Intermédiaire",
    description: "Expérimentation et observation avancée",
    lessonCount: 6,
    color: "bg-blue-500",
    lessons: [
      {
        id: "sciences-ecosysteme-jardin",
        title: "L'écosystème du jardin",
        description: "Chaines alimentaires et interactions",
        duration: 25,
        difficulty: "intermediate",
        emoji: "🌿",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-magnetisme",
        title: "Le magnétisme",
        description: "Aimants et forces magnétiques",
        duration: 23,
        difficulty: "intermediate",
        emoji: "🧲",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-electricite-simple",
        title: "L'électricité simple",
        description: "Circuits électriques de base",
        duration: 26,
        difficulty: "intermediate",
        emoji: "⚡",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-reactions-chimiques",
        title: "Réactions chimiques simples",
        description: "Mélanges et transformations",
        duration: 24,
        difficulty: "intermediate",
        emoji: "🧪",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-corps-humain",
        title: "Le corps humain",
        description: "Organes principaux et fonctions",
        duration: 28,
        difficulty: "intermediate",
        emoji: "🫀",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-energie-renouvelable",
        title: "Énergies renouvelables",
        description: "Soleil, vent et eau",
        duration: 22,
        difficulty: "intermediate",
        emoji: "🌞",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 3,
    name: "Niveau 3 - Avancé",
    description: "Méthode scientifique et expérimentation",
    lessonCount: 6,
    color: "bg-yellow-500",
    lessons: [
      {
        id: "sciences-methode-scientifique",
        title: "La méthode scientifique",
        description: "Hypothèse, expérience, conclusion",
        duration: 30,
        difficulty: "advanced",
        emoji: "🔬",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-genetique-basique",
        title: "Génétique de base",
        description: "Hérédité et traits familiaux",
        duration: 28,
        difficulty: "advanced",
        emoji: "🧬",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-evolution",
        title: "L'évolution",
        description: "Adaptation et sélection naturelle",
        duration: 32,
        difficulty: "advanced",
        emoji: "🦕",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-atome-molecules",
        title: "Atomes et molécules",
        description: "Structure de la matière",
        duration: 29,
        difficulty: "advanced",
        emoji: "⚛️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-ondes-son",
        title: "Ondes et son",
        description: "Vibrations et propagation",
        duration: 26,
        difficulty: "advanced",
        emoji: "🔊",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-climat",
        title: "Le climat et le changement",
        description: "Facteurs climatiques et impacts",
        duration: 31,
        difficulty: "advanced",
        emoji: "🌍",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 4,
    name: "Niveau 4 - Expert",
    description: "Recherche et applications modernes",
    lessonCount: 6,
    color: "bg-red-500",
    lessons: [
      {
        id: "sciences-biotechnologie",
        title: "Biotechnologie",
        description: "Applications biologiques modernes",
        duration: 35,
        difficulty: "advanced",
        emoji: "🧬",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-nanotechnologie",
        title: "Nanotechnologie",
        description: "Science à l'échelle moléculaire",
        duration: 33,
        difficulty: "advanced",
        emoji: "🔬",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-intelligence-artificielle",
        title: "Intelligence artificielle",
        description: "Machines qui apprennent",
        duration: 36,
        difficulty: "advanced",
        emoji: "🤖",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-energie-fusion",
        title: "Énergie de fusion",
        description: "L'énergie des étoiles",
        duration: 34,
        difficulty: "advanced",
        emoji: "☢️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-espace-exploration",
        title: "Exploration spatiale",
        description: "Voyages interplanétaires",
        duration: 38,
        difficulty: "advanced",
        emoji: "🚀",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "sciences-futur-technologies",
        title: "Technologies du futur",
        description: "Innovations à venir",
        duration: 30,
        difficulty: "advanced",
        emoji: "🔮",
        isCompleted: false,
        isLocked: true
      }
    ]
  }
];