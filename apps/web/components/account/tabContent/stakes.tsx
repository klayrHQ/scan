import {TableSlice} from "../../../slices/table";
import {stakersColumns, stakesColumns} from "../table/columns/stakesColumns";
import {Grid, Typography} from "ui";
import {ConsoleLogTester} from "../../consoleLogTester";

export const Stakes = ({
  queryData,
  tab,
}: {
  queryData: any
  tab: string
}) => {
  const stakes = queryData["account-stakes-sent"]
  const stakers = queryData["account-received-stakes"]

  return (tab === "stakes" && stakes?.meta?.count <= 0) || (tab === "stakers" && stakers?.meta?.count <= 0) ? (
    <Grid className={"m-8"} flex>
      <Typography tag={"span"}>{tab === "stakes" ? "No outgoing stakes" : "No incoming stakes"}</Typography>
    </Grid>
  ) : (
    <TableSlice
      queryData={{stakes: stakes, stakers: stakers}}
      table={{
        key: tab === "stakers" ? "stakers" : "stakes",
        columns: tab === "stakers" ? stakersColumns : stakesColumns,
        sticky: true,
      }}
    />
  )
}