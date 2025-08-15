'use client';

import Link from 'next/link';
import { useState } from 'react';
import { subjects } from '@/lib/data';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">GrowSavoir</span>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Accueil
            </Link>
            
            {/* Menu déroulant des matières */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsSubjectsOpen(true)}
                onMouseLeave={() => setIsSubjectsOpen(false)}
              >
                <span>Matières</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown des matières */}
              <div 
                className={`absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}
                onMouseEnter={() => setIsSubjectsOpen(true)}
                onMouseLeave={() => setIsSubjectsOpen(false)}
              >
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Toutes nos matières</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {subjects.map((subject) => (
                      <Link
                        key={subject.id}
                        href={`/courses/subject/${subject.id}`}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className={`w-8 h-8 ${subject.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                          {subject.icon}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-blue-600">
                            {subject.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {subject.categories.length} catégories
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <Link
                      href="/courses"
                      className="block text-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Voir tout le catalogue →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/courses" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Catalogue
            </Link>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/auth/signin" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Se connecter
            </Link>
            <Link 
              href="/admin" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Admin
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              <Link 
                href="/" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/courses" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Catalogue
              </Link>
              <div className="pt-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Matières</h4>
                <div className="space-y-2 pl-4">
                  {subjects.map((subject) => (
                    <Link
                      key={subject.id}
                      href={`/courses/subject/${subject.id}`}
                      className="block text-gray-600 hover:text-blue-600 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subject.icon} {subject.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  href="/auth/signin" 
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Se connecter
                </Link>
                <Link 
                  href="/admin" 
                  className="block text-gray-700 hover:text-blue-600 font-medium mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
