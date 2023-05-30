import { Row } from "./row";
import React from "react";
import { CellProps } from "./cell";

export interface BodyProps {
  rows?: any[][];
  columns: CellProps[];
  queryData?: Record<string, any>
}

export const Body = ({ rows, columns, queryData }: BodyProps) => {
  return (
    <tbody>
      {rows?.map((row, index) => (
        <Row
          queryData={queryData}
          key={`row-${row[0]?.[0]._key}-${row[0]?.[0].value}`}
          columns={columns}
          data={row}
          index={index}
        />
      ))}
    </tbody>
  );
};
