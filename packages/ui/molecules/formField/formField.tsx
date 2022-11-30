import React from 'react';
import {Label} from "../../atoms/label/label";
import {Input} from "../../atoms/input/input";

interface FormFieldProps {
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
export const FormField = ({
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
}: FormFieldProps) => {
  return (
    <div className={[
        className,
        fullWidth ? "w-full" : "",
        size === "large" ? "text-lg" : size === "small" ? "text-sm" : "",
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
        <Input
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
