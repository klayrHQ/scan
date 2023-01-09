import React, {JSXElementConstructor, ReactElement, useRef, useState} from "react"
import Tippy from "@tippyjs/react"
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-toward.css';

export interface TooltipProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
  label: string
  placement?:
    "auto"
    | "auto-start"
    | "auto-end"
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "right"
    | "right-start"
    | "right-end"
    | "left"
    | "left-start"
    | "left-end"
  offset?: [skidding: number, distance: number]
  theme?: string
}

export const Tooltip = ({
  children,
  label,
  placement= "top",
  offset,
  theme
}: TooltipProps) => {
  return (
    <Tippy
      placement={placement}
      content={label}
      offset={offset}
      theme={theme || "liskscan"}
      animation={"shift-toward"}
    >
      {children}
    </Tippy>
  )
}