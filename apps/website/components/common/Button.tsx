import React, { FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'lg';
  color?: 'secondary' | 'warning';
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
  children,
  fullWidth = false,
  onClick,
  className = '',
  color = 'warning',
  size = 'sm',
  type
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} min-w-[123px] ${
        size === `sm` ? `h-10 text-xs px-4` : `h-[52px] text-base px-5.5`
      } ${
        color === `warning` ? `bg-warning shadow-button` : `bg-dark`
      } rounded-xl inline-flex justify-center items-center font-semibold ${
        fullWidth && `w-full`
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
