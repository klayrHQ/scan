import React from 'react';

export interface TableColProps {
  style?: object
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
                         style = {},
                         align = "left",
                         bg = "surface",
                         text = "onSurface",
                         weight = "normal",
                         value,
                         ...props
                       }: TableColProps) => {
  return (
    <td
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
        `text-${align}`,
      ].join(" ")}
      {...props}
    >
      {value}
    </td>
  );
};
