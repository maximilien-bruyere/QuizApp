import { useLocation, useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { HarmonizedCard, HarmonizedCardContent } from "./../components/others/HarmonizedCard";

import { useTranslation } from "react-i18next";

const QuizResult = () => {
  const { t } = useTranslation();
  const { attemptId } = useParams();
  // const navigate = useNavigate();
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
    if (ratio === 1) return t('quiz_result_perfect');
    if (ratio >= 0.7) return t('quiz_result_good');
    if (ratio >= 0.5) return t('quiz_result_average');
    return t('quiz_result_retry');
  };

  const formatTime = (seconds: number | null): string => {
    if (!seconds) return t('quiz_result_time_not_available');
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return t('quiz_result_time_hms', { hours, minutes, seconds: secs, defaultValue: `${hours}h ${minutes}min ${secs}s` });
    } else if (minutes > 0) {
      return t('quiz_result_time_ms', { minutes, seconds: secs, defaultValue: `${minutes}min ${secs}s` });
    } else {
      return t('quiz_result_time_s', { seconds: secs, defaultValue: `${secs}s` });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <HarmonizedCard className="p-8 max-w-md w-full mx-4">
        <HarmonizedCardContent>
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">{t('quiz_result_title')}</h2>
        <div className="text-center mb-4">
          <h3 className="text-xl text-gray-300">{quizTitle}</h3>
          {isExamMode && (
            <span className="inline-block mt-2 px-3 py-1 bg-red-900/20 text-red-400 text-sm font-medium rounded border border-red-500/30">
              {t('quiz_preview_exam_mode')}
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
                  {Math.round((score / total) * 100)}% {t('quiz_result_success')}
                </p>
              )}
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('quiz_result_time')}: {formatTime(timeSpent)}</span>
                </div>
              </div>
            </div>
            
            <p className="text-center text-lg mb-8 p-4 bg-gray-700 rounded">{getFeedback()}</p>

            <div className="space-y-3">
              {quizId && (
                <NavLink
                  to={`/quiz/${quizId}`}
                  className="block w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold transition"
                >
                  🔄 {t('quiz_result_replay')}
                </NavLink>
              )}
              <NavLink
                to="/leaderboard"
                className="block w-full py-3 rounded-lg bg-yellow-600 hover:bg-yellow-700 text-white text-center font-semibold transition"
              >
                🏆 {t('quiz_result_leaderboard')}
              </NavLink>
              <NavLink
                to="/"
                className="block w-full py-3 rounded-lg bg-gray-600 hover:bg-gray-700 text-white text-center font-semibold transition"
              >
                🏠 {t('quiz_result_back_to_training')}
              </NavLink>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-300">{t('quiz_result_loading')}</p>
          </div>
        )}
        </HarmonizedCardContent>
      </HarmonizedCard>
    </div>
  );
};

export default QuizResult;
