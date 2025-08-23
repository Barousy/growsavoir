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

export const mathLevels: Level[] = [
  {
    id: 1,
    name: "Niveau 1 - Fondamentaux",
    description: "Bases des mathématiques",
    lessonCount: 6,
    color: "bg-green-500",
    lessons: [
      {
        id: "math-nombres-1-100",
        title: "Nombres de 1 à 100",
        description: "Compter et écrire les nombres",
        duration: 15,
        difficulty: "beginner",
        emoji: "🔢",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "math-addition-simple",
        title: "Addition simple",
        description: "Additionner jusqu'à 10",
        duration: 18,
        difficulty: "beginner",
        emoji: "➕",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "math-soustraction-simple",
        title: "Soustraction simple",
        description: "Soustraire jusqu'à 10",
        duration: 18,
        difficulty: "beginner",
        emoji: "➖",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "math-formes-geometriques",
        title: "Formes géométriques",
        description: "Carré, cercle, triangle, rectangle",
        duration: 20,
        difficulty: "beginner",
        emoji: "🔷",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "math-mesures-simples",
        title: "Mesures simples",
        description: "Longueur, poids, temps",
        duration: 22,
        difficulty: "beginner",
        emoji: "📏",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "math-problemes-simples",
        title: "Problèmes simples",
        description: "Résoudre des problèmes simples",
        duration: 25,
        difficulty: "beginner",
        emoji: "💭",
        isCompleted: false,
        isLocked: false
      }
    ]
  },
  {
    id: 2,
    name: "Niveau 2 - Intermédiaire",
    description: "Opérations et concepts avancés",
    lessonCount: 6,
    color: "bg-blue-500",
    lessons: [
      {
        id: "math-nombres-1-100",
        title: "Nombres de 1 à 100",
        description: "Compter et manipuler les nombres",
        duration: 20,
        difficulty: "intermediate",
        emoji: "🔢",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-multiplication-basique",
        title: "Multiplication basique",
        description: "Tables de multiplication 2-5",
        duration: 25,
        difficulty: "intermediate",
        emoji: "✖️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-division-simple",
        title: "Division simple",
        description: "Division avec reste",
        duration: 28,
        difficulty: "intermediate",
        emoji: "➗",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-fractions-simples",
        title: "Fractions simples",
        description: "Demi, tiers, quarts",
        duration: 30,
        difficulty: "intermediate",
        emoji: "🍕",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-geometrie-avancee",
        title: "Géométrie avancée",
        description: "Périmètre, aire, volume",
        duration: 32,
        difficulty: "intermediate",
        emoji: "📐",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-problemes-complexes",
        title: "Problèmes complexes",
        description: "Multi-étapes et logique",
        duration: 35,
        difficulty: "intermediate",
        emoji: "🧩",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 3,
    name: "Niveau 3 - Avancé",
    description: "Concepts mathématiques avancés",
    lessonCount: 6,
    color: "bg-yellow-500",
    lessons: [
      {
        id: "math-nombres-decimaux",
        title: "Nombres décimaux",
        description: "Addition, soustraction, multiplication",
        duration: 30,
        difficulty: "advanced",
        emoji: "🔢",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-pourcentages",
        title: "Pourcentages",
        description: "Calculs et applications",
        duration: 28,
        difficulty: "advanced",
        emoji: "💯",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-algebre-basique",
        title: "Algèbre basique",
        description: "Équations simples",
        duration: 35,
        difficulty: "advanced",
        emoji: "📊",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-statistiques",
        title: "Statistiques",
        description: "Moyenne, médiane, mode",
        duration: 32,
        difficulty: "advanced",
        emoji: "📈",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-geometrie-3d",
        title: "Géométrie 3D",
        description: "Solides et volumes",
        duration: 38,
        difficulty: "advanced",
        emoji: "🔲",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-logique-math",
        title: "Logique mathématique",
        description: "Raisonnement et preuves",
        duration: 40,
        difficulty: "advanced",
        emoji: "🧠",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 4,
    name: "Niveau 4 - Expert",
    description: "Mathématiques avancées et applications",
    lessonCount: 6,
    color: "bg-red-500",
    lessons: [
      {
        id: "math-trigonometrie",
        title: "Trigonometrie",
        description: "Sinus, cosinus, tangente",
        duration: 45,
        difficulty: "advanced",
        emoji: "📐",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-calcul-differentiel",
        title: "Calcul différentiel",
        description: "Dérivées et applications",
        duration: 50,
        difficulty: "advanced",
        emoji: "📊",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-probabilites",
        title: "Probabilités",
        description: "Théorie et applications",
        duration: 42,
        difficulty: "advanced",
        emoji: "🎲",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-geometrie-analytique",
        title: "Géométrie analytique",
        description: "Coordonnées et équations",
        duration: 48,
        difficulty: "advanced",
        emoji: "📏",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-arithmetique-avancee",
        title: "Arithmétique avancée",
        description: "Nombres premiers, PGCD, PPCM",
        duration: 44,
        difficulty: "advanced",
        emoji: "🔢",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "math-applications-reelles",
        title: "Applications réelles",
        description: "Mathématiques dans la vie quotidienne",
        duration: 46,
        difficulty: "advanced",
        emoji: "🌍",
        isCompleted: false,
        isLocked: true
      }
    ]
  }
];