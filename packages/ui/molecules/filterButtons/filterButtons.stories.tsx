import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FilterButtons } from "./filterButtons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/FilterButtons",
  component: FilterButtons,
  argTypes: {
    className: { control: "text" },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterButtons> = (args) => <FilterButtons {...args} />;

export const Primary: ComponentMeta<typeof FilterButtons> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  buttons: [
    {
      label: "All Txs",
      state: "all",
    },
    {
      label: "Example Txs",
      state: "ex1",
    },
    {
      label: "Example 2 Txs",
      state: "ex2",
    }
  ]
};