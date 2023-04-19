import React from "react";

type Props = {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
  flex?: boolean;
  justifyBetween?: boolean;
  mobile?: number;
};

export const Grid: React.FC<Props> = ({
  children,
  columns = 1,
  gap = 0,
  className,
  justifyBetween = false,
  flex,
    mobile = 1,
}) => {
  return (
    <div
      className={[
        `${className}`,
        justifyBetween && "justify-between",
        flex ? `flex space-x-${gap} ${columns || mobile > 1 ? "flex-tableRow" : "flex-col"}`
            : `grid gap-${gap} grid-cols-${mobile} desktop:grid-cols-${columns}`,

      ].join(" ")}
    >
      {children}
    </div>
  );
};
