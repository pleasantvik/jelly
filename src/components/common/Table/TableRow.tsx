import { ReactNode } from 'react';

const TableRow = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <tr onClick={onClick} className="py-6">
      {children}
    </tr>
  );
};

export default TableRow;
