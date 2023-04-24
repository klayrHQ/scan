import React from "react";

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
      className={[
        className,
        justifyBetween && "justify-between",
        flex
          ? `flex ${
              columns > 1
                ? `tablet:flex-row tablet:space-x-${gap}`
                : gap > 0
                ? `tablet:flex-col tablet:space-y-${gap}`
                : `flex-col`
            } ${mobileColumns > 1 ? `flex-row space-x-${gap}` : `flex-col`}`
          : `grid gap-${gap} grid-cols-${mobileColumns} desktop:grid-cols-${columns}`,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
};
