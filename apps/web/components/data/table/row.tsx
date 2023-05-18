import { FC } from "react";
import { Cell, ShowOnCell } from "./cell";
import {cls} from "ui";

export interface RowProps {
  params?: Record<string, any>;
  columns: {
    Component: FC<any>;
    ValueComponent: FC<any>;
    showOn: ShowOnCell;
  }[];
  data: any[];
}

export const Row = ({ params, columns, data }: RowProps) => (
  <tr className={cls([
    "border-b-1 table-row",
    "odd:border-b-tableOddBorder odd:bg-tableOddBG odd:text-tableOddText",
  "border-b-tableEvenBorder bg-tableEvenBG text-tableEvenText"])} {...params}>
    {columns.map((column, index) => (
      <Cell
        {...column}
        key={data?.[index]}
        type={"row"}
        values={data?.[index]}
        Component={column.ValueComponent}
      />
    ))}
  </tr>
);
