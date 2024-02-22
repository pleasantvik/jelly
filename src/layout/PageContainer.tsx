import React, { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto bg-[#f7f7f7] px-8 py-8">{children}</div>
  );
};

export default PageContainer;
