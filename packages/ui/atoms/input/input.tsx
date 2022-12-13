import React from 'react';

interface InputProps {
  disabled?: boolean
  error?: boolean
  className?: string
  backgroundColor?: string
  color?: string
  placeholder: string
  name: string
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  onChange?: () => void
  type?: "text" | "number" | "email" | "password"
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  disabled,
  error,
  className,
  backgroundColor,
  color,
  placeholder,
  name,
  size,
  fullWidth,
  type = "text",
  ...props
 }: InputProps) => {
  return (
    <input
      type={type}
      className={[
        'rounded block border-none mt-2 bg-background text-onBackground',
        className,
        fullWidth ? "w-full" : "",
        size === "large" ? "p-4" : size === "small" ? "p-2" : "p-3",
        error ? "outline-error outline-2 outline" : "",
        disabled ? "bg-background text-surface-8" : "",
      ].join(' ')}
      style={{ backgroundColor, color }}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  );
};
