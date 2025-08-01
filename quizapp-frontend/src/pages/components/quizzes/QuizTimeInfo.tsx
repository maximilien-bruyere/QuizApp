import React from "react";
import { useTranslation } from "react-i18next";

interface QuizTimeInfoProps {
  timeLimit?: number;
  questionsCount: number;
  difficulty: "FACILE" | "MOYEN" | "DIFFICILE";
  isExamMode?: boolean;
  availableQuestionsCount?: number;
}

const QuizTimeInfo: React.FC<QuizTimeInfoProps> = ({
  timeLimit,
  questionsCount,
  difficulty,
  isExamMode = false,
  availableQuestionsCount,
}) => {
  const { t } = useTranslation();
  const getTimePerQuestion = (): string => {
    if (!timeLimit || timeLimit <= 0) {
      return t("quiz_timeinfo_not_defined");
    }
    if (!questionsCount || questionsCount <= 0) {
      return t("quiz_timeinfo_not_defined");
    }
    const secondsPerQuestion = (timeLimit * 60) / questionsCount;
    if (isNaN(secondsPerQuestion) || !isFinite(secondsPerQuestion)) {
      return t("quiz_timeinfo_not_defined");
    }
    if (secondsPerQuestion >= 60) {
      const minutes = Math.floor(secondsPerQuestion / 60);
      const seconds = Math.round(secondsPerQuestion % 60);
      return seconds > 0
        ? t("quiz_timeinfo_min_sec", { minutes, seconds })
        : t("quiz_timeinfo_min", { minutes });
    } else {
      return t("quiz_timeinfo_sec", {
        seconds: Math.round(secondsPerQuestion),
      });
    }
  };

  const getTimeAdvice = (): { icon: string; text: string; color: string } => {
    if (
      !timeLimit ||
      timeLimit <= 0 ||
      !questionsCount ||
      questionsCount <= 0
    ) {
      return {
        icon: "⏳",
        text: t("quiz_timeinfo_free_time"),
        color: "text-blue-400",
      };
    }
    const secondsPerQuestion = (timeLimit * 60) / questionsCount;
    if (isNaN(secondsPerQuestion) || !isFinite(secondsPerQuestion)) {
      return {
        icon: "⏳",
        text: t("quiz_timeinfo_free_time"),
        color: "text-blue-400",
      };
    }
    if (secondsPerQuestion < 30) {
      return {
        icon: "⚡",
        text: t("quiz_timeinfo_fast_quiz"),
        color: "text-red-400",
      };
    } else if (secondsPerQuestion < 60) {
      return {
        icon: "🏃",
        text: t("quiz_timeinfo_sustained_rhythm"),
        color: "text-orange-400",
      };
    } else if (secondsPerQuestion < 120) {
      return {
        icon: "🚶",
        text: t("quiz_timeinfo_moderate_rhythm"),
        color: "text-yellow-400",
      };
    } else {
      return {
        icon: "🧘",
        text: t("quiz_timeinfo_comfortable_time"),
        color: "text-green-400",
      };
    }
  };

  const advice = getTimeAdvice();

  return (
    <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-4 shadow-lg shadow-purple-500/10">
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl transform rotate-45"></div>
      <h3 className="relative z-10 text-lg font-semibold text-white mb-3 flex items-center">
        <svg
          className="h-5 w-5 mr-2 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {t("quiz_timeinfo_title")}
      </h3>

      <div className="relative z-10 space-y-3">
        {/* Limite de temps */}
        <div className="flex items-center justify-between">
          <span className="text-gray-300">
            {t("quiz_timeinfo_total_duration")}:
          </span>
          <span className="font-medium text-white">
            {timeLimit && timeLimit > 0
              ? t("quiz_timeinfo_minutes", { count: timeLimit })
              : t("quiz_timeinfo_unlimited")}
          </span>
        </div>

        {/* Temps par question */}
        <div className="flex items-center justify-between">
          <span className="text-gray-300">
            {t("quiz_timeinfo_time_per_question")}:
          </span>
          <span className="font-medium text-white">{getTimePerQuestion()}</span>
        </div>

        {/* Conseil */}
        <div
          className={`flex items-center p-3 rounded-lg bg-gray-700/50 ${advice.color}`}
        >
          <span className="text-xl mr-2">{advice.icon}</span>
          <span className="font-medium">{advice.text}</span>
        </div>

        {/* Conseils basés sur la difficulté */}
        <div className="text-sm text-gray-400 space-y-2">
          {isExamMode ? (
            <div className="flex items-center space-x-2 p-2 bg-red-900/20 rounded-lg border border-red-500/30 mb-3">
              <span className="text-red-400">⚠️</span>
              <span className="text-red-300">
                {t("quiz_timeinfo_exam_mode", {
                  count:
                    availableQuestionsCount && availableQuestionsCount < 50
                      ? availableQuestionsCount
                      : 50,
                })}
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 p-2 bg-purple-900/20 rounded-lg border border-purple-500/30 mb-3">
              <span className="text-blue-400">ℹ️</span>
              <span className="text-blue-300">
                {t("quiz_timeinfo_available_questions", {
                  count:
                    availableQuestionsCount && availableQuestionsCount < 30
                      ? availableQuestionsCount
                      : 30,
                })}
              </span>
            </div>
          )}

          {difficulty === "FACILE" && <p>💡 {t("quiz_timeinfo_easy")}</p>}
          {difficulty === "MOYEN" && <p>💡 {t("quiz_timeinfo_medium")}</p>}
          {difficulty === "DIFFICILE" && <p>💡 {t("quiz_timeinfo_hard")}</p>}
        </div>
      </div>
    </div>
  );
};

export default QuizTimeInfo;
