import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { Button } from "../components/buttons";
import LoadingSpinner from "../components/others/LoadingSpinner";
import QuizTimeInfo from "../components/quizzes/QuizTimeInfo";

interface Quiz {
  quiz_id: number;
  title: string;
  description: string;
  difficulty: 'FACILE' | 'MOYEN' | 'DIFFICILE';
  time_limit: number;
  is_exam_mode: boolean;
  questions_count: number;
  subject: {
    subject_id: number;
    name: string;
  };
  category: {
    category_id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
}

const QuizPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [actualQuestionsCount, setActualQuestionsCount] = useState<number>(0);

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        const response = await api.get(`/quizzes/${id}`);
        setQuiz(response.data);
        
        // Récupérer le nombre réel de questions
        if (response.data && response.data.questions) {
          setActualQuestionsCount(response.data.questions.length);
        } else {
          setActualQuestionsCount(response.data.questions_count || 0);
        }
      } catch (error) {
        console.error('Erreur lors du chargement du quiz:', error);
      } finally {
        setLoading(false);
      }
    };

    loadQuiz();
  }, [id]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toUpperCase()) {
      case 'FACILE': return 'bg-green-900/20 text-green-400 border-green-500/30';
      case 'MOYEN': return 'bg-yellow-900/20 text-yellow-400 border-yellow-500/30';
      case 'DIFFICILE': return 'bg-red-900/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-700/20 text-gray-400 border-gray-500/30';
    }
  };

  const formatTimeLimit = (minutes: number) => {
    if (!minutes || minutes <= 0) return 'Pas de limite';
    if (minutes < 60) return `${minutes}min`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h${remainingMinutes}min` : `${hours}h`;
  };

  if (loading) return <LoadingSpinner />;
  if (!quiz) return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center"><p>Quiz non trouvé</p></div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* En-tête du quiz */}
        <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 mb-6 shadow-lg shadow-purple-500/10">
          {/* Decorative curved element */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full"></div>
          
          <div className="relative flex flex-col items-center text-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-400 mb-3">
              {quiz.title}
            </h1>
            <div className="flex items-center justify-center space-x-2">
              {quiz.is_exam_mode && (
                <span className="px-2 py-1 bg-red-900/20 text-red-400 text-xs font-medium rounded border border-red-500/30">
                  MODE EXAMEN
                </span>
              )}
              <div className={`px-2 py-1 text-xs rounded font-medium border ${getDifficultyColor(quiz.difficulty)}`}>
                {quiz.difficulty}
              </div>
            </div>
          </div>
          
          {quiz.description && (
            <p className="text-gray-300 mb-4 leading-relaxed text-center">
              {quiz.description}
            </p>
          )}
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center text-gray-400">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>{quiz.subject.name}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>{quiz.category.name}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                {actualQuestionsCount > 0 
                  ? `${actualQuestionsCount} question${actualQuestionsCount > 1 ? 's' : ''} possible${actualQuestionsCount > 1 ? 's' : ''}`
                  : 'Questions possibles'
                }
              </span>
            </div>
          </div>
        </div>

        {/* Informations sur le temps */}
        <div className="mb-6">
          <QuizTimeInfo 
            timeLimit={quiz.is_exam_mode ? 60 : quiz.time_limit} 
            questionsCount={quiz.is_exam_mode 
              ? (actualQuestionsCount > 0 && actualQuestionsCount < 50 ? actualQuestionsCount : 50)
              : (actualQuestionsCount > 0 && actualQuestionsCount < 30 ? actualQuestionsCount : 30)
            } 
            difficulty={quiz.difficulty}
            isExamMode={quiz.is_exam_mode}
            availableQuestionsCount={actualQuestionsCount}
          />
        </div>

        {/* Conseils généraux */}
        <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 mb-6 shadow-lg shadow-purple-500/10">
          {/* Decorative curved element */}
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full"></div>
          
          <div className="relative">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg className="h-5 w-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Conseils pour réussir
            </h3>
            <ul className="space-y-2 text-gray-300">
              {quiz.is_exam_mode && (
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Mode examen : aucune correction ne sera affichée pendant le quiz</span>
                </li>
              )}
              {(quiz.is_exam_mode || (quiz.time_limit && quiz.time_limit > 0)) && (
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Ce quiz a une limite de temps de {quiz.is_exam_mode ? '1h' : formatTimeLimit(quiz.time_limit)}</span>
                </li>
              )}
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Lisez attentivement chaque question avant de répondre</span>
              </li>
              {!quiz.is_exam_mode && (
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Vous pouvez voir la correction après chaque question</span>
                </li>
              )}
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Gardez un œil sur le temps restant affiché en haut à droite</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="back"
            size="md"
          >
            Retour
          </Button>
          <Button
            onClick={() => navigate(`/quiz/${id}`)}
            variant="primary"
            size="md"
          >
            Commencer le quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizPreview;
