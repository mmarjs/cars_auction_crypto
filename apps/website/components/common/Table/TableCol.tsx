import React from 'react';

interface TableColProps {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

enum alignClasses {
  left = 'text-left',
  center = 'text-center',
  right = 'text-right',
};

const TableCol: React.FC<TableColProps> = ({ children, align = 'left' }) => {
  return (
    <td
      className={`${alignClasses[align]} h-[60px] text-sm leading-[17px] text-secondary px-5`}
    >
      {children}
    </td>
  );
};

export default TableCol;
