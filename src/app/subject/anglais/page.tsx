'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';

import { Brain, Trophy, ArrowLeft, Globe } from 'lucide-react';
import { englishLevels } from '@/data/englishLevelData';

export default function EnglishSubjectPage() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1);


  const handleLevelToggle = (levelId: number) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };


  const handleQuizStart = () => {
    console.log('Démarrage du quiz anglais');
  };

  const handleDailyChallenge = () => {
    console.log('Participation au défi quotidien anglais');
      
  const handleLessonStart = (lessonId: string) => {
    console.log(`Démarrage de la leçon: ${lessonId}`);
    // Ici vous pourriez naviguer vers la leçon ou ouvrir un modal
  };

 
  };

  return (
    <>
      <Navigation />
      <main className="pt-16 pb-8 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">

              <Globe className="w-10 h-10 text-white" />

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