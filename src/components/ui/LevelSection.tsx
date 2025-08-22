'use client';
import { Users, GraduationCap, Star, Trophy } from 'lucide-react';

const levels = [
  {
    id: 'debutant',
    name: 'Débutant',
    description: 'Bases et fondements de chaque matière',
    icon: Users,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    features: [
      'Concepts fondamentaux',
      'Exercices de base',
      'Progression guidée',
      'Support complet'
    ]
  },
  {
    id: 'intermediaire',
    name: 'Intermédiaire',
    description: 'Développement et pratique avancée',
    icon: GraduationCap,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: [
      'Applications pratiques',
      'Problèmes complexes',
      'Développement des compétences',
      'Projets concrets'
    ]
  },
  {
    id: 'avance',
    name: 'Avancé',
    description: 'Maîtrise et approfondissement',
    icon: Star,
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    features: [
      'Concepts avancés',
      'Analyses approfondies',
      'Résolution de problèmes complexes',
      'Pensée critique'
    ]
  },
  {
    id: 'expert',
    name: 'Expert',
    description: 'Spécialisation et transmission',
    icon: Trophy,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    features: [
      'Maîtrise complète',
      'Innovation et recherche',
      'Enseignement aux autres',
      'Leadership dans le domaine'
    ]
  }
];

export default function LevelSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Apprentissage par niveaux
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une progression structurée adaptée à votre niveau de compétence, 
            quel que soit votre âge ou votre expérience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level) => {
            const IconComponent = level.icon;
            return (
              <div
                key={level.id}
                className={`relative p-6 rounded-2xl border-2 ${level.borderColor} ${level.bgColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {level.name}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4">
                  {level.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {level.features.map((feature, index) => (
                    <li key={index} className="text-xs text-slate-600 flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${level.color} mr-2`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${level.color} opacity-0 hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Choisissez votre niveau et commencez votre progression
          </p>
          <a
            href="/subjects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Découvrir les matières
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}