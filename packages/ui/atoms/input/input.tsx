import React from 'react';

interface InputProps {
  primary?: boolean;
  className?: string;
  backgroundColor?: string;
  color?: string;
  placeholder: string;
  name: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onChange?: () => void;
  type?: "text" | "number" | "email" | "password";
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  primary = false,
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
        'rounded border-none block mt-2',
        className,
        fullWidth ? "w-full" : "",
        size === "large" ? "p-4" : size === "small" ? "p-2" : "p-3",
        primary ? "bg-background text-onBackground" : "",
      ].join(' ')}
      style={{ backgroundColor, color }}
      placeholder={placeholder}
      {...props}
    />
  );
};
