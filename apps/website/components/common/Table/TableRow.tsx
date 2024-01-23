import React from 'react';

interface TableRowProps {
  children: React.ReactNode;
  type?: 'thead' | 'tbody';
}

const TableRow: React.FC<TableRowProps> = ({ children, type = 'tbody' }) => {
  return (
    <tr
      className={`${
        type === `tbody` && `odd:bg-[#282C3850]`
      } border-b border-dark last:border-none`}
    >
      {children}
    </tr>
  );
};

export default TableRow;
