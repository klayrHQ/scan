import { FC } from "react";
import { Cell, ShowOnCell } from "./cell";
import {cls} from "ui";

export interface RowProps {
  params?: Record<string, any>;
  columns: {
    Component: FC<any>;
    ValueComponent: FC<any>;
    showOn: ShowOnCell;
    values: {name: string, _key: string, type: string, value: string}[]
  }[];
  data: any[];
  index: number
}

export const Row = ({ params, columns, data, index }: RowProps) => {
  return (
    <tr className={cls([
      "border-b-1 table-row",
      "odd:border-b-tableOddBorder odd:bg-tableOddBG odd:text-tableOddText",
      "border-b-tableEvenBorder bg-tableEvenBG text-tableEvenText py-4"])} {...params}>
      {columns.map((column, i) => (
        <Cell
          {...column}
          index={index}
          key={`cell-${column.values[0]._key}`}
          type={"row"}
          values={data?.[i]}
          Component={column.ValueComponent}
        />
      ))}
    </tr>
  );
}
