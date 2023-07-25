import { cls } from "ui";
import { Cell, CellProps } from "./cell";
import {MutableRefObject} from "react";

export interface HeadProps {
  className?: string;
  cols?: CellProps[];
  sticky?: boolean
  stickyMobile?: boolean;
  stickyRef?: MutableRefObject<any>;
  isStuck?: boolean;
}

export const Head = ({ className, cols, sticky, stickyMobile, stickyRef, isStuck, ...props }: HeadProps) => {

  return (
    <thead
      className={cls([
        sticky && "md:sticky md:top-28 z-10",
        stickyMobile && "sticky top-28 z-10",
        (sticky || stickyMobile) && isStuck && "md:before:absolute md:before:left-0 md:before:right-0 md:before:-top-2 md:before:h-2 md:before:bg-background md:before:content-['']",
      ])}
      ref={stickyRef}
    >
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
