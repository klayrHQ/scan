import React from 'react';
import {HeadColumn as HeadCol, TableHeadColProps} from "../../atoms/headColumn/headColumn";
import {TableHead} from "../../molecules/tableHead/tableHead";
import {Row as TableRow} from "../../molecules/row/row";
import {Column as TableCol} from "../../atoms/column/column";
import {TableBody} from "../../molecules/tableBody/tableBody";

export interface TableProps {
  style?: object
  bg?: string
  text?: string
  weight?: string
  rounded?: string
  className?: string
  rows?: Array<{cols: Array<{}>}>
  headCols?: Array<{}>
}

/**
 * Primary UI component for user interaction
 */
export const Table = ({
  style = {},
  className,
  rounded,
  bg = "surface",
  text = "onSurface",
  weight = "normal",
  headCols,
  rows,
  ...props
}: TableProps) => {
  return (
    <div className={["flex flex-col my-4 ", className].join(" ")}>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-1 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className={` overflow-hidden ${rounded && "sm:rounded"}`}>
            <table
              style={style}
              className={[
                "relative",
                "border-surfaceDark",
                "table-cell",
                "tableColumn",
                "p-4",
                bg ? `bg-${bg}` : "",
                text ? `text-${text}` : "",
                `font-${weight}`,
              ].join(" ")}
              {...props}
            >
              {headCols &&
                  <TableHead>
                    {headCols.map((col) => (
                      <HeadCol {...col} />
                    ))}
                  </TableHead>
              }
              <TableBody>
                {rows && rows.map((row) =>  (
                  <TableRow {...row}>
                    {row.cols.map((col) => (
                      <TableCol {...col} />
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
