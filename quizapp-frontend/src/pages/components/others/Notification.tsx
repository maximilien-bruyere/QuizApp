import { useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimes, FaTimesCircle } from 'react-icons/fa';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface NotificationProps {
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
  onClose: () => void;
  autoClose?: boolean;
}

const Notification = ({
  type,
  title,
  message,
  duration = 5000,
  onClose,
  autoClose = true,
}: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (autoClose && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoClose, duration]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const icons = {
    success: <FaCheckCircle className="text-green-400" />,
    error: <FaTimesCircle className="text-red-400" />,
    warning: <FaExclamationTriangle className="text-yellow-400" />,
    info: <FaInfoCircle className="text-blue-400" />,
  };

  const backgrounds = {
    success: 'bg-green-900/20 border-green-500/30',
    error: 'bg-red-900/20 border-red-500/30',
    warning: 'bg-yellow-900/20 border-yellow-500/30',
    info: 'bg-purple-900/20 border-purple-500/30',
  };

  return (
    <div
      className={`
        fixed top-4 right-4 z-50 max-w-sm w-full
        backdrop-blur-lg border rounded-lg shadow-xl
        transform transition-all duration-300 ease-out
        ${backgrounds[type]}
        ${isVisible && !isLeaving 
          ? 'translate-x-0 opacity-100 scale-100' 
          : 'translate-x-full opacity-0 scale-95'
        }
      `}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="flex-shrink-0 text-xl">
            {icons[type]}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-semibold text-sm">
              {title}
            </h4>
            {message && (
              <p className="text-gray-300 text-sm mt-1">
                {message}
              </p>
            )}
          </div>
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="flex-shrink-0 text-gray-400 hover:text-white 
                       transition-colors duration-200 p-1 hover:bg-white/10 rounded"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>
        
        {/* Progress bar for auto-close */}
        {autoClose && duration > 0 && (
          <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-white/30 transition-all ease-linear`}
              style={{
                width: isLeaving ? '0%' : '100%',
                transitionDuration: isLeaving ? '0ms' : `${duration}ms`
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// Hook pour gérer les notifications
export function useNotifications() {
  const [notifications, setNotifications] = useState<Array<{
    id: string;
    type: NotificationType;
    title: string;
    message?: string;
    duration?: number;
    autoClose?: boolean;
  }>>([]);

  const addNotification = (notification: Omit<typeof notifications[0], 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications(prev => [...prev, { ...notification, id }]);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const NotificationContainer = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );

  return {
    notifications,
    addNotification,
    removeNotification,
    NotificationContainer,
  };
}

export default Notification;