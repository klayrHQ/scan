import React from 'react';

export interface TableRowProps {
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
export const Row = ({
   style = {},
   bg = "surface",
   text = "onSurface",
   weight = "normal",
   children,
   ...props
 }: TableRowProps) => {
  return (
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
  );
};
