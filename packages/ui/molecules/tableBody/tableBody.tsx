import React from 'react';
import {HeadColumn as HeadCol, TableHeadColProps} from "../../atoms/headColumn/headColumn";

export interface TableBodyProps {
  style?: object
  bg?: string
  text?: string
  weight?: string
  children: any
  rows?: Array<{cols: Array<{}>}>
}

/**
 * Primary UI component for user interaction
 */
export const TableBody = ({
  style = {},
  bg = "surface",
  text = "onSurface",
  weight = "normal",
  rows,
  children,
  ...props
}: TableBodyProps) => {
  return (
    <tbody
      style={style}
      className={[
        "relative",
        "border-surfaceDark",
        "p-4",
        bg ? `bg-${bg}` : "",
        text ? `text-${text}` : "",
        `font-${weight}`,
      ].join(" ")}
      {...props}
    >
      {children}
    </tbody>
  );
};
