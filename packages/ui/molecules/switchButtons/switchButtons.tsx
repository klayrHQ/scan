import React from 'react';
import {Typography} from "../../atoms/typography/typography";
import {Button} from "../../atoms/button/button";

interface SwitchButtonsProps {
  primary?: boolean
  className?: string
  buttons: Array<{label: string, onClick: () => void}>
  activeButton?: string
  size?: 'small' | 'medium' | 'large'
}

/**
 * Buttons for switching between options/modes/etc.
 */
export const SwitchButtons = ({
  primary = false,
  className,
  size,
  buttons = [
    {label: "Button 1", onClick: () => console.log("button 1 clicked")},
    {label: "Button 2", onClick: () => console.log("button 2 clicked")},
    {label: "Button 3", onClick: () => console.log("button 3 clicked")}
  ],
  activeButton,
  ...props
}: SwitchButtonsProps) => {
  const mode = primary ? '' : 'storybook-button--secondary';

  return (
    <div
      className={[
        "divider divide-x-[1px] divide-surface-6",
        className
      ].join(" ")}
      {...props}
    >
      {buttons && buttons[0] && buttons.map((button, i) => {
        return (
          <Button
            key={"switchButton-" + i}
            className={[
              'cursor-pointer border-none',
              i === 0 ? "rounded-l" : i === buttons.length - 1 ? "rounded-r" : "",
              primary ?
                (activeButton === button.label ? "bg-primary text-onPrimary" : "bg-surface-8 text-onSurfaceHigh hover:bg-primary hover:text-onPrimary")
              : (activeButton === button.label ? "bg-surface-5 text-onSurfaceHigh" : "bg-surface-3 text-onSurfaceHigh hover:bg-surface-5"),
              mode
            ].join(' ')}
            primary={activeButton === button.label}
            size={size}
            onClick={button.onClick}
            label={button.label}
            rounded={false}
          />
        )
      })}
    </div>
  );
};
