import {TableSlice} from "../../../slices/table";
import {eventsColumns} from "../table/columns/eventsColumns";

export const Events = ({
  queryData
}: {
  queryData: any
}) => {

  return (
    <TableSlice
      queryData={{events: queryData["account-events"]}}
      table={{
        key: "events",
        columns: eventsColumns,
        sticky: true,
        pagination: true,
      }}
    />
  )
}