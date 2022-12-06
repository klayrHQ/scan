import { useState } from "react"
import React from 'react'

export interface TooltipProps {
  label: string
  positionBottom?: boolean
  className?: string
  outerClassName?: string
  wrapperClassName?: string
  positionTop?: boolean
  positionLeft?: boolean
  positionRight?: boolean
  children: any
  color?: string
  backgroundColor?: string
}

export const Tooltip = ({
  color,
  backgroundColor,
  positionTop,
  className,
  children,
  label,
  positionBottom,
  positionLeft,
  positionRight,
  outerClassName,
  wrapperClassName
}: TooltipProps) => {
  const [visibility, setVisibility] = useState(false)

  return (
    <div
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      className={["relative " ,wrapperClassName].join(" ")}
    >
      {children}
      <div className={[
        "absolute",
        positionRight
          ? "left-0"
          : positionLeft
            ? "right-0"
            : "left-[50%]",
        outerClassName
      ].join(" ")}
      >
        <div
          className={[
            visibility ? "inline-block" : "hidden",
            "relative mx-auto bg-background text-onSurfaceHigh",
            "max-w-sm p-2 px-4 text-base text-center rounded",
            "shadow-lg z-50 flex place-self-auto w-max",
            positionBottom
              ? "flex place-self-auto mt-2 top-0"
              : positionTop
                ? "flex place-self-auto -mt-14 -top-3"
                : "-mt-14 -top-3",
            positionRight
              ? "-left-2"
              : positionLeft
                ? "-right-4"
                : "left-[-50%]",
            className,
          ].join(" ")}
          style={{color,backgroundColor}}
        >
          {label}
          <div
            className={[
              "w-0 h-0 border-background border-l-[10px] border-r-[10px] border-t-[13px] border-b-[0px] border-l-transparent border-r-transparent",
              "absolute z-[-1] mx-auto",
              positionBottom
                ? "-top-[13px] rotate-180"
                : "-bottom-[13px] drop-shadow-lg",
              positionRight
                ? "left-6"
                : positionLeft
                  ? "right-6"
                  : "left-0 right-0",
            ].join(" ")}
            style={{ borderTopColor: backgroundColor || "", zIndex: "-1", borderLeft: "10px", borderRight: "10px", borderTop: "13px", borderBottom: "0px", borderLeftColor: "transparent", borderRightColor: "transparent", top: "-13px", borderStyle: "solid"}}
          >

          </div>
        </div>
      </div>
    </div>
  )
}