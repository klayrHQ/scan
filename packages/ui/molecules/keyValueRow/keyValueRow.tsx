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
  col?: boolean;
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
  col = false,
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
        col ? "flex-col flex" : "md:flex-row",

        inline
          ? "inline-flex w-max gap-1"
          : "flex md:flex-grow justify-between w-full text-left",
      ])}
    >
      <Typography
        tag={"span"}
        className={cls(["capitalize"])}
        color={color ? color : "onSurfaceHigh"}
        size={inline ? "subBody" : "subBody"}
      >
        {label}
      </Typography>
      <Typography
        tag={"span"}
        className={cls([
          classNameValue,
          "min-w-spacer",
          valueBold ? "font-bold" : "",
        ])}
        color={color ? color : "onSurfaceLow"}
        size={inline ? "subBody" : "subBody"}
      >
        {value}
      </Typography>
    </div>
    {icon && <div className="hidden md:block w-8">{icon}</div>}
  </Paper>
);
