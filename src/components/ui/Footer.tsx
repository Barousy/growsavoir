'use client';

import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when scrolling down
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 400);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">GrowSavoir</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Plateforme d&aposapprentissage innovante pour enfants de 3 à 16 ans. 
              Des leçons interactives, des quiz amusants et une progression adaptée à chaque niveau.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-200 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-all duration-200 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all duration-200 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-200 transform hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/subjects" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Matières
                </Link>
              </li>
              <li>
                <Link href="/subjects" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Par âge
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Activités
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors duration-200">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Centre d&aposaide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Tutoriels
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Donner mon avis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-all duration-200">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Email</div>
                <div className="text-slate-300">contact@growsavoir.com</div>
              </div>
            </div>
            
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-all duration-200">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Téléphone</div>
                <div className="text-slate-300">+33 1 23 45 67 89</div>
              </div>
            </div>
            
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-all duration-200">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Adresse</div>
                <div className="text-slate-300">Paris, France</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 GrowSavoir. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors duration-200">
                Conditions d&aposutilisation
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-white transition-colors duration-200">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
