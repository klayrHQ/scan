import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CopyHotKey } from "./copyHotKey";

export default {
  title: "Atoms/Hotkeys/CopyHotKey",
  component: CopyHotKey,
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

const Template: ComponentStory<typeof CopyHotKey> = (args) => <CopyHotKey {...args} />;

export const Primary: ComponentMeta<typeof CopyHotKey> = Template.bind({});
Primary.args = {
  message: "CopyHotKey Notification",
  hotkey: "c+n",
};
