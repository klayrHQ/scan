import React, {useRef, useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Transactions } from "./transactions";
import { compactString } from "../../assets/utils";
import {DateFilter} from "../../atoms/dateFilter/dateFilter";
import {FilterModesType, FiltersType} from "../../types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/Transactions",
  component: Transactions,
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
    compactString: compactString,
    copyNoteText: "",
    favourites: [
      {
        address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        username: "test",
        balance: {number: "1000", decimals: "123"}
      },
      {
        address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
        username: "moosty",
        balance: {number: "1000", decimals: "123"}
      },
      {
        address: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g",
        balance: {number: "1000", decimals: "123"}
      },
    ],
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Transactions> = (args) => {
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false)
  const [fromValue, setFromValue] = useState<number>(0)
  const [toValue, setToValue] = useState<number>(24)
  const [filters, setFilters] = useState<FiltersType | undefined>({})
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

  return(
    <Transactions
      {...args}
      openFilterModal={openFilterModal}
      setOpenFilterModal={setOpenFilterModal}
      filterComponents={
        <DateFilter
          filters={filters}
          setFilters={setFilters}
          fromValue={fromValue}
          toValue={toValue}
          setFromValue={setFromValue}
          setToValue={setToValue}
          filterModes={filterModes}
          setFilterModes={setFilterModes}
          monthPickerFunctions={monthPickerFunctions}
          onChange={onChange}
        />}
    />
  )
};

export const Primary: ComponentMeta<typeof Transactions> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};