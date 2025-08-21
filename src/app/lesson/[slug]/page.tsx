'use client';
import { useParams } from 'next/navigation';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { useState } from 'react';

interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string[];
  exercises: Array<{
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }>;
}

const lessonData: Record<string, Lesson> = {
  'anglais-alphabet': {
    id: '1',
    title: "L'alphabet anglais",
    description: "Apprenez à prononcer les 26 lettres de l'alphabet anglais",
    content: [
      "L'alphabet anglais compte 26 lettres, de A à Z.",
      "Chaque lettre a un nom et un son.",
      "Les lettres peuvent être majuscules (A, B, C) ou minuscules (a, b, c).",
      "L'ordre de l'alphabet est important pour organiser les mots.",
      "Certaines lettres se prononcent différemment selon leur position dans le mot."
    ],
    exercises: [
      {
        question: "Combien y a-t-il de lettres dans l'alphabet anglais ?",
        options: ["24", "25", "26", "27"],
        correctAnswer: 2,
        explanation: "L'alphabet anglais compte exactement 26 lettres."
      },
      {
        question: "Quelle est la première lettre de l'alphabet ?",
        options: ["B", "A", "C", "D"],
        correctAnswer: 1,
        explanation: "La lettre A est la première lettre de l'alphabet."
      }
    ]
  },
  'arabe-alphabet': {
    id: '1',
    title: "L'alphabet arabe",
    description: "Apprenez les 28 lettres de l'alphabet arabe",
    content: [
      "L'alphabet arabe compte 28 lettres.",
      "L'arabe s'écrit de droite à gauche.",
      "Chaque lettre peut avoir plusieurs formes selon sa position.",
      "Les lettres se connectent entre elles pour former des mots.",
      "L'alphabet arabe est utilisé dans de nombreux pays."
    ],
    exercises: [
      {
        question: "Combien y a-t-il de lettres dans l'alphabet arabe ?",
        options: ["26", "27", "28", "29"],
        correctAnswer: 2,
        explanation: "L'alphabet arabe compte 28 lettres."
      },
      {
        question: "Dans quelle direction s'écrit l'arabe ?",
        options: ["De gauche à droite", "De droite à gauche", "De haut en bas", "De bas en haut"],
        correctAnswer: 1,
        explanation: "L'arabe s'écrit de droite à gauche."
      }
    ]
  },
  'math-nombres-1-20': {
    id: '1',
    title: "Compter jusqu'à 20",
    description: "Apprenez à compter et reconnaître les nombres de 1 à 20",
    content: [
      "Les nombres de 1 à 20 sont la base des mathématiques.",
      "Chaque nombre a un nom unique et une valeur spécifique.",
      "On peut compter en avant (1, 2, 3...) ou en arrière (20, 19, 18...).",
      "Les nombres pairs se terminent par 0, 2, 4, 6, 8.",
      "Les nombres impairs se terminent par 1, 3, 5, 7, 9."
    ],
    exercises: [
      {
        question: "Quel nombre vient après 15 ?",
        options: ["14", "16", "17", "18"],
        correctAnswer: 1,
        explanation: "Après 15 vient 16."
      },
      {
        question: "Combien y a-t-il de nombres pairs entre 1 et 20 ?",
        options: ["8", "9", "10", "11"],
        correctAnswer: 2,
        explanation: "Il y a 10 nombres pairs : 2, 4, 6, 8, 10, 12, 14, 16, 18, 20."
      }
    ]
  },
  'math-addition-simple': {
    id: '2',
    title: "Addition simple",
    description: "Additionner des nombres de 1 à 10 avec des objets visuels",
    content: [
      "L'addition, c'est mettre ensemble deux ou plusieurs quantités.",
      "Le signe + signifie 'plus' ou 'ajouter'.",
      "Le résultat s'appelle la somme.",
      "On peut additionner dans n'importe quel ordre : 3 + 2 = 2 + 3.",
      "L'addition de 0 ne change rien : 5 + 0 = 5."
    ],
    exercises: [
      {
        question: "Combien font 4 + 3 ?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        explanation: "4 + 3 = 7"
      },
      {
        question: "Quelle est la somme de 6 + 0 ?",
        options: ["0", "6", "7", "12"],
      correctAnswer: 1,
      explanation: "6 + 0 = 6, car ajouter 0 ne change rien."
      }
    ]
  },
  'francais-alphabet': {
  id: '1',
  title: "L'alphabet français",
  description: "Les 26 lettres et leurs sons de base",
  content: [
    "L'alphabet français compte 26 lettres, de A à Z.",
    "Chaque lettre a un nom et un son spécifique.",
    "Les lettres peuvent être majuscules (A, B, C) ou minuscules (a, b, c).",
    "L'ordre de l'alphabet est important pour organiser les mots.",
    "Certaines lettres se prononcent différemment selon leur position."
  ],
  exercises: [
    {
      question: "Combien y a-t-il de lettres dans l'alphabet français ?",
      options: ["24", "25", "26", "27"],
      correctAnswer: 2,
      explanation: "L'alphabet français compte exactement 26 lettres."
    },
    {
      question: "Quelle est la première lettre de l'alphabet ?",
      options: ["B", "A", "C", "D"],
      correctAnswer: 1,
      explanation: "La lettre A est la première lettre de l'alphabet."
    }
  ]
},
'francais-lecture-base': {
  id: '2',
  title: "Lecture de base",
  description: "Premiers mots et phrases simples",
  content: [
    "La lecture commence par la reconnaissance des lettres.",
    "Ensuite, on forme des syllabes en combinant les lettres.",
    "Les syllabes forment des mots simples.",
    "Les mots forment des phrases courtes.",
    "La lecture régulière améliore la compréhension."
  ],
  exercises: [
    {
      question: "Qu'est-ce qu'une syllabe ?",
      options: ["Une lettre", "Un groupe de lettres", "Un mot", "Une phrase"],
      correctAnswer: 1,
      explanation: "Une syllabe est un groupe de lettres qui se prononce ensemble."
    },
    {
      question: "Comment commence-t-on à lire ?",
      options: ["Par les phrases", "Par les mots", "Par les syllabes", "Par les lettres"],
      correctAnswer: 3,
      explanation: "On commence par reconnaître les lettres individuelles."
    }
  ]
},
'sciences-plantes': {
  id: '1',
  title: "Les plantes",
  description: "Comment poussent les plantes et les fleurs",
  content: [
    "Les plantes sont des êtres vivants qui fabriquent leur propre nourriture.",
    "Elles ont besoin de lumière, d'eau et de nutriments pour grandir.",
    "La photosynthèse permet aux plantes de transformer la lumière en énergie.",
    "Les racines absorbent l'eau et les nutriments du sol.",
    "Les feuilles captent la lumière du soleil pour la photosynthèse."
  ],
  exercises: [
    {
      question: "De quoi ont besoin les plantes pour grandir ?",
      options: ["Seulement d'eau", "Seulement de lumière", "Lumière, eau et nutriments", "Seulement de nutriments"],
      correctAnswer: 2,
      explanation: "Les plantes ont besoin de lumière, d'eau et de nutriments pour grandir."
    },
    {
      question: "Qu'est-ce que la photosynthèse ?",
      options: ["La respiration des plantes", "La transformation de la lumière en énergie", "La croissance des racines", "La formation des fleurs"],
      correctAnswer: 1,
      explanation: "La photosynthèse permet aux plantes de transformer la lumière en énergie."
    }
  ]
},
'sciences-terre': {
  id: '2',
  title: "La Terre",
  description: "Notre planète et ses merveilles",
  content: [
    "La Terre est la troisième planète du système solaire.",
    "Elle est recouverte à 70% d'eau et à 30% de terres.",
    "L'atmosphère terrestre nous protège des rayons du soleil.",
    "La Terre tourne sur elle-même en 24 heures (jour et nuit).",
    "Elle tourne autour du soleil en 365 jours (une année)."
  ],
  exercises: [
    {
      question: "Combien de temps met la Terre pour tourner sur elle-même ?",
      options: ["12 heures", "24 heures", "48 heures", "72 heures"],
      correctAnswer: 1,
      explanation: "La Terre met 24 heures pour faire un tour complet sur elle-même."
    },
    {
      question: "Quel pourcentage de la Terre est recouvert d'eau ?",
      options: ["30%", "50%", "70%", "90%"],
      correctAnswer: 2,
      explanation: "La Terre est recouverte à 70% d'eau."
    }
  ]
},
'informatique-ordinateur': {
  id: '1',
  title: "Qu'est-ce qu'un ordinateur ?",
  description: "Découvrir les composants de base d'un ordinateur",
  content: [
    "Un ordinateur est une machine qui traite l'information automatiquement.",
    "Il se compose de plusieurs parties : processeur, mémoire, disque dur, écran.",
    "Le processeur est le cerveau qui exécute les instructions.",
    "La mémoire stocke temporairement les informations en cours d'utilisation.",
    "Le disque dur garde toutes les données de manière permanente."
  ],
  exercises: [
    {
      question: "Quel est le rôle du processeur ?",
      options: ["Afficher les images", "Exécuter les instructions", "Stocker les données", "Connecter à internet"],
      correctAnswer: 1,
      explanation: "Le processeur est le cerveau qui exécute les instructions."
    },
    {
      question: "Où sont stockées les données de manière permanente ?",
      options: ["Dans la mémoire", "Dans le processeur", "Dans le disque dur", "Dans l'écran"],
      correctAnswer: 2,
      explanation: "Le disque dur garde toutes les données de manière permanente."
    }
  ]
},
'informatique-clavier-souris': {
  id: '2',
  title: "Le clavier et la souris",
  description: "Apprendre à utiliser les périphériques d'entrée",
  content: [
    "Le clavier permet de taper du texte et des commandes.",
    "La souris permet de pointer et cliquer sur l'écran.",
    "Le clavier a des touches pour les lettres, chiffres et symboles.",
    "La souris a généralement deux boutons (gauche et droit).",
    "Ces périphériques sont essentiels pour interagir avec l'ordinateur."
  ],
  exercises: [
    {
      question: "À quoi sert le clavier ?",
      options: ["Afficher des images", "Taper du texte", "Entendre du son", "Connecter à internet"],
      correctAnswer: 1,
      explanation: "Le clavier permet de taper du texte et des commandes."
    },
    {
      question: "Combien de boutons a généralement une souris ?",
      options: ["Un seul", "Deux (gauche et droit)", "Trois", "Aucun"],
      correctAnswer: 1,
      explanation: "La souris a généralement deux boutons : gauche et droit."
    }
  ]
},
'islam-piliers-islam': {
  id: '1',
  title: "Les piliers de l'Islam",
  description: "Les cinq piliers fondamentaux de la religion musulmane",
  content: [
    "L'Islam repose sur cinq piliers fondamentaux qui structurent la vie du musulman.",
    "Le premier pilier est la Chahada (profession de foi).",
    "Le deuxième pilier est la Salat (prière) cinq fois par jour.",
    "Le troisième pilier est le Sawm (jeûne) pendant le mois de Ramadan.",
    "Le quatrième pilier est la Zakat (aumône) pour les plus démunis.",
    "Le cinquième pilier est le Hajj (pèlerinage) à La Mecque pour ceux qui le peuvent."
  ],
  exercises: [
    {
      question: "Combien y a-t-il de piliers de l'Islam ?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2,
      explanation: "Il y a exactement 5 piliers de l'Islam."
    },
    {
      question: "Quel est le premier pilier de l'Islam ?",
      options: ["La prière", "La profession de foi", "Le jeûne", "L'aumône"],
      correctAnswer: 1,
      explanation: "Le premier pilier est la Chahada (profession de foi)."
    }
  ]
},
'islam-profession-foi': {
  id: '2',
  title: "La profession de foi",
  description: "La Chahada et son importance",
  content: [
    "La Chahada est la déclaration de foi en Islam.",
    "Elle se dit : 'Ach-hadou an la ilaha illa Allah, wa ach-hadou anna Muhammadan rasoulou Allah'.",
    "Cela signifie : 'Je témoigne qu'il n'y a de divinité qu'Allah, et je témoigne que Muhammad est Son messager'.",
    "La Chahada est le premier pilier de l'Islam.",
    "Elle exprime la croyance en l'unicité d'Allah et en la prophétie de Muhammad.",
    "Cette déclaration est nécessaire pour devenir musulman."
  ],
  exercises: [
    {
      question: "Que signifie la Chahada ?",
      options: ["Une prière", "Une profession de foi", "Un verset du Coran", "Un hadith"],
      correctAnswer: 1,
      explanation: "La Chahada est la profession de foi en Islam."
    },
    {
      question: "Combien de témoignages contient la Chahada ?",
      options: ["Un seul", "Deux", "Trois", "Quatre"],
      correctAnswer: 1,
      explanation: "La Chahada contient deux témoignages : l'unicité d'Allah et la prophétie de Muhammad."
    }
  ]
},
'histoire-prophete-muhammad': {
  id: '1',
  title: "Le Prophète Muhammad",
  description: "La vie et le message du dernier prophète",
  content: [
    "Muhammad (صلى الله عليه وسلم) est né à La Mecque en 570 après Jésus-Christ.",
    "Il était orphelin de père et de mère dès son jeune âge.",
    "À 40 ans, il reçut sa première révélation de l'ange Gabriel.",
    "Il passa 23 ans à transmettre le message de l'Islam.",
    "Il est mort à Médine en 632 et est enterré dans la mosquée du Prophète.",
    "Il est considéré comme le dernier messager d'Allah pour l'humanité."
  ],
  exercises: [
    {
      question: "En quelle année le Prophète Muhammad est-il né ?",
      options: ["570", "580", "590", "600"],
      correctAnswer: 0,
      explanation: "Le Prophète Muhammad est né en 570 après Jésus-Christ."
    },
    {
      question: "À quel âge a-t-il reçu sa première révélation ?",
      options: ["30 ans", "35 ans", "40 ans", "45 ans"],
      correctAnswer: 2,
      explanation: "Il a reçu sa première révélation à l'âge de 40 ans."
    }
  ]
},
'histoire-naissance-islam': {
  id: '2',
  title: "La naissance de l'Islam",
  description: "Les premières révélations et la propagation",
  content: [
    "L'Islam est né avec la première révélation du Coran au Prophète Muhammad.",
    "Les premières révélations ont eu lieu dans la grotte de Hira.",
    "Le message principal était l'unicité d'Allah (Tawhid).",
    "Les premiers musulmans étaient la femme du Prophète Khadija et son cousin Ali.",
    "L'Islam s'est d'abord propagé dans la famille et les proches.",
    "Les révélations se sont étalées sur 23 ans."
  ],
  exercises: [
    {
      question: "Où ont eu lieu les premières révélations ?",
      options: ["Dans la mosquée", "Dans la grotte de Hira", "À la maison", "Dans la rue"],
      correctAnswer: 1,
      explanation: "Les premières révélations ont eu lieu dans la grotte de Hira."
    },
    {
      question: "Quel était le message principal des premières révélations ?",
      options: ["La prière", "Le jeûne", "L'unicité d'Allah", "L'aumône"],
      correctAnswer: 2,
      explanation: "Le message principal était l'unicité d'Allah (Tawhid)."
    }
  ]
},
'arts-dessin-basique': {
  id: 'arts-dessin-basique',
  title: 'Dessin de base',
  description: 'Apprendre à dessiner des formes simples et des animaux',
  content: [
    'Bienvenue dans votre première leçon de dessin !',
    'Nous allons commencer par les formes de base : cercle, carré, triangle.',
    'Pratiquez chaque forme plusieurs fois avant de passer à la suivante.',
    'Une fois à l\'aise avec les formes, nous dessinerons un chat simple.',
    'N\'oubliez pas : le dessin est une compétence qui s\'améliore avec la pratique !'
  ],
  exercises: [
    {
      question: 'Quelle forme est la plus facile à dessiner ?',
      options: ['Cercle', 'Carré', 'Triangle', 'Toutes sont faciles'],
      correctAnswer: 0,
      explanation: 'Le cercle est souvent la forme la plus naturelle à dessiner.'
    },
    {
      question: 'Combien de fois faut-il pratiquer chaque forme ?',
      options: ['1 fois', '2-3 fois', '5-10 fois', 'Jusqu\'à ce que ce soit parfait'],
      correctAnswer: 2,
      explanation: 'La répétition aide à améliorer la coordination et la confiance.'
    }
  ]
},
'arts-couleurs-primaires': {
  id: 'arts-couleurs-primaires',
  title: 'Les couleurs primaires',
  description: 'Découvrir et mélanger les couleurs de base',
  content: [
    'Les couleurs primaires sont : rouge, bleu et jaune.',
    'Ces trois couleurs peuvent créer toutes les autres couleurs.',
    'Mélangez rouge + bleu = violet',
    'Mélangez bleu + jaune = vert',
    'Mélangez rouge + jaune = orange',
    'Expérimentez avec différentes proportions !'
  ],
  exercises: [
    {
      question: 'Combien y a-t-il de couleurs primaires ?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 1,
      explanation: 'Il y a exactement 3 couleurs primaires : rouge, bleu et jaune.'
    },
    {
      question: 'Que donne le mélange de rouge et bleu ?',
      options: ['Vert', 'Orange', 'Violet', 'Marron'],
      correctAnswer: 2,
      explanation: 'Rouge + bleu = violet, c\'est une des combinaisons de base.'
    }
  ]
},
'bien-etre-respiration': {
  id: 'bien-etre-respiration',
  title: 'Respiration calme',
  description: 'Apprendre à respirer calmement et se détendre',
  content: [
    'Bienvenue dans votre leçon de respiration !',
    'La respiration est la base de la relaxation et du calme.',
    'Asseyez-vous confortablement et fermez les yeux.',
    'Inspirez lentement par le nez en comptant jusqu\'à 4.',
    'Retenez votre souffle en comptant jusqu\'à 2.',
    'Expirez lentement par la bouche en comptant jusqu\'à 6.',
    'Répétez 5 fois et sentez la détente s\'installer.'
  ],
  exercises: [
    {
      question: 'Combien de temps faut-il inspirer ?',
      options: ['2 secondes', '4 secondes', '6 secondes', '8 secondes'],
      correctAnswer: 1,
      explanation: 'Inspirez pendant 4 secondes pour une respiration équilibrée.'
    },
    {
      question: 'Combien de fois faut-il répéter l\'exercice ?',
      options: ['2 fois', '5 fois', '10 fois', 'Autant que nécessaire'],
      correctAnswer: 1,
      explanation: '5 répétitions permettent de bien ressentir les effets de la relaxation.'
    }
  ]
},
'bien-etre-emotions': {
  id: 'bien-etre-emotions',
  title: 'Reconnaître les émotions',
  description: 'Identifier et exprimer ses sentiments',
  content: [
    'Les émotions sont comme des couleurs dans notre cœur.',
    'Il y a 4 émotions principales : joie, tristesse, colère, peur.',
    'Chaque émotion nous donne des informations importantes.',
    'La joie nous dit que quelque chose nous plaît.',
    'La tristesse nous aide à comprendre ce qui nous manque.',
    'La colère nous protège quand on se sent menacé.',
    'La peur nous avertit des dangers.',
    'Toutes les émotions sont normales et utiles !'
  ],
  exercises: [
    {
      question: 'Combien y a-t-il d\'émotions principales ?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 2,
      explanation: 'Il y a 4 émotions principales : joie, tristesse, colère et peur.'
    },
    {
      question: 'Quelle émotion nous aide à comprendre ce qui nous manque ?',
      options: ['Joie', 'Tristesse', 'Colère', 'Peur'],
      correctAnswer: 1,
      explanation: 'La tristesse nous aide à identifier ce qui nous manque ou ce qui nous dérange.'
    }
  ]
}
};

