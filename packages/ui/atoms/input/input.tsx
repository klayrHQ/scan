import React, { ChangeEventHandler } from 'react';
import {cls} from "../../assets/utils";
import {cva} from "class-variance-authority";

interface InputProps extends React.HTMLAttributes<HTMLInputElement>{
  disabled?: boolean
  error?: boolean
  className?: string
  placeholder?: string
  id?: string
  size?: 'small' | 'medium' | 'large'
  width?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  fieldType?: "text" | "number" | "email" | "password"
  autoComplete?: string
  value?: string | number
  styleType?: "primary" | "secondary" | "tertiary" | "transparent"
  step?: number | string
  min?: number | string
  max?: number | string
  maxLength?: number
}

const inputCVA = cva(
  [
    "block border-none focus:outline-none",
  ],
  {
    variants: {
      styleType: {
        primary: "bg-background text-onBackground rounded",
        secondary: "bg-background text-onBackground rounded",
        tertiary: "bg-surface-3 text-onSurfaceLow placeholder-onSurfaceLow rounded-md",
        transparent: "bg-transparent",
      },
      size: {
        small: "p-2",
        medium: "p-3",
        large: "p-4",
      },
      error: {
        true: "outline-error outline-2 outline",
      },
      disabled: {
        true: "bg-background text-surface-8",
      }
    },
  },
)

export const Input = ({
  disabled,
  error,
  className,
  placeholder,
  id,
  size = "medium",
  width,
  fieldType = "text",
  styleType = "primary",
  ...props
 }: InputProps) => {
  return (
    <input
      type={fieldType}
      className={inputCVA({
        styleType,
        size,
        error,
        disabled,
        className: cls([
          className,
          width ? `w-${width}` : "",
        ])
      })}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  );
};
