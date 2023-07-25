import { Head } from "./head";
import { Body } from "./body";
import { Empty } from "./empty";
import { CellProps } from "./cell";
import { cls } from "ui";
import {MutableRefObject} from "react";

export interface TableProps {
  rows?: any[][];
  columns: CellProps[];
  queryData?: Record<string, any>;
  sticky?: boolean;
  stickyMobile?: boolean;
  stickyRef?: MutableRefObject<HTMLDivElement | null>;
  isStuck?: boolean;
}

export const Table = ({
  rows,
  columns,
  queryData,
  sticky,
  stickyMobile,
  stickyRef,
  isStuck,
}: TableProps) => (
  <table className={cls(["border-collapse rounded w-full"])}>
    <Head cols={columns} isStuck={isStuck} sticky={sticky} stickyMobile={stickyMobile} stickyRef={stickyRef}/>
    <Body queryData={queryData} rows={rows} columns={columns} />
    {rows && rows.length === 0 && (
      <Empty colSpan={2} emptyLabel={"TODO EMPTY"} />
    )}
  </table>
);
