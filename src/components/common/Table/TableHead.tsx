import { ReactNode } from "react";

const TableHead = ({ children }: { children: ReactNode }) => {
  return (
    <thead className="w-full text-gray-400 font-bold px-4 py-6 text-center text-base capitalize ">
      {children}
    </thead>
  );
};

export default TableHead;
