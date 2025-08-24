'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';

import { Brain, Trophy, ArrowLeft, BookOpen } from 'lucide-react';

export default function ArabicSubjectPage() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1);

  const handleLevelToggle = (levelId: number) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };


  const handleQuizStart = () => {
    console.log('Démarrage du quiz arabe');
  };

  const handleDailyChallenge = () => {
    console.log('Participation au défi quotidien arabe');
  };

  const arabicLevels = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Fondamentaux de l'arabe",
      lessonCount: 8,
      color: "bg-green-500",
      lessons: [
        {
          id: "arabe-alphabet",
          title: "L'alphabet arabe",
          description: "Apprendre les 28 lettres et leur prononciation",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔤"
        },
        {
          id: "arabe-voyelles",
          title: "Les voyelles courtes et longues",
          description: "Fatha, kasra, damma et leurs équivalents longs",
          duration: 25,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔊"
        },
        {
          id: "arabe-nombres",
          title: "Les nombres 1-100",
          description: "Compter et écrire les nombres en arabe",
          duration: 22,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔢"
        },
        {
          id: "arabe-couleurs",
          title: "Les couleurs",
          description: "Apprendre les couleurs de base en arabe",
          duration: 18,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🎨"
        },
        {
          id: "arabe-famille",
          title: "Les membres de la famille",
          description: "Noms des membres de la famille et relations",
          duration: 24,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "👨‍👩‍👧‍👦"
        },
        {
          id: "arabe-animaux",
          title: "Les animaux",
          description: "Noms des animaux courants en arabe",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🐾"
        },
        {
          id: "arabe-salutations",
          title: "Les salutations",
          description: "Bonjour, au revoir, comment allez-vous ?",
          duration: 16,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "👋"
        },
        {
          id: "arabe-jours",
          title: "Les jours de la semaine",
          description: "Apprendre les jours de la semaine en arabe",
          duration: 15,
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
      description: "Grammaire et vocabulaire arabe",
      lessonCount: 8,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "arabe-articles",
          title: "Les articles définis et indéfinis",
          description: "Al, alif-lam et leur utilisation",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📝"
        },
        {
          id: "arabe-verbes",
          title: "Les verbes de base",
          description: "Conjugaison des verbes au présent",
          duration: 32,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔗"
        },
        {
          id: "arabe-adjectifs",
          title: "Les adjectifs",
          description: "Accord des adjectifs avec les noms",
          duration: 26,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✨"
        },
        {
          id: "arabe-questions",
          title: "Les questions",
          description: "Comment poser des questions en arabe",
          duration: 24,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "❓"
        },
        {
          id: "arabe-negation",
          title: "La négation",
          description: "Exprimer la négation en arabe",
          duration: 20,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "❌"
        },
        {
          id: "arabe-temps",
          title: "Les expressions temporelles",
          description: "Hier, aujourd'hui, demain, etc.",
          duration: 22,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⏰"
        },
        {
          id: "arabe-lieu",
          title: "Les prépositions de lieu",
          description: "Sur, sous, dans, à côté de, etc.",
          duration: 25,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📍"
        },
        {
          id: "arabe-possessifs",
          title: "Les pronoms possessifs",
          description: "Mon, ton, son, notre, votre, leur",
          duration: 30,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💎"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Arabe avancé et littéraire",
      lessonCount: 8,
      color: "bg-red-500",
      lessons: [
        {
          id: "arabe-passe",
          title: "Le passé et le futur",
          description: "Conjugaison des verbes au passé et au futur",
          duration: 35,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📅"
        },
        {
          id: "arabe-conditionnel",
          title: "Le conditionnel",
          description: "Si clauses et situations hypothétiques",
          duration: 38,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎭"
        },
        {
          id: "arabe-passif",
          title: "La voix passive",
          description: "Comprendre et utiliser la voix passive",
          duration: 34,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔀"
        },
        {
          id: "arabe-idiomes",
          title: "Les expressions idiomatiques",
          description: "Expressions populaires arabes et leur usage",
          duration: 40,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💬"
        },
        {
          id: "arabe-litterature",
          title: "Introduction à la littérature arabe",
          description: "Textes classiques et modernes",
          duration: 45,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        },
        {
          id: "arabe-calligraphie",
          title: "La calligraphie arabe",
          description: "Art de l'écriture arabe et styles",
          duration: 50,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✒️"
        },
        {
          id: "arabe-dialectes",
          title: "Les dialectes arabes",
          description: "Différences entre l'arabe classique et les dialectes",
          duration: 42,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌍"
        },
        {
          id: "arabe-culture",
          title: "Culture et traditions arabes",
          description: "Comprendre le contexte culturel",
          duration: 48,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏛️"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Maîtrise de l'arabe",
      lessonCount: 8,
      color: "bg-purple-500",
      lessons: [
        {
          id: "arabe-coran",
          title: "L'arabe coranique",
          description: "Étude approfondie de l'arabe du Coran",
          duration: 55,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📖"
        },
        {
          id: "arabe-hadith",
          title: "L'arabe des hadiths",
          description: "Langue des traditions prophétiques",
          duration: 52,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕌"
        },
        {
          id: "arabe-poesie",
          title: "La poésie arabe classique",
          description: "Analyse des poèmes et métriques",
          duration: 60,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎭"
        },
        {
          id: "arabe-grammaire",
          title: "Grammaire avancée",
          description: "Règles complexes et exceptions",
          duration: 58,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔍"
        },
        {
          id: "arabe-traduction",
          title: "Traduction arabe-français",
          description: "Techniques de traduction avancées",
          duration: 65,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔄"
        },
        {
          id: "arabe-enseignement",
          title: "Enseigner l'arabe",
          description: "Méthodologie d'enseignement de l'arabe",
          duration: 70,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "👨‍🏫"
        }
      ]
    }
  ];


  return (
    <>
      <Navigation />

      <main className="pt-16 pb-8 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Apprendre l'arabe
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez la beauté de la langue arabe avec nos leçons interactives et authentiques

            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">

              Un programme complet d'arabe en 4 niveaux, de débutant à expert, respectant les valeurs islamiques

            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {arabicLevels.map((level) => (
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
              className="bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
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
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-center">

                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Brain className="w-8 h-8 text-green-600" />

                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Quiz Niveau 1
                </h3>
                <p className="text-gray-700 mb-6">

                  Testez vos connaissances de base en arabe

                </p>
                <button
                  onClick={handleQuizStart}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
            </div>

            {/* Défi quotidien */}

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200 hover:shadow-lg transition-shadow">

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Défi quotidien
                </h3>
                <p className="text-gray-700 mb-6">

                  Un nouveau défi chaque jour pour progresser
                </p>
                <button
                  onClick={handleDailyChallenge}
                  className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"

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