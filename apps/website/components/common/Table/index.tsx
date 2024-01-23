import React from 'react';
import TableRow from './TableRow';
import TableCol from './TableCol';

interface TableProps {
  rows: object[];
  cols: string[];
  renderRow: (row: object) => React.ReactNode;
}

const Table: React.FC<TableProps> = ({ rows, cols, renderRow }) => {
  return (
    <table className="w-full">
      <thead>
        <TableRow type="thead">
          {cols.map((col: string, index: React.Key) => (
            <TableCol key={index}>{col}</TableCol>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {rows?.map((row: object, index: React.Key) => (
          <React.Fragment key={index}>{renderRow(row)}</React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
export { TableCol, TableRow };
