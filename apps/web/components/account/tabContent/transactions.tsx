import {TableSlice} from "../../../slices/table";
import {transactionsColumns} from "../table/columns/transactionsColumns";

export const Transactions = ({
  queryData
}: {
  queryData: any
}) => {

  return (
    <TableSlice
      queryData={queryData || []}
      table={{
        key: "transactions",
        columns: transactionsColumns,
        sticky: true,
      }}
    />
  )
}