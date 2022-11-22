import React from 'react';
import {Label} from "../../atoms/label/label";
import {TextField} from "../../atoms/textfield/textField";

interface TextInputProps {
  primary?: boolean;
  className?: string;
  labelClassName?: string;
  fieldClassName?: string;
  backgroundColor?: string;
  color?: string;
  labelColor?: string;
  label: string;
  name: string;
  children: any;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onChange?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextInput = ({
  primary = false,
  className,
  fieldClassName,
  labelClassName,
  color,
  labelColor,
  backgroundColor,
  label,
  name,
  size,
  children,
  fullWidth,
  onChange,
  ...props
}: TextInputProps) => {
  const mode = primary ? '' : 'storybook-textInput--secondary';
  return (
    <div className={[
        className,
        fullWidth ? "w-full" : "",
        size === "large" ? "text-lg" : size === "small" ? "text-sm" : "",
        mode
      ].join(' ')}
      {...props}
    >
      <Label
        label={label}
        name={name}
        color={labelColor}
        primary={primary}
        size={size}
        className={labelClassName}
      >
        <TextField
          placeholder={label}
          name={name}
          color={color}
          backgroundColor={backgroundColor}
          primary={primary}
          size={size}
          className={fieldClassName}
          fullWidth={fullWidth}
          onChange={onChange}
        />
      </Label>
    </div>
  );
};
