'use client';

import Link from 'next/link';
import { ArrowRight, Play, Star, Users, BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Apprenez en vous amusant
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Découvrez des milliers de leçons interactives, quiz et activités pour enfants de 3 à 16 ans. 
            Langues, mathématiques, sciences et plus encore, adaptés à chaque niveau.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/subjects" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Commencer gratuitement
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              href="/demo" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
            >
              <Play className="mr-2 w-5 h-5" />
              Voir la démo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Leçons disponibles</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">10k+</div>
              <div className="text-slate-600">Enfants apprennent</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">4.9/5</div>
              <div className="text-slate-600">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-31.76,206.8-58.46,73.84-28.2,138.54-66.13,244.84-43.58,21.76,4.61,43.63,9.4,66.6,14.77,32.27,6,92.33,30.93,238.53,30.93,82,0,158.16-20.12,238.53-30.93,23-5.37,44.85-10.16,66.6-14.77,121.08-24.21,202.54-50.05,244.84-43.58,106.31,22.19,136.33,76.8,206.8,58.46,70.36-18.98,136.33-54.77,206.8-58.46,54.47-4.14,110.21,5.76,158,28V0Z" fill="currentColor" opacity=".25"></path>
          <path d="M0,0V15.81C13.36,8.36,27.14,6.78,41.82,6.78c31.32,0,45.12,21.11,45.12,12.27,0-5.05-1.44-13.45-1.44-13.45S18.9,13.83,0,15.81Z" fill="currentColor" opacity=".25"></path>
        </svg>
      </div>
    </section>
  );
}
