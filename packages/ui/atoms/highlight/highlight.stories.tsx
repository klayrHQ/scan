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
};

export const Success: ComponentMeta<typeof Highlight> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  children: "highlight",
  className: "bg-success text-onSuccess",
};

export const Error: ComponentMeta<typeof Highlight> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  children: "highlight",
  className: "bg-error text-onError",
};

export const Large: ComponentMeta<typeof Highlight> = Template.bind({});
Large.args = {
  primary: true,
  size: "large",
  children: "highlight",
};

export const Small: ComponentMeta<typeof Highlight> = Template.bind({});
Small.args = {
  primary: true,
  size: "small",
  children: "highlight",
};