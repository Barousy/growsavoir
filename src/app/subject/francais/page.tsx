'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';
import { Brain, Trophy, ArrowLeft } from 'lucide-react';

export default function FrenchSubjectPage() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1); // Niveau 1 ouvert par défaut

  const handleLevelToggle = (levelId: number) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };

  const handleQuizStart = () => {
    console.log('Démarrage du quiz');
  };

  const handleDailyChallenge = () => {
    console.log('Participation au défi quotidien');
  };

  const frenchLevels = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Fondamentaux du français",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "francais-alphabet",
          title: "L'alphabet français",
          description: "Apprendre les 26 lettres",
          duration: 15,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔤"
        },
        {
          id: "francais-voyelles",
          title: "Les voyelles",
          description: "A, E, I, O, U, Y",
          duration: 12,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔊"
        },
        {
          id: "francais-consonnes",
          title: "Les consonnes",
          description: "Toutes les consonnes françaises",
          duration: 18,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔇"
        },
        {
          id: "francais-nombres",
          title: "Les nombres",
          description: "Compter de 1 à 100",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔢"
        },
        {
          id: "francais-couleurs",
          title: "Les couleurs",
          description: "Nommer les couleurs",
          duration: 14,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🎨"
        },
        {
          id: "francais-jours-semaine",
          title: "Les jours de la semaine",
          description: "Lundi, mardi, mercredi...",
          duration: 16,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "📅"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Français intermédiaire",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "francais-articles",
          title: "Les articles",
          description: "Le, la, les, un, une, des",
          duration: 22,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📝"
        },
        {
          id: "francais-verbes-etre-avoir",
          title: "Être et avoir",
          description: "Conjugaison des verbes de base",
          duration: 25,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔗"
        },
        {
          id: "francais-adjectifs",
          title: "Les adjectifs",
          description: "Qualifier les noms",
          duration: 20,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✨"
        },
        {
          id: "francais-pluriel",
          title: "Le pluriel",
          description: "Règles de formation du pluriel",
          duration: 18,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        },
        {
          id: "francais-feminin",
          title: "Le féminin",
          description: "Formation du féminin",
          duration: 24,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👩"
        },
        {
          id: "francais-phrases-simples",
          title: "Phrases simples",
          description: "Construire des phrases",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💬"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Français avancé",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "francais-temps-verbaux",
          title: "Les temps verbaux",
          description: "Présent, passé, futur",
          duration: 30,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⏰"
        },
        {
          id: "francais-subjonctif",
          title: "Le subjonctif",
          description: "Mode du doute et du souhait",
          duration: 35,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🤔"
        },
        {
          id: "francais-conditionnel",
          title: "Le conditionnel",
          description: "Hypothèses et politesse",
          duration: 32,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎭"
        },
        {
          id: "francais-pronoms",
          title: "Les pronoms",
          description: "Pronoms personnels et relatifs",
          duration: 28,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👤"
        },
        {
          id: "francais-adverbes",
          title: "Les adverbes",
          description: "Modifier les verbes",
          duration: 25,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📝"
        },
        {
          id: "francais-conjonctions",
          title: "Les conjonctions",
          description: "Lier les phrases",
          duration: 30,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔗"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Français expert",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "francais-litterature",
          title: "Littérature française",
          description: "Grands auteurs et œuvres",
          duration: 40,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        },
        {
          id: "francais-poesie",
          title: "La poésie",
          description: "Vers, rimes et figures de style",
          duration: 38,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌹"
        },
        {
          id: "francais-theatre",
          title: "Le théâtre",
          description: "Tragédie, comédie et dramaturgie",
          duration: 35,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎭"
        },
        {
          id: "francais-essai",
          title: "L'essai",
          description: "Argumentation et réflexion",
          duration: 42,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✍️"
        },
        {
          id: "francais-analyse-texte",
          title: "Analyse de texte",
          description: "Méthodes d'analyse littéraire",
          duration: 45,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔍"
        },
        {
          id: "francais-perfectionnement",
          title: "Perfectionnement",
          description: "Maîtrise avancée du français",
          duration: 50,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏆"
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16 pb-8 bg-gradient-to-br from-blue-50 to-red-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-red-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">🇫��</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Français
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez le français de manière ludique avec nos leçons interactives
            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">
              Un programme complet de français en 4 niveaux, de débutant à expert
            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {frenchLevels.map((level) => (
              <LevelCard
                key={level.id}
                level={level}
                isExpanded={expandedLevel === level.id}
                onToggle={handleLevelToggle}
              />
            ))}
          </div>

          {/* Bouton pour voir toutes les leçons du niveau 1 */}
          <div className="text-center mb-12">
            <button
              onClick={() => setExpandedLevel(1)}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Voir toutes les leçons du niveau 1
            </button>
          </div>

          {/* Section Quiz et Défis */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Testez vos connaissances
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Prenez notre quiz pour vérifier ce que vous avez appris
            </p>
          </div>

          {/* Cartes Quiz et Défi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Quiz */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <Brain className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Quiz Niveau 1
                </h3>
                <p className="text-gray-700 mb-6">
                  Testez vos connaissances de base
                </p>
                <button
                  onClick={handleQuizStart}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
            </div>

            {/* Défi quotidien */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Défi quotidien
                </h3>
                <p className="text-gray-700 mb-6">
                  Un nouveau défi chaque jour
                </p>
                <button
                  onClick={handleDailyChallenge}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Participer
                </button>
              </div>
            </div>
          </div>

          {/* Bouton retour */}
          <div className="text-center">
            <a
              href="/subjects"
              className="inline-flex items-center bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              ← Retour aux matières
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}