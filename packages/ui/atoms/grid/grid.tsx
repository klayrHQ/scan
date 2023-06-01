import React from "react";
import {cls} from "../../utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
  flex?: boolean;
  justifyBetween?: boolean;
  mobileColumns?: number;
  onClick?: () => void;
}

export const Grid = ({
  children,
  columns = 1,
  gap = 0,
  className,
  justifyBetween = false,
  flex,
  mobileColumns = 1,
  ...props
}: GridProps) => {
  return (
    <div
      className={cls([
        className,
        justifyBetween && "justify-between",
        flex
          ? `flex ${
              columns > 1
                ? `sm:flex-row sm:gap-${gap}`
                : gap > 0
                ? `sm:flex-col sm:gap-${gap}`
                : `flex-col`
            } ${mobileColumns > 1 ? `flex-row gap-${gap}` : `flex-col`}`
          : `grid gap-${gap} grid-cols-${mobileColumns} lg:grid-cols-${columns}`,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};
