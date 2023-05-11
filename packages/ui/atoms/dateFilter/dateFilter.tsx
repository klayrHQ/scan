import React, {FC, useRef} from "react"
//import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { MonthPicker} from "../monthPicker/monthPicker";

interface DateFilterProps {
  classes?: string,
  filters: {
    dateFilters?: {from: Date | null | undefined, to: Date | null | undefined} | undefined
  } | undefined,
  setFilters: React.Dispatch<React.SetStateAction<{dateFilters?: {from: Date | null | undefined, to: Date | null | undefined} | undefined} | undefined>>,
  fromValue: number,
  toValue: number,
  setFromValue: any,
  setToValue: any,
  resetRef: any,
  filterModes: {dateFilter?:"slider" | "custom"} | undefined,
  setFilterModes: React.Dispatch<React.SetStateAction<{dateFilter?: "slider" | "custom"} | undefined>>,
}

export const DateFilter: FC<DateFilterProps> = ({
  classes,
  filters,
  setFilters,
  fromValue,
  toValue,
  setFromValue,
  setToValue,
  resetRef,
  filterModes,
  setFilterModes
}) => {
  const usedDatepicker = useRef(false)
  let isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  // @ts-ignore
  /*const isSafari = typeof window.GestureEvent === "function"*/

  const onChange = (dates: any) => {
    const [start, end] = dates
    setFilters(previousFilters => ({
      ...previousFilters,
      dateFilters: {from: start, to: previousFilters?.dateFilters?.to}
    }))
    if (!end) {
      setFilters(previousFilters => ({
        ...previousFilters,
        dateFilters: {from: previousFilters?.dateFilters?.from, to: end}
      }))
      return
    }
    const newEndDate = new Date(end)
    newEndDate.setHours(23, 59, 59, 999)
    setFilters(previousFilters => ({
      ...previousFilters,
      dateFilters: {from: previousFilters?.dateFilters?.from, to: newEndDate}
    }))

    usedDatepicker.current = true
  }

  /*useEffect(() => {
    isSafari ? console.log("Is Safari") : console.log("Is Not Safari")
  }, [])*/

  return (
    <div className={classes}>
      <div className={`hidden ${isSafari ? "md:hidden" : "md:block"}`}>
        <div className="my-4">
          <button
            className={`md:mr-2 px-2 py-2 w-1/2 md:max-w-max rounded text-xs font-medium cursor-pointer hover:bg-surface-3 ${
              filterModes?.dateFilter === "slider" && "bg-surface-4 text-onSurfaceHigh font-medium"
            }`}
            onClick={() => setFilterModes(previousModes => ({
              ...previousModes,
              dateFilter: "slider"
            }))}
          >
            Slider
          </button>
          <button
            className={`md:mr-2 px-2 py-2 w-1/2 md:max-w-max rounded text-xs font-medium cursor-pointer hover:bg-surface-3 ${
              filterModes?.dateFilter === "custom" && "bg-surface-4 text-onSurfaceHigh"
            }`}
            onClick={() => setFilterModes(previousModes => ({
              ...previousModes,
              dateFilter: "custom"
            }))}
          >
            Custom range
          </button>
        </div>
        { filterModes?.dateFilter === "slider" &&
            <div className="mb-4">
               {/* <MonthPicker
                    fromValue={fromValue}
                    toValue={toValue}
                    setFromValue={setFromValue}
                    setToValue={setToValue}
                />*/}
            </div>
        }
        {filterModes?.dateFilter === "custom" && (
          <div>
            {/*<DatePicker
              selected={filters?.dateFilters?.from}
              onChange={onChange}
              startDate={filters?.dateFilters?.from}
              endDate={filters?.dateFilters?.to}
              selectsRange
              inline
            />*/}
          </div>
        )}
      </div>
      <div className={`${isSafari ? "block md:block" : "md:hidden"}`}>
        <div>
          {/*<DatePicker
            selected={filters?.dateFilters?.from}
            onChange={onChange}
            startDate={filters?.dateFilters?.from}
            endDate={filters?.dateFilters?.to}
            selectsRange
            inline
          />*/}
        </div>
      </div>
    </div>
  )
}