export default function LessonPage() {
  const params = useParams();
  const lessonSlug = params.slug as string;
  const lesson = lessonData[lessonSlug];
  const [currentExercise, setCurrentExercise] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  if (!lesson) {
    return (
      <>
        <Navigation />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Leçon non trouvée</h1>
            <p className="text-slate-600 mb-8">Cette leçon n'existe pas encore.</p>
            <a
              href="/subject"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Retour aux matières
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleExerciseSubmit = () => {
    if (selectedAnswer !== null) {
      setShowAnswer(true);
    }
  };

  const handleNextExercise = () => {
    if (currentExercise < lesson.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setShowAnswer(false);
      setSelectedAnswer(null);
    }
  };

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <a
                href="/subject"
                className="text-blue-600 hover:text-blue-800 flex items-center mb-4"
              >
                ← Retour aux matières
              </a>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{lesson.title}</h1>
            <p className="text-xl text-slate-600 mb-8">{lesson.description}</p>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contenu de la leçon</h2>
            
            <div className="space-y-6 mb-12">
              {lesson.content.map((paragraph, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">{paragraph}</p>
                </div>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="bg-blue-50 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-800">Progression</span>
                <span className="text-sm text-blue-600">1/1 leçon</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Exercises */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Exercices</h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <span className="text-sm text-slate-500">
                  Exercice {currentExercise + 1} sur {lesson.exercises.length}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                {lesson.exercises[currentExercise].question}
              </h3>

              <div className="space-y-3 mb-6">
                {lesson.exercises[currentExercise].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAnswer(index)}
                    disabled={showAnswer}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      selectedAnswer === index
                        ? showAnswer
                          ? index === lesson.exercises[currentExercise].correctAnswer
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                          : 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {!showAnswer ? (
                <button
                  onClick={handleExerciseSubmit}
                  disabled={selectedAnswer === null}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    selectedAnswer === null
                      ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Valider la réponse
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-slate-700">
                      <strong>Explication :</strong> {lesson.exercises[currentExercise].explanation}
                    </p>
                  </div>
                  
                  {currentExercise < lesson.exercises.length - 1 ? (
                    <button
                      onClick={handleNextExercise}
                      className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                    >
                      Exercice suivant
                    </button>
                  ) : (
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎉</div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        Félicitations !
                      </h3>
                      <p className="text-slate-600 mb-6">
                        Vous avez terminé tous les exercices de cette leçon.
                      </p>
                      <a
                        href="/subject"
                        className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                      >
                        Retour aux matières
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}