// src/lib/data.ts

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  levels: Level[];
}

export interface Level {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'débutant' | 'intermédiaire' | 'avancé';
}

export const subjects: Subject[] = [
  {
    id: 'arabe',
    name: 'Arabe',
    icon: '📚',
    color: 'bg-emerald-500',
    description: 'Apprentissage de la langue arabe et de la culture islamique',
    categories: [
      {
        id: 'alphabet',
        name: 'Alphabet & Lecture',
        description: 'Maîtrise de l\'alphabet arabe et de la lecture',
        levels: [
          {
            id: 'maternelle',
            name: 'Maternelle',
            ageRange: '3-6 ans',
            description: 'Découverte des lettres et sons de base',
            lessons: [
              { id: 'alif-ba-ta', title: 'Alif-Bâ-Tâ', description: 'Les premières lettres', duration: '15 min', difficulty: 'débutant' },
              { id: 'voyelles', title: 'Les Voyelles', description: 'Apprendre les voyelles courtes', duration: '20 min', difficulty: 'débutant' }
            ]
          },
          {
            id: 'cp',
            name: 'CP',
            ageRange: '6-7 ans',
            description: 'Lecture et écriture de base',
            lessons: [
              { id: 'mots-simples', title: 'Mots Simples', description: 'Formation des premiers mots', duration: '25 min', difficulty: 'débutant' },
              { id: 'phrases', title: 'Premières Phrases', description: 'Construction de phrases simples', duration: '30 min', difficulty: 'intermédiaire' }
            ]
          }
        ]
      },
      {
        id: 'vocabulaire',
        name: 'Vocabulaire',
        description: 'Enrichissement du vocabulaire arabe',
        levels: [
          {
            id: 'quotidien',
            name: 'Quotidien',
            ageRange: '7-10 ans',
            description: 'Mots de la vie quotidienne',
            lessons: [
              { id: 'famille', title: 'La Famille', description: 'Noms des membres de la famille', duration: '20 min', difficulty: 'débutant' },
              { id: 'maison', title: 'La Maison', description: 'Objets et pièces de la maison', duration: '25 min', difficulty: 'débutant' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'francais',
    name: 'Français',
    icon: '🇫🇷',
    color: 'bg-blue-500',
    description: 'Maîtrise de la langue française et de la littérature',
    categories: [
      {
        id: 'lecture',
        name: 'Lecture',
        description: 'Apprentissage de la lecture et compréhension',
        levels: [
          {
            id: 'cp',
            name: 'CP',
            ageRange: '6-7 ans',
            description: 'Début de la lecture',
            lessons: [
              { id: 'sons-a-i', title: 'Sons [a]/[i]', description: 'Reconnaissance des sons', duration: '20 min', difficulty: 'débutant' },
              { id: 'syllabes', title: 'Les Syllabes', description: 'Formation des syllabes', duration: '25 min', difficulty: 'débutant' }
            ]
          },
          {
            id: 'ce1',
            name: 'CE1',
            ageRange: '7-8 ans',
            description: 'Lecture fluide et compréhension',
            lessons: [
              { id: 'histoires', title: 'Petites Histoires', description: 'Lecture de textes courts', duration: '30 min', difficulty: 'intermédiaire' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'anglais',
    name: 'Anglais',
    icon: '🇬🇧',
    color: 'bg-red-500',
    description: 'Apprentissage de l\'anglais international',
    categories: [
      {
        id: 'communication',
        name: 'Communication',
        description: 'Expression orale et écrite en anglais',
        levels: [
          {
            id: 'a1',
            name: 'Niveau A1',
            ageRange: '8-12 ans',
            description: 'Premiers pas en anglais',
            lessons: [
              { id: 'greetings', title: 'Greetings & Colors', description: 'Salutations et couleurs', duration: '25 min', difficulty: 'débutant' },
              { id: 'numbers', title: 'Numbers 1-20', description: 'Les nombres de 1 à 20', duration: '20 min', difficulty: 'débutant' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'informatique',
    name: 'Informatique',
    icon: '💻',
    color: 'bg-purple-500',
    description: 'Initiation à l\'informatique et au numérique',
    categories: [
      {
        id: 'bases',
        name: 'Bases Numériques',
        description: 'Fondamentaux de l\'informatique',
        levels: [
          {
            id: 'debutant',
            name: 'Débutant',
            ageRange: '6-10 ans',
            description: 'Premiers pas avec l\'ordinateur',
            lessons: [
              { id: 'souris-clavier', title: 'Souris & Clavier', description: 'Maîtrise des périphériques', duration: '30 min', difficulty: 'débutant' },
              { id: 'interface', title: 'L\'Interface', description: 'Navigation dans l\'ordinateur', duration: '25 min', difficulty: 'débutant' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'maths',
    name: 'Mathématiques',
    icon: '🔢',
    color: 'bg-orange-500',
    description: 'Logique mathématique et résolution de problèmes',
    categories: [
      {
        id: 'calcul',
        name: 'Calcul',
        description: 'Opérations mathématiques de base',
        levels: [
          {
            id: 'ce1',
            name: 'CE1',
            ageRange: '7-8 ans',
            description: 'Additions et soustractions',
            lessons: [
              { id: 'additions-20', title: 'Additions jusqu\'à 20', description: 'Calcul mental des additions', duration: '25 min', difficulty: 'débutant' },
              { id: 'soustractions', title: 'Soustractions simples', description: 'Apprendre à soustraire', duration: '30 min', difficulty: 'intermédiaire' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sciences',
    name: 'Sciences',
    icon: '🔬',
    color: 'bg-green-500',
    description: 'Découverte du monde scientifique',
    categories: [
      {
        id: 'nature',
        name: 'Sciences Naturelles',
        description: 'Observation et compréhension de la nature',
        levels: [
          {
            id: 'ce2',
            name: 'CE2',
            ageRange: '8-9 ans',
            description: 'Exploration de l\'environnement',
            lessons: [
              { id: 'plantes', title: 'Le Monde des Plantes', description: 'Découverte de la botanique', duration: '35 min', difficulty: 'débutant' },
              { id: 'animaux', title: 'Les Animaux', description: 'Classification des animaux', duration: '40 min', difficulty: 'intermédiaire' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'histoire-islam',
    name: 'Histoire de l\'Islam',
    icon: '🕌',
    color: 'bg-teal-500',
    description: 'Découverte de l\'histoire islamique et des valeurs',
    categories: [
      {
        id: 'prophètes',
        name: 'Les Prophètes',
        description: 'Vie et enseignements des prophètes',
        levels: [
          {
            id: 'enfants',
            name: 'Pour les Enfants',
            ageRange: '6-12 ans',
            description: 'Histoires adaptées aux enfants',
            lessons: [
              { id: 'naissance-prophete', title: 'Naissance du Prophète ﷺ', description: 'L\'histoire de la naissance', duration: '30 min', difficulty: 'débutant' },
              { id: 'enfance-prophete', title: 'L\'Enfance du Prophète ﷺ', description: 'Les premières années', duration: '35 min', difficulty: 'débutant' }
            ]
          }
        ]
      }
    ]
  }
];

