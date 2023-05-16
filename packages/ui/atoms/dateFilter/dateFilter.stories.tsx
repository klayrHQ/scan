import React, {useRef, useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DateFilter } from "./dateFilter";
import {FilterModesType, FiltersType} from "../../types";

export default {
  title: "Atoms/Filters/DateFilter",
  component: DateFilter,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    className: { control: "text" },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {
    className: "w-10/12"
  }
} as any;

const Template: ComponentStory<typeof DateFilter> = (args) => {
  const [fromValue, setFromValue] = useState<number>(0)
  const [toValue, setToValue] = useState<number>(24)
  const [filters, setFilters] = useState<FiltersType>({})
  const [filterModes, setFilterModes] = useState<FilterModesType | undefined>({dateFilter: "slider"})
  const usedDatepicker = useRef(false)

  const [year1, setYear1] = useState(2022)
  const [year2, setYear2] = useState(2023)
  const monthPickerFunctions = {
    selectMonth: (month: string, year: number) => console.log(month, year),
    selectQuarter: (quarter: string, year: number) => console.log(quarter, year),
    selectYear: (year: number) => console.log(year),
    year1: year1,
    setYear1: setYear1,
    year2: year2,
    setYear2: setYear2,
  }

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

  return (
    <div className={"h-[100vh] w-[100vw] flex justify-center items-center p-8"}>
      <DateFilter
        {...args}
        fromValue={fromValue}
        toValue={toValue}
        setFromValue={setFromValue}
        setToValue={setToValue}
        filters={filters}
        onChange={onChange}
        filterModes={filterModes}
        setFilterModes={setFilterModes}
        monthPickerFunctions={monthPickerFunctions}
      />
    </div>
  )
}

export const Primary: ComponentMeta<typeof DateFilter> = Template.bind({});
Primary.args = {

};