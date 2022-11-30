import React from 'react';

interface HighlightProps {
  primary?: boolean;
  className?: string;
  backgroundColor?: string;
  color?: string;
  children: any;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Highlight = ({
  primary = false,
  className,
  backgroundColor,
  color,
  size,
  children,
  ...props
}: HighlightProps) => {
  const mode = primary ? '' : 'storybook-label--secondary';
  return (
    <div
      className={[
        'rounded border-none p-2 w-max',
        className,
        size === "large" ? "text-lg" : size === "small" ? "text-sm p-1" : "",
        primary ? "bg-primary text-onPrimary" : "",
        mode
      ].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {children}
    </div>
  );
};
