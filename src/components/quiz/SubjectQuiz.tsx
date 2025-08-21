'use client';
import { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight, RefreshCw, X } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface SubjectQuizProps {
  quiz: {
    subject: string;
    title: string;
    description: string;
    questions: Question[];
  };
  onClose: () => void;
  onComplete: (score: number) => void;
}

export default function SubjectQuiz({ quiz, onClose, onComplete }: SubjectQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<Array<{ questionId: number; selected: number; correct: number; isCorrect: boolean }>>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showResult) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const currentQ = quiz.questions[currentQuestion];
    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswers([...answers, {
      questionId: currentQ.id,
      selected: selectedAnswer,
      correct: currentQ.correctAnswer,
      isCorrect
    }]);

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
      onComplete(score);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    const getPerformanceMessage = () => {
      if (percentage >= 90) return { message: "🏆 Excellent ! Vous maîtrisez parfaitement ce sujet !", color: "text-green-600" };
      if (percentage >= 75) return { message: "🎯 Très bien ! Vous avez une excellente compréhension !", color: "text-blue-600" };
      if (percentage >= 60) return { message: "👍 Bon travail ! Continuez à pratiquer !", color: "text-yellow-600" };
      return { message: "💪 Pas de problème ! La pratique rend parfait !", color: "text-red-600" };
    };

    const performance = getPerformanceMessage();

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg m-4">
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quiz terminé !</h2>
            <p className="text-xl text-slate-600 mb-6">
              Votre score : <span className="font-bold">{score}/{quiz.questions.length}</span> ({percentage}%)
            </p>
            
            <div className={`text-lg font-semibold mb-6 ${performance.color}`}>
              {performance.message}
            </div>

            {/* Detailed results */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Résultats détaillés :</h3>
              <div className="space-y-2">
                {answers.map((answer, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <span className="text-sm">Question {index + 1}</span>
                    {answer.isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 justify-center">
              <button
                onClick={handleRestartQuiz}
                className="bg-slate-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors flex items-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Recommencer
              </button>
              
              <button
                onClick={onClose}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quiz.questions[currentQuestion];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg m-4">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{quiz.title}</h2>
          <div className="flex justify-center items-center space-x-4 text-sm text-slate-500">
            <span>Question {currentQuestion + 1} sur {quiz.questions.length}</span>
            <span>Score: {score}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-200 rounded-full h-2 mb-6">
          <div 
            className="h-2 rounded-full transition-all duration-300 bg-blue-500"
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              currentQ.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
              currentQ.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {currentQ.difficulty === 'easy' ? 'Facile' : 
               currentQ.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-900 mb-6">{currentQ.question}</h3>
        </div>

        {/* Answer options */}
        <div className="space-y-3 mb-6">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? showResult
                    ? index === currentQ.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Result and explanation */}
        {showResult && (
          <div className="mb-6 p-4 rounded-lg bg-slate-50">
            <p className="text-slate-700">
              <strong>Explication :</strong> {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Action button */}
        <div className="flex justify-center">
          {!showResult ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                selectedAnswer === null
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Valider la réponse
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center"
            >
              Question suivante
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}