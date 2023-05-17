import React, {useEffect, useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ActiveFilter } from "./activeFilter";
import {FiltersType} from "../../types";

export default {
  title: "Atoms/Filters/ActiveFilter",
  component: ActiveFilter,
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
    filterName: "test",
    filterValue: "123",
    reset: console.log("reset")
  }
} as any;

const Template: ComponentStory<typeof ActiveFilter> = (args) => {
  return (
    <div className={"h-[100vh] w-[100vw] flex justify-center items-center p-8"}>
      <ActiveFilter{...args}/>
    </div>
  )
}

export const Primary: ComponentMeta<typeof ActiveFilter> = Template.bind({});
Primary.args = {

};