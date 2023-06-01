import React, {useEffect, useRef, useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Transactions } from "./transactions";
import { compactString } from "../../assets/utils";
import {DateFilter} from "../../atoms/dateFilter/dateFilter";
import {FilterModesType, FiltersType} from "../../types";
import {Typography} from "../../atoms/typography/typography";
import {AmountFilter} from "../../atoms/amountFilter/amountFilter";
import {Grid} from "../../atoms/grid/grid";
import {UserFilter} from "../../atoms/userFilter/userFilter";
import {search} from "../../assets/mockupData/mockupData";
import {DataFilter} from "../../atoms/dataFilter/dataFilter";
import {DirectionFilter} from "../../atoms/directionFilter/directionFilter";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/Transactions",
  component: Transactions,
  argTypes: {

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
    filterButtons: [
      {
        label: "all txs",
        state: "all",
      },
      {
        label: "transfer",
        state: "transfer",
      },
      {
        label: "voteDelegate",
        state: "voteDelegate",
      },
      {
        label: "unlockToken",
        state: "unlockToken",
      },
    ]
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

  const [type, setType] = useState<"sender" | "recipient">("sender")
  const [senderInput, setSenderInput] = useState<string>("")
  const [recipientInput, setRecipientInput] = useState<string>("")
  const setSearch = search.setSearch
  const [hide, setHide] = useState<boolean>(true)

  const [activeFilters, setActiveFilters] = useState<Array<{ filterName: string, filterValue: string }>>()

  const [activeFilterButton, setActiveFilterButton] = useState<string>("all")

  const setActiveFiltersHelper = (filterName: string, filterValue: string) => {
    const filter = { filterName, filterValue }
    setActiveFilters((prevActiveFilters) => {
      if (prevActiveFilters) {
        if (prevActiveFilters.findIndex(i => i.filterName === filter.filterName) !== -1) {
          return [filter, ...prevActiveFilters.filter((s) => s.filterName !== filter.filterName)]
        }
        return [filter, ...prevActiveFilters]
      }
      return [filter]
    })
  }

  useEffect(() => {
    if (filters?.dateFilters) {
      const fromString = filters.dateFilters.from && filters.dateFilters.from.toLocaleString()
      const toString = filters.dateFilters.to && filters.dateFilters.to.toLocaleString()
      const filterValue = fromString + " " + toString || ""
      setActiveFiltersHelper("date", filterValue)
    }
    if (filters?.amountFilters) {
      const fromString = filters.amountFilters.from && filters.amountFilters.from.toLocaleString()
      const toString = filters.amountFilters.to && filters.amountFilters.to.toLocaleString()
      const filterValue = fromString + " " + toString || ""
      setActiveFiltersHelper("amount", filterValue)
    }
    if (filters?.sender) {
      setActiveFiltersHelper("sender", filters.sender)
    }
    if (filters?.recipient) {
      setActiveFiltersHelper("recipient", filters.recipient)
    }
    if (filters?.data) {
      setActiveFiltersHelper("data", filters.data)
    }
  }, [filters, activeFilters])

  useEffect(() => {
    if (type === "recipient" && filters?.recipient) {
      setRecipientInput(filters.recipient)
    }

    if (type === "sender" && filters?.sender) {
      setSenderInput(filters.sender)
    }
  }, [filters?.recipient, filters?.sender])

  useEffect(() => {
    if (senderInput && senderInput.length > 2) {
      setSearch(senderInput)
    } else {
      setSearch("")
    }

    if (recipientInput && recipientInput.length > 2) {
      setSearch(recipientInput)
    } else {
      setSearch("")
    }
  }, [senderInput,recipientInput])

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
      activeFilters={activeFilters}
      activeFilterButton={activeFilterButton}
      filterButtonsOnChange={setActiveFilterButton}
      openFilterModal={openFilterModal}
      setOpenFilterModal={setOpenFilterModal}
      filterComponents={
        <Grid columns={2} className={"gap-10"}>
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
          <DirectionFilter
            account={"test"}
            filters={filters}
            setFilters={setFilters}
          />
          <UserFilter
            type={type}
            setType={setType}
            filters={filters}
            filterItems={() => console.log("test")}
            setFilters={setFilters}
            results={search.results.results}
            senderInput={senderInput}
            recipientInput={recipientInput}
            hide={hide}
            setHide={setHide}
          />
          <DataFilter
            filters={filters}
            setFilters={setFilters}
            filterItems={() => console.log("test")}
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