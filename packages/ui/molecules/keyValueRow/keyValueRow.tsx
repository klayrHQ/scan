import React, { ReactNode } from "react";
import { cls, Typography, Paper } from "../..";

interface KeyValueRowProps {
  label?: ReactNode | string;
  value?: ReactNode | string;
  className?: string;
  classNameValue?: string;
  icon?: ReactNode | string;
  surface?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  inline?: boolean;
  color?: string;
  valueBold?: boolean;
}

export const KeyValueRow = ({
  label,
  value,
  className,
  classNameValue,
  icon,
  surface = 0,
  inline,
  color,
  valueBold,
}: KeyValueRowProps) => (
  <Paper
    surface={surface}
    className={[
      "flex flex-col md:flex-row",
      "rounded text-lg",
      className ? className : "",
    ].join(" ")}
  >
    <div
      className={cls([
        inline
          ? "inline-flex w-max gap-1"
          : "flex md:flex-grow flex-col md:flex-row justify-between w-full gap-2",
      ])}
    >
      <Typography
        tag={"span"}
        className={cls(["capitalize font-medium"])}
        color={color ? color : "onSurfaceMedium"}
        size={inline ? "subBody" : "body"}
      >
        {label}
      </Typography>
      <Typography
        tag={"span"}
        className={cls([
          classNameValue,
          "min-w-spacer",
          valueBold ? "font-bold" : "font-medium",
        ])}
        color={color ? color : "onSurfaceHigh"}
        size={inline ? "subBody" : "body"}
      >
        {value}
      </Typography>
    </div>
    {icon && <div className="hidden md:block w-8">{icon}</div>}
  </Paper>
);
