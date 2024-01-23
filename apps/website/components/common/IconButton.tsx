import { FC } from 'react';

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const IconButton: FC<IconButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
