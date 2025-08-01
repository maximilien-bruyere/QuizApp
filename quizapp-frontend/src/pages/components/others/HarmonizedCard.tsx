import React from 'react';

interface HarmonizedCardProps {
  children: React.ReactNode;
  className?: string;
  withDecorativeCurve?: boolean;
}

export const HarmonizedCard: React.FC<HarmonizedCardProps> = ({
  children,
  className = '',
  withDecorativeCurve = true,
}) => {
  return (
    <div
      className={`
        relative overflow-hidden
        bg-gray-800/50 backdrop-blur-sm
        border border-gray-700/30
        rounded-2xl
        shadow-lg shadow-purple-500/10
        transition-all duration-300
        ${className}
      `}
    >
      {withDecorativeCurve && (
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl transform rotate-45" />
      )}
      {children}
    </div>
  );
};

export const HarmonizedCardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return <div className={`relative z-10 ${className}`}>{children}</div>;
};

export default HarmonizedCard;
