import React from 'react';
import {TableHeadColumn} from "../../atoms/tableHeadColumn/tableHeadColumn";
import {tableHeadColsType} from "../../types";

export interface TableHeadProps {
  headClassName?: string
  cols: tableHeadColsType
  mobileCols?: tableHeadColsType
  tabletCols?: tableHeadColsType
}

export const TableHead = ({
  headClassName,
  cols,
  mobileCols,
  tabletCols,
  ...props
}: TableHeadProps) => {
  return (
    <thead>
      <tr
        className={[
          "relative border-surfaceDark p-4",
          mobileCols && !tabletCols && "hidden md:table-row",
          tabletCols && !mobileCols && "md:hidden lg:table-row",
          tabletCols && mobileCols && "hidden lg:table-row",
          headClassName,
        ].join(" ")}
        {...props}
      >
        {cols.map((col, i) => (
          <TableHeadColumn
            key={`head-${col.value}-${i}`}
            {...col}
            className={col.className}
          />
        ))}
      </tr>
      {
        mobileCols &&
        <tr
          className={[
            "relative border-surfaceDark p-4",
            "md:hidden",
            headClassName,
          ].join(" ")}
          {...props}
        >
          {mobileCols.map((col, i) => (
            <TableHeadColumn
              key={`head-${col.value}-${i}`}
              {...col}
              className={col.className}
            />
          ))}
        </tr>
      }
      {
        tabletCols &&
        <tr
            className={[
              "relative border-surfaceDark p-4",
              "hidden md:table-row lg:hidden",
              headClassName,
            ].join(" ")}
            {...props}
        >
          {tabletCols.map((col, i) => (
            <TableHeadColumn
              key={`head-${col.value}-${i}`}
              {...col}
              className={col.className}
            />
          ))}
        </tr>
      }
    </thead>
  );
};
