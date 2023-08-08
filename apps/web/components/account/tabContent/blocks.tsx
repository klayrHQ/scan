import {TableSlice} from "../../../slices/table";
import {blocksColumns} from "../table/columns/blocksColumns";

export const Blocks = ({
  queryData
}: {
  queryData: any
}) => {

  return (
    <TableSlice
      queryData={queryData || []}
      table={{
        key: "blocks",
        columns: blocksColumns,
        sticky: true,
      }}
    />
  )
}