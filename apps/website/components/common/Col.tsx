import React from 'react';

interface ColProps {
  className?: string;
  spacing?: number;
  children: React.ReactNode;
}

const Col: React.FC<ColProps> = ({
  className = '',
  spacing = 20,
  children,
}) => {
  const classes: string[] = [
    'px-0',
    'px-0.5',
    'px-1',
    'px-1.5',
    'px-2',
    'px-2.5',
  ];
  return <div className={`${className} ${classes[spacing]}`}>{children}</div>;
};

export default Col;
