import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import SubjectGrid from '@/components/ui/SubjectGrid';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Tous les sujets - GrowSavoir',
  description: 'Découvrez tous nos sujets éducatifs et commencez l\'apprentissage.',
};

export default function SubjectsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tous nos sujets éducatifs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explorez notre collection complète de matières et trouvez celle qui vous passionne le plus !
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-500">
                Choisissez parmi nos 10 matières spécialement conçues pour les enfants de 3 à 16 ans
              </p>
            </div>
          </div>
        </section>

        {/* Subjects Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nos matières disponibles
              </h2>
              <p className="text-lg text-gray-600">
                Chaque matière propose des leçons adaptées à l'âge et au niveau de votre enfant
              </p>
            </div>
            <SubjectGrid />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à commencer ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Choisissez un sujet et commencez votre voyage d'apprentissage dès aujourd'hui !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/subjects" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Découvrir plus de contenu
              </a>
              <a 
                href="/activities" 
                className="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                Voir nos activités
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pourquoi choisir GrowSavoir ?
              </h2>
              <p className="text-lg text-gray-600">
                Une approche éducative unique et adaptée
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Contenu adapté
                </h3>
                <p className="text-gray-600">
                  Des leçons spécialement conçues pour chaque âge et niveau
                </p>
              </div>
              
              <div className="text-center p-6 group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Apprentissage interactif
                </h3>
                <p className="text-gray-600">
                  Quiz, exercices et activités pour rendre l'apprentissage amusant
                </p>
              </div>
              
              <div className="text-center p-6 group">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Progression personnalisée
                </h3>
                <p className="text-gray-600">
                  Suivez les progrès de votre enfant et adaptez le contenu
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}