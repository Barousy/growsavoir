import Link from 'next/link';
import { BookOpen, Users, Clock, Star, ArrowRight } from 'lucide-react';

const subjects = [
  {
    id: 'arabe',
    name: 'Arabe',
    description: 'Apprenez la langue arabe avec une approche progressive et interactive, de l\'alphabet aux conversations avancées.',
    icon: '🇸🇦',
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    courses: 24,
    students: 3456,
    rating: 4.8,
    levels: ['Débutant', 'Intermédiaire', 'Avancé'],
    categories: ['Grammaire', 'Vocabulaire', 'Conversation', 'Calligraphie'],
  },
  {
    id: 'mathematiques',
    name: 'Mathématiques',
    description: 'Découvrez les mathématiques de manière ludique et structurée, du CP à l\'université.',
    icon: '🔢',
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    courses: 32,
    students: 5678,
    rating: 4.9,
    levels: ['CP-CE1', 'CE2-CM2', 'Collège', 'Lycée', 'Université'],
    categories: ['Arithmétique', 'Géométrie', 'Algèbre', 'Calcul'],
  },
  {
    id: 'histoire',
    name: 'Histoire',
    description: 'Explorez l\'histoire de l\'Islam et du monde à travers des récits captivants et des sources authentiques.',
    icon: '🕌',
    color: 'bg-gradient-to-br from-amber-500 to-orange-600',
    courses: 18,
    students: 2345,
    rating: 4.7,
    levels: ['Primaire', 'Collège', 'Lycée', 'Adulte'],
    categories: ['Histoire de l\'Islam', 'Histoire générale', 'Géographie', 'Civilisations'],
  },
  {
    id: 'informatique',
    name: 'Informatique',
    description: 'Initiez-vous à la programmation et aux technologies numériques avec des projets pratiques.',
    icon: '💻',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
    courses: 28,
    students: 4123,
    rating: 4.6,
    levels: ['Débutant', 'Intermédiaire', 'Avancé'],
    categories: ['Programmation', 'Web', 'Applications', 'Intelligence Artificielle'],
  },
  {
    id: 'sciences',
    name: 'Sciences',
    description: 'Explorez le monde des sciences naturelles, de la physique et de la chimie de manière expérimentale.',
    icon: '🔬',
    color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    courses: 22,
    students: 2987,
    rating: 4.8,
    levels: ['Primaire', 'Collège', 'Lycée', 'Université'],
    categories: ['Sciences naturelles', 'Physique', 'Chimie', 'Biologie'],
  },
  {
    id: 'anglais',
    name: 'Anglais',
    description: 'Maîtrisez l\'anglais avec des cours conversationnels et des exercices pratiques pour tous les niveaux.',
    icon: '🇬🇧',
    color: 'bg-gradient-to-br from-red-500 to-rose-600',
    courses: 26,
    students: 3789,
    rating: 4.7,
    levels: ['Débutant', 'Intermédiaire', 'Avancé', 'Business'],
    categories: ['Grammaire', 'Vocabulaire', 'Conversation', 'Préparation examens'],
  },
  {
    id: 'francais',
    name: 'Français',
    description: 'Perfectionnez votre français avec des cours de grammaire, littérature et expression écrite.',
    icon: '🇫🇷',
    color: 'bg-gradient-to-br from-indigo-500 to-blue-600',
    courses: 20,
    students: 3123,
    rating: 4.8,
    levels: ['Primaire', 'Collège', 'Lycée', 'Adulte'],
    categories: ['Grammaire', 'Littérature', 'Expression écrite', 'Orthographe'],
  },
  {
    id: 'art',
    name: 'Arts & Culture',
    description: 'Découvrez l\'art islamique, la calligraphie et les expressions culturelles du monde musulman.',
    icon: '🎨',
    color: 'bg-gradient-to-br from-emerald-500 to-green-600',
    courses: 16,
    students: 1890,
    rating: 4.6,
    levels: ['Tous niveaux', 'Débutant', 'Intermédiaire'],
    categories: ['Calligraphie', 'Art islamique', 'Musique', 'Architecture'],
  },
];

export default function SubjectsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Nos Matières
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez notre gamme complète de matières éducatives, 
              conçues pour répondre aux besoins de tous les apprenants.
            </p>
          </div>
        </div>
      </section>

      {/* Grille des matières */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {subjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                {/* En-tête avec icône et couleur */}
                <div className={`${subject.color} p-6 text-white text-center`}>
                  <div className="text-5xl mb-3">{subject.icon}</div>
                  <h3 className="text-xl font-bold">{subject.name}</h3>
                </div>
                
                {/* Contenu */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {subject.description}
                  </p>
                  
                  {/* Statistiques */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center text-blue-600 mb-1">
                        <BookOpen className="h-4 w-4 mr-1" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{subject.courses}</div>
                      <div className="text-xs text-gray-500">Cours</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center text-green-600 mb-1">
                        <Users className="h-4 w-4 mr-1" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{subject.students}</div>
                      <div className="text-xs text-gray-500">Étudiants</div>
                    </div>
                  </div>
                  
                  {/* Note */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(subject.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">{subject.rating}</span>
                    </div>
                  </div>
                  
                  {/* Niveaux */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Niveaux disponibles :</h4>
                    <div className="flex flex-wrap gap-1">
                      {subject.levels.map((level) => (
                        <span
                          key={level}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Catégories */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Catégories :</h4>
                    <div className="flex flex-wrap gap-1">
                      {subject.categories.map((category) => (
                        <span
                          key={category}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bouton d'action */}
                  <Link
                    href={`/subjects/${subject.id}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                  >
                    Explorer {subject.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Prêt à commencer votre apprentissage ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Choisissez une matière qui vous intéresse et commencez votre voyage 
            d&apos;apprentissage dès aujourd&apos;hui.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir tous les cours
            </Link>
            <Link
              href="/auth/signup"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Créer un compte gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

