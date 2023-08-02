"use client"
import {Table} from "../data/table/table";
import {Grid} from "ui";
import {ConsoleLogTester} from "../consoleLogTester";

export const ValidatorsTable = ({validators}: {validators: any}) => {
  validators = validators.data


  return (
    <Grid className={"max-w-app w-app mx-auto min-h-50 mb-4"}>
      <ConsoleLogTester data={validators} />
      <Table
        columns={[]}
        rows={[]}
      />
    </Grid>
  )
}