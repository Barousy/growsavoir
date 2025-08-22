'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LessonCard from '@/components/ui/LessonCard';
import SubjectQuiz from '@/components/quiz/SubjectQuiz';
import { wellbeingQuiz } from '@/data/quizData';

export default function WellbeingSubjectPage() {
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
        title: 'Respiration calme',
        description: 'Apprendre à respirer calmement et se détendre',
        duration: 10,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '2',
        title: 'Reconnaître les émotions',
        description: 'Identifier et exprimer ses sentiments',
        duration: 15,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '3',
        title: 'Pratique de la gratitude',
        description: 'Découvrir ce qui nous rend heureux',
        duration: 12,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '4',
        title: 'Relaxation musculaire',
        description: 'Détendre chaque muscle du corps',
        duration: 18,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '5',
        title: 'Imagination positive',
        description: 'Créer des images mentales apaisantes',
        duration: 14,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '6',
        title: 'Rituels du matin',
        description: 'Commencer la journée avec sérénité',
        duration: 16,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: false
      }
    ],
    '2': [
      {
        id: '7',
        title: 'Méditation guidée',
        description: 'Introduction à la méditation pour enfants',
        duration: 20,
        difficulty: 'intermediate' as const,
        emoji: '��‍♀️',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '8',
        title: 'Développer la confiance',
        description: 'Techniques pour renforcer l\'estime de soi',
        duration: 25,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '9',
        title: 'Relations amicales',
        description: 'Apprendre à bien s\'entendre avec les autres',
        duration: 18,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '10',
        title: 'Gestion de la colère',
        description: 'Apprendre à maîtriser ses émotions',
        duration: 22,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '11',
        title: 'Techniques de concentration',
        description: 'Améliorer sa capacité d\'attention',
        duration: 20,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '12',
        title: 'Affirmations positives',
        description: 'Utiliser des mots qui nous font du bien',
        duration: 15,
        difficulty: 'intermediate' as const,
        emoji: '✨',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '3': [
      {
        id: '13',
        title: 'Gérer le stress',
        description: 'Techniques avancées de gestion du stress',
        duration: 30,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '14',
        title: 'Fixer des objectifs',
        description: 'Planifier et atteindre ses objectifs personnels',
        duration: 35,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '15',
        title: 'Pleine conscience',
        description: 'Pratiques de mindfulness pour adolescents',
        duration: 40,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '16',
        title: 'Communication non-violente',
        description: 'S\'exprimer avec respect et écouter l\'autre',
        duration: 28,
        difficulty: 'advanced' as const,
        emoji: '🗣️',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '17',
        title: 'Gestion du temps',
        description: 'Organiser son temps efficacement',
        duration: 32,
        difficulty: 'advanced' as const,
        emoji: '⏰',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '18',
        title: 'Résolution de conflits',
        description: 'Apprendre à résoudre les désaccords',
        duration: 26,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '4': [
      {
        id: '19',
        title: 'Thérapie par l\'art',
        description: 'Utiliser la créativité pour se soigner',
        duration: 45,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '20',
        title: 'Médecine alternative',
        description: 'Découvrir les approches holistiques',
        duration: 50,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '21',
        title: 'Développement spirituel',
        description: 'Explorer sa dimension spirituelle',
        duration: 55,
        difficulty: 'expert' as const,
        emoji: '🕊️',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '22',
        title: 'Coaching personnel',
        description: 'Accompagner les autres dans leur développement',
        duration: 60,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '23',
        title: 'Médecine préventive',
        description: 'Prévenir les problèmes de santé mentale',
        duration: 48,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '24',
        title: 'Héritage de bien-être',
        description: 'Transmettre ses connaissances aux autres',
        duration: 52,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-teal-500',
        isCompleted: false,
        isLocked: true
      }
    ]
  };

  const levels = [
    { id: '1', name: 'Débutant', count: 6, color: 'bg-green-500' },
    { id: '2', name: 'Intermédiaire', count: 6, color: 'bg-yellow-500' },
    { id: '3', name: 'Avancé', count: 6, color: 'bg-red-500' },
    { id: '4', name: 'Expert', count: 6, color: 'bg-purple-500' }
  ];

  if (showQuiz) {
    return (
      <>
        <Navigation />
        <main className="pt-16">
          <div className="bg-gradient-to-br from-teal-50 via-white to-teal-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setShowQuiz(false)}
                className="mb-6 text-teal-600 hover:text-teal-800 flex items-center"
              >
                ← Retour aux leçons
              </button>
              
              <SubjectQuiz
                quiz={wellbeingQuiz}
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
        <section className="bg-gradient-to-br from-teal-50 via-white to-teal-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🧘</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Bien-être & Développement personnel
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Développez votre équilibre émotionnel, votre confiance en vous et 
              votre bien-être mental à travers des pratiques simples et efficaces !
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Vue d'ensemble du cours</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Un programme complet de bien-être en 4 niveaux, de débutant à expert
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {levels.map((level) => (
                <div 
                  key={level.id}
                  className={`text-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedLevel === level.id 
                      ? 'bg-teal-100 border-2 border-teal-300' 
                      : 'bg-slate-50 hover:bg-teal-50'
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
                      '1': 'bien-etre-respiration-calme',
                      '2': 'bien-etre-reconnaitre-emotions',
                      '3': 'bien-etre-pratique-gratitude',
                      '4': 'bien-etre-relaxation-musculaire',
                      '5': 'bien-etre-imagination-positive',
                      '6': 'bien-etre-rituels-matin',
                      '7': 'bien-etre-meditation-guidee',
                      '8': 'bien-etre-developper-confiance',
                      '9': 'bien-etre-relations-amicales',
                      '10': 'bien-etre-gestion-colere',
                      '11': 'bien-etre-techniques-concentration',
                      '12': 'bien-etre-affirmations-positives',
                      '13': 'bien-etre-gerer-stress',
                      '14': 'bien-etre-fixer-objectifs',
                      '15': 'bien-etre-pleine-conscience',
                      '16': 'bien-etre-communication-non-violente',
                      '17': 'bien-etre-gestion-temps',
                      '18': 'bien-etre-resolution-conflits',
                      '19': 'bien-etre-therapie-art',
                      '20': 'bien-etre-medecine-alternative',
                      '21': 'bien-etre-developpement-spirituel',
                      '22': 'bien-etre-coaching-personnel',
                      '23': 'bien-etre-medecine-preventive',
                      '24': 'bien-etre-heritage-bien-etre'
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
              <button className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
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
              Prenez notre quiz pour vérifier ce que vous avez appris en bien-être
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Quiz Niveau 1</h3>
                <p className="text-slate-600 mb-4">Testez vos connaissances de base</p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
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