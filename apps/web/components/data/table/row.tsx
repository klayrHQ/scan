import { FC } from "react";
import { Cell, ShowOnCell } from "./cell";
import {cls} from "ui";

export interface RowProps {
  queryData?: Record<string, any>
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

export const Row = ({ params, columns, data, index, queryData }: RowProps) => {
  return (
    <tr className={cls([
      "border-b border-r-0 border-l-0 border-t-0 border-solid border-tableHeaderBorder",
      " odd:bg-tableOddBG odd:text-tableOddText",
      "bg-tableEvenBG text-tableEvenText py-4"])} {...params}>
      {columns.map((column, i) => (
        <Cell
          queryData={queryData}
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
