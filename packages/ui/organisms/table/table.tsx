import React from 'react';
import {HeadColumn as HeadCol, TableHeadColProps} from "../../atoms/headColumn/headColumn";
import {TableHead} from "../../molecules/tableHead/tableHead";
import {Row as TableRow, TableRowProps} from "../../molecules/row/row";
import {Column as TableCol, TableColProps} from "../../atoms/column/column";
import {TableBody} from "../../molecules/tableBody/tableBody";

export interface TableProps {
  fullWidth?: boolean
  rounded?: boolean
  className?: string
  oddClassName: string
  evenClassName: string
  hoverClassName: string
  headClassName: string
  rows?: Array<{id: string, cols: Array<{value: string, className: string}>}>
  headCols?: Array<{value: string, className: string}>
}

/**
 * Primary UI component for user interaction
 */
export const Table = ({
  className,
  oddClassName = `bg-background text-onSurface`,
  evenClassName = `bg-surfaceLight text-onSurface`,
  hoverClassName = `hover:bg-surfaceDark hover:text-onSurface`,
  headClassName = `bg-surfaceDark text-onSurfaceDark`,
  fullWidth,
  rounded,
  headCols,
  rows,
  ...props
}: TableProps) => {
  return (
    <div className={["flex flex-col my-4 ", className].join(" ")}>
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
          <div className={` overflow-hidden ${rounded && "sm:rounded"}`}>
            <table
              className={[
                "border-collapse rounded",
                rounded ? "rounded" : "",
                fullWidth ? "min-w-full" : "w-max",
              ].join(" ")}
              {...props}
            >
              {headCols &&
                  <TableHead>
                    {headCols.map((col, i) => (
                      <HeadCol
                        text="text-primary text-sm font-medium"
                        key={`head-${col.value}-${i}`}
                        {...col}
                        className={[
                          "",
                          "tableHeadColumn",
                          col.className,
                          headClassName,
                        ].join(" ")}
                      />
                    ))}
                  </TableHead>
              }
              <TableBody>
                {rows && rows.map((row, y) =>  (
                  <TableRow
                    className={[
                      "tableRow simple-animation",
                      hoverClassName,
                      y % 2 === 1 ? oddClassName : evenClassName,
                      y % 2 === 1 ? "tableRowOdd" : "tableRowEven",
                    ].join(" ")}
                    key={`${row.id ? row.id : `uni-${y}`}`}
                    {...row}
                  >
                    {row.cols.map((col, i) => (
                      <TableCol
                        key={`${row.id ? `${row.id}-${i}` : `uni-${y}-${i}`}`}
                        {...col}
                        bg={""}
                        text={""}
                      />
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
