import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Input",
  component: Input,
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
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary: ComponentMeta<typeof Input> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  placeholder: "Text Input",
};

export const Large: ComponentMeta<typeof Input> = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "Text Input",
};

export const Small: ComponentMeta<typeof Input> = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "Text Input",
};