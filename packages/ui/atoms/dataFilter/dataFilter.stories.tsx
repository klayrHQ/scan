import React, {useEffect, useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DataFilter } from "./dataFilter";
import {FiltersType} from "../../types";
import {search} from "../../assets/mockupData/mockupData";

export default {
  title: "Atoms/Filters/DataFilter",
  component: DataFilter,
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
    results: search.results.results
  }
} as any;

const Template: ComponentStory<typeof DataFilter> = (args) => {
  const [filters, setFilters] = useState<FiltersType | undefined>({})

  return (
    <div className={"h-[100vh] w-[100vw] flex justify-center items-center p-8"}>
      <DataFilter
        {...args}
        filters={filters}
        setFilters={setFilters}
        filterItems={() => console.log("test")}
      />
    </div>
  )
}

export const Primary: ComponentMeta<typeof DataFilter> = Template.bind({});
Primary.args = {

};