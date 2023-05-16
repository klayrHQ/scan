import React, { FC, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { iconVariants } from "../../types";
import { Typography } from "../typography/typography";
import { iconList } from "./iconList";

interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {
  type?:
    | "primary"
    | "outlined"
    | "iconOnly";
  icon: iconVariants;
  backgroundColor?: string;
  align?: "left" | "center" | "right" | "none";
  fullWidth?: boolean;
  label?: string;
  toggle?: boolean;
  children?: string;
  color?: string;
  number?: string | number;
  size?: "xs" | "small" | "medium" | "large" | "xl";
}

const iconClass = cva(
  [
    "flex",
    "align-middle",
    "items-center",
    "text-center",
    "cursor-pointer",
  ],
  {
    variants: {
      icon: {
        chevronLeft2: "",
        chevronDownSvg: "",
        menuSvg: "",
        account2: "",
        tooltipArrow: "",
        logoCreators: "",
        logoSketch: "",
        logoMarketplace: "",
        logoStandard: "",
        arrowRight: "",
      },
      type: {
        primary: "text-body",
        outlined: "text-body",
        iconOnly: "text-body",
      },
      size: {
        xs: "h-3 w-3",
        small: "h-4 w-4",
        medium: "h-5 w-5",
        large: "h-8 w-8",
        xl: "h-10 w-10",
      },
      align: {
        left: "mr-auto",
        right: "ml-auto",
        center: "mx-auto",
        none: "",
      },
    },
    compoundVariants: [
      // SMALL ICONS
      {
        icon: ["chevronLeft2", "chevronDownSvg"],
        size: "small",
        className: "h-iconXs w-iconXs",
      },
      {
        icon: "menuSvg",
        size: "small",
        // className: "h-[6px] w-[14px]",
        className: "h-iconXs w-iconSmall",
      },
      {
        icon: "tooltipArrow",
        size: "small",
        // className: "h-[6px] w-[14px]",
        className: "h-iconXs w-iconSmall",
      },
      {
        icon: "account2",
        size: "small",
        className: "h-[10px] w-[10px]",
      },
      // MEDIUM ICONS
      {
        icon: ["chevronLeft2", "chevronDownSvg"],
        size: "medium",
        className: "h-[12px] w-[12px]",
      },
      // {
      //   icon: "account2",
      //   size: "medium",
      //   className: "h-[14px] w-[14px]",
      // },
      {
        icon: "menuSvg",
        size: "medium",
        className: "h-[8px] w-[18px]",
      },
      {
        icon: "tooltipArrow",
        size: "medium",
        className: "h-[8px] w-[18px]",
      },
      {
        icon: "logoCreators",
        size: "medium",
        className: "h-[48px] w-[48px]",
      },
      {
        icon: "logoMarketplace",
        size: "medium",
        className: "h-[48px] w-[48px]",
      },
      {
        icon: "logoSketch",
        size: "medium",
        className: "h-[48px] w-[48px]",
      },
      {
        icon: "logoStandard",
        size: "medium",
        className: "h-[48px] w-[48px]",
      },
      // LARGE ICONS
      {
        icon: ["chevronLeft2", "chevronDownSvg"],
        size: "large",
        className: "h-[11px] w-[11px]",
      },
      {
        icon: "account2",
        size: "large",
        className: "h-[12px] w-[12px]",
      },
      {
        icon: "menuSvg",
        size: "large",
        className: "h-[12px] w-[20px]",
      },
      {
        icon: "tooltipArrow",
        size: "large",
        className: "h-[12px] w-[20px]",
      },
      {
        icon: "logoCreators",
        size: "large",
        className: "h-[12px] w-[20px]",
      },
      {
        icon: "logoMarketplace",
        size: "large",
        className: "h-[48px] w-[48px]",
      },
      {
        icon: "logoSketch",
        size: "large",
        className: "h-[48px] w-[48px]",
      },
      {
        icon: "logoStandard",
        size: "large",
        className: "h-[48px] w-[48px]",
      },
    ],
  },
);

const numberClass = cva(
  [],
  {
    variants: {
      type: {
        primary: "body",
        outlined: "body",
        iconOnly: "body",
      },
    },
  },
)

const factory = () => {
  const Icon: FC<IconProps> = ({
    type,
    size = "medium",
    icon,
    number,
    align = "none",
    ...props
  }) => {
    const heroIconClasses = iconClass({
      type,
      size,
      align,
      icon: icon as "chevronLeft2" | "chevronDownSvg" | "menuSvg" | "account2" | "tooltipArrow" | "logoCreators" | "logoMarketplace" | "logoSketch" | "logoStandard" | "arrowRight",
    });
    const Component = iconList[icon];
    return (
      <>
        {number && (
          <Typography
            className={`mx-auto my-auto`}
            color={numberClass({
              type,
            })}
            tag={"h4"}
          >
            {number}
          </Typography>
        )}
        {!number && icon && (
          <Component className={heroIconClasses} {...props} />
        )}
      </>
    );
  };
  return Icon;
};
export const Icon = factory();
