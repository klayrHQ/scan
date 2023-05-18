import React, {useRef, useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FilterContainer } from "./filterContainer";
import { compactString } from "../../assets/utils";
import {Modal} from "../../atoms/modal/modal";
import {XMarkIcon} from "@heroicons/react/24/solid";
import {FilterModesType, FiltersType} from "../../types";
import {DateFilter} from "../../atoms/dateFilter/dateFilter";
import {Button} from "../../atoms";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/FilterContainer",
  component: FilterContainer,
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

  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterContainer> = (args) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Modal
      isOpen={open}
      setIsOpen={setOpen}
      closeButton={
        <XMarkIcon
          className="md:hidden text-onSurfaceHigh"
        />
      }
    >
      <FilterContainer {...args} />
    </Modal>
  )
};

export const Primary: ComponentMeta<typeof FilterContainer> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

export const FilterContainerMockup: ComponentStory<typeof FilterContainer> = (args) => {
  const [open, setOpen] = useState<boolean>(false)
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

  return (
    <Modal
      isOpen={open}
      setIsOpen={setOpen}
      closeButton={
        <XMarkIcon
          className="md:hidden text-onSurfaceHigh"
        />
      }
    >
      <FilterContainer
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
          />
        }
      />
    </Modal>
  )
};