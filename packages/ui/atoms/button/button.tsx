import React from 'react';

interface ButtonProps {
  primary?: boolean
  className?: string
  hover?: boolean
  active?: boolean
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
  backgroundColor,
  color,
  label,
  size,
  fullWidth,
  ...props
}: ButtonProps) => {

  return (
    <button
      type="button"
      className={[
        'cursor-pointer rounded',
        className,
        fullWidth ? "w-full" : "",
        size === "large" ? "p-4" : size === "small" ? "p-2" : "p-3",
        hover ? "bg-surface-1 text-onSurfaceHigh border-none" : "",
        primary ?
          active ? "bg-surface-1 text-onSurfaceHigh border-none" : "bg-primary text-onPrimary hover:bg-surface-1 hover:text-onSurfaceHigh border-none"
        :
          active ? "bg-primary text-onPrimary border-none" : !hover ? "bg-transparent text-onBackground border-primary border-2 border-solid hover:bg-primary hover:text-onPrimary" : "",
      ].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  );
};
