import React from 'react';
import {Typography} from "../typograhpy/typography";

export interface TableColProps {
  align?: "left" | "center" | "right" | string
  value?: string | any
  bg?: string
  text?: string
  weight?: string
}

/**
 * Primary UI component for user interaction
 */
export const Column = ({
  align = "left",
  bg = "surface",
  text = "onSurface",
  weight = "normal",
  value,
  ...props
}: TableColProps) => {
  return (
    <td
      className={[
        "relative",
        "border-surfaceDark",
        "table-cell",
        "tableColumn",
        "p-4",
        bg ? `bg-${bg}` : "",
        text ? `text-${text}` : "",
        `font-${weight}`,
        `text-${align}`,
      ].join(" ")}
      {...props}
    >
      <Typography tag={"span"}>
        {value}
      </Typography>
    </td>
  );
};
