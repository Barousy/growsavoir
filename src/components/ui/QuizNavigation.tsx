'use client';
import Link from 'next/link';
import { allQuizzes } from '@/data/quizData';

export default function QuizNavigation() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Tous nos quiz disponibles
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Testez vos connaissances dans toutes les matières avec nos quiz interactifs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allQuizzes.map((quiz) => (
            <Link
              key={quiz.subject}
              href={`/quiz/${quiz.subject}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🧠</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {quiz.title.split(' - ')[0]}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {quiz.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{quiz.questions.length} questions</span>
                    <span className="text-purple-600 font-medium">Commencer →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/subjects"
            className="inline-block bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            Voir toutes les matières
          </Link>
        </div>
      </div>
    </section>
  );
}