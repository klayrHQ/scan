"use client"

import React, {cloneElement, FC, ReactElement, ReactNode, useState} from "react";
import { cva } from "class-variance-authority";
import { nanoid } from "nanoid";
import {Grid, Typography} from "../..";
import {cls} from "../../utils";
import {Icon} from "../icon/icon";

interface SelectProps
  // extends React.DetailedHTMLProps<
  //   React.SelectHTMLAttributes<HTMLSelectElement>,
  //   HTMLSelectElement
  // >
{
  id: string;
  defaultValue?: string;
  className?: string;
  innerClassName?: string;
  placeholder: string | ReactNode;
  placeholderActive?: string | ReactNode;
  optionsList: Array<{label?: string, value: string}>;
  onChange: (value: string) => void;
  transition?: boolean;
  type?: "base" | "assetSorting";
  width?: string;
  listWidth?: string;
  listOrigin?: "right" | "left";
  textAlign?: "left" | "center" | "right";
  openButton?: ReactElement;
  icon?: boolean;
  rounded?: boolean;
  zIndex?: string;
}

const options = cva(
  [
    "box-border flex flex-col border-none shadow-xl",
  ],
  {
    variants: {
      transition: {
        true: "px-2 transition-all duration-300",
        false: "p-2 max-h-72 overflow-y-auto",
      },
      textAlign: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      }
    },
  },
)

export const Select: FC<SelectProps> = ({
  id,
  defaultValue,
  className,
  innerClassName,
  placeholder,
  placeholderActive,
  optionsList = [],
  onChange,
  transition = false,
  type= "base",
  width,
  listWidth,
  listOrigin,
  textAlign= "left",
  openButton,
  icon = true,
  rounded,
  zIndex,
}) => {
  const [currentValue, setCurrentValue] = useState<{ label?: string, value: string } | undefined>(optionsList.find(option => option.value === defaultValue));
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prev => !prev);
  }

  const handleChange = (value: { label?: string, value: string }) => {
    setCurrentValue(value);
    // call method, if it exists
    if (onChange) onChange(value.value);
    // close, after all tasks are finished
    toggleOpen();
  };

  const values = optionsList.map(value => (
    <div
      className={cls([
        value.value === currentValue?.value ? "text-primary" : "",
        "w-full my-1 py-1 px-2 rounded-xs cursor-pointer outline-none",
        type === "assetSorting" ? "hover:bg-surface-3 hover:text-surface-4" : "hover:bg-surface-1",
      ])}
      key={`${value}: ${nanoid()}`}
      onClick={() => handleChange(value)}
    >
      <Typography
        bold
        className={`overflow-clip`}
        color={value === currentValue ? "bg-primary" : "current"}
        tag={"span"}
      >
        {value.label || value.value}
      </Typography>
    </div>
  ))

  return (
    <div
      className={cls(
      ["h-10 m-0 relative",
        width ? `w-${width}` : "w-52",
        className,
      ])}
      id={id}
    >
      <div className={cls([
        "absolute inset-0 h-max bg-background",
        rounded ? `rounded-md` : "",
        innerClassName,
        zIndex ? `z-${zIndex}` : "z-30",
      ])}>
        {
          openButton ?
          cloneElement(openButton, {
            onClick: toggleOpen,
          })
          :
          <button
            className={"w-full cursor-pointer px-4 py-2 bg-transparent border-none"}
            onClick={toggleOpen}
            //style={{ transition: "0.3s ease", }}
          >
            <Grid
              className={"justify-between items-center w-full max-h-10 border-surface-4"}
              columns={3}
              flex
              gap={2}
              mobileColumns={3}
            >
              <Typography
                align={"center"}
                bold
                className={`pt-0.5 max-h-10 overflow-hidden capitalize ${!currentValue ? "opacity-high" : ""}`}
                color={"current"}
                tag={"span"}
              >
                {
                  typeof placeholder === "string" ?
                    currentValue ? currentValue.label : placeholder :
                    currentValue ? placeholderActive : placeholder
                }
              </Typography>

              {
                icon &&
                <Icon
                  className={cls([
                    "text-current h-4 w-4",
                    transition ? `transition-transform duration-200 ${open ? "rotate-180" : ""}` : "",
                  ])}
                  icon={"chevronDown"}
                  size={"xs"}
                />
              }
            </Grid>
          </button>
        }

        <div
          className={options({
            className: cls([
              transition ? (open ? "max-h-72 overflow-y-hidden py-2" : "max-h-0 overflow-hidden py-0 border-none")
                : (open ? "visible" : "hidden"),
              listWidth ? `w-${listWidth}` : "w-full",
              listOrigin && `absolute ${listOrigin}-0 z-50 bg-background`,
            ]),
            transition,
            textAlign,
          })}
        >
          {values}
        </div>
      </div>
    </div>
  );

};