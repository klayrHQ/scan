import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TypeFilter } from "./typeFilter";

export default {
  title: "Atoms/Filters/TypeFilter",
  component: TypeFilter,
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
    activeFilters: [
      {
        filterName: "amount",
        filterValue: "> 1000",
      },
      {
        filterName: "sender",
        filterValue: "Friartuck",
      },
      {
        filterName: "recipient",
        filterValue: "test",
      },
    ]
  }
} as any;

const Template: ComponentStory<typeof TypeFilter> = (args) => {
  return (
    <div className={"h-[100vh] w-[100vw] flex justify-center items-center p-8"}>
      <TypeFilter {...args} />
    </div>
  )
}

export const Primary: ComponentMeta<typeof TypeFilter> = Template.bind({});
Primary.args = {

};