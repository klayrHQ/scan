import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormField } from "./formField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/FormField",
  component: FormField,
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
const Template: ComponentStory<typeof FormField> = (args) => <FormField {...args} >{args.children}</FormField>;

export const Primary: ComponentMeta<typeof FormField> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Text Input",
};

export const Large: ComponentMeta<typeof FormField> = Template.bind({});
Large.args = {
  size: "large",
  label: "Text Input",
};

export const Small: ComponentMeta<typeof FormField> = Template.bind({});
Small.args = {
  size: "small",
  label: "Text Input",
};