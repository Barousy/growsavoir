import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Aide - GrowSavoir',
  description: 'Centre d&apos;aide et FAQ pour tous vos besoins.',
};

export default function HelpPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Centre d&apos;aide
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Trouvez rapidement des réponses à vos questions et résolvez vos problèmes
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher dans l&apos;aide..."
                className="w-full px-6 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <span className="text-xl">🔍</span>
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Questions fréquemment posées</h2>
            
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  Comment commencer à utiliser GrowSavoir ?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Créez un compte gratuit, choisissez l&apos;âge de votre enfant et commencez par les premières leçons. 
                  Notre plateforme s&apos;adapte automatiquement au niveau de votre enfant.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  Le contenu est-il adapté à l&apos;âge de mon enfant ?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Absolument ! Tous nos contenus sont organisés par groupes d&apos;âge et niveaux. 
                  Nous utilisons des algorithmes pour personnaliser l&apos;expérience d&apos;apprentissage.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  Puis-je suivre les progrès de mon enfant ?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Oui ! Vous avez accès à un tableau de bord détaillé montrant les progrès, 
                  les leçons complétées et les domaines à améliorer.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  Comment contacter le support ?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Vous pouvez nous contacter via le formulaire de contact, par email à support@growsavoir.com, 
                  ou utiliser notre chat en direct disponible 24h/24.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  Y a-t-il des frais cachés ?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Non ! Notre modèle de prix est transparent. Vous payez uniquement ce qui est affiché, 
                  sans frais cachés ni renouvellement automatique non désiré.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Besoin d&apos;aide supplémentaire ?</h2>
            <p className="text-slate-600 mb-8">
              Notre équipe est là pour vous aider. N&apos;hésitez pas à nous contacter !
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Contacter le support
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}