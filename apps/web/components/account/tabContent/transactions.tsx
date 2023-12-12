import { TableSlice } from "../../../slices/table";
import { transactionsColumns } from "../table/columns/transactionsColumns";

export const Transactions = ({ queryData }: { queryData: any }) => {
  return (
    <TableSlice
      queryData={{
        transactions: queryData["account-id-transactions"],
        events: queryData["account-events"],
      }}
      table={{
        key: "transactions",
        columns: transactionsColumns,
        sticky: true,
        pagination: true,
      }}
    />
  );
};
