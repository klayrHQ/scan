import React, {ReactElement} from 'react';
import {TableHeadColumn as HeadCol} from "../../atoms/tableHeadColumn/tableHeadColumn";
import {TableHead} from "../../molecules/tableHead/tableHead";
import {TableBody} from "../../molecules/tableBody/tableBody";
import {tableHeadColsType, tableRowsType} from "../../types";

export interface TableProps {
  fullWidth?: boolean
  rounded?: boolean
  className?: string
  oddClassName?: string
  evenClassName?: string
  hoverClassName?: string
  headClassName?: string
  rows: tableRowsType
  mobileRows?: tableRowsType
  tabletRows?: tableRowsType
  headCols?: tableHeadColsType
  mobileHeadCols?: tableHeadColsType
  tabletHeadCols?: tableHeadColsType
}

export const Table = ({
  className,
  oddClassName = `bg-background text-onSurface`,
  evenClassName = `bg-surfaceLight text-onSurface`,
  hoverClassName = `hover:bg-surfaceDark hover:text-onSurface`,
  headClassName = `bg-surfaceDark text-onSurfaceDark`,
  fullWidth,
  rounded,
  headCols,
  mobileHeadCols,
  tabletHeadCols,
  rows,
  mobileRows,
  tabletRows,
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
                <TableHead
                  cols={headCols}
                  mobileCols={mobileHeadCols}
                  tabletCols={tabletHeadCols}
                  headClassName={headClassName}
                />
              }
              <TableBody
                rows={rows}
                mobileRows={mobileRows}
                tabletRows={tabletRows}
                oddClassName={oddClassName}
                hoverClassName={hoverClassName}
                evenClassName={evenClassName}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
