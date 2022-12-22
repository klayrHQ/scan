import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Snackbar } from "./snackbar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Snackbar",
  component: Snackbar,
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
  args: {

  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Snackbar> = (args) => <Snackbar {...args} />;

export const Primary: ComponentMeta<typeof Snackbar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  message: "Snackbar Notification"
};
