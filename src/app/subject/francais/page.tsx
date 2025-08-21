'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LessonCard from '@/components/ui/LessonCard';
import SubjectQuiz from '@/components/quiz/SubjectQuiz';
import { frenchQuiz } from '@/data/quizData';

export default function FrenchSubjectPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('1');

  const handleQuizComplete = (score: number, total: number) => {
    setQuizCompleted(true);
    console.log(`Quiz completed with score: ${score}/${total}`);
  };

  const lessons = {
    '1': [
      {
        id: '1',
        title: "L'alphabet français",
        description: "Les 26 lettres et leurs sons de base",
        duration: 5,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '2',
        title: "Lecture de base",
        description: "Premiers mots et phrases simples",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '3',
        title: "Écriture",
        description: "Former les lettres et écrire des mots",
        duration: 10,
        difficulty: 'beginner' as const,
        emoji: '✏️',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '4',
        title: "Les voyelles",
        description: "A, E, I, O, U, Y et leurs sons",
        duration: 7,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '5',
        title: "Les consonnes",
        description: "B, C, D, F et autres consonnes",
        duration: 9,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '6',
        title: "Syllabes simples",
        description: "Composer des syllabes et des mots",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: false
      }
    ],
    '2': [
      {
        id: '7',
        title: "Grammaire de base",
        description: "Articles, noms et adjectifs simples",
        duration: 12,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '8',
        title: "Conjugaison présent",
        description: "Être, avoir et verbes du premier groupe",
        duration: 15,
        difficulty: 'intermediate' as const,
        emoji: '⏰',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '9',
        title: "Orthographe",
        description: "Règles d'orthographe de base",
        duration: 14,
        difficulty: 'intermediate' as const,
        emoji: '✍️',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '10',
        title: "Vocabulaire enrichi",
        description: "Familles de mots et expressions",
        duration: 11,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '11',
        title: "Compréhension de texte",
        description: "Lire et comprendre des textes courts",
        duration: 13,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '12',
        title: "Rédaction simple",
        description: "Écrire des phrases et petits textes",
        duration: 16,
        difficulty: 'intermediate' as const,
        emoji: '✏️',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '3': [
      {
        id: '13',
        title: "Grammaire avancée",
        description: "Subjonctif, conditionnel et temps composés",
        duration: 20,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '14',
        title: "Littérature",
        description: "Découvrir des auteurs et textes classiques",
        duration: 18,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '15',
        title: "Expression écrite",
        description: "Rédiger des textes structurés",
        duration: 22,
        difficulty: 'advanced' as const,
        emoji: '✍️',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '16',
        title: "Analyse de texte",
        description: "Comprendre et analyser des textes complexes",
        duration: 25,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '17',
        title: "Culture française",
        description: "Histoire, traditions et expressions idiomatiques",
        duration: 20,
        difficulty: 'advanced' as const,
        emoji: '����',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '18',
        title: "Communication orale",
        description: "S'exprimer avec fluidité et précision",
        duration: 18,
        difficulty: 'advanced' as const,
        emoji: '🗣️',
        color: 'bg-red-500',
        isCompleted: false,
        isLocked: true
      }
    ]
  };

  const levels = [
    { id: '1', name: 'Débutant', count: 6, color: 'bg-green-500' },
    { id: '2', name: 'Intermédiaire', count: 6, color: 'bg-yellow-500' },
    { id: '3', name: 'Avancé', count: 6, color: 'bg-red-500' }
  ];

  if (showQuiz) {
    return (
      <>
        <Navigation />
        <main className="pt-16">
          <div className="bg-gradient-to-br from-red-50 via-white to-red-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setShowQuiz(false)}
                className="mb-6 text-red-600 hover:text-red-800 flex items-center"
              >
                ← Retour aux leçons
              </button>
              
              <SubjectQuiz
  quiz={frenchQuiz}
  onClose={() => setShowQuiz(false)}
  onComplete={(score) => {
    setQuizCompleted(true);
    setShowQuiz(false);
    console.log('Quiz completed with score:', score);
  }}
/>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 via-white to-red-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">📘</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Apprendre le français
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Maîtrisez la langue française avec nos leçons structurées et amusantes
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Vue d'ensemble du cours</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Un programme complet de français en 3 niveaux, de débutant à avancé
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {levels.map((level) => (
                <div 
                  key={level.id}
                  className={`text-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedLevel === level.id 
                      ? 'bg-red-100 border-2 border-red-300' 
                      : 'bg-slate-50 hover:bg-red-50'
                  }`}
                  onClick={() => setSelectedLevel(level.id)}
                >
                  <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl text-white font-bold">{level.id}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{level.name}</h3>
                  <p className="text-sm text-slate-600">{level.count} leçons</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lessons Grid */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Niveau {selectedLevel} - {levels.find(l => l.id === selectedLevel)?.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons[selectedLevel as keyof typeof lessons].map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  {...lesson}
                  onStart={() => {
                    const lessonSlugs = {
                      '1': 'francais-alphabet',
                      '2': 'francais-lecture-base',
                      '3': 'francais-ecriture',
                      '4': 'francais-voyelles',
                      '5': 'francais-consonnes',
                      '6': 'francais-syllabes-simples',
                      '7': 'francais-grammaire-base',
                      '8': 'francais-conjugaison-present',
                      '9': 'francais-orthographe',
                      '10': 'francais-vocabulaire-enrichi',
                      '11': 'francais-comprehension-texte',
                      '12': 'francais-redaction-simple',
                      '13': 'francais-grammaire-avancee',
                      '14': 'francais-litterature',
                      '15': 'francais-expression-ecrite',
                      '16': 'francais-analyse-texte',
                      '17': 'francais-culture-francaise',
                      '18': 'francais-communication-orale'
                    };
                    const slug = lessonSlugs[lesson.id as keyof typeof lessonSlugs];
                    if (slug) {
                      window.location.href = `/lesson/${slug}`;
                    }
                  }}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                Voir toutes les leçons du niveau {selectedLevel}
              </button>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Testez vos connaissances</h2>
            <p className="text-lg text-slate-600 mb-8">
              Prenez notre quiz pour vérifier ce que vous avez appris en français
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Quiz Niveau 1</h3>
                <p className="text-slate-600 mb-4">Testez vos connaissances de base</p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Défi quotidien</h3>
                <p className="text-slate-600 mb-4">Un nouveau défi chaque jour</p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Participer
                </button>
              </div>
            </div>

            {quizCompleted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800">
                  🎉 Félicitations ! Vous avez terminé le quiz. Continuez à pratiquer !
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Back to subject */}
        <section className="py-16 bg-slate-50">
          <div className="text-center">
            <a
              href="/subject"
              className="inline-block bg-slate-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
            >
              ← Retour aux matières
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}