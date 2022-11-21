import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    status: {
      type: [
        "todo",
        "building",
        "testing",
        "reviewing",
        "released",
        "deprecated",
      ],
    },
  },
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary: ComponentMeta<typeof Button> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary: ComponentMeta<typeof Button> = Template.bind({});
Secondary.args = {
  label: "Button",
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
