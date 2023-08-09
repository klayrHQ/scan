import {TableSlice} from "../../../slices/table";
import {tokenColumns} from "../table/columns/tokenColumns";

export const Tokens = ({
  queryData
}: {
  queryData: any
}) => {

  return (
    <TableSlice
      queryData={{tokens: queryData["account-id-balances"], rewards: queryData["account-rewards-claimable"]}}
      table={{
        key: "tokens",
        columns: tokenColumns,
        sticky: true,
      }}
    />
  )
}