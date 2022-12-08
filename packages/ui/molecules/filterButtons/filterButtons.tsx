import React from 'react'
import {Button} from "../../atoms";

export interface FilterButtonsProps {
  buttons: {
    label: string
    state: string
  }[]
  defaultState: string
  className?: string
  onChange(newState: string): void
  resetFilters?: Function
  selection: string
}

export const FilterButtons = ({
  buttons,
  onChange,
  resetFilters,
  defaultState,
  className,
  selection
}: FilterButtonsProps) => {
  return (
    <>
      <div className={[className, "hidden md:flex"].join(" ")}>
        {buttons && buttons.map((button) => (
          <Button
            key={`button-${button.state}`}
            className={[
              " md:mr-2 px-3 py-2",
              "w-1/2 md:max-w-max rounded",
              "text-sm font-medium",

              "cursor-pointer",
              selection === button.state
                ? "bg-menuButton text-white"
                : "text-onSurfaceHigh hover:bg-surface-1 hover:text-onSurfaceHigh",
            ].join(" ")}
            onClick={() => {
              onChange(button.state)
              resetFilters && resetFilters()
            }}
            label={button.label}
          />
        ))}
      </div>
      <div className={"block md:hidden w-app mx-auto"}>
        <select
          className="w-full rounded text-onSurfaceMedium border-none text-base"
          onChange={(e)=> {
            // @ts-ignore
            onChange(e.target.value)
            resetFilters && resetFilters()
          }}
        >
          {buttons && buttons.map(button => <option key={button.state} value={button.state}>{button.label}</option>)}
        </select> </div>
    </>
  )
}