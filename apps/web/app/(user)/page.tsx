import React from "react";
import { ValueFormatter } from "../../components/valueFormatter";
import {getSlices} from "./[uri]/page";
import {Slicer} from "../../components/slicer";

export const revalidate = 5;

export default async function Web() {
  const sections = await getSlices("home");
  // const table = await getTable({ slug: "blocks" });
  // const tableRows = await makeTable({
  //   queries: [...table.queries],
  //   key: table.key,
  //   cols: table.keys,
  //   head: [],
  // });
  return (
    <>
      <div className={"w-max-app mx-auto w-app"}>
        {/*<Table columns={table.columns} rows={tableRows?.rows} />*/}
        <ValueFormatter
          color={{
            color: "onBackgroundLow",
          }}
          value={"Lemii"}
          tag={"span"}
          format={"shortAddress"}
          type={"string"}
          icon={{
            icon: "UserIconSolid",
            before: true,
            iconProps: [{ key: "className", value: "text-onPrimary h-6 w-6 text-right" }],
          }}
          tooltip={{
            value: "Why did Lemii bring a dictionary to the pre pre beta release review?\n" +
              "Because he wanted to make sure the content was properly \"spelled out\"!",
            placement: "top-start",
          }}
        />
      </div>
      <Slicer
        slices={sections.sections}
        queryData={sections.queryData}
        queries={sections.page.queries}
      />
    </>
  );
}
