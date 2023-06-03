"use client";
import { makeTable } from "../lib/sanity.table";
import { Table } from "../components/data/table/table";
import React, { useEffect, useState } from "react";
import { processTable } from "../lib/queries/getTable";

export const TableSlice = ({ queryData, data, table, id }: any) => {
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
      // console.log("QDQDQ", tableRows, queryData.blocks?.data[0].height)
      updateTable({ rows: tableRows.rows, table: processedTable });
    };
    if (queryData[table.key]) {
      getData();
    }
  }, [queryData]);
  return (
    <div className={"max-w-app mx-auto w-full bg-background"}>
      <Table
        key={id}
        queryData={queryData}
        // columns={processTable(props.table).columns}
        // rows={props?.data?.rows}
        columns={tableState?.table?.columns || processTable(table).columns}
        rows={
          tableState?.rows && tableState.rows.length > 0
            ? tableState?.rows
            : data?.rows
        }
      />
    </div>
  );
};
