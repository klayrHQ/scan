import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Paper } from "./paper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Layout/Paper",
  component: Paper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    rounded: {control: "boolean", default: false},
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
const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const Primary: ComponentMeta<typeof Paper> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
