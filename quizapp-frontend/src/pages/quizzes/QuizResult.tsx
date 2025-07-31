import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { HarmonizedCard, HarmonizedCardContent } from "./../components/others/HarmonizedCard";
import Button from "./../components/buttons/Button";

const QuizResult = () => {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [score, setScore] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [timeSpent, setTimeSpent] = useState<number | null>(null);
  const [quizTitle, setQuizTitle] = useState<string>("");
  const [quizId, setQuizId] = useState<number | null>(null);
  const [isExamMode, setIsExamMode] = useState<boolean>(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const scoreFromQuery = parseInt(query.get("score") || "0");

    api.get(`/quiz-attempt/${attemptId}`).then((res) => {
      const attempt = res.data;
      setScore(attempt.score);
      setTotal(attempt.total_questions);
      setTimeSpent(attempt.time_spent);
      setQuizTitle(attempt.quiz.title);
      setQuizId(attempt.quiz.quiz_id);
      setIsExamMode(attempt.quiz.is_exam_mode || false);
    }).catch((err) => {
      console.error('Erreur lors de la récupération des résultats:', err);
      setScore(scoreFromQuery);
      setTotal(null);
    });
  }, [attemptId, location.search]);

  const getFeedback = () => {
    if (score === null || total === null) return "";
    const ratio = score / total;
    if (ratio === 1) return "🎉 Parfait ! Tu as tout réussi.";
    if (ratio >= 0.7) return "👍 Bien joué, tu t’en sors très bien !";
    if (ratio >= 0.5) return "🙂 Pas mal, mais tu peux mieux faire.";
    return "😬 Tu devrais réessayer.";
  };

  const formatTime = (seconds: number | null): string => {
    if (!seconds) return "Non disponible";
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}min ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}min ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <HarmonizedCard className="p-8 max-w-md w-full mx-4">
        <HarmonizedCardContent>
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">Résultat du quiz</h2>
        <div className="text-center mb-4">
          <h3 className="text-xl text-gray-300">{quizTitle}</h3>
          {isExamMode && (
            <span className="inline-block mt-2 px-3 py-1 bg-red-900/20 text-red-400 text-sm font-medium rounded border border-red-500/30">
              MODE EXAMEN
            </span>
          )}
        </div>

        {score !== null ? (
          <>
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-purple-400 mb-2">
                {score}
                {total !== null && <span className="text-gray-400"> / {total}</span>}
              </p>
              {total !== null && (
                <p className="text-lg text-gray-300 mb-3">
                  {Math.round((score / total) * 100)}% de réussite
                </p>
              )}
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Temps: {formatTime(timeSpent)}</span>
                </div>
              </div>
            </div>
            
            <p className="text-center text-lg mb-8 p-4 bg-gray-700 rounded">{getFeedback()}</p>

            <div className="space-y-3">
              <Button
                className="w-full py-3 rounded-lg disabled:opacity-50"
                variant="primary"
                onClick={() => quizId && navigate(`/quiz/${quizId}`)}
                disabled={!quizId}
              >
                🔄 Rejouer
              </Button>
              <Button
                className="w-full py-3 rounded-lg"
                variant="modification"
                onClick={() => navigate("/leaderboard")}
              >
                🏆 Voir le classement
              </Button>
              <Button
                className="w-full py-3 rounded-lg"
                variant="secondary"
                onClick={() => navigate("/formation")}
              >
                📚 Retour à la formation
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-300">Chargement des résultats...</p>
          </div>
        )}
        </HarmonizedCardContent>
      </HarmonizedCard>
    </div>
  );
};

export default QuizResult;
