import React from 'react';
import {Typography} from "../typography/typography";
import {Button} from "../button/button";
import {cls} from "../../assets/utils";
import {cva} from "class-variance-authority";

interface SwitchButtonsProps {
  type?: "primary" | "secondary"
  className?: string
  buttons: Array<{label: string, onClick: () => void, className?: string}>
  activeButton?: string
  size?: 'small' | 'medium' | 'large'
}

const buttonCVA = cva(
  [
    "cursor-pointer border-none",
  ],
  {
    variants: {
      type: {
        primary: "hover:bg-primary hover:text-onPrimary",
        secondary: "hover:bg-surface-5",
      },
      size: {
        small: "py-1 px-2",
        medium: "p-2",
        large: "p-3",
      },
      active: {
        true: "",
        false: "",
      }
    },
    compoundVariants: [
      {
        type: "primary",
        active: true,
        className: "bg-primary text-onPrimary",
      },
      {
        type: "primary",
        active: false,
        className: "bg-surface-8 text-onSurfaceHigh",
      },
      {
        type: "secondary",
        active: true,
        className: "bg-surface-5 text-onSurfaceHigh",
      },
      {
        type: "secondary",
        active: false,
        className: "bg-surface-3 text-onSurfaceHigh",
      },
    ],
  },
)

export const SwitchButtons = ({
  type = "secondary",
  className,
  size = "medium",
  buttons,
  activeButton,
}: SwitchButtonsProps) => {

  return (
    <div
      className={cls([
        "divider divide-x-[1px] divide-surface-6",
        className
      ])}
    >
      {buttons && buttons[0] && buttons.map((button, i) => {
        return (
          <button
            key={"switchButton-" + i}
            className={buttonCVA({
              size,
              type,
              active: activeButton?.toLowerCase() === button.label.toLowerCase(),
              className: cls([
                i === 0 && "rounded-l-xl",
                i === buttons.length - 1 && "rounded-r-xl",
                button.className,
              ])
            })}
            onClick={button.onClick}
          >
            <Typography
              tag={"span"}
              size={size === "small" ? "subBody" : size === "large" ? "Heading5" : "body"}
            >
              {button.label}
            </Typography>
          </button>
        )
      })}
    </div>
  );
};
