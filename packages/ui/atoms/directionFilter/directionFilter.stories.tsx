import React, {useEffect, useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DirectionFilter } from "./directionFilter";
import {FiltersType} from "../../types";

export default {
  title: "Atoms/Filters/DirectionFilter",
  component: DirectionFilter,
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
  }
} as any;

const Template: ComponentStory<typeof DirectionFilter> = (args) => {
  const [filters, setFilters] = useState<FiltersType | undefined>({})

  return (
    <div className={"h-[100vh] w-[100vw] flex justify-center items-center p-8"}>
      <DirectionFilter
        {...args}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  )
}

export const Primary: ComponentMeta<typeof DirectionFilter> = Template.bind({});
Primary.args = {

};