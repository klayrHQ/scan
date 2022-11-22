import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from "./input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/TextInput",
  component: TextInput,
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
const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} >{args.children}</TextInput>;

export const Primary: ComponentMeta<typeof TextInput> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Text Input",
};

export const Large: ComponentMeta<typeof TextInput> = Template.bind({});
Large.args = {
  size: "large",
  label: "Text Input",
};

export const Small: ComponentMeta<typeof TextInput> = Template.bind({});
Small.args = {
  size: "small",
  label: "Text Input",
};