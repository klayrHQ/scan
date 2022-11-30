import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SwitchButtons } from "./switchButtons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/SwitchButtons",
  component: SwitchButtons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    buttons: {odd: { control: 'object' } },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {
    buttons: [
      {label: "Button 1", onClick: () => console.log("button 1 clicked")},
      {label: "Button 2", onClick: () => console.log("button 2 clicked")},
      {label: "Button 3", onClick: () => console.log("button 3 clicked")}
    ]
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SwitchButtons> = (args) => <SwitchButtons {...args} />;

export const Primary: ComponentMeta<typeof SwitchButtons> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
};

export const Large: ComponentMeta<typeof SwitchButtons> = Template.bind({});
Large.args = {
  primary: true,
  size: "large",
};

export const Small: ComponentMeta<typeof SwitchButtons> = Template.bind({});
Small.args = {
  primary: true,
  size: "small",
};