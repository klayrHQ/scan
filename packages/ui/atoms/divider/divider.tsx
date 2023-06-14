import React, {FC} from "react";
import {cls} from "../../utils";

export interface DividerProps {
  className?: string
  color?: string
  width?: string
  borderWidth?: string
  borderStyle?: string
  align?: "left" | "center" | "right"
  marginY?: string
}

export const Divider: FC<DividerProps> = ({
  className,
  color,
  width= "full",
  borderWidth,
  borderStyle,
  align= "center",
  marginY,
}) => {
  return(
    <div
      className={cls([
        "w-full",
        "flex",
        `justify-${align}`,
      ])}
    >
      <hr
        className={cls([
          "inline-block border-t-0 border-r-0 border-l-0",
          className,
          color ? `border-${color}` : "border-body",
          width && `w-${width}`,
          borderWidth && `border-${borderWidth}`,
          borderStyle ? `border-${borderStyle}` : "border-solid",
          marginY ? `my-${marginY}` : "m-0",
        ])}
      />
    </div>
  )
};