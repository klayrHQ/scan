import React from 'react';

interface TextFieldProps {
  primary?: boolean;
  className?: string;
  backgroundColor?: string;
  color?: string;
  placeholder: string;
  name: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onChange?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextField = ({
                         primary = false,
                         className,
                         backgroundColor,
                         color,
                         placeholder,
                         name,
                         size,
                         fullWidth,
                         ...props
                       }: TextFieldProps) => {
  const mode = primary ? '' : 'storybook-textField--secondary';
  return (
    <input
      type="text"
      className={[
        'rounded border-none block mt-2',
        className,
        fullWidth ? "w-full" : "",
        size === "large" ? "p-4" : size === "small" ? "p-2" : "p-3",
        primary ? "bg-background text-onBackground" : "",
        mode
      ].join(' ')}
      style={{ backgroundColor, color }}
      placeholder={placeholder}
      {...props}
    />
  );
};
