import React from 'react';
import {HeadColumn as HeadCol, TableHeadColProps} from "../../atoms/headColumn/headColumn";

export interface TableHeadProps {
  style?: object
  bg?: string
  text?: string
  weight?: string
  children: any
  cols?: any
}

/**
 * Primary UI component for user interaction
 */
export const TableHead = ({
  style = {},
  bg = "surface",
  text = "onSurface",
  weight = "normal",
  cols,
  children,
  ...props
}: TableHeadProps) => {
  return (
    <thead>
      <tr
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
      </tr>
    </thead>
  );
};
