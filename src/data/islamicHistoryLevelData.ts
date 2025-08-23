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
export const islamicHistoryLevels: Level[] = [
  {
    id: 1,
    name: "Niveau 1 - Fondamentaux",
    description: "Histoire depuis la création jusqu'aux premiers prophètes",
    lessonCount: 6,
    color: "bg-green-500",
    lessons: [
      {
        id: "histoire-creation-univers",
        title: "La création de l'univers",
        description: "Depuis le début selon Ibn Kathir - Al-Bidayah wa An-Nihayah",
        duration: 20,
        difficulty: "beginner",
        emoji: "🌌",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "histoire-creation-anges",
        title: "La création des anges",
        description: "Nature, rôles et hiérarchie des anges selon Ibn Kathir",
        duration: 18,
        difficulty: "beginner",
        isCompleted: false,
        isLocked: false,
        emoji: "👼"
      },
      {
        id: "histoire-creation-jinn",
        title: "La création des Jinn",
        description: "Origine, nature et interactions avec les humains",
        duration: 16,
        difficulty: "beginner",
        emoji: "👻",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "histoire-creation-adam",
        title: "La création d'Adam",
        description: "Premier homme, premier prophète - détails complets",
        duration: 25,
        difficulty: "beginner",
        emoji: "👤",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "histoire-jardin-eden",
        title: "Le Jardin d'Éden",
        description: "Vie d'Adam et Hawwa, le premier péché",
        duration: 22,
        difficulty: "beginner",
        emoji: "🌳",
        isCompleted: false,
        isLocked: false
      },
      {
        id: "histoire-premiers-enfants",
        title: "Les premiers enfants d'Adam",
        description: "Qabil et Habil - premier meurtre de l'histoire",
        duration: 20,
        difficulty: "beginner",
        emoji: "👶",
        isCompleted: false,
        isLocked: false
      }
    ]
  },
  {
    id: 2,
    name: "Niveau 2 - Intermédiaire",
    description: "Histoire des prophètes et des peuples",
    lessonCount: 6,
    color: "bg-blue-500",
    lessons: [
      {
        id: "histoire-prophete-sheeth",
        title: "Le Prophète Sheeth (عليه السلام)",
        description: "Fils d'Adam et transmission du savoir",
        duration: 18,
        difficulty: "intermediate",
        emoji: "📚",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-idris",
        title: "Le Prophète Idris (عليه السلام)",
        description: "Premier à écrire avec un stylo",
        duration: 16,
        difficulty: "intermediate",
        emoji: "✏️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-nuh",
        title: "Le Prophète Nuh (عليه السلام)",
        description: "L'arche et le déluge - 950 ans de prédication",
        duration: 30,
        difficulty: "intermediate",
        emoji: "🚢",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-hud",
        title: "Le Prophète Hud (عليه السلام)",
        description: "Le peuple de 'Ad et leur destruction",
        duration: 25,
        difficulty: "intermediate",
        emoji: "🏜️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-salih",
        title: "Le Prophète Salih (عليه السلام)",
        description: "Le peuple de Thamud et la chamelle",
        duration: 24,
        difficulty: "intermediate",
        emoji: "🏔️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-ibrahim",
        title: "Le Prophète Ibrahim (عليه السلام)",
        description: "L'ami d'Allah, la Kaaba et les épreuves",
        duration: 35,
        difficulty: "intermediate",
        emoji: "🕋",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 3,
    name: "Niveau 3 - Avancé",
    description: "Histoire des prophètes rois et des événements majeurs",
    lessonCount: 6,
    color: "bg-yellow-500",
    lessons: [
      {
        id: "histoire-prophete-lut",
        title: "Le Prophète Lut (عليه السلام)",
        description: "Le peuple de Sodome et leur destruction",
        duration: 22,
        difficulty: "advanced",
        emoji: "🏘️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-ismail",
        title: "Le Prophète Isma'il (عليه السلام)",
        description: "Sacrifice, construction de la Kaaba",
        duration: 28,
        difficulty: "advanced",
        emoji: "🕋",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-ishaq",
        title: "Le Prophète Ishaq (عليه السلام)",
        description: "Fils d'Ibrahim et père de Ya'qub",
        duration: 20,
        difficulty: "advanced",
        emoji: "👨‍👦",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-yaqub",
        title: "Le Prophète Ya'qub (عليه السلام)",
        description: "Père des 12 tribus d'Israël",
        duration: 26,
        difficulty: "advanced",
        emoji: "��‍👧‍👦",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-yusuf",
        title: "Le Prophète Yusuf (عليه السلام)",
        description: "Le rêve, l'Égypte et la réconciliation",
        duration: 32,
        difficulty: "advanced",
        emoji: "👔",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-musa",
        title: "Le Prophète Musa (عليه السلام)",
        description: "La Torah, Pharaon, la libération d'Égypte",
        duration: 40,
        difficulty: "advanced",
        emoji: "📜",
        isCompleted: false,
        isLocked: true
      }
    ]
  },
  {
    id: 4,
    name: "Niveau 4 - Expert",
    description: "Histoire complète de l'Islam selon Ibn Kathir",
    lessonCount: 6,
    color: "bg-red-500",
    lessons: [
      {
        id: "histoire-prophete-dawud",
        title: "Le Prophète Dawud (عليه السلام)",
        description: "Roi et prophète, Zabur, Goliath",
        duration: 30,
        difficulty: "advanced",
        emoji: "👑",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-sulayman",
        title: "Le Prophète Sulayman (عليه السلام)",
        description: "Le roi sage, les djinns, la reine de Saba",
        duration: 35,
        difficulty: "advanced",
        emoji: "🐝",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-ayyub",
        title: "Le Prophète Ayyub (عليه السلام)",
        description: "La patience dans l'épreuve et la guérison",
        duration: 25,
        difficulty: "advanced",
        emoji: "💪",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-yunus",
        title: "Le Prophète Yunus (عليه السلام)",
        description: "Dans le ventre du poisson, Ninive",
        duration: 22,
        difficulty: "advanced",
        emoji: "🐋",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-isa",
        title: "Le Prophète Isa (عليه السلام)",
        description: "L'Évangile, les miracles, l'ascension",
        duration: 28,
        difficulty: "advanced",
        emoji: "✝️",
        isCompleted: false,
        isLocked: true
      },
      {
        id: "histoire-prophete-yahya",
        title: "Le Prophète Yahya (عليه السلام)",
        description: "Précurseur d'Isa, la prédication",
        duration: 20,
        difficulty: "advanced",
        emoji: "🕊️",
        isCompleted: false,
        isLocked: true
      }
    ]
  }
];