import Link from 'next/link';
import { BookOpen, Clock, Star, Users, Filter, Search } from 'lucide-react';

const courses = [
  {
    id: '1',
    title: 'Introduction à l\'Arabe',
    description: 'Apprenez les bases de la langue arabe avec une approche progressive et interactive.',
    subject: 'Arabe',
    level: 'Débutant',
    duration: '8 semaines',
    rating: 4.8,
    students: 1247,
    image: '🇸🇦',
    category: 'Langues',
  },
  {
    id: '2',
    title: 'Mathématiques CP-CE1',
    description: 'Fondamentaux des mathématiques pour les enfants de 6-8 ans avec des exercices ludiques.',
    subject: 'Mathématiques',
    level: 'Débutant',
    duration: '12 semaines',
    rating: 4.9,
    students: 2156,
    image: '🔢',
    category: 'Sciences',
  },
  {
    id: '3',
    title: 'Histoire de l\'Islam',
    description: 'Découvrez l\'histoire riche et fascinante de l\'Islam à travers les siècles.',
    subject: 'Histoire',
    level: 'Intermédiaire',
    duration: '10 semaines',
    rating: 4.7,
    students: 892,
    image: '🕌',
    category: 'Humanités',
  },
  {
    id: '4',
    title: 'Programmation Python',
    description: 'Initiation à la programmation avec Python pour les adolescents et adultes.',
    subject: 'Informatique',
    level: 'Débutant',
    duration: '16 semaines',
    rating: 4.6,
    students: 1567,
    image: '🐍',
    category: 'Technologie',
  },
  {
    id: '5',
    title: 'Sciences Naturelles',
    description: 'Exploration du monde vivant et des phénomènes naturels pour les enfants.',
    subject: 'Sciences',
    level: 'Débutant',
    duration: '14 semaines',
    rating: 4.8,
    students: 1345,
    image: '🔬',
    category: 'Sciences',
  },
  {
    id: '6',
    title: 'Anglais Conversationnel',
    description: 'Améliorez votre anglais parlé avec des exercices pratiques et des dialogues.',
    subject: 'Anglais',
    level: 'Intermédiaire',
    duration: '10 semaines',
    rating: 4.7,
    students: 1789,
    image: '🇬🇧',
    category: 'Langues',
  },
];

const subjects = ['Tous', 'Arabe', 'Mathématiques', 'Histoire', 'Informatique', 'Sciences', 'Anglais'];
const levels = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé'];
const categories = ['Toutes', 'Langues', 'Sciences', 'Humanités', 'Technologie'];

export default function CoursesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Nos Cours
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre collection de cours structurés et progressifs, 
              conçus pour tous les niveaux et tous les âges.
            </p>
          </div>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Barre de recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un cours..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap gap-3">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                {levels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des cours */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                {/* Image du cours */}
                <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <span className="text-6xl">{course.image}</span>
                </div>
                
                {/* Contenu du cours */}
                <div className="p-6">
                  {/* En-tête */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {course.subject}
                      </span>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {course.level}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Titre et description */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Métadonnées */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students} étudiants
                    </div>
                  </div>

                  {/* Bouton d'action */}
                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Voir le cours
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Précédent
              </button>
              <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md">
                1
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Suivant
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins d&apos;apprentissage 
            ou suggérer de nouveaux cours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Nous contacter
            </Link>
            <Link
              href="/auth/signup"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Créer un compte
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

