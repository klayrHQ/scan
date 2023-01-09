import React from 'react';
import {Typography} from "../typography/typography";

interface ButtonProps {
  primary?: boolean
  className?: string
  hover?: boolean
  active?: boolean
  disabled?: boolean
  rounded?: boolean
  label: string
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  className,
  hover,
  active,
  disabled,
  rounded = true,
  label,
  size,
  fullWidth,
  ...props
}: ButtonProps) => {

  let styling = "bg-primary text-onPrimary border-primary"

  if(primary) {
    if(hover) styling += " hover:border-surface-1 hover:bg-surface-1 hover:text-onSurfaceHigh"
    if(active) styling = "bg-surface-1 border-surface-1 text-onSurfaceHigh"
  } else {
    styling = "bg-transparent text-onBackground border-primary"
    if(hover) styling += " hover:bg-primary hover:text-onPrimary"
    if(active) styling = "bg-primary text-onPrimary border-primary"
  }
  if(disabled) styling = "bg-surface-3 border-surface-3 text-surface-8"

  return (
    <Typography
      tag={"button"}
      className={[
        'cursor-pointer border-2 border-solid',
        rounded ? "rounded" : "",
        className,
        fullWidth ? "w-full" : "",
        size === "large" ? "px-4 py-3" : size === "small" ? "px-2 py-1" : "px-3 py-2",
        styling,
      ].join(' ')}
      {...props}
      disabled={disabled}
    >
      {label}
    </Typography>
  );
};
