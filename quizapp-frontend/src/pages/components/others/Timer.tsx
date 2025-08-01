import React from 'react';
import { useTranslation } from 'react-i18next';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
  isActive: boolean;
  onTimeUp?: () => void;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, totalTime, isActive }) => {
  const { t } = useTranslation();
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = (): string => {
    const percentageLeft = (timeLeft / totalTime) * 100;
    
    if (percentageLeft > 50) {
      return 'text-green-400 border-green-500/30 bg-green-900/20';
    } else if (percentageLeft > 25) {
      return 'text-yellow-400 border-yellow-500/30 bg-yellow-900/20';
    } else if (percentageLeft > 10) {
      return 'text-orange-400 border-orange-500/30 bg-orange-900/20';
    } else {
      return 'text-red-400 border-red-500/30 bg-red-900/20 animate-pulse';
    }
  };

  const getProgressBarColor = (): string => {
    const percentageLeft = (timeLeft / totalTime) * 100;
    
    if (percentageLeft > 50) {
      return 'bg-green-500';
    } else if (percentageLeft > 25) {
      return 'bg-yellow-500';
    } else if (percentageLeft > 10) {
      return 'bg-orange-500';
    } else {
      return 'bg-red-500';
    }
  };

  // Maintenant que tous les quiz ont un temps défini (30min par défaut),
  // plus besoin de gérer le cas "temps illimité"
  const progressPercentage = (timeLeft / totalTime) * 100;

  return (
    <div className="space-y-2">
      {/* Affichage du temps */}
      <div className={`inline-flex items-center px-4 py-2 rounded-lg border font-mono text-lg font-bold ${getTimeColor()}`}>
        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{formatTime(timeLeft)}</span>
        {!isActive && (
          <span className="ml-2 text-xs opacity-75">(Pausé)</span>
        )}
      </div>
      
      {/* Barre de progression circulaire pour les 5 dernières minutes */}
      {timeLeft <= 300 && timeLeft > 0 && (
        <div className="flex items-center justify-center">
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#374151"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={timeLeft <= 60 ? "#ef4444" : timeLeft <= 180 ? "#f59e0b" : "#10b981"}
                strokeWidth="2"
                strokeDasharray={`${(timeLeft / 300) * 100}, 100`}
                className="transition-all duration-1000 ease-linear"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-white">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      )}
      
      {/* Barre de progression horizontale */}
      <div className="w-full bg-gray-700/50 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-linear ${getProgressBarColor()}`}
          style={{ width: `${Math.max(0, progressPercentage)}%` }}
        />
      </div>
      
      {/* Alertes de temps */}
      {timeLeft <= 60 && timeLeft > 0 && (
        <div className="text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-900/50 text-red-300 border border-red-500/30 animate-pulse">
            {t('timer_alert_1min')}
          </span>
        </div>
      )}

      {timeLeft <= 300 && timeLeft > 60 && (
        <div className="text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-900/50 text-orange-300 border border-orange-500/30">
            {t('timer_alert_5min')}
          </span>
        </div>
      )}
    </div>
  );
};

export default Timer;
