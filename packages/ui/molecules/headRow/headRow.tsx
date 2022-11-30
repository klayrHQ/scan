import React from 'react';

export interface HeadRowProps {
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
export const HeadRow = ({
                      style = {},
                      bg = "surface",
                      text = "onSurface",
                      weight = "normal",
                      children,
                      ...props
                    }: HeadRowProps) => {
  return (
    <tr
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
      {children}
    </tr>
  );
};
