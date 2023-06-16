import { Row } from "./row";
import React from "react";
import { CellProps } from "./cell";
import { nanoid } from "nanoid";

export interface BodyProps {
  rows?: any[][];
  columns: CellProps[];
  queryData?: Record<string, any>;
}

export const Body = ({ rows, columns, queryData }: BodyProps) => {
  return (
    <tbody>
      {rows?.map((row, index) => (
        <Row
          row={row}
          queryData={queryData}
          key={nanoid()}
          columns={columns}
          data={row}
          index={index}
        />
      ))}
    </tbody>
  );
};
