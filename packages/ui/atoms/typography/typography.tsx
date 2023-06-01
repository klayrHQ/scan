import React, { FC } from "react";
import { cva } from "class-variance-authority";

export type Tags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "span"
  | "p"
  | "small"
  | "em"
  | "strong"
  | "button"
  | "text";

export type Sizes =
  | "Heading1"
  | "Heading2"
  | "Heading3"
  | "Heading4"
  | "Heading5"
  | "Heading6"
  | "ParagraphLarge"
  | "ParagraphSmall"
  | "Paragraph6"
  | "menu"
  | "label"
  | "Button"
  | "body"
  | "subBody"
  | "blurbTitle";

export interface TypographyProps extends React.HTMLAttributes<any> {
  align?: "left" | "right" | "center";
  link?: boolean;
  color?: string;
  bgColor?: string;
  className?: string;
  italic?: boolean;
  noMargin?: boolean;
  noPadding?: boolean;
  underLine?: boolean;
  underLineSpacing?: 0 | 1 | 2 | 3 | 4 | 5 | 8 | 10 | "auto";
  bold?: boolean;
  tag: Tags;
  size?: Sizes;
}

export const typography = cva(["border-none"], {
  variants: {
    size: {
      Heading1: "text-40 sm:text-60 md:text-80 font-heading",
      Heading2: "text-16 sm:text-20 md:text-40 font-heading",
      Heading3: "text-14 sm:text-20 md:text-32 font-heading",
      Heading4: "text-12 sm:text-18 md:text-24 font-heading",
      Heading5: "text-12 sm:text-12 md:text-16 font-heading",
      Heading6: "text-10 sm:text-10 md:text-12 font-heading",
      Button: "text-12 sm:text-12 md:text-16 font-heading align-middle",
      ParagraphLarge: "text-16 sm:text-20 md:text-32",
      ParagraphSmall: "text-12 sm:text-15 md:text-15",
      Paragraph6: "text-10 sm:text-10 md:text-12 font-body",
      menu: "text-9 sm:text-9 md:text-12 font-body text-header",
      blurbTitle: "text-9 sm:text-9 md:text-10 font-body",
      body: "text-12 sm:text-13 md:text-14 font-body ",
      subBody: "text-10 sm:text-11 md:text-12 font-body",
      label: "text-9 sm:text-9 md:text-9 font-heading",
    },
    noMargin: {
      true: "m-0",
    },
    noPadding: {
      true: "p-0",
    },
    italic: {
      true: "italic",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    bold: {
      true: "font-headingBold",
      false: "",
    },
    link: {
      true: "hover:underline cursor-pointer",
    },
  },
  compoundVariants: [
    { size: "ParagraphLarge", bold: true, className: "font-headingBold" },
    { size: "ParagraphLarge", bold: false, className: "font-heading" },
    { size: "ParagraphLarge", bold: undefined, className: "font-heading" },
    { size: "ParagraphSmall", bold: false, className: "font-heading" },
    { size: "ParagraphSmall", bold: undefined, className: "font-heading" },
    { size: "ParagraphSmall", bold: true, className: "font-headingBold" },
  ],
});

const factory = () => {
  const Typography: FC<TypographyProps> = ({
    align,
    children,
    className,
    color,
    bgColor,
    italic,
    noMargin = true,
    noPadding = true,
    underLine,
    underLineSpacing = 0,
    bold,
    size = "body",
    link,
    tag,
    ...others
  }) => {
    const Component = tag;
    return (
      <Component
        className={typography({
          size,
          link,
          align,
          bold,
          noPadding,
          italic,
          noMargin,
          className: [
            color ? `text-${color}` : "text-body",
            bgColor ? `bg-${bgColor}` : "transparent",
            underLine ? `underline underline-offset-${underLineSpacing}` : "",
            className,
          ],
        })}
        {...others}
      >
        {children}
      </Component>
    );
  };

  return Typography;
};

export const Typography = factory();
