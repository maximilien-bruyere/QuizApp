import React from 'react';

interface QuizTimeInfoProps {
  timeLimit?: number;
  questionsCount: number;
  difficulty: 'FACILE' | 'MOYEN' | 'DIFFICILE';
  isExamMode?: boolean;
  availableQuestionsCount?: number;
}

const QuizTimeInfo: React.FC<QuizTimeInfoProps> = ({ timeLimit, questionsCount, difficulty, isExamMode = false, availableQuestionsCount }) => {
  const getTimePerQuestion = (): string => {
    if (!timeLimit || timeLimit <= 0) {
      return "Non défini";
    }
    
    if (!questionsCount || questionsCount <= 0) {
      return "Non défini";
    }
    
    const secondsPerQuestion = (timeLimit * 60) / questionsCount;
    
    if (isNaN(secondsPerQuestion) || !isFinite(secondsPerQuestion)) {
      return "Non défini";
    }
    
    if (secondsPerQuestion >= 60) {
      const minutes = Math.floor(secondsPerQuestion / 60);
      const seconds = Math.round(secondsPerQuestion % 60);
      return seconds > 0 ? `${minutes}min ${seconds}s` : `${minutes}min`;
    } else {
      return `${Math.round(secondsPerQuestion)}s`;
    }
  };

  const getTimeAdvice = (): { icon: string, text: string, color: string } => {
    if (!timeLimit || timeLimit <= 0 || !questionsCount || questionsCount <= 0) {
      return {
        icon: "⏳",
        text: "Temps libre - Prenez votre temps",
        color: "text-blue-400"
      };
    }

    const secondsPerQuestion = (timeLimit * 60) / questionsCount;
    
    if (isNaN(secondsPerQuestion) || !isFinite(secondsPerQuestion)) {
      return {
        icon: "⏳",
        text: "Temps libre - Prenez votre temps",
        color: "text-blue-400"
      };
    }
    
    if (secondsPerQuestion < 30) {
      return {
        icon: "⚡",
        text: "Quiz rapide",
        color: "text-red-400"
      };
    } else if (secondsPerQuestion < 60) {
      return {
        icon: "🏃",
        text: "Rythme soutenu",
        color: "text-orange-400"
      };
    } else if (secondsPerQuestion < 120) {
      return {
        icon: "🚶",
        text: "Rythme modéré",
        color: "text-yellow-400"
      };
    } else {
      return {
        icon: "🧘",
        text: "Temps confortable",
        color: "text-green-400"
      };
    }
  };

  const advice = getTimeAdvice();

  return (
    <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-4 shadow-lg shadow-purple-500/10">
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl transform rotate-45"></div>
      <h3 className="relative z-10 text-lg font-semibold text-white mb-3 flex items-center">
        <svg className="h-5 w-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Informations sur le temps
      </h3>
      
      <div className="relative z-10 space-y-3">
        {/* Limite de temps */}
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Durée totale:</span>
          <span className="font-medium text-white">
            {timeLimit && timeLimit > 0 ? `${timeLimit} min` : "Illimitée"}
          </span>
        </div>
        
        {/* Temps par question */}
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Temps conseillé par question:</span>
          <span className="font-medium text-white">{getTimePerQuestion()}</span>
        </div>
        
        {/* Conseil */}
        <div className={`flex items-center p-3 rounded-lg bg-gray-700/50 ${advice.color}`}>
          <span className="text-xl mr-2">{advice.icon}</span>
          <span className="font-medium">{advice.text}</span>
        </div>
        
        {/* Conseils basés sur la difficulté */}
        <div className="text-sm text-gray-400 space-y-2">
          {isExamMode ? (
            <div className="flex items-center space-x-2 p-2 bg-red-900/20 rounded-lg border border-red-500/30 mb-3">
              <span className="text-red-400">⚠️</span>
              <span className="text-red-300">
                Mode examen : {availableQuestionsCount && availableQuestionsCount < 50 
                  ? `${availableQuestionsCount} question${availableQuestionsCount > 1 ? 's' : ''} max`
                  : '50 questions max'
                }, pas de correction visible
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 p-2 bg-purple-900/20 rounded-lg border border-purple-500/30 mb-3">
              <span className="text-blue-400">ℹ️</span>
              <span className="text-blue-300">
                {availableQuestionsCount && availableQuestionsCount < 30 
                  ? `${availableQuestionsCount} question${availableQuestionsCount > 1 ? 's' : ''} disponible${availableQuestionsCount > 1 ? 's' : ''} pour ce quiz`
                  : 'Maximum 30 questions par quiz'
                }
              </span>
            </div>
          )}
          
          {difficulty === 'FACILE' && (
            <p>💡 Prenez votre temps pour bien lire chaque question.</p>
          )}
          {difficulty === 'MOYEN' && (
            <p>💡 Lisez attentivement et ne vous précipitez pas.</p>
          )}
          {difficulty === 'DIFFICILE' && (
            <p>💡 Réfléchissez bien avant de répondre, les questions peuvent être piégeuses.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizTimeInfo;
