import React from 'react';
import {Typography} from "../typography/typography";

export interface TableHeadColProps {
  value?: string | any
  className?: string
  onClick?(col: string): any
  sort?: string
}

export const TableHeadColumn = ({
  className,
  value,
  onClick,
  sort,
}: TableHeadColProps) => {
  return (
    <th
      onClick={() => onClick && onClick(value)}
      className={[
        "sticky top-0 px-4 py-3 ",
        "p-4",
        "table-cell",
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
