import React, { FC } from "react";
import { Colors } from "../../types";

interface TypographyProps {
  align?: "left" | "right" | "center";
  color?: Colors;
  bgColor?: Colors;
  className?: string;
  italic?: boolean;
  noMargin?: boolean;
  noPadding?: boolean;
  underLine?: boolean;
  underLineSpacing?: 0 | 1 | 2 | 3 | 4 | 5 | 8 | 10 | "auto";
  bold?: boolean;
  disabled?: boolean;
  tag: "h1" | "h2" | "h3" | "h4" | "span" | "p" | "small" | "em" | "strong" | "button";
}

const sizes = {
  h1: "title",
  h2: "heading",
  h3: "sub-heading",
  h4: "sub-title",
  button: "title",
};

const factory = () => {
  const Typography: FC<TypographyProps> = ({
    align = "left",
    children,
    className,
    color = "eerie",
    bgColor ,
    italic = false,
    noMargin = true,
    noPadding = true,
    underLine = false,
    underLineSpacing = 0,
    bold,
    tag,
    ...others
  }) => {
    const headingTags = tag === "h1" || tag === "h2" || tag === "h3" || tag === "h4" || tag === "button";
    const size = headingTags ? `text-${sizes[tag]}` : "text-base" || "text-inherit";
    const _className = [
      headingTags ? "font-heading" : "font-body",
      headingTags && bold ? "font-headingBold" : "",
      size,
      color ? `text-${color}` : "",
      bgColor ? `bg-${bgColor}` : "",
      bold ? "font-bold" : "font-normal",
      italic ? "italic" : "",
      underLine ? `underline underline-offset-${underLineSpacing}` : "",
      className,
      noMargin ? "m-0" : "",
      noPadding ? "p-0" : "",
  ].join(" ");

    const Component = tag;

    return (
      <Component
        data-react-toolbox="typography"
        className={_className}
        {...others}
      >
        {children}
      </Component>
    );
  };

  return Typography;
};

export const Typography = factory();