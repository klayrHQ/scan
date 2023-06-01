import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HotKey } from "./hotkey";

export default {
  title: "Atoms/Hotkeys/HotKey",
  component: HotKey,
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

const Template: ComponentStory<typeof HotKey> = (args) => {
  return(
      <HotKey {...args}/>
  )
};

export const Primary: ComponentMeta<typeof HotKey> = Template.bind({});
Primary.args = {
  hotKey: "c"
};