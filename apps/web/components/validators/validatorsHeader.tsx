import {Suspense} from "react";
import {Grid, KeyValueRow, Typography} from "ui";
import {TitleBoxSlice} from "../../slices/titleBox";
import {Generators} from "./generators";
import {ValidatorKpis} from "./ValidatorKpis";

export const ValidatorsHeader = ({generators, stats}: any) => {
  return (
    <Grid
      columns={3}
      gap={8}
      className={"max-w-app md:w-full mx-auto min-h-50"}
    >
      <TitleBoxSlice
        description={{
          type: "literal",
          value: "Discover a comprehensive overview of all validators and essential on-chain statistics."
        }}
        title={{
          format: {
            typography: [
              {
                value: "Heading3",
                key: "size"
              }
            ],
            tag: "h2"
          },
          type: "literal",
          value: "Validators"
        }}
      />
      <Suspense fallback={<div className={"bg-surface-1 p-4 rounded shadow-xl h-[213px]"}/>}>
        <ValidatorKpis stats={stats}/>
      </Suspense>
      <Suspense fallback={<div className={"bg-surface-1 p-4 rounded shadow-xl h-[213px]"}/>}>
        <Generators generators={generators}/>
      </Suspense>
    </Grid>
  )
}
