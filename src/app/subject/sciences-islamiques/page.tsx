'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';
import { Brain, Trophy, ArrowLeft } from 'lucide-react';

export default function IslamicSciencesSubjectPage() {
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

  const islamicLevels = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Fondamentaux des sciences islamiques",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "islam-piliers-islam",
          title: "Les piliers de l'Islam",
          description: "Les cinq piliers fondamentaux de la religion musulmane",
          duration: 10,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🕌"
        },
        {
          id: "islam-profession-foi",
          title: "La profession de foi",
          description: "La Chahada et son importance",
          duration: 8,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "📖"
        },
        {
          id: "islam-priere",
          title: "La prière",
          description: "Les cinq prières quotidiennes et leurs règles",
          duration: 12,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🕌"
        },
        {
          id: "islam-jeune",
          title: "Le jeûne",
          description: "Le Ramadan et ses bienfaits",
          duration: 9,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🌙"
        },
        {
          id: "islam-aumone",
          title: "L'aumône",
          description: "La Zakat et la charité en Islam",
          duration: 7,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🤲"
        },
        {
          id: "islam-pelerinage",
          title: "Le pèlerinage",
          description: "Le Hajj et ses étapes",
          duration: 11,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🕋"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Sciences islamiques intermédiaires",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "islam-vertus-islamiques",
          title: "Les vertus islamiques",
          description: "Patience, gratitude, humilité et autres qualités",
          duration: 14,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✨"
        },
        {
          id: "islam-relations-sociales",
          title: "Les relations sociales",
          description: "Respect des parents, bon voisinage, amitié",
          duration: 13,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🤝"
        },
        {
          id: "islam-ethique-islamique",
          title: "L'éthique islamique",
          description: "Les bonnes manières et le comportement",
          duration: 15,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        },
        {
          id: "islam-interdits",
          title: "Les interdits",
          description: "Ce qui est interdit en Islam et pourquoi",
          duration: 12,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "❌"
        },
        {
          id: "islam-obligations",
          title: "Les obligations",
          description: "Les devoirs du musulman envers Allah et les autres",
          duration: 16,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "✅"
        },
        {
          id: "islam-purification",
          title: "La purification",
          description: "Les ablutions et la propreté en Islam",
          duration: 10,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💧"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Sciences islamiques avancées",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "islam-fiqh-avance",
          title: "Le Fiqh avancé",
          description: "Jurisprudence islamique et règles détaillées",
          duration: 22,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚖️"
        },
        {
          id: "islam-ecoles-juridiques",
          title: "Les écoles juridiques",
          description: "Les différentes madhahib et leurs spécificités",
          duration: 20,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏛️"
        },
        {
          id: "islam-exegese-coranique",
          title: "L'exégèse coranique",
          description: "Tafsir et interprétation du Coran",
          duration: 25,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📖"
        },
        {
          id: "islam-science-hadith",
          title: "La science du Hadith",
          description: "Étude des traditions prophétiques",
          duration: 23,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        },
        {
          id: "islam-theologie-islamique",
          title: "La théologie islamique",
          description: "Aqida et croyances fondamentales",
          duration: 21,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕌"
        },
        {
          id: "islam-spiritualite",
          title: "La spiritualité",
          description: "Tasawwuf et développement spirituel",
          duration: 24,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕊️"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Sciences islamiques expertes",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "islam-methodologie-salaf",
          title: "Méthodologie des Salaf",
          description: "Comprendre la méthodologie des pieux prédécesseurs",
          duration: 30,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        },
        {
          id: "islam-aqida-authentique",
          title: "Aqida authentique",
          description: "Croyance correcte selon le Coran et la Sunna",
          duration: 28,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🕌"
        },
        {
          id: "islam-fiqh-contemporain",
          title: "Fiqh contemporain",
          description: "Application des règles islamiques aux situations modernes",
          duration: 32,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚖️"
        },
        {
          id: "islam-sciences-coraniques",
          title: "Sciences coraniques avancées",
          description: "Étude approfondie des sciences du Coran",
          duration: 35,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📖"
        },
        {
          id: "islam-hadith-authentique",
          title: "Hadith authentique",
          description: "Critique et authentification des traditions",
          duration: 30,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📚"
        },
        {
          id: "islam-preparation-enseignement",
          title: "Préparation à l'enseignement",
          description: "Former la prochaine génération de savants",
          duration: 40,
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
      <main className="pt-16 pb-8 bg-gradient-to-br from-emerald-50 to-teal-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">��</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Sciences islamiques
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les sciences islamiques de manière ludique avec nos leçons interactives
            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">
              Un programme complet de sciences islamiques en 4 niveaux, de débutant à expert
            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {islamicLevels.map((level) => (
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
              className="bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-xl"
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
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200 hover:shadow-lg transition-shadow">
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
                  className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                >
                  Commencer le quiz
                </button>
              </div>
            </div>

            {/* Défi quotidien */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border border-teal-200 hover:shadow-lg transition-shadow">
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
                  className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
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