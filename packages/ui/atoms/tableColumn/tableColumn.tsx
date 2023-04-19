import React from 'react';
import {Typography} from "../typography/typography";

export interface TableColProps {
  className?: string
  value?: string | any
}

/**
 * Primary UI component for user interaction
 */
export const TableColumn = ({
  className,
  value,
  ...props
}: TableColProps) => {
  return (
    <td
      className={[
        "relative",
        "border-surfaceDark",
        "table-cell",
        "tableColumn",
        "p-4",
        className ? className : "",
      ].join(" ")}
      {...props}
    >
      <Typography tag={"span"}>
        {value}
      </Typography>
    </td>
  );
};
