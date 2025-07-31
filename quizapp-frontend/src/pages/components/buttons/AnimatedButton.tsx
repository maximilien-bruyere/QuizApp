import { ButtonHTMLAttributes, ReactNode } from 'react';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function AnimatedButton({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}: AnimatedButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-lg
    transition-all duration-300 ease-out transform relative overflow-hidden
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    btn-interactive gpu-accelerated cursor-pointer
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-purple-600 text-white
      hover:from-blue-700 hover:to-purple-700
      active:from-blue-800 active:to-purple-800
    `,
    secondary: `
      bg-gray-700 text-white border border-gray-600
      hover:bg-gray-600 hover:border-gray-500
      active:bg-gray-500 active:border-gray-400
    `,
    danger: `
      bg-gradient-to-r from-red-600 to-red-700 text-white
      hover:from-red-700 hover:to-red-800
      active:from-red-800 active:to-red-900
    `,
    ghost: `
      bg-transparent text-gray-300 border border-gray-600
      hover:bg-gray-800 hover:text-white hover:border-gray-500
      active:bg-gray-700 active:border-gray-400
    `,
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Loading spinner */}
      {isLoading && (
        <div className="loading-spinner w-4 h-4" />
      )}
      
      {/* Left icon */}
      {!isLoading && leftIcon && (
        <span className="transition-transform duration-300 group-hover:scale-110">
          {leftIcon}
        </span>
      )}
      
      {/* Button text */}
      <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
      
      {/* Right icon */}
      {!isLoading && rightIcon && (
        <span className="transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1">
          {rightIcon}
        </span>
      )}
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] 
                      transition-transform duration-700 ease-in-out" />
    </button>
  );
}
