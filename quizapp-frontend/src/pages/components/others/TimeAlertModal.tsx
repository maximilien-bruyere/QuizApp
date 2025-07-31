import React from 'react';

interface TimeAlertModalProps {
  show: boolean;
  timeLeft: number;
  onClose: () => void;
}

const TimeAlertModal: React.FC<TimeAlertModalProps> = ({ show, timeLeft, onClose }) => {
  if (!show) return null;

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const isLastMinute = timeLeft <= 60;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className={`relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 max-w-md w-full mx-4 shadow-lg shadow-purple-500/10 ${
        isLastMinute ? 'border-red-500/50 animate-pulse' : 'border-orange-500/50'
      }`}>
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl transform rotate-45"></div>
        <div className="relative z-10 text-center">
          {/* Icône d'alerte */}
          <div className="text-6xl mb-4">
            {isLastMinute ? '🚨' : '⚠️'}
          </div>
          
          {/* Message d'alerte */}
          <h3 className={`text-xl font-bold mb-4 ${
            isLastMinute ? 'text-red-400' : 'text-orange-400'
          }`}>
            {isLastMinute ? 'Dernière minute !' : 'Attention !'}
          </h3>
          
          <p className="text-gray-300 mb-6">
            {isLastMinute 
              ? 'Il vous reste moins d\'une minute pour terminer le quiz !'
              : 'Il vous reste moins de 5 minutes pour terminer le quiz.'
            }
          </p>
          
          {/* Affichage du temps restant */}
          <div className={`text-3xl font-mono font-bold mb-6 ${
            isLastMinute ? 'text-red-400' : 'text-orange-400'
          }`}>
            {formatTime(timeLeft)}
          </div>
          
          {/* Bouton pour fermer */}
          <button
            onClick={onClose}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              isLastMinute 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-orange-600 hover:bg-orange-700 text-white'
            }`}
          >
            Continuer le quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeAlertModal;
