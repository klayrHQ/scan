import React, {FC, useRef} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { MonthPicker} from "../monthPicker/monthPicker";
import {Button} from "../button/button";
import {cls} from "../../assets/utils";

interface DateFilterProps {
  className?: string,
  filters: {
    dateFilters?: {from: Date | null | undefined, to: Date | null | undefined} | undefined
  } | undefined,
  setFilters: React.Dispatch<React.SetStateAction<{dateFilters?: {from: Date | null | undefined, to: Date | null | undefined} | undefined} | undefined>>,
  fromValue: number,
  toValue: number,
  setFromValue: any,
  setToValue: any,
  filterModes: {dateFilter?:"slider" | "custom"} | undefined,
  setFilterModes: React.Dispatch<React.SetStateAction<{dateFilter?: "slider" | "custom"} | undefined>>,
  monthPickerFunctions: {
    selectMonth: (month: string, year: number) => void,
    selectQuarter: (quarter: string, year: number) => void,
    selectYear: (year: number) => void,
    year1: number
    setYear1: (year: number) => void
    year2: number
    setYear2: (year: number) => void
  }
  onChange: (dates: any) => void
}

export const DateFilter: FC<DateFilterProps> = ({
  className,
  filters,
  setFilters,
  fromValue,
  toValue,
  setFromValue,
  setToValue,
  filterModes,
  setFilterModes,
  monthPickerFunctions,
  onChange,
}) => {
  let isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

  return (
    <div className={cls(["w-full",className])}>
      <div className={`hidden ${isSafari ? "md:hidden" : "md:block"}`}>
        <div className="my-4 flex gap-2">
          <Button
            onClick={() => setFilterModes(previousModes => ({
              ...previousModes,
              dateFilter: "slider"
            }))}
            label={"Slider"}
            size={"small"}
            type={"tertiary"}
            active={filterModes?.dateFilter === "slider"}
          />
          <Button
            onClick={() => setFilterModes(previousModes => ({
              ...previousModes,
              dateFilter: "custom"
            }))}
            label={"Custom range"}
            size={"small"}
            type={"tertiary"}
            active={filterModes?.dateFilter === "custom"}
          />
        </div>
        { filterModes?.dateFilter === "slider" &&
            <div className="mb-4">
                <MonthPicker
                    max={24}
                    fromValue={fromValue}
                    toValue={toValue}
                    setFromValue={setFromValue}
                    setToValue={setToValue}
                    year1={monthPickerFunctions.year1}
                    setYear1={monthPickerFunctions.setYear1}
                    year2={monthPickerFunctions.year2}
                    setYear2={monthPickerFunctions.setYear2}
                    selectYear={monthPickerFunctions.selectYear}
                    selectMonth={monthPickerFunctions.selectMonth}
                    selectQuarter={monthPickerFunctions.selectQuarter}
                />
            </div>
        }
        {filterModes?.dateFilter === "custom" && (
          <div>
            <DatePicker
              selected={filters?.dateFilters?.from}
              onChange={onChange}
              startDate={filters?.dateFilters?.from}
              endDate={filters?.dateFilters?.to}
              selectsRange
              inline
            />
          </div>
        )}
      </div>
      <div className={`${isSafari ? "block md:block" : "md:hidden"}`}>
        <div>
          <DatePicker
            selected={filters?.dateFilters?.from}
            onChange={onChange}
            startDate={filters?.dateFilters?.from}
            endDate={filters?.dateFilters?.to}
            selectsRange
            inline
          />
        </div>
      </div>
    </div>
  )
}
