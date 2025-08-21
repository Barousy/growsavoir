import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Activités - GrowSavoir',
  description: 'Découvrez nos activités interactives et jeux éducatifs.',
};

export default function ActivitiesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Activités interactives
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Des jeux, quiz et activités pour rendre l&apos;apprentissage amusant et engageant
            </p>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quiz Activities */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quiz interactifs</h3>
                <p className="text-slate-600 mb-4">Testez les connaissances avec nos quiz amusants</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Commencer
                </button>
              </div>

              {/* Games */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Jeux éducatifs</h3>
                <p className="text-slate-600 mb-4">Apprenez en jouant avec nos jeux interactifs</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Jouer
                </button>
              </div>

              {/* Printables */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🖨️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fiches à imprimer</h3>
                <p className="text-slate-600 mb-4">Téléchargez et imprimez nos supports d&apos;apprentissage</p>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}