import {TableSlice} from "../../../slices/table";
import {tokenColumns} from "../table/columns/tokenColumns";

export const Tokens = ({
  queryData
}: {
  queryData: any
}) => {

  return (
    <TableSlice
      queryData={queryData || []}
      table={{
        key: "tokens",
        columns: tokenColumns,
        sticky: true,
      }}
    />
  )
}