import { Head } from "./head";
import { Body } from "./body";
import { Empty } from "./empty";
import { CellProps } from "./cell";
import {cls} from "ui";

export interface TableProps {
  rows?: any[][];
  columns: CellProps[];
}

export const Table = ({ rows, columns }: TableProps) => (
  <table className={cls([ "border-collapse rounded",])}>
    <Head cols={columns} />
    <Body rows={rows} columns={columns} />
    {rows && rows.length === 0 && <Empty colSpan={2} emptyLabel={"TODO EMPTY"} />}
  </table>
);
