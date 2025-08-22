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
      name: "Niveau 1 - Débutant",
      description: "Nombres, comptage et opérations de base",
      lessonCount: 6,
      color: "bg-blue-500",
      lessons: [
        {
          id: "math-nombres-1-10",
          title: "Compter de 1 à 10",
          description: "Apprendre à compter et reconnaître les nombres",
          duration: 8,
          difficulty: "beginner",
          emoji: "🔢",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "math-addition-simple",
          title: "Addition simple",
          description: "Additionner des nombres jusqu'à 10",
          duration: 10,
          difficulty: "beginner",
          emoji: "➕",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "math-soustraction-simple",
          title: "Soustraction simple",
          description: "Soustraire des nombres jusqu'à 10",
          duration: 10,
          difficulty: "beginner",
          emoji: "➖",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "math-formes-geometriques",
          title: "Formes géométriques",
          description: "Carré, cercle, triangle et rectangle",
          duration: 7,
          difficulty: "beginner",
          emoji: "🔷",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "math-mesures-longueur",
          title: "Mesurer les longueurs",
          description: "Utiliser une règle et comparer les tailles",
          duration: 9,
          difficulty: "beginner",
          emoji: "📏",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "math-problemes-verbaux",
          title: "Problèmes verbaux simples",
          description: "Résoudre des problèmes du quotidien",
          duration: 12,
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
      description: "Opérations avancées et géométrie",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "math-nombres-100",
          title: "Nombres jusqu'à 100",
          description: "Compter et écrire les nombres à deux chiffres",
          duration: 8,
          difficulty: "intermediate",
          emoji: "🔢",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-multiplication-table",
          title: "Tables de multiplication",
          description: "Apprendre les tables de 2, 5 et 10",
          duration: 15,
          difficulty: "intermediate",
          emoji: "✖️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-division-simple",
          title: "Division simple",
          description: "Diviser par 2, 5 et 10",
          duration: 12,
          difficulty: "intermediate",
          emoji: "➗",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-perimetre-aire",
          title: "Périmètre et aire",
          description: "Calculer le périmètre et l'aire des formes",
          duration: 14,
          difficulty: "intermediate",
          emoji: "📐",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-fractions-simples",
          title: "Fractions simples",
          description: "Demi, tiers, quart et cinquième",
          duration: 16,
          difficulty: "intermediate",
          emoji: "🍕",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-graphiques",
          title: "Lire des graphiques",
          description: "Diagrammes en bâtons et camemberts",
          duration: 10,
          difficulty: "intermediate",
          emoji: "📊",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Algèbre et géométrie avancée",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "math-nombres-decimaux",
          title: "Nombres décimaux",
          description: "Additionner et soustraire des décimaux",
          duration: 12,
          difficulty: "advanced",
          emoji: "🔢",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-pourcentages",
          title: "Pourcentages",
          description: "Calculer et utiliser les pourcentages",
          duration: 14,
          difficulty: "advanced",
          emoji: "💯",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-equations-simples",
          title: "Équations simples",
          description: "Résoudre x + 5 = 12",
          duration: 16,
          difficulty: "advanced",
          emoji: "⚖️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-geometrie-3d",
          title: "Géométrie 3D",
          description: "Cube, sphère, pyramide et prisme",
          duration: 18,
          difficulty: "advanced",
          emoji: "🔲",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-statistiques",
          title: "Statistiques de base",
          description: "Moyenne, médiane et mode",
          duration: 15,
          difficulty: "advanced",
          emoji: "📈",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-probabilites",
          title: "Probabilités",
          description: "Chances et probabilités simples",
          duration: 13,
          difficulty: "advanced",
          emoji: "🎲",
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
          id: "math-algebre-avancee",
          title: "Algèbre avancée",
          description: "Systèmes d'équations et inéquations",
          duration: 20,
          difficulty: "advanced",
          emoji: "🔢",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-geometrie-analytique",
          title: "Géométrie analytique",
          description: "Coordonnées et équations de droites",
          duration: 18,
          difficulty: "advanced",
          emoji: "📊",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-trigonometrie",
          title: "Trigonométrie",
          description: "Sinus, cosinus et tangente",
          duration: 22,
          difficulty: "advanced",
          emoji: "📐",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-calcul-differentiel",
          title: "Calcul différentiel",
          description: "Dérivées et applications",
          duration: 25,
          difficulty: "advanced",
          emoji: "📈",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-probabilites-avancees",
          title: "Probabilités avancées",
          description: "Distributions et espérance",
          duration: 20,
          difficulty: "advanced",
          emoji: "🎲",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "math-applications-reelles",
          title: "Applications réelles",
          description: "Mathématiques dans la vie quotidienne",
          duration: 16,
          difficulty: "advanced",
          emoji: "🌍",
          isCompleted: false,
          isLocked: true
        }
      ]
    }
  ];