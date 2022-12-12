import React from 'react';

interface ButtonProps {
  primary?: boolean
  className?: string
  hover?: boolean
  active?: boolean
  disabled?: boolean
  backgroundColor?: string
  color?: string
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
  backgroundColor,
  color,
  label,
  size,
  fullWidth,
  ...props
}: ButtonProps) => {

  let styling = "bg-primary text-onPrimary border-primary hover:border-surface-1 hover:bg-surface-1 hover:text-onSurfaceHigh"

  if(primary) {
    if(hover) styling = "bg-surface-1 border-surface-1  text-onSurfaceHigh"
    if(active) styling = "bg-surface-1 border-surface-1 text-onSurfaceHigh"
  } else {
    styling = "bg-transparent text-onBackground border-primary hover:bg-primary hover:text-onPrimary"
    if(hover) styling = "bg-primary text-onPrimary border-primary"
    if(active) styling = "bg-primary text-onPrimary border-primary"
  }
  if(disabled) styling = "bg-surface-3 border-surface-3 text-surface-8"

  return (
    <button
      type="button"
      className={[
        'cursor-pointer rounded border-2 border-solid',
        className,
        fullWidth ? "w-full" : "",
        size === "large" ? "p-4" : size === "small" ? "p-2" : "p-3",
        styling,
      ].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
