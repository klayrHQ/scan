import React from 'react';
import {Typography} from "../typography/typography";
import {cva} from "class-variance-authority";
import {cls} from "../../assets/utils";

interface ButtonProps {
  type?: "primary" | "secondary" | "transparent"
  className?: string
  hover?: boolean
  active?: boolean
  disabled?: boolean
  rounded?: boolean
  label: string | any
  size?: 'small' | 'medium' | 'large'
  width?: string
  onClick?: () => void
  children?: any
}

const buttonCVA = cva(
  [
    "cursor-pointer border-2 border-solid box-border",
  ],
  {
    variants: {
      type: {
        primary: "bg-primary text-onPrimary border-primary",
        secondary: "bg-secondary text-onSecondary border-secondary",
        transparent: "bg-transparent text-onSurfaceHigh border-transparent",
      },
      size: {
        small: "px-2 py-1",
        medium: "px-3 py-2",
        large: "px-4 py-3",
      },
      rounded: {
        true: "rounded",
      },
      hover: {
        true: "hover:border-2",
      },
      active: {
        true: "bg-surface-1 border-surface-1 text-onSurfaceHigh",
      },
      disabled: {
        true: "bg-surface-3 border-surface-3 text-surface-8",
      }
    },
    compoundVariants: [
      {
        type: "primary",
        hover: true,
        className: "hover:border-surface-1 hover:bg-surface-1 hover:text-onSurfaceHigh",
      },
      {
        type: "secondary",
        hover: true,
        className: "hover:border-surface-1 hover:bg-surface-1 hover:text-onSurfaceHigh",
      },
      {
        type: "transparent",
        hover: true,
        className: "hover:border-primary hover:text-onSurfaceHigh",
      },
      {
        type: "primary",
        active: true,
        className: "bg-surface-1 border-surface-1 text-onSurfaceHigh",
      },
      {
        type: "secondary",
        active: true,
        className: "bg-surface-1 border-surface-1 text-onSurfaceHigh",
      },
      {
        type: "transparent",
        active: true,
        className: "bg-primary text-onPrimary border-primary",
      },
    ],
  },
)

export const Button = ({
  type = "primary",
  className,
  hover,
  active,
  disabled,
  rounded = true,
  label,
  size = "medium",
  width,
  children,
  ...props
}: ButtonProps) => {
  return (
    <div
      className={buttonCVA({
        type,
        rounded,
        active,
        hover,
        disabled,
        size,
        className: cls([
          className,
          width ? `w-${width}` : "",
        ]),
      })}
      {...props}
    >
      <Typography
        className={"block"}
        tag={"span"}
      >
        {label}
        {children}
      </Typography>
    </div>
  );
};
