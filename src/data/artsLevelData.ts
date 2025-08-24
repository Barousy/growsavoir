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

export const artsLevels: Level[] = [
  {
    id: 1,
    name: "Niveau 1 - Découverte",
    description: "Bases des arts et de la créativité",
    lessonCount: 6,
    color: "bg-green-500",
    lessons: [
      {
        id: "arts-dessin-basique",
        title: "Dessin de base",
        description: "Lignes, formes géométriques, ombres",
        duration: 15,
        difficulty: "beginner",
        emoji: "✏️",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "arts-couleurs-primaires",
        title: "Les couleurs primaires",
        description: "Rouge, bleu, jaune et mélanges",
        duration: 12,
        difficulty: "beginner",
        emoji: "🎨",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "arts-peinture-au-doigt",
        title: "Peinture au doigt",
        description: "Techniques de base et créativité",
        duration: 18,
        difficulty: "beginner",
        emoji: "👆",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "arts-collage",
        title: "Art du collage",
        description: "Découpage, assemblage, composition",
        duration: 20,
        difficulty: "beginner",
        emoji: "✂️",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "arts-modelage",
        title: "Modelage en pâte",
        description: "Pâte à modeler, formes 3D",
        duration: 22,
        difficulty: "beginner",
        emoji: "🟡",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "arts-musique-basique",
        title: "Musique de base",
        description: "Rythme, sons, instruments simples",
        duration: 16,
        difficulty: "beginner",
        emoji: "🎵",
        isCompleted: false,
        isLocked: false
      }
    ]
  },
  {
    id: 2,
    name: "Niveau 2 - Exploration",
    description: "Techniques artistiques avancées",
    lessonCount: 6,
    color: "bg-blue-500",
    lessons: [
      {
        id: "arts-aquarelle",
        title: "Technique de l'aquarelle",
        description: "Transparence, dégradés, effets",
        duration: 25,
        difficulty: "intermediate",
        emoji: "🎨",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-perspective",
        title: "Dessin en perspective",
        description: "Point de fuite, profondeur, 3D",
        duration: 30,
        difficulty: "intermediate",
        emoji: "🏗️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-portrait",
        title: "Dessin de portrait",
        description: "Proportions du visage, expressions",
        duration: 28,
        difficulty: "intermediate",
        emoji: "👤",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-paysage",
        title: "Dessin de paysage",
        description: "Horizon, plans, atmosphère",
        duration: 32,
        difficulty: "intermediate",
        emoji: "🏞️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-sculpture",
        title: "Sculpture en argile",
        description: "Volume, texture, modelage avancé",
        duration: 35,
        difficulty: "intermediate",
        emoji: "🗿",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-musique-instruments",
        title: "Instruments de musique",
        description: "Flûte, tambour, xylophone",
        duration: 26,
        difficulty: "intermediate",
        emoji: "🎼",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 3,
    name: "Niveau 3 - Création",
    description: "Expression artistique personnelle",
    lessonCount: 6,
    color: "bg-purple-500",
    lessons: [
      {
        id: "arts-style-personnel",
        title: "Développer son style",
        description: "Expression unique et créativité",
        duration: 40,
        difficulty: "advanced",
        emoji: "✨",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-techniques-mixte",
        title: "Techniques mixtes",
        description: "Combiner différents médiums",
        duration: 38,
        difficulty: "advanced",
        emoji: "🎭",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-numerique",
        title: "Art numérique",
        description: "Tablette graphique, logiciels",
        duration: 45,
        difficulty: "advanced",
        emoji: "💻",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-installation",
        title: "Installation artistique",
        description: "Art dans l'espace, environnement",
        duration: 42,
        difficulty: "advanced",
        emoji: "🏛️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-performance",
        title: "Performance artistique",
        description: "Théâtre, danse, expression corporelle",
        duration: 48,
        difficulty: "advanced",
        emoji: "🎭",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-culture-artistique",
        title: "Culture artistique",
        description: "Histoire de l'art, artistes célèbres",
        duration: 44,
        difficulty: "advanced",
        emoji: "🏛️",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 4,
    name: "Niveau 4 - Maîtrise",
    description: "Perfectionnement et transmission",
    lessonCount: 6,
    color: "bg-red-500",
    lessons: [
      {
        id: "arts-exposition",
        title: "Organiser une exposition",
        description: "Scénographie, accrochage, médiation",
        duration: 55,
        difficulty: "advanced",
        emoji: "🎨",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-enseignement",
        title: "Enseigner l'art",
        description: "Transmettre ses connaissances",
        duration: 50,
        difficulty: "advanced",
        emoji: "👨‍🏫",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-restauration",
        title: "Restauration d'œuvres",
        description: "Conservation, réparation, préservation",
        duration: 58,
        difficulty: "advanced",
        emoji: "🔧",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-innovation",
        title: "Innovation artistique",
        description: "Nouvelles technologies, expérimentation",
        duration: 52,
        difficulty: "advanced",
        emoji: "💡",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-communaute",
        title: "Art communautaire",
        description: "Projets collectifs, engagement social",
        duration: 48,
        difficulty: "advanced",
        emoji: "👥",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "arts-legacy",
        title: "Héritage artistique",
        description: "Créer un impact durable",
        duration: 60,
        difficulty: "advanced",
        emoji: "🌟",
        isCompleted: false,
        isLocked: true
      }
    ]
  }
];

