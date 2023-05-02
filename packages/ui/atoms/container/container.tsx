import React, {FC} from "react";
import {cva} from "class-variance-authority";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  bgColor?: string;
  width?: string;
  rounded?: boolean;
  gap?: number;
  shadow?: boolean;
  fullWidth?: boolean;
  colorVariant?: "light" | "dark" | "sand";
  section?: boolean,
}

const container = cva(["flex", "flex-col", "box-border"], {
  variants: {
    section: {
      true: "w-app mx-auto",
      false: "w-full",
    },
    shadow: {
      true: "shadow-card",
    },
    rounded: {
      true: "rounded",
    },
    colorVariant: {
      light: "",
      dark: "",
      sand: "",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  // compoundVariants: [{
  //   type: "contentBlock",
  //   colorVariant: "light",
  //   className: "bg-surface text-secondary",
  // },
  //   {
  //     type: "contentBlock",
  //     colorVariant: "dark",
  //     className: "bg-surface-4 text-primary",
  //   },
  //   {
  //     type: "contentBlock",
  //     colorVariant: "sand",
  //     className: "bg-tertiary text-body",
  //   },
  // ],
});

export const Container: FC<Props> = ({
  bgColor,
  children,
  className,
  gap = 8,
  rounded,
  section,
  shadow,
  width = "",
  colorVariant,
  ...props
}) => {
  return (
    <div
      className={container({
        rounded,
        section,
        shadow,
        colorVariant,
        className: `${className} space-y-${gap} w-${width} bg-${bgColor}`,
      })}
      {...props}
    >
      {children}
    </div>
  );
};
