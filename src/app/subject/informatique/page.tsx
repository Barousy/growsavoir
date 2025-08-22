'use client';
import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import LevelCard from '@/components/ui/LevelCard';
import { Brain, Trophy, ArrowLeft } from 'lucide-react';

export default function ComputerScienceSubjectPage() {
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

  const computerLevels = [
    {
      id: 1,
      name: "Niveau 1 - Débutant",
      description: "Fondamentaux de l'informatique",
      lessonCount: 6,
      color: "bg-green-500",
      lessons: [
        {
          id: "informatique-ordinateur",
          title: "Qu'est-ce qu'un ordinateur ?",
          description: "Découvrir les composants de base d'un ordinateur",
          duration: 8,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "💻"
        },
        {
          id: "informatique-clavier-souris",
          title: "Le clavier et la souris",
          description: "Apprendre à utiliser les périphériques d'entrée",
          duration: 6,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "⌨️"
        },
        {
          id: "informatique-ecran-fenetres",
          title: "L'écran et les fenêtres",
          description: "Naviguer dans l'interface graphique",
          duration: 7,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🖥️"
        },
        {
          id: "informatique-fichiers-dossiers",
          title: "Les fichiers et dossiers",
          description: "Organiser et gérer ses documents",
          duration: 9,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "📁"
        },
        {
          id: "informatique-internet-navigation",
          title: "Internet et navigation",
          description: "Surfer sur le web en toute sécurité",
          duration: 10,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "🌐"
        },
        {
          id: "informatique-messagerie",
          title: "La messagerie",
          description: "Envoyer et recevoir des emails",
          duration: 8,
          difficulty: 'beginner' as const,
          isCompleted: false,
          isLocked: false,
          emoji: "📧"
        }
      ]
    },
    {
      id: 2,
      name: "Niveau 2 - Intermédiaire",
      description: "Informatique intermédiaire",
      lessonCount: 6,
      color: "bg-yellow-500",
      lessons: [
        {
          id: "informatique-logique-algorithmes",
          title: "Logique et algorithmes",
          description: "Penser comme un programmeur",
          duration: 12,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🧠"
        },
        {
          id: "informatique-programmation-visuelle",
          title: "Programmation visuelle",
          description: "Créer des programmes avec des blocs",
          duration: 15,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔧"
        },
        {
          id: "informatique-variables",
          title: "Les variables",
          description: "Stocker et manipuler des informations",
          duration: 14,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📦"
        },
        {
          id: "informatique-boucles",
          title: "Les boucles",
          description: "Répéter des actions automatiquement",
          duration: 13,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔄"
        },
        {
          id: "informatique-conditions",
          title: "Les conditions",
          description: "Prendre des décisions dans un programme",
          duration: 16,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "❓"
        },
        {
          id: "informatique-creer-jeux",
          title: "Créer des jeux",
          description: "Programmer votre premier jeu simple",
          duration: 18,
          difficulty: 'intermediate' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎮"
        }
      ]
    },
    {
      id: 3,
      name: "Niveau 3 - Avancé",
      description: "Informatique avancée",
      lessonCount: 6,
      color: "bg-red-500",
      lessons: [
        {
          id: "informatique-python",
          title: "Programmation en Python",
          description: "Apprendre un vrai langage de programmation",
          duration: 25,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🐍"
        },
        {
          id: "informatique-fonctions",
          title: "Les fonctions",
          description: "Créer des blocs de code réutilisables",
          duration: 20,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "⚙️"
        },
        {
          id: "informatique-objets-classes",
          title: "Les objets et classes",
          description: "Programmation orientée objet",
          duration: 22,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🏗️"
        },
        {
          id: "informatique-bases-donnees",
          title: "Bases de données",
          description: "Stocker et organiser des informations",
          duration: 18,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🗄️"
        },
        {
          id: "informatique-intelligence-artificielle",
          title: "Intelligence artificielle",
          description: "Introduction à l'IA et au machine learning",
          duration: 24,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🤖"
        },
        {
          id: "informatique-cybersecurite",
          title: "Cybersécurité",
          description: "Protéger ses données et sa vie privée",
          duration: 20,
          difficulty: 'advanced' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🔒"
        }
      ]
    },
    {
      id: 4,
      name: "Niveau 4 - Expert",
      description: "Informatique experte",
      lessonCount: 6,
      color: "bg-purple-500",
      lessons: [
        {
          id: "informatique-developpement-web",
          title: "Développement web",
          description: "Créer des sites web modernes",
          duration: 30,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🌐"
        },
        {
          id: "informatique-applications-mobiles",
          title: "Applications mobiles",
          description: "Développer pour smartphones et tablettes",
          duration: 28,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "📱"
        },
        {
          id: "informatique-cloud-computing",
          title: "Cloud computing",
          description: "Travail collaboratif et stockage en ligne",
          duration: 25,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "☁️"
        },
        {
          id: "informatique-devops",
          title: "DevOps et déploiement",
          description: "Automatiser le développement et la mise en production",
          duration: 32,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🚀"
        },
        {
          id: "informatique-projet-final",
          title: "Projet final avancé",
          description: "Créer une application complète de A à Z",
          duration: 40,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "🎯"
        },
        {
          id: "informatique-preparation-professionnelle",
          title: "Préparation professionnelle",
          description: "Se préparer aux métiers de l'informatique",
          duration: 35,
          difficulty: 'expert' as const,
          isCompleted: false,
          isLocked: true,
          emoji: "💼"
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16 pb-8 bg-gradient-to-br from-indigo-50 to-blue-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">��</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Informatique
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez l'informatique de manière ludique avec nos leçons interactives
            </p>
          </div>

          {/* Vue d'ensemble du cours */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vue d'ensemble du cours
            </h2>
            <p className="text-lg text-gray-600">
              Un programme complet d'informatique en 4 niveaux, de débutant à expert
            </p>
          </div>

          {/* Niveaux interactifs */}
          <div className="space-y-6 mb-12">
            {computerLevels.map((level) => (
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
              className="bg-indigo-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-600 transition-colors shadow-lg hover:shadow-xl"
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
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200 hover:shadow-lg transition-shadow">
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
                  className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
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