import {Typography} from "ui";


export const TableSkeleton = ({
  columns,
  rows,
}: {
  columns?: number | string[]
  rows?: number
}) => {
  return (
    <table className={"w-full border-spacing-2"}>
      <thead>
        <tr>
          {
            typeof columns === "number" ? Array.from(Array(columns)).map(column => {
              return (
                <th className={"h-12 bg-surface-1 rounded"}>

                </th>
              )
            }) : columns?.map(column => {
              return (
                <th className={"h-12 bg-surface-1 rounded"}>
                  <Typography className={"font-normal"} tag={"span"}>{column}</Typography>
                </th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          Array.from(Array(rows)).map(row => {
            return (
              <tr>
                {
                  Array.from(Array(typeof columns === "number" ? columns : columns?.length)).map(column => {
                    return (
                      <td className={"h-12 bg-surface-1 rounded"}>

                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}