"use client"
import {Grid} from "ui";
import {ConsoleLogTester} from "../consoleLogTester";
import {TableSlice} from "../../slices/table";
import {validatorColumns} from "./validatorColumns";



export const ValidatorsTable = ({validators}: {validators: any}) => {

  return (
    <Grid className={"max-w-app w-app mx-auto min-h-50 mb-4"}>
      {/*<ConsoleLogTester data={validators} />*/}
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