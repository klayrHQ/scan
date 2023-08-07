import React from 'react'
import {Button} from "../index";
import {cls} from "../../assets/utils";
import {Grid} from "../grid/grid";

export interface FilterButtonsProps {
  buttons: Array<{ label: string, state: string }>
  className?: string
  onChange: (newState: string) => void
  resetFilters?: Function
  selection: string
}

export const FilterButtons = ({
  buttons,
  onChange,
  resetFilters,
  className,
  selection,
}: FilterButtonsProps) => {
  return (
    <>
      <Grid flex className={cls([className, "hidden md:flex gap-1"])} columns={2} gap={1}>
        {buttons && buttons.map((button) => (
          <Button
            active={selection === button.state}
            hover
            key={`button-${button.state}`}
            onClick={() => {
              onChange(button.state)
              resetFilters && resetFilters()
            }}
            size={"small"}
            label={button.label}
            type={"tabButton"}
          />
        ))}
      </Grid>
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