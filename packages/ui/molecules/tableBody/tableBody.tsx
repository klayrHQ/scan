import React, {ReactElement} from 'react';
import {TableRow as TableRow} from "../tableRow/tableRow";
import {TableColumn as TableCol} from "../../atoms/tableColumn/tableColumn";
import {tableRowsType} from "../../types";

export interface TableBodyProps {
  oddClassName?: string
  evenClassName?: string
  hoverClassName?: string
  rows: tableRowsType
  mobileRows?: tableRowsType
  tabletRows?: tableRowsType
}

/**
 * Primary UI component for user interaction
 */
export const TableBody = ({
  rows,
  mobileRows,
  tabletRows,
  oddClassName,
  evenClassName,
  hoverClassName,
  ...props
}: TableBodyProps) => {
  return (
    <tbody
      className={[
        "p-4",
      ].join(" ")}
      {...props}
    >
    {rows && rows.map((row, y) =>  (
      <TableRow
        className={[
          mobileRows && !tabletRows && "hidden md:table-row",
          tabletRows && !mobileRows && "md:hidden lg:table-row",
          tabletRows && mobileRows && "hidden lg:table-row",
          hoverClassName,
          y % 2 === 1 ? oddClassName : evenClassName,
          y % 2 === 1 ? "tableRowOdd" : "tableRowEven",
        ].join(" ")}
        cols={row.cols}
        id={row.id}
        key={`row-${row.id}`}
      />
    ))}
    {mobileRows && mobileRows.map((row, y) =>  (
      <TableRow
        className={[
          "md:hidden",
          hoverClassName,
          y % 2 === 1 ? oddClassName : evenClassName,
          y % 2 === 1 ? "tableRowOdd" : "tableRowEven",
        ].join(" ")}
        cols={row.cols}
        id={row.id}
        key={`row-${row.id}`}
      />
    ))}
    {tabletRows && tabletRows.map((row, y) =>  (
      <TableRow
        className={[
          "hidden md:table-row lg:hidden",
          hoverClassName,
          y % 2 === 1 ? oddClassName : evenClassName,
          y % 2 === 1 ? "tableRowOdd" : "tableRowEven",
        ].join(" ")}
        cols={row.cols}
        id={row.id}
        key={`row-${row.id}`}
      />
    ))}
    </tbody>
  );
};
