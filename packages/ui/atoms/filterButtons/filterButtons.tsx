"use client"
import React from 'react'
import {Button} from "../index";
import {cls} from "../../assets/utils";
import {Grid} from "../grid/grid";
import {Select} from "../select/select";

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

  const handleChange = (selectValue: string) => {
    onChange(selectValue)
    resetFilters && resetFilters()
  }

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
        <Select
          defaultValue={selection}
          id={"filterButtons"}
          innerClassName={"border-surface-3 border-solid border-1"}
          onChange={handleChange}
          optionsList={buttons.map(button => {
            return {
              label: button.label,
              value: button.state
            }
          })}
          placeholder={""}
          rounded
          transition
          width={"full"}
        />
      </div>
    </>
  )
}