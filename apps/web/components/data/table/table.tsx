import { Head } from "./head";
import { Body } from "./body";
import { Empty } from "./empty";
import { CellProps } from "./cell";
import {cls} from "ui";

export interface TableProps {
  rows?: any[][];
  columns: CellProps[];
  queryData?: Record<string, any>
}

export const Table = ({ rows, columns,queryData }: TableProps) => (
  <table className={cls([ "border-collapse rounded w-full",])}>
    <Head cols={columns} />
    <Body queryData={queryData} rows={rows} columns={columns} />
    {rows && rows.length === 0 && <Empty colSpan={2} emptyLabel={"TODO EMPTY"} />}
  </table>
);
