import React from 'react';

export interface TableRowProps {
  style?: object
  className?: string
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
  className,
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
        className
      ].join(" ")}
      {...props}
    >
      {children}
    </tr>
  );
};
