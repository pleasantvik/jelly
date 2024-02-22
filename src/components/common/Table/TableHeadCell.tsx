import { ReactNode } from 'react';

const TableHeadCell = ({ children }: { children: ReactNode }) => {
  return (
    <th className=" px-4 py-2 text-left  font-medium text-dark ">{children}</th>
  );
};

export default TableHeadCell;
