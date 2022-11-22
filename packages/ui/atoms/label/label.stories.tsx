import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Label } from "./label";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Label",
  component: Label,
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

const Template: ComponentStory<typeof Label> = (args) => <Label {...args}>{args.children}</Label>;

export const Primary: ComponentMeta<typeof Label> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Text Input",
};

export const Large: ComponentMeta<typeof Label> = Template.bind({});
Large.args = {
  size: "large",
  label: "Text Input",
};

export const Small: ComponentMeta<typeof Label> = Template.bind({});
Small.args = {
  size: "small",
  label: "Text Input",
};