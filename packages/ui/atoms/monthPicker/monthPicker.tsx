import {FC} from "react"
import { MultiRangeSlider } from "../multiRangeSlider/multiRangeSlider";
import { ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import React from "react"
import {IconButton} from "../iconButton/iconButton";
import {cls} from "../../assets/utils";

interface MonthPickerProps {
  className?: string
  fromValue: number,
  setFromValue: (value: number) => void,
  toValue: number,
  setToValue: (value: number) => void,
  max?: number
  selectMonth: (month: string, year: number) => void,
  selectQuarter: (quarter: string, year: number) => void,
  selectYear: (year: number) => void,
  year1: number
  setYear1: (year: number) => void
  year2: number
  setYear2: (year: number) => void
  borderColor?: string
  borderWidth?: string
}

export const MonthPicker: FC<MonthPickerProps> = ({
  className,
  fromValue,
  toValue,
  setFromValue,
  setToValue,
  max = 24,
  selectMonth,
  selectQuarter,
  selectYear,
  year1,
  setYear1,
  year2,
  setYear2,
  borderColor= "surface-4",
  borderWidth,
}) => {

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const quarters = ["Q1", "Q2", "Q3", "Q4"]

  return (
    <div className={cls(["relative text-onSurfaceHigh", className])}>
      <div className={cls([
        borderColor ? `border-${borderColor}` : "",
        borderWidth ? `border-${borderWidth}` : "border-2",
        "flex flex-col border-r-0 border-b-0 border-solid",
        "border-collapse font-bold"
      ])}>
        <div className="grid" style={{gridTemplateColumns: "repeat(24,1fr)"}}>
          {months.map((month) => (
            <div
              onClick={() => selectMonth(month, year1)}
              key={`${month}-1`}
              className={cls([
                borderColor ? `border-${borderColor}` : "",
                borderWidth ? `border-${borderWidth}` : "border-2",
                "h-8 border-t-0 border-l-0 border-solid",
                "text-center flex items-center justify-center cursor-pointer"
              ])}
            >
              <span className="hidden md:inline">{month}</span>
              <span className="md:hidden">{month.substring(0, 1)}</span>
            </div>
          ))}
          {months.map((month) => (
            <div
              onClick={() => selectMonth(month, year2)}
              key={`${month}-2`}
              className={cls([
                borderColor ? `border-${borderColor}` : "",
                borderWidth ? `border-${borderWidth}` : "border-2",
                "h-8 border-t-0 border-l-0 border-solid",
                "text-center flex items-center justify-center cursor-pointer"
              ])}
            >
              <span className="hidden md:inline">{month}</span>
              <span className="md:hidden">{month.substring(0, 1)}</span>
            </div>
          ))}
        </div>
        <div className="grid h-8" style={{gridTemplateColumns: "repeat(8, 1fr)"}}>
          {quarters.map((quarter) => (
            <div
              onClick={() => selectQuarter(quarter, year1)}
              key={`${quarter}-1`}
              className={cls([
                borderColor ? `border-${borderColor}` : "",
                borderWidth ? `border-${borderWidth}` : "border-2",
                "border-t-0 border-l-0 border-solid",
                "text-center flex items-center justify-center cursor-pointer"
              ])}
            >
              <div className={"pointer"}>{quarter}</div>
            </div>
          ))}
          {quarters.map((quarter) => (
            <div
              onClick={() => selectQuarter(quarter, year2)}
              key={`${quarter}-2`}
              className={cls([
                borderColor ? `border-${borderColor}` : "",
                borderWidth ? `border-${borderWidth}` : "border-2",
                "border-t-0 border-l-0 border-solid",
                "text-center flex items-center justify-center cursor-pointer"
              ])}
            >
              {quarter}
            </div>
          ))}
        </div>
        <div className="grid h-8" style={{gridTemplateColumns: "repeat(2, 1fr)"}}>
          <div
            onClick={() => selectYear(year1)}
            className={cls([
              borderColor ? `border-${borderColor}` : "",
              borderWidth ? `border-${borderWidth}` : "border-2",
              "w-full text-center border-t-0 border-l-0 border-solid",
              "h-8 flex items-center justify-center cursor-pointer"
            ])}
          >
            <IconButton
              icon={"chevronLeft"}
              className="cursor-pointer relative z-10 h-full"
              color={"body"}
              onClick={() => {
                setYear1(year1 - 1)
              }}
              size={"small"}
              type={"iconOnly"}
            />
            {year1}
            <IconButton
              icon={"chevronRight"}
              className="cursor-pointer relative z-10 h-full"
              color={"body"}
              onClick={() => {
                setYear1(year1 + 1)
              }}
              disabled={year1 + 1 === year2}
              size={"small"}
              type={"iconOnly"}
            />
          </div>
          <div
            onClick={() => selectYear(year2)}
            className={cls([
              borderColor ? `border-${borderColor}` : "",
              borderWidth ? `border-${borderWidth}` : "border-2",
              "w-full text-center border-t-0 border-l-0 border-solid",
              "h-8 flex items-center justify-center cursor-pointer"
            ])}
          >
            <IconButton
              icon={"chevronLeft"}
              className="cursor-pointer relative z-10 h-full"
              color={"body"}
              onClick={() => {
                setYear2(year2 - 1)
              }}
              disabled={year2 - 1 === year1}
              size={"small"}
              type={"iconOnly"}
            />
            {year2}
            <IconButton
              icon={"chevronRight"}
              className="cursor-pointer relative z-10 h-full"
              color={"body"}
              onClick={() => {
                setYear2(year2 + 1)
              }}
              size={"small"}
              type={"iconOnly"}
            />
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <MultiRangeSlider
          fromValue={fromValue}
          toValue={toValue}
          min={0}
          max={max}
          className={"h-full monthPicker"}
          setFromValue={setFromValue}
          setToValue={setToValue}
          fillColor={"transparent"}
          fillClassName={"border-primary border-2 border-solid"}
          trackColor={"transparent"}
        />
      </div>
    </div>
  )
}
