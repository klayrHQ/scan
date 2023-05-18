import React, { FC, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { Icon } from "../icon/icon";
import { iconVariants } from "../../types";
import {cls} from "../../assets/utils";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  type?:
    | "primary"
    | "outlined"
    | "iconOnly"
  icon: iconVariants;
  backgroundColor?: string;
  color?: string;
  align?: "left" | "center" | "right";
  size?: "xs" | "small" | "medium" | "large" | "number" | "input" | "auto";
  fullWidth?: boolean;
  label?: string;
  onClick?: () => void;
  number?: string | number;
  rounded?: boolean;
  disabled?: boolean;
  toggle?: boolean;
}

const iconClass = cva(
  ["aspect-square","flex", "align-middle", "items-center", "text-center", "cursor-pointer"],
  {
    variants: {
      type: {
        primary:
          "text-onPrimary bg-primary justify-items-center",
        outlined:
          "text-buttonSecondaryText border-2 border-surface-4 text-surface-5 border-solid hover:text-primary hover:bg-opacity-30",
        iconOnly: 
          "text-buttonSecondaryText hover:bg-opacity-30",
      },
      size: {
        xs: "h-iconXs w-iconXs",
        small: "h-7 w-7",
        medium: "h-10 w-10",
        large: "h-16 w-16",
        number: "h-iconNumber w-iconNumber",
        input: "h-inputField w-inputField",
        auto: "h-auto w-auto",
      },
      rounded: {
        true: "",
      },
    },
    compoundVariants: [
      {
        size: "xs",
        rounded: true,
        className: "rounded-small",
      },
      {
        size: "small",
        rounded: true,
        className: "rounded-small",
      },
      {
        size: "medium",
        rounded: true,
        className: "rounded-medium",
      },
      {
        size: "large",
        rounded: true,
        className: "rounded-medium",
      },
      {
        size: "number",
        rounded: true,
        className: "rounded-small",
      },
      {
        size: "input",
        rounded: true,
        className: "rounded-medium",
      },
    ],
  },
);

export const IconButton: FC<IconProps> = ({
  className,
  type = "primary",
  size= "medium",
  rounded = true,
  icon,
  number,
  color,
  ...props
}) => (
  <span
    className={iconClass({
      type,
      size,
      rounded,
      className: cls([
        className,
        color && `text-${color}`,
      ]),
    })}
    {...props}
  >
    <Icon icon={icon} number={number} type={type} color={color} />
  </span>
);
