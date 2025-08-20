import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'À Propos - GrowSavoir',
  description: 'Découvrez l&apos;histoire et la mission de GrowSavoir.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              À propos de GrowSavoir
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Notre mission est de rendre l&apos;apprentissage accessible, engageant et adapté à chaque enfant
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Notre mission
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Chez GrowSavoir, nous croyons que chaque enfant mérite une éducation de qualité, 
                  adaptée à son rythme et à ses besoins. Notre plateforme combine technologie moderne 
                  et pédagogie éprouvée pour créer une expérience d&apos;apprentissage unique.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full mr-4"></div>
                    <span className="text-slate-700">Apprentissage personnalisé</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-full mr-4"></div>
                    <span className="text-slate-700">Contenu de qualité</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full mr-4"></div>
                    <span className="text-slate-700">Engagement des enfants</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Nos valeurs
                </h3>
                <div className="space-y-4 text-slate-700">
                  <p>⭐ <strong>Excellence :</strong> Contenu éducatif de la plus haute qualité</p>
                  <p>�� <strong>Innovation :</strong> Technologies modernes pour l&apos;apprentissage</p>
                  <p>🤝 <strong>Inclusion :</strong> Accessible à tous les enfants</p>
                  <p>�� <strong>Croissance :</strong> Développement continu et amélioration</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}