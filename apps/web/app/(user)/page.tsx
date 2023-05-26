import React from "react";
import { ValueFormatter } from "../../components/valueFormatter";

export const revalidate = 5;

export default async function Web() {
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
            conditions: [
              { conditionValue: "asdf", operator: ">", color: "red" },
              { conditionValue: "asdf", operator: "<=", color: "green" },
              { conditionValue: "asdf", operator: "==", color: "yellow" },
            ],
            color: "onBackgroundLow",
          }}
          value={"123123123123"}
          tag={"span"}
          format={"shortAddress"}
          type={"string"}
          icon={{
            icon: "CubeIconSolid",
            conditions: [
              {
                conditionValue: "123123123123",
                operator: ">",
                icon: "CubeIconSolid",
              },
              {
                conditionValue: "123123123123",
                operator: "<=",
                icon: "CubeIconSolid",
              },
              {
                conditionValue: "123123123123",
                operator: "==",
                icon: "CubeIconOutline",
                iconProps: [
                  { key: "className", value: "mr-2 h-6 w-6 text-green" },
                ],
              },
            ],
            before: true,
            iconProps: [{ key: "className", value: "text-onPrimary h-6 w-6 text-right" }],
          }}
          tooltip={{
            conditions: [
              {
                conditionValue: "123123123123",
                operator: ">",
                tooltip: "bigger then",
              },
              {
                conditionValue: "123123123123",
                operator: "<=",
                tooltip: "smaller then",
              },
              {
                conditionValue: "123123123123",
                operator: "==",
                tooltip: "equa sdfgsd fgsd sdfg sdfg sdfg l asdf asdf asdf asdf asdf asdf asdfa sdfsdfsdfsdf sdf sdf sdf",
              },
            ],
            value: "default",
            placement: "top-start",
            // offset: {
            //   distance: 20,
            //   skidding: 70,
            // }
          }}
          link={"/blocks"}
        />
      </div>
    </>
  );
}
