import React from 'react';

interface CreateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function CreateButton({
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}: CreateButtonProps) {
  const baseClasses = `
    group relative inline-flex items-center gap-2 font-medium rounded-xl text-white
    transform cursor-pointer
    transition-all duration-200 overflow-hidden
      bg-blue-700 text-white
      hover:bg-blue-800
      active:bg-blue-900
  `;

  const sizes = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
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
      
      {icon && (
        <span className="relative z-10 text-lg">
          {icon}
        </span>
      )}
      
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}
