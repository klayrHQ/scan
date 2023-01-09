import React from 'react';
import {Typography} from "../typography/typography";

export interface TableHeadColProps {
  align?: "left" | "center" | "right" | string
  value?: string | any
  bg?: string
  text?: string
  bold?: boolean
  className?: string
  onClick?(col: string): any
  sort?: string
}

/**
 * Primary UI component for user interaction
 */
export const HeadColumn = ({
  align = "left",
  bg = "bg-surface-1",
  text = "text-onSurfaceHigh",
  bold = false,
  className,
  value,
  onClick,
  sort,
}: TableHeadColProps) => {
  return (
    <th
      onClick={() => onClick && onClick(value)}
      className={[
        "sticky top-0 px-6 py-3 ",
        "p-4",
        "table-cell",
        bg,
        text,
        bold ? `font-black` : "font-medium",
        `text-${align}`,
        className,
        onClick ? `cursor-pointer` : "",
      ].join(" ")}
    >
      <Typography tag={"span"}>
        {sort ? sort.toLowerCase() === "asc" ? "^" : "v" : ""} {value}
      </Typography>
    </th>
  );
};
