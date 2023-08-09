import {TableSlice} from "../../../slices/table";
import {stakersColumns, stakesColumns} from "../table/columns/stakesColumns";

export const Stakes = ({
  queryData,
  tab,
}: {
  queryData: any
  tab: string
}) => {

  return (
    <TableSlice
      queryData={{stakes: queryData["account-stakes-sent"], stakers: queryData["account-received-stakes"]}}
      table={{
        key: tab === "stakers" ? "stakers" : "stakes",
        columns: tab === "stakers" ? stakersColumns : stakesColumns,
        sticky: true,
      }}
    />
  )
}