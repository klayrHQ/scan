import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Highlight } from "./highlight";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Highlight",
  component: Highlight,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    className: { control: "text" },
    fullWidth: { control: "boolean", defaultValue: false },
    children: { control: "text" },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
} as any;

const Template: ComponentStory<typeof Highlight> = (args) => <Highlight {...args}>{args.children}</Highlight>;

export const Primary: ComponentMeta<typeof Highlight> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: "highlight",
  backgroundColor: "rgb(29 78 216)",
  color: "white",
};

export const Large: ComponentMeta<typeof Highlight> = Template.bind({});
Large.args = {
  size: "large",
  children: "highlight",
  backgroundColor: "rgb(29 78 216)",
  color: "white",
};

export const Small: ComponentMeta<typeof Highlight> = Template.bind({});
Small.args = {
  size: "small",
  children: "highlight",
  backgroundColor: "rgb(29 78 216)",
  color: "white",
};