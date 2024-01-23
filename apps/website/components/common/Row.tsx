import React from 'react';

interface RowProps {
  spacing?: number;
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ spacing = 5, children }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { spacing });
    }
    return child;
  });
  const classes: string[] = [
    'mx-0',
    '-mx-0.5',
    '-mx-1',
    '-mx-1.5',
    '-mx-2',
    '-mx-2.5',
  ];

  return (
    <div className={`flex flex-wrap ${classes[spacing]}`}>
      {childrenWithProps}
    </div>
  );
};

export default Row;
