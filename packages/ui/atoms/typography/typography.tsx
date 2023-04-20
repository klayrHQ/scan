import React, { FC } from "react";
import { cva } from "class-variance-authority";

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
  tag:
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
  size?:
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
}

export const typography = cva(["border-none"], {
  variants: {
    size: {
      Heading1:
        "text-40 tablet:text-60 desktop:text-80 font-heading text-header ",
      Heading2:
        "text-16 tablet:text-20 desktop:text-40 font-heading text-header",
      Heading3:
        "text-14 tablet:text-20 desktop:text-32 font-heading text-header",
      Heading4:
        "text-12 tablet:text-18 desktop:text-24 font-heading text-header",
      Heading5:
        "text-12 tablet:text-12 desktop:text-16 font-heading text-header",
      Heading6:
        "text-10 tablet:text-10 desktop:text-12 font-heading text-header",
      Button:
        "text-12 tablet:text-12 desktop:text-16 font-heading align-middle",
      ParagraphLarge: "text-16 tablet:text-20 desktop:text-32",
      ParagraphSmall: "text-12 tablet:text-15 desktop:text-15",
      Paragraph6: "text-10 tablet:text-10 desktop:text-12 font-body",
      menu: "text-9 tablet:text-9 desktop:text-16 font-body text-header",
      blurbTitle: "text-9 tablet:text-9 desktop:text-10 font-body",
      body: "text-9 tablet:text-14 desktop:text-16 font-body ",
      subBody: "text-8 tablet:text-10 desktop:text-10 font-body",
      label: "text-9 tablet:text-9 desktop:text-9 font-heading",
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
    { size: "ParagraphLarge", bold: true, className: "font-headingBold", },
    { size: "ParagraphLarge", bold: false, className: "font-heading", },
    { size: "ParagraphLarge", bold: undefined, className: "font-heading", },
    { size: "ParagraphSmall", bold: false, className: "font-heading", },
    { size: "ParagraphSmall", bold: undefined, className: "font-heading", },
    { size: "ParagraphSmall", bold: true, className: "font-headingBold", },
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
            color ? `text-${color}` : "text-current",
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
