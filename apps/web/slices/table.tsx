"use client";
import { makeTable } from "../lib/sanity.table";
import { Table } from "../components/data/table/table";
import React, { useEffect, useState } from "react";
import { processTable } from "../lib/queries/getTable";
import {useIsStuck} from "../hooks/useIsStuck";
import {ConsoleLogTester} from "../components/consoleLogTester";

export const TableSlice = ({ queryData, data, table, id, container }: any) => {
  // const {lastBlock} = useService()
  const [tableState, updateTable] = useState<{
    table: any;
    rows: (string | number)[][];
  }>();
  // console.log(props)
  useEffect(() => {
    const getData = async () => {
      const processedTable = processTable(table);
      const tableRows = makeTable({
        data: queryData,
        key: table.key,
        cols: table.columns,
      });
      // console.log(processedTable)
      // console.log(queryData)
      // console.log("QDQDQ", tableRows, queryData.blocks?.data[0].height)
      // console.log(tableRows)
      updateTable({ rows: tableRows.rows, table: processedTable });
    };
    if (queryData[table.key]) {
      getData();
    }
  }, [queryData]);

  const [isStuck, stickyRef] = useIsStuck(28)

  return (
    <div
      className={[
        "max-w-app mx-auto w-full bg-background rounded",
        container ? "shadow-xl p-4 w-app mx-auto " : "",
        "overflow-x-auto md:overflow-x-visible",
        //!table.sticky ? "overflow-x-auto md:overflow-x-visible" : "",
      ].join(" ")}
    >
      {/*<ConsoleLogTester data={JSON.stringify(table.columns)} />*/}
      {/*<ConsoleLogTester label={"QueryData"} data={queryData} />*/}
      {/*<ConsoleLogTester label={"Table"} data={table} />*/}
      <Table
        key={id}
        queryData={queryData}
        // columns={processTable(props.table).columns}
        // rows={props?.data?.rows}
        columns={tableState?.table?.columns || processTable(table).columns}
        isStuck={isStuck}
        rows={
          tableState?.rows && tableState.rows.length > 0
            ? tableState?.rows
            : data?.rows
        }
        sticky={table.sticky}
        stickyMobile={table.stickyMobile}
        stickyRef={stickyRef}
      />
    </div>
  );
};
