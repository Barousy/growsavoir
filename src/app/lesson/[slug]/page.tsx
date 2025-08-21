
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
    id: 'anglais-alphabet',
    title: 'Alphabet anglais',
    description: 'Apprendre les 26 lettres de l\'alphabet anglais',
    content: [
      'L\'alphabet anglais contient 26 lettres, de A à Z.',
      'Les lettres peuvent être majuscules (A, B, C) ou minuscules (a, b, c).',
      'Chaque lettre a un son unique et peut être combinée avec d\'autres pour former des mots.',
      'Pratiquez la prononciation de chaque lettre plusieurs fois.',
      'Une fois à l\'aise avec l\'alphabet, vous pourrez épeler des mots !'
    ],
    exercises: [
      {
        question: 'Combien y a-t-il de lettres dans l\'alphabet anglais ?',
        options: ['24', '25', '26', '27'],
        correctAnswer: 2,
        explanation: 'L\'alphabet anglais contient exactement 26 lettres, de A à Z.'
      },
      {
        question: 'Quelle est la première lettre de l\'alphabet anglais ?',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 0,
        explanation: 'A est la première lettre de l\'alphabet anglais.'
      }
    ]
  },
  'arabe-alphabet': {
    id: 'arabe-alphabet',
    title: 'Alphabet arabe',
    description: 'Découvrir les 28 lettres de l\'alphabet arabe',
    content: [
      'L\'alphabet arabe contient 28 lettres.',
      'L\'écriture arabe se fait de droite à gauche.',
      'Chaque lettre peut avoir plusieurs formes selon sa position dans le mot.',
      'Les voyelles courtes sont généralement omises à l\'écrit.',
      'L\'arabe est une langue sémitique avec une calligraphie magnifique.'
    ],
    exercises: [
      {
        question: 'Combien y a-t-il de lettres dans l\'alphabet arabe ?',
        options: ['26', '27', '28', '29'],
        correctAnswer: 2,
        explanation: 'L\'alphabet arabe contient exactement 28 lettres.'
      },
      {
        question: 'Dans quel sens s\'écrit l\'arabe ?',
        options: ['De gauche à droite', 'De droite à gauche', 'De haut en bas', 'De bas en haut'],
        correctAnswer: 1,
        explanation: 'L\'arabe s\'écrit de droite à gauche.'
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
  );
}
=======
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import InlineQuiz from '@/components/quiz/InlineQuiz';

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const lesson = await prisma.lesson.findFirst({
    where: { slug },
    include: {
      ageGroup: true,
      quiz: { include: { questions: { include: { options: true } } } },
      skill: {
        include: {
          subcategory: { include: { category: { include: { subject: true } } } },
        },
      },
    },
  });

  if (!lesson) return notFound();

  const subject = lesson.skill.subcategory.category.subject;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="text-sm opacity-70">
        {subject.title} · {lesson.ageGroup?.title ?? 'Sans tranche'} · {lesson.minutes ?? 8} min
      </div>
      <h1 className="mt-1 text-2xl md:text-3xl font-bold">{lesson.title}</h1>

      {lesson.desc && <p className="mt-2 text-slate-600">{lesson.desc}</p>}

      <article className="prose max-w-none mt-6">
        {typeof lesson.content === 'string' && lesson.content.trim()
          ? lesson.content
          : 'Contenu à venir.'}
      </article>

      {lesson.quiz && lesson.quiz.questions.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Quiz</h2>
          <InlineQuiz quiz={lesson.quiz} lessonSlug={lesson.slug} />
        </section>
      )}
    </main>
  );
}

