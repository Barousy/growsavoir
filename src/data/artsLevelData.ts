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
      description: "Bases du dessin et de la couleur",
      lessonCount: 6,
      color: "bg-pink-500",
      lessons: [
        {
          id: "arts-dessin-lignes",
          title: "Les lignes de base",
          description: "Droites, courbes et formes simples",
          duration: 10,
          difficulty: "beginner",
          emoji: "✏️",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "arts-formes-geometriques",
          title: "Formes géométriques",
          description: "Carré, cercle, triangle en dessin",
          duration: 12,
          difficulty: "beginner",
          emoji: "🔷",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "arts-couleurs-primaires",
          title: "Couleurs primaires",
          description: "Rouge, bleu, jaune et mélanges",
          duration: 15,
          difficulty: "beginner",
          emoji: "🎨",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "arts-ombres-lumiere",
          title: "Ombres et lumière",
          description: "Créer de la profondeur",
          duration: 14,
          difficulty: "beginner",
          emoji: "💡",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "arts-perspective-simple",
          title: "Perspective simple",
          description: "Premiers pas en 3D",
          duration: 16,
          difficulty: "beginner",
          emoji: "🏗️",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "arts-nature-morte",
          title: "Nature morte",
          description: "Dessiner des objets du quotidien",
          duration: 18,
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
      description: "Techniques avancées et composition",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "arts-portrait-basique",
          title: "Portrait de base",
          description: "Proportions du visage",
          duration: 20,
          difficulty: "intermediate",
          emoji: "👤",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-paysage-composition",
          title: "Composition de paysage",
          description: "Règles de composition",
          duration: 22,
          difficulty: "intermediate",
          emoji: "🏔️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-aquarelle-techniques",
          title: "Techniques d'aquarelle",
          description: "Peinture à l'eau",
          duration: 25,
          difficulty: "intermediate",
          emoji: "🌊",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-crayon-techniques",
          title: "Techniques au crayon",
          description: "Hachures et textures",
          duration: 18,
          difficulty: "intermediate",
          emoji: "✏️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-anatomie-basique",
          title: "Anatomie de base",
          description: "Proportions du corps humain",
          duration: 24,
          difficulty: "intermediate",
          emoji: "🦴",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-couleurs-complementaires",
          title: "Couleurs complémentaires",
          description: "Harmonie et contraste",
          duration: 16,
          difficulty: "intermediate",
          emoji: "🎨",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Expression artistique et style",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "arts-portrait-avance",
          title: "Portrait avancé",
          description: "Expression et caractère",
          duration: 28,
          difficulty: "advanced",
          emoji: "🎭",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-paysage-atmospherique",
          title: "Paysage atmosphérique",
          description: "Créer une ambiance",
          duration: 30,
          difficulty: "advanced",
          emoji: "🌅",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-abstraction",
          title: "Art abstrait",
          description: "Formes et couleurs pures",
          duration: 26,
          difficulty: "advanced",
          emoji: "🔄",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-numerique-bases",
          title: "Art numérique de base",
          description: "Tablette graphique et logiciels",
          duration: 32,
          difficulty: "advanced",
          emoji: "💻",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-sculpture-basique",
          title: "Sculpture de base",
          description: "Modelage et formes 3D",
          duration: 29,
          difficulty: "advanced",
          emoji: "🗿",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-histoire-art",
          title: "Histoire de l'art",
          description: "Mouvements et artistes",
          duration: 34,
          difficulty: "advanced",
          emoji: "🏛️",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Création personnelle et innovation",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "arts-style-personnel",
          title: "Développer son style",
          description: "Créer une signature artistique",
          duration: 35,
          difficulty: "advanced",
          emoji: "✨",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-oeuvre-complete",
          title: "Créer une œuvre complète",
          description: "Projet artistique personnel",
          duration: 40,
          difficulty: "advanced",
          emoji: "🎨",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-numerique-avance",
          title: "Art numérique avancé",
          description: "3D, animation et effets",
          duration: 38,
          difficulty: "advanced",
          emoji: "🚀",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-exposition",
          title: "Présenter son art",
          description: "Exposition et communication",
          duration: 25,
          difficulty: "advanced",
          emoji: "🎪",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-innovation-technique",
          title: "Innovation technique",
          description: "Nouvelles approches artistiques",
          duration: 30,
          difficulty: "advanced",
          emoji: "🔬",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "arts-enseignement",
          title: "Enseigner l'art",
          description: "Partager ses connaissances",
          duration: 28,
          difficulty: "advanced",
          emoji: "👨‍🏫",
          isCompleted: false,
          isLocked: true
        }
      ]
    }
  ];