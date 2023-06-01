import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HotKeyCombo } from "./hotKeyCombo";

export default {
  title: "Atoms/Hotkeys/HotKeyCombo",
  component: HotKeyCombo,
  argTypes: {
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {

  }
} as any;

const Template: ComponentStory<typeof HotKeyCombo> = (args) => {
  return(
    <HotKeyCombo {...args}/>
  )
};

export const Primary: ComponentMeta<typeof HotKeyCombo> = Template.bind({});
Primary.args = {
  keys: ["ctrl", "c"],
  label: "Copy",
};