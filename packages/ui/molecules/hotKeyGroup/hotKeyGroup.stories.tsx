import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HotKeyGroup } from "./hotKeyGroup";

export default {
  title: "Molecules/Hotkeys/HotKeyGroup",
  component: HotKeyGroup,
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

const Template: ComponentStory<typeof HotKeyGroup> = (args) => {
  return(
    <HotKeyGroup {...args}/>
  )
};

export const Primary: ComponentMeta<typeof HotKeyGroup> = Template.bind({});
Primary.args = {
  title: "Hotkeys",
  keys: [
    {
      label: "copy",
      keys: ["ctrl", "c"],
    },
    {
      label: "paste",
      keys: ["ctrl", "v"],
    },
    {
      label: "cut",
      keys: ["ctrl", "x"],
    },
    {
      label: "undo",
      keys: ["ctrl", "z"],
    },
  ],
};