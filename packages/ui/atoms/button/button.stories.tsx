import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    primary: { control: "boolean", defaultValue: false },
    fullWidth: { control: "boolean", defaultValue: false },
    active: { control: "boolean", defaultValue: false },
    hover: { control: "boolean", defaultValue: false },
    disabled: { control: "boolean", defaultValue: false },
  },
  parameters: {
    status: {
      type: ["building"],
    },
  },
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary: ComponentMeta<typeof Button> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
};

export const Secondary: ComponentMeta<typeof Button> = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Hover: ComponentMeta<typeof Button> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hover.args = {
  label: "Button",
  hover: true,
};

export const SecondaryHover: ComponentMeta<typeof Button> = Template.bind({});
SecondaryHover.args = {
  label: "Button",
  hover: true,
};

export const Disabled: ComponentMeta<typeof Button> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  label: "Button",
  disabled: true,
};

export const Large: ComponentMeta<typeof Button> = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small: ComponentMeta<typeof Button> = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
