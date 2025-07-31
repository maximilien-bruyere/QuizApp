import React from 'react';

interface DangerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function DangerButton({
  size = 'md',
  children,
  icon,
  fullWidth = false,
  className = '',
  ...props
}: DangerButtonProps) {
  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2 font-medium rounded-xl text-white
    transform cursor-pointer
    transition-all duration-200 overflow-hidden
    bg-gradient-to-r from-red-700 to-red-800
    hover:from-red-800 hover:to-red-900
    active:from-red-900 active:to-red-950
    ${fullWidth ? 'w-full' : ''}
  `;

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {/* Background overlay for hover effect */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-200"></div>
      
      {icon && (
        <span className="relative z-10">
          {icon}
        </span>
      )}
      
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}
