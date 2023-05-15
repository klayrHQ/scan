import React, {FC, useEffect, useRef, useState} from "react"
import { MultiRangeSlider } from "../multiRangeSlider/multiRangeSlider";
import {Button} from "../button/button";
import {SwitchButtons} from "../switchButtons/switchButtons";
import {Typography} from "../typography/typography";
import {Grid} from "../grid/grid";
import {cls} from "../../assets/utils";

interface AmountFilterProps {
  title?: string,
  className?: string,
  buttons: number[],
  filters: {
    amountFilters?: {from: number | null | undefined, to: number | null | undefined} | undefined
  } | undefined,
  setFilters: React.Dispatch<React.SetStateAction<{amountFilters?: {from: number | null | undefined, to: number | null | undefined}} | undefined>>,
  filterModes: {amountFilter?:"buttons" | "slider" | "range"} | undefined,
  setFilterModes: React.Dispatch<React.SetStateAction<{amountFilter?: "buttons" | "slider" | "range"} | undefined>>,
  fromValue: number,
  setFromValue: (value: number) => void,
  toValue: number,
  setToValue: (value: number) => void,
  max?: number,
  validInput: boolean,
  setValidInput: (valid: boolean) => void
}

export const AmountFilter: FC<AmountFilterProps> = ({
  title,
  className,
  buttons,
  filters,
  setFilters,
  filterModes,
  setFilterModes,
  fromValue,
  setFromValue,
  toValue,
  setToValue,
  max = 10_000_000,
  validInput,
  setValidInput,
}) => {

  const setAmounts = (from?: number, to?: number) => {
    from && setFromValue(from)
    to && setToValue(to)
  }

  return (
    <Grid
      flex
      className={cls(["gap-4", className])}
    >
      <Typography tag={"h2"}>{title || "Amount"}</Typography>
      <SwitchButtons
        activeButton={filterModes?.amountFilter}
        buttons={[
          {
            label: "Buttons",
            onClick: () => setFilterModes(previousModes => ({
              ...previousModes,
              amountFilter: "buttons"
            })),
          },
          {
            label: "Slider",
            onClick: () => setFilterModes(previousModes => ({
              ...previousModes,
              amountFilter: "slider"
            })),
            className: "hidden md:inline",
          },
          {
            label: "Range",
            onClick: () => setFilterModes(previousModes => ({
              ...previousModes,
              amountFilter: "range"
            })),
          },
        ]}
        size={"small"}
      />
      <div>
        { filterModes?.amountFilter === "buttons" &&
          <div className="grid grid-cols-2 lg:flex flex-wrap justify-left gap-5 ">
            {buttons.map((button) => {
              return (
                <div className="w-full lg:w-max" key={`button-${button}`}>
                  <Button
                    active={button === filters?.amountFilters?.from}
                    hover
                    label={"> " + Number(button).toLocaleString("en-US") + " LSK"}
                    onClick={() => setAmounts(button, undefined)}
                    type={"tertiary"}
                  />
                </div>
              )
            })}
          </div>
        }
        { filterModes?.amountFilter === "slider" &&
          <div className={`hidden md:block`}>
            <div className="flex gap-4 w-full">
              <MultiRangeSlider
                className="w-full h-4"
                trackClassName="bg-surface-2"
                min={0}
                max={max}
                setFromValue={setFromValue}
                setToValue={setToValue}
                fromValue={fromValue || 0}
                toValue={toValue || 0}
                steps={1000}
              />
            </div>
            <div className="text-center mt-3">{fromValue.toLocaleString("en-US") + " - " + toValue.toLocaleString("en-US")}</div>
          </div>
        }
        { filterModes?.amountFilter === "range" &&
          <div className="flex justify-left gap-5">
            <div>
              <p>From amount:</p>
              <input
                className={`block w-full pl-3 pr-3 py-2 border border-transparent rounded-md text-base leading-5 bg-surface-3 text-onSurfaceLow placeholder-onSurfaceLow focus:outline-none focus:bg-surface-3 focus:border-surface-2 focus:ring-surface-2 focus:text-onSurfaceLight ${!validInput && "border-red focus:border-red"}`}
                step="any"
                min="0"
                type="number"
                onFocus={(e) => e.target.select()}
                onBlur={(e) => {
                  if (filters?.amountFilters && filters?.amountFilters?.to && parseFloat(e.target.value) > filters?.amountFilters?.to) {
                    setFilters(previousFilters => ({
                      ...previousFilters,
                      amountFilters: {from: 0, to: previousFilters?.amountFilters?.to}
                    }))
                    setValidInput(true)
                  }
                }}
                onChange={
                  (e) => {
                    const re = /^[0-9\b\d+\.?\d*^$]+$/;
                    let textValue = e.target.value
                    filters?.amountFilters?.to && parseFloat(e.target.value) > filters?.amountFilters?.to ?
                      setValidInput(false) :
                      setValidInput(true)

                    setFilters(previousFilters => ({
                      ...previousFilters,
                      amountFilters: {
                        from: re.test(textValue) ? parseFloat(textValue) : textValue === "0" ? 0 : null,
                        to: previousFilters?.amountFilters?.to
                      }
                    }))
                  }
                }
                value={
                  filters?.amountFilters?.from ? filters?.amountFilters?.from : filters?.amountFilters?.from === 0 ? 0 : " "
                }
              />
            </div>
            <div>
              <p>To amount:</p>
              <input
                className={`block w-full pl-3 pr-3 py-2 border border-transparent rounded-md text-base leading-5 bg-surface-3 text-onSurfaceHigh placeholder-onSurfaceLow focus:outline-none focus:bg-surface-3 focus:border-surface-2 focus:ring-surface-2 focus:text-onSurfaceLight ${!validInput && "border-red focus:border-red"}`}
                step="any"
                min="0"
                type="number"
                onFocus={(e) => e.target.select()}
                onBlur={(e) => {
                  if (filters?.amountFilters?.from && parseFloat(e.target.value) < filters?.amountFilters?.from) {
                    setFilters(previousFilters => ({
                      ...previousFilters,
                      amountFilters: {from: previousFilters?.amountFilters?.from, to: 0}
                    }))
                    setValidInput(true)
                  }
                }}
                onChange={
                  (e) => {
                    const re = /^[0-9\b\d+\.?\d*^$]+$/;
                    let textValue = e.target.value
                    filters?.amountFilters?.from && parseFloat(e.target.value) < filters?.amountFilters?.from ?
                      setValidInput(false) :
                      setValidInput(true)

                    setFilters(previousFilters => ({
                      ...previousFilters,
                      amountFilters: {
                        from: previousFilters?.amountFilters?.from,
                        to: re.test(textValue) ? parseFloat(textValue) : textValue === "0" ? 0 : null
                      }
                    }))
                  }
                }
                value={filters?.amountFilters?.to ? filters?.amountFilters?.to : filters?.amountFilters?.to === 0 ? 0 : " "}
              />
            </div>
          </div>
        }
      </div>
    </Grid>
  )
}
