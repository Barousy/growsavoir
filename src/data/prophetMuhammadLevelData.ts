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
  
  export const prophetMuhammadLevels: Level[] = [
    {
      id: 1,
      name: "Niveau 1 - Fondamentaux",
      description: "Enfance, jeunesse et début de la mission",
      lessonCount: 8,
      color: "bg-green-500",
      lessons: [
        {
          id: "muhammad-naissance-famille",
          title: "Naissance et famille",
          description: "Naissance à La Mecque, famille Quraysh, généalogie",
          duration: 25,
          difficulty: "beginner",
          emoji: "👶",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "muhammad-enfance-orphan",
          title: "Enfance et orphelin",
          description: "Mort du père, de la mère, élevé par son grand-père puis son oncle",
          duration: 22,
          difficulty: "beginner",
          emoji: "👴",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "muhammad-jeunesse-travail",
          title: "Jeunesse et travail",
          description: "Berger, commerçant, voyage en Syrie avec Abu Talib",
          duration: 20,
          difficulty: "beginner",
          emoji: "🐑",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "muhammad-mariage-khadija",
          title: "Mariage avec Khadija",
          description: "Proposition de mariage, vie conjugale, enfants",
          duration: 18,
          difficulty: "beginner",
          emoji: "💍",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "muhammad-grotte-hira",
          title: "La grotte de Hira",
          description: "Retraites spirituelles, méditation, préparation",
          duration: 24,
          difficulty: "beginner",
          emoji: "🏔️",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "muhammad-premiere-revelation",
          title: "Première révélation",
          description: "Jibril, Iqra, retour auprès de Khadija",
          duration: 26,
          difficulty: "beginner",
          emoji: "📖",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "muhammad-premiers-musulmans",
          title: "Les premiers musulmans",
          description: "Khadija, Ali, Abu Bakr, Zayd ibn Haritha",
          duration: 28,
          difficulty: "beginner",
          emoji: "👥",
          isCompleted: false,
          isLocked: false
        },
        {
          id: "muhammad-appel-public",
          title: "L'appel public",
          description: "Premier appel public, réactions des Quraysh",
          duration: 30,
          difficulty: "beginner",
          emoji: "📢",
          isCompleted: false,
          isLocked: false
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Période mecquoise et persécution",
      lessonCount: 8,
      color: "bg-blue-500",
      lessons: [
        {
          id: "muhammad-persecution-quraysh",
          title: "Persécution des Quraysh",
          description: "Tortures, boycott, pressions sur les musulmans",
          duration: 32,
          difficulty: "intermediate",
          emoji: "😰",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-emigration-abyssinie",
          title: "Émigration en Abyssinie",
          description: "Première et deuxième émigration, protection du Négus",
          duration: 28,
          difficulty: "intermediate",
          emoji: "🚢",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-annee-tristesse",
          title: "L'année de tristesse",
          description: "Mort d'Abu Talib et de Khadija, difficultés",
          duration: 25,
          difficulty: "intermediate",
          emoji: "😢",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-voyage-tayf",
          title: "Voyage à Ta'if",
          description: "Mission à Ta'if, rejet et lapidation",
          duration: 22,
          difficulty: "intermediate",
          emoji: "🏃",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-isra-miraj",
          title: "Al-Isra et Al-Mi'raj",
          description: "Voyage nocturne à Jérusalem et ascension au ciel",
          duration: 35,
          difficulty: "intermediate",
          emoji: "🕊️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-premiers-ansars",
          title: "Les premiers Ansars",
          description: "Rencontre avec les tribus de Yathrib, serments d'Aqaba",
          duration: 30,
          difficulty: "intermediate",
          emoji: "🤝",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-complot-assassinat",
          title: "Complot d'assassinat",
          description: "Plan des Quraysh, Ali dans le lit du Prophète",
          duration: 26,
          difficulty: "intermediate",
          emoji: "🗡️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-hijra-madina",
          title: "L'Hijra vers Médine",
          description: "Fuite avec Abu Bakr, grotte de Thawr, arrivée à Yathrib",
          duration: 34,
          difficulty: "intermediate",
          emoji: "🏃",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Période médinoise et batailles",
      lessonCount: 8,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "muhammad-arrivee-madina",
          title: "Arrivée à Médine",
          description: "Accueil, construction de la mosquée, fraternisation",
          duration: 30,
          difficulty: "advanced",
          emoji: "🕌",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-constitution-madina",
          title: "Constitution de Médine",
          description: "Pacte avec les juifs et les tribus, organisation sociale",
          duration: 28,
          difficulty: "advanced",
          emoji: "📜",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-bataille-badr",
          title: "Bataille de Badr",
          description: "Première bataille, victoire miraculeuse, prisonniers",
          duration: 38,
          difficulty: "advanced",
          emoji: "⚔️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-bataille-uhud",
          title: "Bataille d'Uhud",
          description: "Défaite, blessure du Prophète, leçons tirées",
          duration: 35,
          difficulty: "advanced",
          emoji: "🛡️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-bataille-khandaq",
          title: "Bataille du Khandaq",
          description: "Fossé, coalition des ennemis, victoire divine",
          duration: 32,
          difficulty: "advanced",
          emoji: "🏗️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-traite-hudaybiya",
          title: "Traité de Hudaybiya",
          description: "Pèlerinage interrompu, traité de paix, victoire diplomatique",
          duration: 36,
          difficulty: "advanced",
          emoji: "📝",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-conquete-mecque",
          title: "Conquête de La Mecque",
          description: "Entrée triomphale, clémence, destruction des idoles",
          duration: 40,
          difficulty: "advanced",
          emoji: "🕋",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-bataille-hunayn",
          title: "Bataille de Hunayn",
          description: "Dernière résistance des tribus, victoire finale",
          duration: 30,
          difficulty: "advanced",
          emoji: "⚔️",
          isCompleted: false,
          isLocked: true
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Fin de vie, Compagnons et héritage",
      lessonCount: 8,
      color: "bg-red-500",
      lessons: [
        {
          id: "muhammad-pelerinage-adieu",
          title: "Pèlerinage d'adieu",
          description: "Dernier pèlerinage, sermon de l'adieu, instructions finales",
          duration: 45,
          difficulty: "advanced",
          emoji: "🕋",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-derniers-jours",
          title: "Les derniers jours",
          description: "Maladie, derniers conseils, décès",
          duration: 35,
          difficulty: "advanced",
          emoji: "🕊️",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-compagnons-majeurs",
          title: "Les Compagnons majeurs",
          description: "Abu Bakr, Umar, Uthman, Ali - vies détaillées",
          duration: 50,
          difficulty: "advanced",
          emoji: "👥",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-compagnons-femmes",
          title: "Les Compagnons femmes",
          description: "Aisha, Fatima, Khadija, autres femmes importantes",
          duration: 42,
          difficulty: "advanced",
          emoji: "👩",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-compagnons-jeunes",
          title: "Les Compagnons jeunes",
          description: "Ali, Zayd, Usama, autres jeunes Compagnons",
          duration: 38,
          difficulty: "advanced",
          emoji: "👦",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-enseignement-methodes",
          title: "Méthodes d'enseignement",
          description: "Comment le Prophète enseignait, exemples pratiques",
          duration: 40,
          difficulty: "advanced",
          emoji: "📚",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-heritage-spirituel",
          title: "Héritage spirituel",
          description: "Impact sur l'humanité, leçons pour aujourd'hui",
          duration: 45,
          difficulty: "advanced",
          emoji: "🌟",
          isCompleted: false,
          isLocked: true
        },
        {
          id: "muhammad-compagnons-heritiers",
          title: "Les Compagnons comme héritiers",
          description: "Comment ils ont préservé et transmis l'enseignement",
          duration: 48,
          difficulty: "advanced",
          emoji: "📖",
          isCompleted: false,
          isLocked: true
        }
      ]
    }
  ];