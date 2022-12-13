import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeadColumn } from "./headColumn";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/HeadColumn",
  component: HeadColumn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
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
const Template: ComponentStory<typeof HeadColumn> = (args) => <HeadColumn {...args} />;

export const Primary: ComponentMeta<typeof HeadColumn> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: "HeadColumn",
};