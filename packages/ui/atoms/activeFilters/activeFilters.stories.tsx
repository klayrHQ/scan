import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ActiveFilters } from "./activeFilters";

export default {
  title: "Atoms/Filters/ActiveFilters",
  component: ActiveFilters,
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

const Template: ComponentStory<typeof ActiveFilters> = (args) => {
  return (
    <div className={"h-[100vh] w-[100vw] flex justify-center items-center p-8"}>
      <ActiveFilters {...args} resetFilters={(filter) => console.log("reset " + filter)}/>
    </div>
  )
}

export const Primary: ComponentMeta<typeof ActiveFilters> = Template.bind({});
Primary.args = {

};