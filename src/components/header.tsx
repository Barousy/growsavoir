import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export async function Header() {
  try {
    const t = await getTranslations();
    
    return (
      <header className="border-b bg-white">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-bold">
                {t('site.title')}
              </Link>
              <Link href="/courses" className="hover:text-gray-600">
                {t('nav.courses')}
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin" className="hover:text-gray-600">
                {t('nav.login')}
              </Link>
              <Link href="/admin" className="hover:text-gray-600">
                Admin
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Error in Header:', error);
    // Fallback header without translations
    return (
      <header className="border-b bg-white">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-bold">
                Académie
              </Link>
              <Link href="/courses" className="hover:text-gray-600">
                Cours
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin" className="hover:text-gray-600">
                Se connecter
              </Link>
              <Link href="/admin" className="hover:text-gray-600">
                Admin
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
