
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
    // Niveau 1 - Débutant
    'alphabet': {
      id: '1',
      title: 'L\'alphabet anglais',
      description: 'Apprenez à prononcer les 26 lettres de l\'alphabet anglais',
      content: [
        'Bienvenue dans votre première leçon d\'anglais !',
        'Aujourd\'hui, nous allons apprendre l\'alphabet anglais.',
        'L\'alphabet anglais a 26 lettres, comme l\'alphabet français.',
        'Voici les lettres : A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.',
        'Chaque lettre a sa propre prononciation en anglais.',
        'Répétez après moi : A (éi), B (bi), C (si), D (di), E (i)...'
      ],
      exercises: [
        {
          question: 'Combien de lettres y a-t-il dans l\'alphabet anglais ?',
          options: ['24', '25', '26', '27'],
          correctAnswer: 2,
          explanation: 'Exactement ! L\'alphabet anglais compte 26 lettres.'
        },
        {
          question: 'Quelle est la première lettre de l\'alphabet anglais ?',
          options: ['B', 'A', 'C', 'D'],
          correctAnswer: 1,
          explanation: 'Parfait ! "A" est la première lettre de l\'alphabet.'
        },
        {
          question: 'Comment se prononce la lettre "A" en anglais ?',
          options: ['Ah', 'Éi', 'A', 'Euh'],
          correctAnswer: 1,
          explanation: 'Exactement ! En anglais, "A" se prononce "éi".'
        }
      ]
    },
    'greetings': {
      id: '2',
      title: 'Salutations de base',
      description: 'Hello, Good morning, How are you? et plus encore',
      content: [
        'Bienvenue dans la leçon sur les salutations !',
        'Les salutations sont très importantes en anglais.',
        'Voici les salutations de base :',
        '- Hello = Bonjour (formel et informel)',
        '- Hi = Salut (informel)',
        '- Good morning = Bonjour (matin)',
        '- Good afternoon = Bonjour (après-midi)',
        '- Good evening = Bonsoir',
        '- How are you? = Comment allez-vous ?',
        '- I\'m fine, thank you = Je vais bien, merci'
      ],
      exercises: [
        {
          question: 'Comment dit-on "Bonjour" en anglais ?',
          options: ['Goodbye', 'Hello', 'Thank you', 'Please'],
          correctAnswer: 1,
          explanation: 'Exactement ! "Hello" signifie "Bonjour" en anglais.'
        },
        {
          question: 'Que signifie "How are you?" ?',
          options: ['Comment allez-vous ?', 'Au revoir', 'Merci', 'S\'il vous plaît'],
          correctAnswer: 0,
          explanation: 'Parfait ! "How are you?" signifie "Comment allez-vous ?".'
        },
        {
          question: 'Quelle salutation utilise-t-on le matin ?',
          options: ['Good evening', 'Good morning', 'Good afternoon', 'Good night'],
          correctAnswer: 1,
          explanation: 'Exactement ! "Good morning" se dit le matin.'
        }
      ]
    },
    'colors': {
      id: '3',
      title: 'Les couleurs',
      description: 'Red, blue, green, yellow et bien plus encore',
      content: [
        'Aujourd\'hui, nous allons apprendre les couleurs en anglais !',
        'Les couleurs sont partout autour de nous.',
        'Voici les couleurs de base :',
        '- Red = Rouge',
        '- Blue = Bleu',
        '- Green = Vert',
        '- Yellow = Jaune',
        '- Black = Noir',
        '- White = Blanc',
        '- Purple = Violet',
        '- Orange = Orange',
        '- Pink = Rose',
        '- Brown = Marron'
      ],
      exercises: [
        {
          question: 'Comment dit-on "rouge" en anglais ?',
          options: ['Blue', 'Red', 'Green', 'Yellow'],
          correctAnswer: 1,
          explanation: 'Exactement ! "Red" signifie "rouge" en anglais.'
        },
        {
          question: 'Que signifie "blue" ?',
          options: ['Vert', 'Bleu', 'Rouge', 'Jaune'],
          correctAnswer: 1,
          explanation: 'Parfait ! "Blue" signifie "bleu".'
        },
        {
          question: 'Quelle couleur est "green" ?',
          options: ['Rouge', 'Bleu', 'Vert', 'Jaune'],
          correctAnswer: 2,
          explanation: 'Exactement ! "Green" signifie "vert".'
        }
      ]
    },
    'numbers': {
      id: '4',
      title: 'Compter de 1 à 20',
      description: 'One, two, three... jusqu\'à twenty',
      content: [
        'Bienvenue dans la leçon sur les nombres !',
        'Nous allons apprendre à compter de 1 à 20 en anglais.',
        'Voici les nombres de 1 à 20 :',
        '1 = One, 2 = Two, 3 = Three, 4 = Four, 5 = Five',
        '6 = Six, 7 = Seven, 8 = Eight, 9 = Nine, 10 = Ten',
        '11 = Eleven, 12 = Twelve, 13 = Thirteen, 14 = Fourteen, 15 = Fifteen',
        '16 = Sixteen, 17 = Seventeen, 18 = Eighteen, 19 = Nineteen, 20 = Twenty',
        'Répétez après moi : One, Two, Three...'
      ],
      exercises: [
        {
          question: 'Comment dit-on "5" en anglais ?',
          options: ['Four', 'Five', 'Six', 'Seven'],
          correctAnswer: 1,
          explanation: 'Exactement ! "5" se dit "Five" en anglais.'
        },
        {
          question: 'Que signifie "ten" ?',
          options: ['Neuf', 'Dix', 'Onze', 'Douze'],
          correctAnswer: 1,
          explanation: 'Parfait ! "Ten" signifie "dix".'
        },
        {
          question: 'Comment dit-on "20" en anglais ?',
          options: ['Eighteen', 'Nineteen', 'Twenty', 'Twenty-one'],
          correctAnswer: 2,
          explanation: 'Exactement ! "20" se dit "Twenty".'
        }
      ]
    },
    'animals': {
      id: '5',
      title: 'Les animaux',
      description: 'Dog, cat, bird, fish et autres animaux',
      content: [
        'Aujourd\'hui, nous allons apprendre les noms des animaux !',
        'Les animaux sont nos amis, apprenons leurs noms.',
        'Voici les animaux de base :',
        '- Dog = Chien',
        '- Cat = Chat',
        '- Bird = Oiseau',
        '- Fish = Poisson',
        '- Horse = Cheval',
        '- Cow = Vache',
        '- Pig = Cochon',
        '- Sheep = Mouton',
        '- Chicken = Poule',
        '- Duck = Canard'
      ],
      exercises: [
        {
          question: 'Comment dit-on "chat" en anglais ?',
          options: ['Dog', 'Cat', 'Bird', 'Fish'],
          correctAnswer: 1,
          explanation: 'Exactement ! "Cat" signifie "chat" en anglais.'
        },
        {
          question: 'Que signifie "dog" ?',
          options: ['Chat', 'Chien', 'Oiseau', 'Poisson'],
          correctAnswer: 1,
          explanation: 'Parfait ! "Dog" signifie "chien".'
        },
        {
          question: 'Quel animal est "bird" ?',
          options: ['Chien', 'Chat', 'Oiseau', 'Poisson'],
          correctAnswer: 2,
          explanation: 'Exactement ! "Bird" signifie "oiseau".'
        }
      ]
    },
    'food': {
      id: '6',
      title: 'Les fruits et légumes',
      description: 'Apple, banana, carrot, tomato et plus',
      content: [
        'Bienvenue dans la leçon sur les fruits et légumes !',
        'Manger sain est important, apprenons les noms en anglais.',
        'Voici les fruits de base :',
        '- Apple = Pomme',
        '- Banana = Banane',
        '- Orange = Orange',
        '- Strawberry = Fraise',
        '- Grape = Raisin',
        'Et les légumes :',
        '- Carrot = Carotte',
        '- Tomato = Tomate',
        '- Potato = Pomme de terre',
        '- Onion = Oignon',
        '- Lettuce = Laitue'
      ],
      exercises: [
        {
          question: 'Comment dit-on "pomme" en anglais ?',
          options: ['Banana', 'Apple', 'Orange', 'Strawberry'],
          correctAnswer: 1,
          explanation: 'Exactement ! "Apple" signifie "pomme" en anglais.'
        },
        {
          question: 'Que signifie "banana" ?',
          options: ['Pomme', 'Banane', 'Orange', 'Fraise'],
          correctAnswer: 1,
          explanation: 'Parfait ! "Banana" signifie "banane".'
        },
        {
          question: 'Quel fruit est "orange" ?',
          options: ['Pomme', 'Banane', 'Orange', 'Fraise'],
          correctAnswer: 2,
          explanation: 'Exactement ! "Orange" signifie "orange".'
        }
      ]
    },
     // Leçons d'arabe - Niveau 1
  'arabe-alphabet': {
    id: '7',
    title: 'L\'alphabet arabe',
    description: 'Apprenez les 28 lettres de l\'alphabet arabe',
    content: [
      'Bienvenue dans votre première leçon d\'arabe !',
      'L\'alphabet arabe compte 28 lettres, contrairement à l\'alphabet français qui en a 26.',
      'L\'arabe s\'écrit de droite à gauche.',
      'Voici les premières lettres :',
      'أ (Alif) - se prononce comme un "a" long',
      'ب (Ba) - se prononce comme "b" en français',
      'ت (Ta) - se prononce comme "t" en français',
      'ث (Tha) - se prononce comme "th" en anglais',
      'ج (Jim) - se prononce comme "dj" en français',
      'ح (Ha) - se prononce comme un "h" aspiré',
      'Chaque lettre a une forme différente selon sa position dans le mot.',
      'Répétez après moi et n\'ayez pas peur de faire des erreurs !'
    ],
    exercises: [
      {
        question: 'Combien de lettres y a-t-il dans l\'alphabet arabe ?',
        options: ['26', '27', '28', '29'],
        correctAnswer: 2,
        explanation: 'Exactement ! L\'alphabet arabe compte 28 lettres.'
      },
      {
        question: 'Dans quel sens s\'écrit l\'arabe ?',
        options: ['De gauche à droite', 'De droite à gauche', 'De haut en bas', 'De bas en haut'],
        correctAnswer: 1,
        explanation: 'Exactement ! L\'arabe s\'écrit de droite à gauche.'
      },
      {
        question: 'Comment se prononce la lettre أ (Alif) ?',
        options: ['Comme "b"', 'Comme "a" long', 'Comme "t"', 'Comme "h"'],
        correctAnswer: 1,
        explanation: 'Parfait ! أ (Alif) se prononce comme un "a" long.'
      }
    ]
  },
  'arabe-greetings': {
    id: '8',
    title: 'Salutations de base',
    description: 'Assalamu alaykum, Marhaba, Ahlan wa sahlan',
    content: [
      'Aujourd\'hui, nous allons apprendre les salutations en arabe !',
      'Les salutations sont très importantes dans la culture islamique.',
      'Voici les salutations de base :',
      'السلام عليكم (Assalamu alaykum) = Que la paix soit sur vous',
      'وعليكم السلام (Wa alaykum assalam) = Et sur vous la paix (réponse)',
      'مرحبا (Marhaba) = Bonjour (informel)',
      'أهلا وسهلا (Ahlan wa sahlan) = Bienvenue',
      'صباح الخير (Sabah al-khayr) = Bonjour (matin)',
      'مساء الخير (Masa al-khayr) = Bonsoir',
      'كيف حالك؟ (Kayfa haluk?) = Comment allez-vous ?',
      'أنا بخير (Ana bi-khayr) = Je vais bien',
      'الحمد لله (Alhamdulillah) = Louange à Allah'
    ],
    exercises: [
      {
        question: 'Que signifie "السلام عليكم" (Assalamu alaykum) ?',
        options: ['Au revoir', 'Que la paix soit sur vous', 'Merci', 'Comment allez-vous ?'],
        correctAnswer: 1,
        explanation: 'Exactement ! "السلام عليكم" signifie "Que la paix soit sur vous".'
      },
      {
        question: 'Comment répondre à "السلام عليكم" ?',
        options: ['مرحبا', 'وعليكم السلام', 'أهلا وسهلا', 'صباح الخير'],
        correctAnswer: 1,
        explanation: 'Parfait ! On répond "وعليكم السلام" (Wa alaykum assalam).'
      },
      {
        question: 'Que signifie "أهلا وسهلا" (Ahlan wa sahlan) ?',
        options: ['Au revoir', 'Merci', 'Bienvenue', 'Comment allez-vous ?'],
        correctAnswer: 2,
        explanation: 'Exactement ! "أهلا وسهلا" signifie "Bienvenue".'
      }
    ]
  },
  'arabe-numbers': {
    id: '9',
    title: 'Compter de 1 à 10',
    description: 'Wahid, ithnan, thalatha... jusqu\'à ashara',
    content: [
      'Aujourd\'hui, nous allons apprendre à compter en arabe !',
      'Les nombres sont très utiles dans la vie quotidienne.',
      'Voici les nombres de 1 à 10 :',
      '١ = واحد (Wahid) = Un',
      '٢ = اثنان (Ithnan) = Deux',
      '٣ = ثلاثة (Thalatha) = Trois',
      '٤ = أربعة (Arba\'a) = Quatre',
      '٥ = خمسة (Khamsa) = Cinq',
      '٦ = ستة (Sitta) = Six',
      '٧ = سبعة (Sab\'a) = Sept',
      '٨ = ثمانية (Thamaniya) = Huit',
      '٩ = تسعة (Tis\'a) = Neuf',
      '١٠ = عشرة (Ashara) = Dix',
      'Répétez après moi : Wahid, Ithnan, Thalatha...'
    ],
    exercises: [
      {
        question: 'Comment dit-on "5" en arabe ?',
        options: ['أربعة', 'خمسة', 'ستة', 'سبعة'],
        correctAnswer: 1,
        explanation: 'Exactement ! "5" se dit "خمسة" (Khamsa) en arabe.'
      },
      {
        question: 'Que signifie "عشرة" (Ashara) ?',
        options: ['Neuf', 'Dix', 'Onze', 'Douze'],
        correctAnswer: 1,
        explanation: 'Parfait ! "عشرة" (Ashara) signifie "dix".'
      },
      {
        question: 'Comment dit-on "3" en arabe ?',
        options: ['اثنان', 'ثلاثة', 'أربعة', 'خمسة'],
        correctAnswer: 1,
        explanation: 'Exactement ! "3" se dit "ثلاثة" (Thalatha) en arabe.'
      }
    ]
  },
  'francais-grammaire': {
    id: 'francais-grammaire',
    title: 'Grammaire française de base',
    description: 'Apprendre les règles de base de la grammaire française',
    content: [
      'En français, les noms ont un genre : masculin ou féminin.',
      'Les adjectifs s\'accordent avec le nom qu\'ils qualifient.',
      'Les verbes se conjuguent selon le sujet et le temps.',
      'L\'ordre des mots est important pour le sens de la phrase.',
      'La ponctuation aide à structurer et comprendre le texte.'
    ],
    exercises: [
      {
        question: 'Quels sont les genres des noms en français ?',
        options: ['Singulier et pluriel', 'Masculin et féminin', 'Présent et passé', 'Actif et passif'],
        correctAnswer: 1,
        explanation: 'En français, les noms ont un genre : masculin ou féminin.'
      },
      {
        question: 'Que font les adjectifs en français ?',
        options: ['Ils ne changent jamais', 'Ils s\'accordent avec le nom', 'Ils changent de place', 'Ils disparaissent'],
        correctAnswer: 1,
        explanation: 'Les adjectifs s\'accordent avec le nom qu\'ils qualifient.'
      }
    ]
  },
  'math-nombres': {
    id: 'math-nombres',
    title: 'Les nombres de 1 à 100',
    description: 'Apprendre à compter et reconnaître les nombres',
    content: [
      'Les nombres de 1 à 20 ont des noms uniques.',
      'De 21 à 99, on combine les dizaines et les unités.',
      '100 se dit "cent" en français.',
      'Les nombres pairs se terminent par 0, 2, 4, 6, 8.',
      'Les nombres impairs se terminent par 1, 3, 5, 7, 9.'
    ],
    exercises: [
      {
        question: 'Comment dit-on 25 en français ?',
        options: ['Vingt-cinq', 'Vingt-quatre', 'Vingt-six', 'Vingt-sept'],
        correctAnswer: 0,
        explanation: '25 se dit "vingt-cinq" en français.'
      },
      {
        question: 'Quel type de nombre est 30 ?',
        options: ['Impair', 'Pair', 'Premier', 'Composé'],
        correctAnswer: 1,
        explanation: '30 est un nombre pair car il se termine par 0.'
      }
    ]
  },
  'sciences-animaux': {
    id: 'sciences-animaux',
    title: 'Les animaux et leurs habitats',
    description: 'Découvrir la diversité du monde animal',
    content: [
      'Les animaux vivent dans différents habitats : forêt, désert, océan, montagne.',
      'Chaque animal est adapté à son environnement.',
      'Les herbivores mangent des plantes, les carnivores mangent de la viande.',
      'Certains animaux migrent selon les saisons.',
      'La biodiversité est importante pour l\'équilibre de la nature.'
    ],
    exercises: [
      {
        question: 'Où vivent la plupart des poissons ?',
        options: ['Dans la forêt', 'Dans l\'océan', 'Dans le désert', 'Sur la montagne'],
        correctAnswer: 1,
        explanation: 'La plupart des poissons vivent dans l\'océan ou les rivières.'
      },
      {
        question: 'Que mangent les herbivores ?',
        options: ['De la viande', 'Des plantes', 'Des insectes', 'Du poisson'],
        correctAnswer: 1,
        explanation: 'Les herbivores mangent des plantes et de la végétation.'
      }
    ]
  }
};

