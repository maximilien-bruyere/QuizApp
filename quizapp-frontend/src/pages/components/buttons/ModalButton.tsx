import React from 'react';

interface ModalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'confirm' | 'cancel' | 'delete';
  size?: 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function ModalButton({
  variant = 'confirm',
  size = 'md',
  children,
  fullWidth = true,
  className = '',
  ...props
}: ModalButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-medium rounded-xl
    transition-all duration-300 cursor-pointer
    ${fullWidth ? 'w-full flex-1' : ''}
  `;

  const variants = {
    confirm: `
      bg-gradient-to-r from-blue-600 to-blue-700 text-white
      hover:from-blue-700 hover:to-blue-800
      active:from-blue-800 active:to-blue-900
    `,
    cancel: `
      bg-gray-600 text-white
      hover:bg-gray-500
      active:bg-gray-400
    `,
    delete: `
      bg-gradient-to-r from-red-700 to-red-800 text-white
      hover:from-red-800 hover:to-red-900
      active:from-red-900 active:to-red-950
    `,
  };

  const sizes = {
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
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
      {children}
    </button>
  );
}
