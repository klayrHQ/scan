import React, {useRef, useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Transactions } from "./transactions";
import { compactString } from "../../assets/utils";
import {DateFilter} from "../../atoms/dateFilter/dateFilter";
import {FilterModesType, FiltersType} from "../../types";
import {Typography} from "../../atoms/typography/typography";
import {AmountFilter} from "../../atoms/amountFilter/amountFilter";
import {Grid} from "../../atoms/grid/grid";

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
  const [dateFrom, setDateFrom] = useState<number>(0)
  const [dateTo, setDateTo] = useState<number>(24)
  const [amountFrom, setAmountFrom] = useState<number>(0)
  const [amountTo, setAmountTo] = useState<number>(24)
  const [filters, setFilters] = useState<FiltersType | undefined>({})
  const [filterModes, setFilterModes] = useState<FilterModesType | undefined>({dateFilter: "slider", amountFilter: "buttons"})
  const usedDatepicker = useRef(false)
  const [validInput, setValidInput] = useState<boolean>(true)

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
        <Grid columns={2} className={"gap-4"}>
          <DateFilter
            className={"col-span-2"}
            filters={filters}
            setFilters={setFilters}
            fromValue={dateFrom}
            toValue={dateTo}
            setFromValue={setDateFrom}
            setToValue={setDateTo}
            filterModes={filterModes}
            setFilterModes={setFilterModes}
            monthPickerFunctions={monthPickerFunctions}
            onChange={onChange}
          />
          <AmountFilter
            buttons={[1, 10, 100, 1000, 10000, 100000, 1000000]}
            filters={filters}
            setFilters={setFilters}
            filterModes={filterModes}
            setFilterModes={setFilterModes}
            fromValue={amountFrom}
            setFromValue={setAmountFrom}
            toValue={amountTo}
            setToValue={setAmountTo}
            validInput={validInput}
            setValidInput={setValidInput}
          />
        </Grid>
      }
    />
  )
};

export const Primary: ComponentMeta<typeof Transactions> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};