export default function LessonPage() {
  const params = useParams();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);

  const slug = params.slug as string;
  const lesson = lessonData[slug];

  if (!lesson) {
    return (
      <>
        <Navigation />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Leçon non trouvée
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Désolé, cette leçon n\'existe pas encore.
            </p>
            <a
              href="/subject"
              className="btn-primary text-lg px-8 py-3"
            >
              Retour aux matières
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showResult) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const exercise = lesson.exercises[currentExercise];
    const isCorrect = selectedAnswer === exercise.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleNextExercise = () => {
    if (currentExercise < lesson.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setLessonCompleted(true);
    }
  };

  const handleRestartLesson = () => {
    setCurrentExercise(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setLessonCompleted(false);
  };

  if (lessonCompleted) {
    const percentage = Math.round((score / lesson.exercises.length) * 100);
    
    return (
      <>
        <Navigation />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Leçon terminée !
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Votre score : <span className="font-bold">{score}/{lesson.exercises.length}</span> ({percentage}%)
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Félicitations !
                </h2>
                <p className="text-lg text-gray-600">
                  Vous avez terminé la leçon "{lesson.title}" avec succès !
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRestartLesson}
                  className="btn-secondary text-lg px-8 py-3"
                >
                  Recommencer la leçon
                </button>
                
                <a
                  href="/subject"
                  className="btn-primary text-lg px-8 py-3"
                >
                  Autres matières
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const exercise = lesson.exercises[currentExercise];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {lesson.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {lesson.description}
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Exercice {currentExercise + 1} sur {lesson.exercises.length}
              </span>
              <span className="text-sm text-gray-600">
                Score: {score}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentExercise + 1) / lesson.exercises.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contenu de la leçon
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              {lesson.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Exercise */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Exercice {currentExercise + 1}
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {exercise.question}
              </h3>

              <div className="space-y-3 mb-6">
                {exercise.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      selectedAnswer === index
                        ? showResult
                          ? index === exercise.correctAnswer
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                          : 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="mb-6 p-4 rounded-lg bg-gray-50">
                  <p className="text-gray-700">
                    <strong>Explication :</strong> {exercise.explanation}
                  </p>
                </div>
              )}

              <div className="flex justify-center">
                {!showResult ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                      selectedAnswer === null
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    Valider la réponse
                  </button>
                ) : (
                  <button
                    onClick={handleNextExercise}
                    className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    {currentExercise < lesson.exercises.length - 1 ? 'Exercice suivant' : 'Terminer la leçon'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )}
