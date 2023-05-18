import React from "react";
import { makeTable } from "../../lib/sanity.table";
import { Table } from "../../components/data/table/table";
import { getTable } from "../../lib/queries/getTable";
import {Typography} from "ui";

export const revalidate = 10;

export default async function Web() {
  const table = await getTable({ slug: "blocks" });
  const tableRows = await makeTable({
    queries: [...table.queries],
    key: table.key,
    cols: table.keys,
    head: [],
  });
  return (
    <>
      <div className={"w-max-app mx-auto"}>
        <Typography tag={"p"} color={"onInfobar"}>Test</Typography>
        <Table columns={table.columns} rows={tableRows?.rows} />
      </div>
    </>
  );
}
