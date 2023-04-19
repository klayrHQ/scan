import React, { FC } from "react";

interface TypographyProps {
  align?: "left" | "right" | "center";
  color?: string;
  bgColor?: string;
  className?: string;
  italic?: boolean;
  noMargin?: boolean;
  noPadding?: boolean;
  underLine?: boolean;
  underLineSpacing?: 0 | 1 | 2 | 3 | 4 | 5 | 8 | 10 | "auto";
  bold?: boolean;
  disabled?: boolean;
  tag: "h1" | "h2" | "h3" | "h4" | "span" | "p" | "small" | "em" | "strong" | "button";
  size?: string;
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
    size,
    ...others
  }) => {
    const headingTags = tag === "h1" || tag === "h2" || tag === "h3" || tag === "h4" || tag === "button";
    const _className = [
      headingTags ? "font-heading" : "font-body",
      headingTags && bold ? "font-headingBold" : "",
      size ? `text-${size}` : "",
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