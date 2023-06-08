import { cls } from "ui";
import { Cell, CellProps } from "./cell";

export interface HeadProps {
  className?: string;
  cols?: CellProps[];
  sticky?: boolean
}

export const Head = ({ className, cols, sticky, ...props }: HeadProps) => {

  return (
    <thead className={cls([
      sticky && "md:sticky md:top-28 z-10 before:absolute before:left-0 before:right-0 before:-top-2 before:h-2 before:bg-background before:content-['']",
    ])}>
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
