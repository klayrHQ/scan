import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo } from "./logo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Logo",
  component: Logo,
  argTypes: {
    color: { control: "text" },
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
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary: ComponentMeta<typeof Logo> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Logo",
};

export const Large: ComponentMeta<typeof Logo> = Template.bind({});
Large.args = {
  size: "large",
  title: "Logo",
};

export const Small: ComponentMeta<typeof Logo> = Template.bind({});
Small.args = {
  size: "small",
};