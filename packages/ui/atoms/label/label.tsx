import React from 'react';

interface LabelProps {
  primary?: boolean;
  className?: string;
  color?: string;
  label: string;
  name: string;
  children: any;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({
                            primary = false,
                            className,
                            color,
                            label,
                            name,
                            size,
                            children,
                            ...props
                          }: LabelProps) => {
  const mode = primary ? '' : 'storybook-label--secondary';
  return (
    <label
      className={[
        'rounded border-none',
        className,
        size === "large" ? "text-lg" : size === "small" ? "text-sm" : "",
        primary ? "text-primary" : "",
        mode
      ].join(' ')}
      style={{ color }}
      htmlFor={name}
      {...props}
    >
      {label}
      {children}
    </label>
  );
};
