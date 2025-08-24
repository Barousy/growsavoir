'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X, BookOpen } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GrowSavoir
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/subjects" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Matières
            </Link>
            <Link href="/subjects" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Niveaux
            </Link>
            <Link href="/activities" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Activités
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              À propos
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher une leçon..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Connexion
            </Link>
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Inscription
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher une leçon..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Link href="/subjects" className="text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium">
                Matières
              </Link>
              <Link href="/subjects" className="text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium">
                Niveaux
              </Link>
              <Link href="/activities" className="text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium">
                Activités
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium">
                À propos
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium">
                Contact
              </Link>
              <div className="pt-4 border-t border-slate-200">
                <Link href="/login" className="block text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium">
                  Connexion
                </Link>
                <Link 
                  href="/signup" 
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 mt-2 text-center font-medium"
                >
                  Inscription
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
