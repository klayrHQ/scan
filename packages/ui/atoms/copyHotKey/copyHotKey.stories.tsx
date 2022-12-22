import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CopyHotKey } from "./copyHotKey";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/CopyHotKey",
  component: CopyHotKey,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CopyHotKey> = (args) => <CopyHotKey {...args} />;

export const Primary: ComponentMeta<typeof CopyHotKey> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  message: "CopyHotKey Notification",
  hotkey: "c+n",
};
