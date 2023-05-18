import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AmountFilter } from "./amountFilter";
import {FilterModesType, FiltersType} from "../../types";

export default {
  title: "Atoms/Filters/AmountFilter",
  component: AmountFilter,
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
    className: "w-10/12",
    buttons: [1, 10, 100, 1000, 10000, 100000, 1000000],
  }
} as any;

const Template: ComponentStory<typeof AmountFilter> = (args) => {
  const [fromValue, setFromValue] = useState<number>(0)
  const [toValue, setToValue] = useState<number>(24)
  const [filters, setFilters] = useState<FiltersType>({})
  const [filterModes, setFilterModes] = useState<FilterModesType | undefined>({amountFilter: "buttons"})
  const [validInput, setValidInput] = useState<boolean>(true)


  return (
    <div className={"h-[100vh] w-[100vw] flex justify-center items-center p-8"}>
      <AmountFilter
        {...args}
        fromValue={fromValue}
        toValue={toValue}
        setFromValue={setFromValue}
        setToValue={setToValue}
        filters={filters}
        filterModes={filterModes}
        setFilterModes={setFilterModes}
        validInput={validInput}
        setValidInput={setValidInput}
      />
    </div>
  )
}

export const Primary: ComponentMeta<typeof AmountFilter> = Template.bind({});
Primary.args = {

};