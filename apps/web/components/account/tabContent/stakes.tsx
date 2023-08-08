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
      queryData={queryData || []}
      table={{
        key: tab === "stakers" ? "stakers" : "stakes",
        columns: tab === "stakers" ? stakersColumns : stakesColumns,
        sticky: true,
      }}
    />
  )
}