import React from 'react';

interface CardActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'edit' | 'delete' | 'view';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function CardActionButton({
  variant = 'edit',
  size = 'sm',
  children,
  icon,
  fullWidth = false,
  className = '',
  ...props
}: CardActionButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-medium rounded-lg
    transition-all duration-200 transform cursor-pointer
    ${fullWidth ? 'w-full flex-1' : ''}
  `;

  const variants = {
    edit: `
      bg-purple-600 text-white
      hover:bg-purple-700
      active:bg-purple-800
    `,
    delete: `
      bg-red-700 text-white
      hover:bg-red-800
      active:bg-red-900
    `,
    view: `
      bg-blue-600 text-white
      hover:bg-blue-700
      active:bg-blue-800
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
