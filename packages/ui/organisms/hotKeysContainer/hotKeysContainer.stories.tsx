import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HotKeysContainer } from "./hotKeysContainer";
import {hotKeysCombos} from "../../assets/mockupData/hotkeys";

export default {
  title: "Organisms/Settings/HotKeysContainer",
  component: HotKeysContainer,
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

const Template: ComponentStory<typeof HotKeysContainer> = (args) => {
  return(
    <HotKeysContainer {...args}/>
  )
};

export const Primary: ComponentMeta<typeof HotKeysContainer> = Template.bind({});
Primary.args = {
  hotKeyGroups: hotKeysCombos,
};