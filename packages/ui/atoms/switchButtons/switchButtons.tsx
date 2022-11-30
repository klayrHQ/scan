import React from 'react';

interface SwitchButtonsProps {
  primary?: boolean;
  className?: string;
  buttons: Array<{label: string, onClick: () => void}>;
  backgroundColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Buttons for switching between options/modes/etc.
 */
export const SwitchButtons = ({
  primary = false,
  className,
  backgroundColor,
  color,
  size,
  buttons = [
    {label: "Button 1", onClick: () => console.log("button 1 clicked")},
    {label: "Button 2", onClick: () => console.log("button 2 clicked")},
    {label: "Button 3", onClick: () => console.log("button 3 clicked")}
  ],
  ...props
}: SwitchButtonsProps) => {
  const mode = primary ? '' : 'storybook-button--secondary';
  return (
    <div
      className={className}
      {...props}
    >
      {buttons && buttons[0] && buttons.map((button, i) => {
        return (
          <button
            key={"switchButton-" + i}
            className={[
              'cursor-pointer border-none',
              i === 0 ? "rounded-l" : i === buttons.length - 1 ? "rounded-r" : "",
              size === "large" ? "p-4" : size === "small" ? "p-2" : "p-3",
              primary ? "bg-primary text-onPrimary" : "",
              mode
            ].join(' ')}
            style={{backgroundColor, color}}
            onClick={button.onClick}
          >
            {button.label}
          </button>
        )
      })}
    </div>
  );
};
