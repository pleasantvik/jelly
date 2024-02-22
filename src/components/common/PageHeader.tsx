import { ReactNode } from "react";

const PageHeader = ({
  title,
  isSearch,
  SecondaryContent,
}: {
  title: string;
  isSearch?: boolean;
  SecondaryContent?: ReactNode;
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-dark text-4xl">{title}</h2>
      {isSearch && SecondaryContent}
    </div>
  );
};

export default PageHeader;
