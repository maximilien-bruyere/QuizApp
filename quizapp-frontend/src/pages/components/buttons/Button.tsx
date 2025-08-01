import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'modification' | 'logout' | 'back';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 font-medium rounded-md 
    transition-all duration-300 ease-out transform cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    overflow-hidden group
    ${fullWidth ? 'w-full' : ''}
  `;

  const variants = {
    primary: `
      bg-blue-700 text-white
      hover:bg-blue-800
      active:bg-blue-900
    `,
    secondary: `
      bg-gray-600 text-white
      hover:bg-gray-500
      active:bg-gray-400
    `,
    danger: `
      bg-red-700 text-white
      hover:bg-red-800
      active:bg-red-900
    `,
    ghost: `
      bg-transparent text-gray-300 border border-gray-600
      hover:bg-gray-800 hover:text-white hover:border-gray-500
      active:bg-gray-700 active:border-gray-400
    `,
    modification: `
      bg-purple-700 text-white
      hover:bg-purple-800
      active:bg-purple-900
    `,
    logout: `
      bg-gradient-to-r from-red-700 to-red-800 text-white
      hover:from-red-800 hover:to-red-900
      active:from-red-900 active:to-red-950
    `,
    back: `
      bg-gradient-to-r from-red-700 to-red-800 text-white
      hover:from-red-800 hover:to-red-900
      active:from-red-900 active:to-red-950
    `,
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={props.type || "button"}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Background overlay for hover effect */}
      <div className="absolute inset-0 bg-white opacity-0 rounded-xl transition-opacity duration-200"></div>
      
      {/* Loading spinner */}
      {isLoading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      
      {/* Left icon */}
      {!isLoading && leftIcon && (
        <span className="transition-transform duration-300 group-hover:scale-110">
          {leftIcon}
        </span>
      )}
      
      {/* Button text */}
      <span className={`relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </span>
      
      {/* Right icon */}
      {!isLoading && rightIcon && (
        <span className="transition-transform duration-300 group-hover:scale-110">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
