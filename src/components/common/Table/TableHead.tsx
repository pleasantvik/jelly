import { ReactNode } from "react";

const TableHead = ({ children }: { children: ReactNode }) => {
  return (
    <thead className="w-full  px-4 py-6 text-center text-base font-semibold capitalize text-black">
      {children}
    </thead>
  );
};

export default TableHead;
