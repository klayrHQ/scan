"use client"
import {Grid} from "ui";
import {ConsoleLogTester} from "../consoleLogTester";
import {TableSlice} from "../../slices/table";
import {validatorColumns} from "./validatorColumns";
import {FilterButtons} from "ui/atoms/filterButtons/filterButtons";

export const ValidatorsTable = ({
  validators,
  buttons,
  setActiveTab,
  activeTab,
}: {
  validators: any
  buttons: { label: string; state: string; }[],
  setActiveTab: any,
  activeTab: string,
}) => {

  return (
    <Grid className={"max-w-app w-app mx-auto min-h-50 mb-4 gap-4"} gap={4}>
      {/*<ConsoleLogTester data={validators} />*/}
      <FilterButtons
        buttons={buttons}
        // @ts-ignore
        onChange={setActiveTab}
        selection={activeTab}
      />
      <TableSlice
        id={"validatorsTable"}
        queryData={{validators: validators}}
        table={{
          key: "validators",
          columns: validatorColumns,
          sticky: true,
        }}
      />
    </Grid>
  )
}