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
      name: "Niveau 1 - Découverte",
      description: "Observation et expérimentation de base",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "science-animaux-domestiques",
          title: "Les animaux domestiques",
          description: "Caractéristiques et comportements",
          duration: 10,
          difficulty: "beginner",
          emoji: "🐕",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "science-plantes-basiques",
          title: "Les plantes de base",
          description: "Parties d'une plante et croissance",
          duration: 8,
          difficulty: "beginner",
          emoji: "🌱",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "science-eau-etats",
          title: "Les états de l'eau",
          description: "Solide, liquide et gazeux",
          duration: 12,
          difficulty: "beginner",
          emoji: "💧",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "science-soleil-ombre",
          title: "Le soleil et les ombres",
          description: "Mouvement du soleil et ombres",
          duration: 9,
          difficulty: "beginner",
          emoji: "☀️",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "science-sens-humains",
          title: "Les 5 sens",
          description: "Vue, ouïe, toucher, goût, odorat",
          duration: 11,
          difficulty: "beginner",
          emoji: "👁️",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "science-meteo-basique",
          title: "La météo simple",
          description: "Pluie, soleil, vent et nuages",
          duration: 7,
          difficulty: "beginner",
          emoji: "🌤️",
          isCompleted: false,
          isLocked: false
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Exploration",
      description: "Expérimentation et observation avancée",
      lessonCount: 6,
      color: "bg-blue-500",
      lessons: [
        {
          id: "science-ecosysteme-jardin",
          title: "L'écosystème du jardin",
          description: "Chaines alimentaires et interactions",
          duration: 15,
          difficulty: "intermediate",
          emoji: "🌿",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-magnetisme",
          title: "Le magnétisme",
          description: "Aimants et forces magnétiques",
          duration: 13,
          difficulty: "intermediate",
          emoji: "🧲",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-electricite-simple",
          title: "L'électricité simple",
          description: "Circuits électriques de base",
          duration: 16,
          difficulty: "intermediate",
          emoji: "⚡",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-reactions-chimiques",
          title: "Réactions chimiques simples",
          description: "Mélanges et transformations",
          duration: 14,
          difficulty: "intermediate",
          emoji: "🧪",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-corps-humain",
          title: "Le corps humain",
          description: "Organes principaux et fonctions",
          duration: 18,
          difficulty: "intermediate",
          emoji: "🫀",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-energie-renouvelable",
          title: "Énergies renouvelables",
          description: "Soleil, vent et eau",
          duration: 12,
          difficulty: "intermediate",
          emoji: "🌞",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Investigation",
      description: "Méthode scientifique et expérimentation",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "science-methode-scientifique",
          title: "La méthode scientifique",
          description: "Hypothèse, expérience, conclusion",
          duration: 20,
          difficulty: "advanced",
          emoji: "🔬",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-genetique-basique",
          title: "Génétique de base",
          description: "Hérédité et traits familiaux",
          duration: 18,
          difficulty: "advanced",
          emoji: "🧬",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-evolution",
          title: "L'évolution",
          description: "Adaptation et sélection naturelle",
          duration: 22,
          difficulty: "advanced",
          emoji: "🦕",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-atome-molecules",
          title: "Atomes et molécules",
          description: "Structure de la matière",
          duration: 19,
          difficulty: "advanced",
          emoji: "⚛️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-ondes-son",
          title: "Ondes et son",
          description: "Vibrations et propagation",
          duration: 16,
          difficulty: "advanced",
          emoji: "🔊",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-climat",
          title: "Le climat et le changement",
          description: "Facteurs climatiques et impacts",
          duration: 21,
          difficulty: "advanced",
          emoji: "🌍",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Innovation",
      description: "Recherche et applications modernes",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "science-biotechnologie",
          title: "Biotechnologie",
          description: "Applications biologiques modernes",
          duration: 25,
          difficulty: "advanced",
          emoji: "🧬",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-nanotechnologie",
          title: "Nanotechnologie",
          description: "Science à l'échelle moléculaire",
          duration: 23,
          difficulty: "advanced",
          emoji: "🔬",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-intelligence-artificielle",
          title: "Intelligence artificielle",
          description: "Machines qui apprennent",
          duration: 26,
          difficulty: "advanced",
          emoji: "🤖",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-energie-fusion",
          title: "Énergie de fusion",
          description: "L'énergie des étoiles",
          duration: 24,
          difficulty: "advanced",
          emoji: "☢️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-espace-exploration",
          title: "Exploration spatiale",
          description: "Voyages interplanétaires",
          duration: 28,
          difficulty: "advanced",
          emoji: "🚀",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "science-futur-technologies",
          title: "Technologies du futur",
          description: "Innovations à venir",
          duration: 20,
          difficulty: "advanced",
          emoji: "🔮",
          isCompleted: false,
          isLocked: true
        }
      ]
    }
  ];