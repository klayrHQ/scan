import React, { CSSProperties } from "react";
import { Colors } from "../../types";
import { cva } from "class-variance-authority";

interface Props {
  children?: any;
  width?: string;
  bgColor?: Colors;
  className?: string | undefined;
  style?: CSSProperties;
  rounded?: boolean;
  gap?: number;
  card?: boolean;
  nftCard?: boolean;
  basic?: boolean;
  shadow?: boolean;
  section?: boolean;
}

const container = cva(
  ["flex", "flex-col", "box-border"],
  {
    variants: {
      card: {
        true: "md:max-w-collectionCard  box-border p-4 bg-surface hover:bg-surface-1 cursor-pointer",
        false: "",
      },
        section: {
          true: "max-w-[1400px] mx-auto w-app space-y-8",
        },
        nftCard: {
        true: "w-[281.3px] h-auto box-border p-2 bg-surface hover:bg-surface-1 cursor-pointer",
        false: "space-y-8",
      },
      shadow: {
        true: "shadow-card",
      },
      rounded: {
        true: "rounded-default",
      },
        basic: {
          true: "",
            false: "",
        },
    },

    compoundVariants: [],
  },
);

export const Container = ({
  className,
  rounded,
  style,
  gap = 0,
  card,
  basic,
  bgColor,
  shadow,
  children,
  width = "app",
    section,
  ...props
}: Props) => {
  // @ts-ignore
  return (
    <div
      className={container({
        className: `${className} space-y-${gap} w-${width} bg-${bgColor}`,
        rounded,
        gap,
        card,
        basic,
        bgColor,
        shadow,
        children,
        width,
          section,
      })}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
