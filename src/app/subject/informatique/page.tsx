'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LessonCard from '@/components/ui/LessonCard';
import SubjectQuiz from '@/components/quiz/SubjectQuiz';
import { computerScienceQuiz } from '@/data/quizData';

export default function ComputerScienceSubjectPage() {
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
        title: "Qu'est-ce qu'un ordinateur ?",
        description: "Découvrir les composants de base d'un ordinateur",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '2',
        title: "Le clavier et la souris",
        description: "Apprendre à utiliser les périphériques d'entrée",
        duration: 6,
        difficulty: 'beginner' as const,
        emoji: '⌨️',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '3',
        title: "L'écran et les fenêtres",
        description: "Naviguer dans l'interface graphique",
        duration: 7,
        difficulty: 'beginner' as const,
        emoji: '🖥️',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '4',
        title: "Les fichiers et dossiers",
        description: "Organiser et gérer ses documents",
        duration: 9,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '5',
        title: "Internet et navigation",
        description: "Surfer sur le web en toute sécurité",
        duration: 10,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: false
      },
      {
        id: '6',
        title: "La messagerie",
        description: "Envoyer et recevoir des emails",
        duration: 8,
        difficulty: 'beginner' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: false
      }
    ],
    '2': [
      {
        id: '7',
        title: "Logique et algorithmes",
        description: "Penser comme un programmeur",
        duration: 12,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '8',
        title: "Programmation visuelle",
        description: "Créer des programmes avec des blocs",
        duration: 15,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '9',
        title: "Les variables",
        description: "Stocker et manipuler des informations",
        duration: 14,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '10',
        title: "Les boucles",
        description: "Répéter des actions automatiquement",
        duration: 13,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '11',
        title: "Les conditions",
        description: "Prendre des décisions dans un programme",
        duration: 16,
        difficulty: 'intermediate' as const,
        emoji: '❓',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '12',
        title: "Créer des jeux",
        description: "Programmer votre premier jeu simple",
        duration: 18,
        difficulty: 'intermediate' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '3': [
      {
        id: '13',
        title: "Programmation en Python",
        description: "Apprendre un vrai langage de programmation",
        duration: 25,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '14',
        title: "Les fonctions",
        description: "Créer des blocs de code réutilisables",
        duration: 20,
        difficulty: 'advanced' as const,
        emoji: '⚙️',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '15',
        title: "Les objets et classes",
        description: "Programmation orientée objet",
        duration: 22,
        difficulty: 'advanced' as const,
        emoji: '🏗️',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '16',
        title: "Bases de données",
        description: "Stocker et organiser des informations",
        duration: 18,
        difficulty: 'advanced' as const,
        emoji: '🗄️',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '17',
        title: "Intelligence artificielle",
        description: "Introduction à l'IA et au machine learning",
        duration: 24,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '18',
        title: "Cybersécurité",
        description: "Protéger ses données et sa vie privée",
        duration: 20,
        difficulty: 'advanced' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      }
    ],
    '4': [
      {
        id: '19',
        title: "Développement web",
        description: "Créer des sites web modernes",
        duration: 30,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '20',
        title: "Applications mobiles",
        description: "Développer pour smartphones et tablettes",
        duration: 28,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '21',
        title: "Cloud computing",
        description: "Travail collaboratif et stockage en ligne",
        duration: 25,
        difficulty: 'expert' as const,
        emoji: '☁️',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '22',
        title: "DevOps et déploiement",
        description: "Automatiser le développement et la mise en production",
        duration: 32,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '23',
        title: "Projet final avancé",
        description: "Créer une application complète de A à Z",
        duration: 40,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-indigo-500',
        isCompleted: false,
        isLocked: true
      },
      {
        id: '24',
        title: "Préparation professionnelle",
        description: "Se préparer aux métiers de l'informatique",
        duration: 35,
        difficulty: 'expert' as const,
        emoji: '��',
        color: 'bg-indigo-500',
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
          <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setShowQuiz(false)}
                className="mb-6 text-indigo-600 hover:text-indigo-800 flex items-center"
              >
                ← Retour aux leçons
              </button>
              
              <SubjectQuiz
  quiz={computerScienceQuiz}
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
        <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">💻</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Découvrir l'informatique
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Apprenez la programmation et la logique de manière ludique et créative
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Vue d'ensemble du cours</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Un programme complet d'informatique en 3 niveaux, de débutant à avancé
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {levels.map((level) => (
                <div 
                  key={level.id}
                  className={`text-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedLevel === level.id 
                      ? 'bg-indigo-100 border-2 border-indigo-300' 
                      : 'bg-slate-50 hover:bg-indigo-50'
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
                      '1': 'informatique-ordinateur',
                      '2': 'informatique-clavier-souris',
                      '3': 'informatique-ecran-fenetres',
                      '4': 'informatique-fichiers-dossiers',
                      '5': 'informatique-internet-navigation',
                      '6': 'informatique-messagerie',
                      '7': 'informatique-logique-algorithmes',
                      '8': 'informatique-programmation-visuelle',
                      '9': 'informatique-variables',
                      '10': 'informatique-boucles',
                      '11': 'informatique-conditions',
                      '12': 'informatique-creer-jeux',
                      '13': 'informatique-python',
                      '14': 'informatique-fonctions',
                      '15': 'informatique-objets-classes',
                      '16': 'informatique-bases-donnees',
                      '17': 'informatique-intelligence-artificielle',
                      '18': 'informatique-cybersecurite'
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
              <button className="bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">
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
              Prenez notre quiz pour vérifier ce que vous avez appris en informatique
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border border-indigo-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Quiz Niveau 1</h3>
                <p className="text-slate-600 mb-4">Testez vos connaissances de base</p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
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