import { ReactNode } from 'react';
import { ITableBody } from './newTable.types';

const TableBodyCell = ({
  children,
  classNameTableBodyCell,
  onClick,
}: {
  children: ReactNode;
  classNameTableBodyCell?: string;
  onClick?: (_e: ITableBody) => void;
}) => {
  return (
    <td
      onClick={onClick}
      className={` px-4 py-2 text-left text-[18px] font-medium text-dark-main ${classNameTableBodyCell}`}
    >
      {children}
    </td>
  );
};

export default TableBodyCell;
