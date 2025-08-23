'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';
import { Brain, Trophy, ArrowLeft } from 'lucide-react';

export default function MathSubjectPage() {
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

  const mathLevels = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Fondamentaux des mathématiques",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "math-nombres-1-100",
          title: "Nombres de 1 à 100",
          description: "Compter et écrire les nombres",
          duration: 15,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔢"
        },
        {
          id: "math-addition-simple",
          title: "Addition simple",
          description: "Additionner des nombres",
          duration: 18,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "➕"
        },
        {
          id: "math-soustraction-simple",
          title: "Soustraction simple",
          description: "Soustraire des nombres",
          duration: 16,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "➖"
        },
        {
          id: "math-formes-geometriques",
          title: "Formes géométriques",
          description: "Reconnaître les formes",
          duration: 12,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🔷"
        },
        {
          id: "math-mesures-simples",
          title: "Mesures simples",
          description: "Mesurer avec des unités",
          duration: 14,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "📏"
        },
        {
          id: "math-problemes-simples",
          title: "Problèmes simples",
          description: "Résoudre des problèmes",
          duration: 20,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "❓"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Mathématiques intermédiaires",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "math-multiplication",
          title: "Multiplication",
          description: "Tables de multiplication",
          duration: 22,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✖️"
        },
        {
          id: "math-division",
          title: "Division",
          description: "Diviser des nombres",
          duration: 25,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "➗"
        },
        {
          id: "math-fractions-simples",
          title: "Fractions simples",
          description: "Comprendre les fractions",
          duration: 20,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🍕"
        },
        {
          id: "math-decimaux",
          title: "Nombres décimaux",
          description: "Travailler avec les décimaux",
          duration: 18,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔢"
        },
        {
          id: "math-perimetre-aire",
          title: "Périmètre et aire",
          description: "Calculer les mesures",
          duration: 24,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📐"
        },
        {
          id: "math-problemes-complexes",
          title: "Problèmes complexes",
          description: "Résoudre des problèmes avancés",
          duration: 28,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🧮"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Mathématiques avancées",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "math-algebre-basique",
          title: "Algèbre basique",
          description: "Équations et variables",
          duration: 30,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📊"
        },
        {
          id: "math-geometrie-avancee",
          title: "Géométrie avancée",
          description: "Théorèmes et démonstrations",
          duration: 32,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📐"
        },
        {
          id: "math-statistiques",
          title: "Statistiques",
          description: "Moyennes et graphiques",
          duration: 28,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📈"
        },
        {
          id: "math-probabilites",
          title: "Probabilités",
          description: "Chances et événements",
          duration: 25,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎲"
        },
        {
          id: "math-fonctions",
          title: "Fonctions",
          description: "Relations et graphiques",
          duration: 35,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📉"
        },
        {
          id: "math-problemes-avances",
          title: "Problèmes avancés",
          description: "Résolution complexe",
          duration: 40,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🧮"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Mathématiques expertes",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "math-trigonometrie",
          title: "Trigonométrie",
          description: "Sinus, cosinus et tangente",
          duration: 28,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📐"
        },
        {
          id: "math-calcul-differentiel",
          title: "Calcul différentiel",
          description: "Introduction aux dérivées",
          duration: 45,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📊"
        },
        {
          id: "math-calcul-integral",
          title: "Calcul intégral",
          description: "Aires et volumes",
          duration: 42,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📈"
        },
        {
          id: "math-algebre-lineaire",
          title: "Algèbre linéaire",
          description: "Matrices et vecteurs",
          duration: 38,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔢"
        },
        {
          id: "math-geometrie-analytique",
          title: "Géométrie analytique",
          description: "Coordonnées et équations",
          duration: 35,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📐"
        },
        {
          id: "math-applications-reelles",
          title: "Applications réelles",
          description: "Mathématiques dans la vie",
          duration: 50,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌍"
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16 pb-8 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">��</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Mathématiques
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les mathématiques de manière ludique avec nos leçons interactives
            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">
              Un programme complet de mathématiques en 4 niveaux, de débutant à expert
            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {mathLevels.map((level) => (
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
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
            </div>

            {/* Défi quotidien */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
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
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
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