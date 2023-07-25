import { Head } from "./head";
import { Body } from "./body";
import { Empty } from "./empty";
import { CellProps } from "./cell";
import { cls } from "ui";

export interface TableProps {
  rows?: any[][];
  columns: CellProps[];
  queryData?: Record<string, any>;
  sticky?: boolean;
}

export const Table = ({
  rows,
  columns,
  queryData,
  sticky,
}: TableProps) => (
  <table className={cls(["border-collapse rounded w-full overflow-x-auto"])}>
    <Head cols={columns} sticky={sticky} />
    <Body queryData={queryData} rows={rows} columns={columns} />
    {rows && rows.length === 0 && (
      <Empty colSpan={2} emptyLabel={"TODO EMPTY"} />
    )}
  </table>
);
