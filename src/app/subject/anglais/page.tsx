'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';
import { Brain, Trophy, ArrowLeft } from 'lucide-react';

export default function EnglishSubjectPage() {
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

  const englishLevels = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Fondamentaux de l'anglais",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "anglais-alphabet",
          title: "The English Alphabet",
          description: "Learn the 26 letters and their pronunciation",
          duration: 15,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔤"
        },
        {
          id: "anglais-voyelles",
          title: "Vowels and Consonants",
          description: "Understanding A, E, I, O, U and other sounds",
          duration: 18,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔊"
        },
        {
          id: "anglais-nombres",
          title: "Numbers 1-100",
          description: "Count and write numbers in English",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔢"
        },
        {
          id: "anglais-couleurs",
          title: "Colors and Shapes",
          description: "Learn basic colors and geometric shapes",
          duration: 16,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🎨"
        },
        {
          id: "anglais-famille",
          title: "Family Members",
          description: "Names of family members and relationships",
          duration: 22,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "👨‍��‍👧‍👦"
        },
        {
          id: "anglais-animaux",
          title: "Animals and Pets",
          description: "Common animals and their names",
          duration: 19,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🐾"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Anglais intermédiaire",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "anglais-articles",
          title: "Articles and Pronouns",
          description: "A, an, the and personal pronouns",
          duration: 25,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📝"
        },
        {
          id: "anglais-verbes-etre-avoir",
          title: "To Be and To Have",
          description: "Conjugation of basic verbs",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔗"
        },
        {
          id: "anglais-adjectifs",
          title: "Adjectives and Adverbs",
          description: "Describing people, places and things",
          duration: 24,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✨"
        },
        {
          id: "anglais-temps-present",
          title: "Present Tenses",
          description: "Simple present and present continuous",
          duration: 30,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⏰"
        },
        {
          id: "anglais-questions",
          title: "Question Forms",
          description: "How to ask questions in English",
          duration: 26,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "❓"
        },
        {
          id: "anglais-negation",
          title: "Negative Forms",
          description: "Expressing negation and refusal",
          duration: 22,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "❌"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Anglais avancé",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "anglais-temps-passes",
          title: "Past Tenses",
          description: "Simple past, past continuous and present perfect",
          duration: 35,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📅"
        },
        {
          id: "anglais-futur",
          title: "Future Tenses",
          description: "Will, going to and future continuous",
          duration: 32,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔮"
        },
        {
          id: "anglais-conditionnel",
          title: "Conditional Sentences",
          description: "If clauses and hypothetical situations",
          duration: 38,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎭"
        },
        {
          id: "anglais-passif",
          title: "Passive Voice",
          description: "Understanding and using passive constructions",
          duration: 34,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔀"
        },
        {
          id: "anglais-phrasal-verbs",
          title: "Phrasal Verbs",
          description: "Common phrasal verbs and their meanings",
          duration: 40,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔤"
        },
        {
          id: "anglais-idiomes",
          title: "Idioms and Expressions",
          description: "Popular English idioms and their usage",
          duration: 36,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💬"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Anglais expert",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "anglais-litterature",
          title: "English Literature",
          description: "Classic works and literary analysis",
          duration: 45,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        },
        {
          id: "anglais-business",
          title: "Business English",
          description: "Professional communication and vocabulary",
          duration: 42,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💼"
        },
        {
          id: "anglais-academique",
          title: "Academic English",
          description: "Writing essays and academic papers",
          duration: 48,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎓"
        },
        {
          id: "anglais-medias",
          title: "Media and Journalism",
          description: "Understanding news and media language",
          duration: 44,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📰"
        },
        {
          id: "anglais-culture",
          title: "Cultural Context",
          description: "Understanding English-speaking cultures",
          duration: 50,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌍"
        },
        {
          id: "anglais-fluency",
          title: "Fluency and Pronunciation",
          description: "Achieving native-like fluency",
          duration: 55,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎯"
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16 pb-8 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">GB</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Apprendre l'anglais
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez l'anglais de manière ludique avec nos leçons interactives
            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">
              Un programme complet d'anglais en 4 niveaux, de débutant à expert
            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {englishLevels.map((level) => (
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
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-shadow">
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
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
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