import { Row } from "./row";
import React from "react";
import { CellProps } from "./cell";

export interface BodyProps {
  rows: any[][];
  columns: CellProps[];
}

export const Body = ({ rows, columns }: BodyProps) => (
  <tbody>
    {rows?.map((row) => (
      <Row key={`row-${row[0]}`} columns={columns} data={row} />
    ))}
  </tbody>
);
