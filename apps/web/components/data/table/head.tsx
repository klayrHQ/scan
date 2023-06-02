import { cls } from "ui";
import { Cell, CellProps } from "./cell";

export interface HeadProps {
  className?: string;
  cols?: CellProps[];
}

export const Head = ({ className, cols, ...props }: HeadProps) => {

  return (
    <thead>
    <tr
      className={cls([
        "border-b-1 rounded",
        "border-b-tableHeaderBorder bg-tableHeaderBG text-tableHeaderText p-4",
        className,
      ])}
      {...props}
    >
      {cols?.map((col, index) => (
        <Cell key={`head-${index}`} type={"head"} {...col}/>
      ))}
    </tr>
    </thead>
  );
}
