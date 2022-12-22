import React from "react";

interface PaperProps {
  className?: string
  rounded?: boolean
  shadow?: 0 | 1 | 2 | 3 | 4
  surface: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  children?: any
}

export const Paper = ({
  className,
  rounded = true,
  shadow,
  surface,
  children,
}: PaperProps) => {
  return (
    <div
      className={[
        rounded && "rounded",
        shadow && `shadow-${shadow}`,
        // shadow && `shadow-${shadow }`,
        `bg-surface-${surface || 0}`,
        "text-onSurfaceMedium",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}