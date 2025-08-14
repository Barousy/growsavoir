import Link from 'next/link';
import { Home, BookOpen, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <Link href="/" className="inline-block mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-3xl">G</span>
          </div>
        </Link>

        {/* Message d'erreur */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page non trouvée
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>
        
        {/* Actions */}
        <div className="space-y-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Home className="h-5 w-5 mr-2" />
            Retour à l&apos;accueil
          </Link>
          
          <Link
            href="/courses"
            className="inline-flex items-center justify-center w-full bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Explorer nos cours
          </Link>
        </div>

        {/* Navigation rapide */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Navigation rapide
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link
              href="/subjects"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              Nos matières
            </Link>
            <Link
              href="/auth/signin"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              Se connecter
            </Link>
            <Link
              href="/auth/signup"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              S&apos;inscrire
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Navigation breadcrumb */}
        <div className="mt-8">
          <nav className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <span>→</span>
            <span className="text-gray-900 font-medium">Page non trouvée</span>
          </nav>
        </div>
      </div>
    </div>
  );
}

