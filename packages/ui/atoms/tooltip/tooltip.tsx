import {useRef, useState} from "react"
import React from 'react'
import {usePopper} from "react-popper"

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
}

export const Tooltip = ({
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
  const boxRef = useRef()
  const tooltipRef = useRef()
  const {styles, attributes} = usePopper(
    boxRef.current,
    tooltipRef.current,
    {
      placement: "top",
    }
  )

  return (
    <div
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      className={["relative " ,wrapperClassName].join(" ")}
      ref={boxRef.current}
    >
      {children}
      <div
        ref={tooltipRef.current}
        className={[
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
        >
          {label}
          <div
            className={[
              "w-0 h-0 border-solid border-background border-l-[10px] border-r-[10px] border-t-[13px] border-b-[0px] border-l-transparent border-r-transparent",
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
          >

          </div>
        </div>
      </div>
    </div>
  )
}