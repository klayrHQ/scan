import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextField } from "./textField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/TextField",
  component: TextField,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    className: { control: "text" },
    fullWidth: { control: "boolean", defaultValue: false }
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
const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Primary: ComponentMeta<typeof TextField> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  placeholder: "Text Input",
};

export const Large: ComponentMeta<typeof TextField> = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "Text Input",
};

export const Small: ComponentMeta<typeof TextField> = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "Text Input",
};