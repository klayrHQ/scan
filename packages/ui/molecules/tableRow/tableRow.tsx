import React, {ReactElement} from 'react';
import {TableColumn} from "../../atoms/tableColumn/tableColumn";

export interface TableRowProps {
  id: string
  className?: string
  cols: Array<{value?: string | ReactElement, className?: string}>
}

/**
 * Primary UI component for user interaction
 */
export const TableRow = ({
  id,
  className,
  cols,
  ...props
 }: TableRowProps) => {
  return (
    <tr
      className={[
        "relative",
        "border-surfaceDark",
        "p-4",
        className ? className : ""
      ].join(" ")}
      {...props}
    >
      {cols.map((col, i) => (
        <TableColumn
          key={`row-${id}-col-${i}`}
          className={col.className}
          {...col}
        />
      ))}
    </tr>
  );
};
