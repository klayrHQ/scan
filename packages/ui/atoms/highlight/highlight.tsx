import React from 'react';

interface HighlightProps {
  primary?: boolean;
  className?: string;
  children: any;
  size?: 'small' | 'medium' | 'large';
  width?: string
}

/**
 * Primary UI component for user interaction
 */
export const Highlight = ({
  primary = false,
  className,
  size,
  width,
  children,
  ...props
}: HighlightProps) => {
  const mode = primary ? '' : 'storybook-label--secondary';
  return (
    <div
      className={[
        'rounded border-none p-2',
        className,
        size === "large" ? "text-lg" : size === "small" ? "text-sm p-1" : "",
        primary ? "bg-primary text-onPrimaryHigh" : "",
        width ? `w-${width}` : "w-max",
        mode
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};
