import {FC, useEffect, useRef, useState} from "react"
import { MultiRangeSlider } from "../multiRangeSlider/multiRangeSlider";
import { ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import React from "react"

export const MonthPicker: FC<{
  filters: {
    dateFilters?: {from: Date | null | undefined, to: Date | null | undefined} | undefined
  } | undefined,
  setFilters: React.Dispatch<React.SetStateAction<{} | undefined>>,
  fromValue: number,
  toValue: number,
  setFromValue: any,
  setToValue: any,
  resetRef: any,
  conditionalRef?: any,
}> = ({
        filters,
        setFilters,
        fromValue,
        toValue,
        setFromValue,
        setToValue,
        resetRef,
        conditionalRef,
      }) => {
  const max = 24
  const firstUpdate = useRef(true)
  const updateYear = useRef(false)

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
  const [year, setYear] = useState<number>(new Date().getFullYear() - 1)
  const [year2, setYear2] = useState<number>(new Date().getFullYear())
  const getThumbNumber = (fromDate: Date, toDate: Date) => {
    setFromValue(
      fromDate.getFullYear() === year
        ? fromDate.getMonth()
        : 12 + fromDate.getMonth(),
    )
    setToValue(
      toDate.getFullYear() === year
        ? toDate.getMonth() + 1
        : 12 + toDate.getMonth() + 1,
    )
  }
  const getYear = (value: number) => (value < 12 ? year : year2)
  const getMonth = (value: number, modulo = 12) => value % modulo
  const getToMonth = (value: number) =>
    getMonth(value, 13) + Math.floor((value - 1) / 12)
  const getMonthDays = (value: number) =>
    new Date(getYear(value - 1), getMonth(value), 0).getDate()
  const getMonthDaysByDate = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  useEffect(() => {
    if (firstUpdate.current && !filters?.dateFilters?.from && !filters?.dateFilters?.to) {
      firstUpdate.current = false
      fromValue && setFromValue(fromValue)
      toValue && setToValue(toValue)
      return
    }

    if(resetRef.current) {
      resetRef.current = false
      if(updateYear.current) {
        setFilters(previousFilters => ({
          ...previousFilters,
          dateFilters: {
            from: new Date(`${getYear(fromValue)}-${getMonth(fromValue) + 1}-01 00:00:00`),
            to: new Date(
              `${getYear(toValue - 1)}-${getToMonth(toValue)}-${getMonthDays(
                toValue,
              )} 23:59:59`)
          }
        }))
        return
      }
      filters?.dateFilters?.from && setFromValue(fromValue)
      filters?.dateFilters?.to && setToValue(toValue)
      return
    }

    if(conditionalRef.current) {
      conditionalRef.current = false
      return
    }

    setFilters(previousFilters => ({
      ...previousFilters,
      dateFilters: {
        from: new Date(`${getYear(fromValue)}-${getMonth(fromValue) + 1}-01 00:00:00`),
        to: new Date(
          `${getYear(toValue - 1)}-${getToMonth(toValue)}-${getMonthDays(
            toValue,
          )} 23:59:59`)
      }
    }))

  }, [fromValue, toValue, year, year2])

  useEffect(() => {
    if(updateYear.current) {
      updateYear.current = false
    } else {
      filters?.dateFilters?.from && filters?.dateFilters?.to && getThumbNumber(filters?.dateFilters?.from, filters?.dateFilters?.to)
    }

    /*filters?.dateFilters?.from && filters?.dateFilters?.to && getThumbNumber(filters?.dateFilters?.from, filters?.dateFilters?.to)*/
  }, [filters?.dateFilters?.from, filters?.dateFilters?.to])

  const selectYear = (y: number) => {
    setFilters(previousFilters => ({
      ...previousFilters,
      dateFilters: {
        from: new Date(`${y}-1-01 00:00:00`),
        to: new Date(`${y}-12-31 23:59:59`),
      }
    }))
  }

  const selectQuarter = (q: string, y: number) => {
    const quarter = quarters.indexOf(q)
    const fromMonth = quarter * 3
    const toMonth = quarter * 3 + 3
    setFilters(previousFilters => ({
      ...previousFilters,
      dateFilters: {
        from: new Date(`${y}-${fromMonth + 1}-01 00:00:00`),
        to: new Date(
          `${y}-${toMonth}-${getMonthDaysByDate(
            new Date(`${y}-${toMonth}-01`),
          )} 23:59:59`),
      }
    }))
  }

  const selectMonth = (m: string, y: number) => {
    const month = months.indexOf(m)
    setFilters(previousFilters => ({
      ...previousFilters,
      dateFilters: {
        from: new Date(`${y}-${month + 1}-01 00:00:00`),
        to: new Date(
          `${y}-${month + 1}-${getMonthDaysByDate(
            new Date(`${y}-${month + 1}-01`),
          )} 23:59:59`),
      }
    }))
  }

  return (
    <div className="relative text-onSurfaceHigh">
      <table className="flex flex-col border-[1px] border-collapse font-bold">
        <tbody>
        <tr className="flex">
          {months.map((month) => (
            <td
              onClick={() => selectMonth(month, year)}
              key={`${month}-1`}
              className="w-[8.35%] h-8 border-[1px] text-center flex items-center justify-center cursor-pointer"
            >
              <span className="hidden md:inline">{month}</span>
              <span className="md:hidden">{month.substring(0, 1)}</span>
            </td>
          ))}
          {months.map((month) => (
            <td
              onClick={() => selectMonth(month, year2)}
              key={`${month}-2`}
              className="w-[8.35%] h-8 border-[1px] text-center flex items-center justify-center cursor-pointer"
            >
              <span className="hidden md:inline">{month}</span>
              <span className="md:hidden">{month.substring(0, 1)}</span>
            </td>
          ))}
        </tr>
        <tr className="flex h-8">
          {quarters.map((quarter) => (
            <td
              onClick={() => selectQuarter(quarter, year)}
              key={`${quarter}-1`}
              className="w-1/4 border-[1px] text-center flex items-center justify-center cursor-pointer"
            >
              <div className={"pointer"}>{quarter}</div>
            </td>
          ))}
          {quarters.map((quarter) => (
            <td
              onClick={() => selectQuarter(quarter, year2)}
              key={`${quarter}-2`}
              className="w-1/4 border-[1px] text-center flex items-center justify-center cursor-pointer"
            >
              {quarter}
            </td>
          ))}
        </tr>
        <tr className="flex h-8">
          <td
            onClick={() => selectYear(year)}
            className="w-full text-center border-[1px] h-8 flex items-center justify-center cursor-pointer"
          >
            <button
              className="cursor-pointer relative z-10 h-full"
              onClick={() => {
                updateYear.current = true
                setYear(year - 1)
              }}
            >
              <ChevronLeftIcon className="h-full" />
            </button>
            {year}
            <button
              className="cursor-pointer relative z-10 h-full"
              onClick={() => {
                updateYear.current = true
                setYear(year + 1)
              }}
              disabled={year + 1 === year2}
            >
              <ChevronRightIcon className="h-full" />
            </button>
          </td>
          <td
            onClick={() => selectYear(year2)}
            className="w-full text-center border-[1px] h-8 flex items-center justify-center cursor-pointer"
          >
            <button
              className="cursor-pointer relative z-10 h-full"
              onClick={() => {
                updateYear.current = true
                setYear2(year2 - 1)
              }}
              disabled={year2 - 1 === year}
            >
              <ChevronLeftIcon className="h-full" />
            </button>
            {year2}
            <button
              className="cursor-pointer relative z-10 h-full"
              onClick={() => {
                updateYear.current = true
                setYear2(year2 + 1)
              }}
            >
              <ChevronRightIcon className="h-full" />
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <MultiRangeSlider
          fromValue={fromValue}
          toValue={toValue}
          min={0}
          max={max}
          className={"h-full"}
          setFromValue={setFromValue}
          setToValue={setToValue}
        />
      </div>
    </div>
  )
}
