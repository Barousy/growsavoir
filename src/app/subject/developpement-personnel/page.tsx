'use client';

import { useState } from 'react';
import { personalDevelopmentLevels } from '@/data/personalDevelopmentLevelData';
import LevelCard from '@/components/ui/LevelCard';
import Navigation from '@/components/ui/Navigation';

export default function DeveloppementPersonnelPage() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  const handleToggleLevel = (levelId: number) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            🧠 Développement Personnel
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez votre potentiel et développez vos compétences personnelles pour une vie plus épanouie et équilibrée
          </p>
        </div>

        {/* Description du sujet */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Pourquoi le développement personnel ?
              </h2>
              <p className="text-slate-600 mb-4">
                Le développement personnel est un voyage d'apprentissage continu qui vous permet de mieux vous connaître, 
                de développer vos compétences et de réaliser votre plein potentiel.
              </p>
              <p className="text-slate-600 mb-4">
                À travers ce programme, vous découvrirez des outils pratiques pour améliorer votre confiance en soi, 
                gérer vos émotions, communiquer efficacement et atteindre vos objectifs.
              </p>
              <p className="text-slate-600">
                Chaque niveau vous accompagne dans une progression structurée, du débutant à l'expert, 
                pour vous permettre de construire une base solide et d'évoluer constamment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-6xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Compétences développées
              </h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Conscience de soi et confiance</li>
                <li>• Intelligence émotionnelle</li>
                <li>• Communication et leadership</li>
                <li>• Gestion du stress et résilience</li>
                <li>• Organisation et productivité</li>
                <li>• Créativité et innovation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Niveaux de progression */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Parcours de progression
          </h2>
          
          {personalDevelopmentLevels.map((level) => (
            <LevelCard
              key={level.id}
              level={level}
              isExpanded={expandedLevel === level.id}
              onToggle={() => handleToggleLevel(level.id)}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à transformer votre vie ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Commencez votre voyage de développement personnel dès aujourd'hui. 
              Chaque leçon est conçue pour vous accompagner dans votre croissance personnelle.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200">
              Commencer maintenant
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
