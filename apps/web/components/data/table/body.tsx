import { Row } from "./row";
import React from "react";
import { CellProps } from "./cell";

export interface BodyProps {
  rows?: any[][];
  columns: CellProps[];
}

export const Body = ({ rows, columns }: BodyProps) => {
  return (
    <tbody>
      {rows?.map((row, index) => (
        <Row
          key={`row-${row[0]?.[0]._key}-${row[0]?.[0].value}`}
          columns={columns}
          data={row}
        />
      ))}
    </tbody>
  );
};
