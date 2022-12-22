import React from 'react';
import {Label} from "../../atoms/label/label";
import {Input} from "../../atoms/input/input";

interface FormFieldProps {
  className?: string;
  labelClassName?: string;
  fieldClassName?: string;
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
  className,
  fieldClassName,
  labelClassName,
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
        size={size}
        className={labelClassName}
      >
        <Input
          placeholder={label}
          name={name}
          size={size}
          className={fieldClassName}
          fullWidth={fullWidth}
          onChange={onChange}
        />
      </Label>
    </div>
  );
};
