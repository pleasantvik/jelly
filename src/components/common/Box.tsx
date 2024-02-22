import { HTMLAttributes, ReactNode } from "react";

const Box = ({ children, ...props }: IBoxProps) => {
  return <div {...props}>{children}</div>;
};

interface IBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export default Box;
