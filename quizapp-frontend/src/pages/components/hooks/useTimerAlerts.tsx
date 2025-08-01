import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface UseTimerAlertsProps {
  timeLeft: number;
  isActive: boolean;
  onTimeUp?: () => void;
}

interface TimerAlertsReturn {
  showAlert: boolean;
  closeAlert: () => void;
}
export const useTimerAlerts = ({ timeLeft, isActive, onTimeUp }: UseTimerAlertsProps): TimerAlertsReturn => {
  const { t } = useTranslation();
  const lastTimeLeftRef = useRef(timeLeft);
  const hasPlayedWarningRef = useRef(false);
  const hasPlayedFinalWarningRef = useRef(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    // Alerte à 5 minutes
    if (timeLeft <= 300 && timeLeft > 299 && !hasPlayedWarningRef.current) {
      hasPlayedWarningRef.current = true;
      setShowAlert(true);
      console.log(t('timer_alert_5min'));
    }

    // Alerte à 1 minute
    if (timeLeft <= 60 && timeLeft > 59 && !hasPlayedFinalWarningRef.current) {
      hasPlayedFinalWarningRef.current = true;
      setShowAlert(true);
      console.log(t('timer_alert_1min'));
    }

    // Temps écoulé
    if (timeLeft <= 0 && lastTimeLeftRef.current > 0) {
      onTimeUp?.();
    }

    lastTimeLeftRef.current = timeLeft;
  }, [timeLeft, isActive, onTimeUp]);

  // Reset des alertes si le quiz redémarre
  useEffect(() => {
    if (timeLeft > 300) {
      hasPlayedWarningRef.current = false;
    }
    if (timeLeft > 60) {
      hasPlayedFinalWarningRef.current = false;
    }
  }, [timeLeft]);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return { showAlert, closeAlert };
};

export default useTimerAlerts;
