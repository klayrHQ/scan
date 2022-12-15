import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {LiskAvatar} from "./liskAvatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/LiskAvatar",
  component: LiskAvatar,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    className: { control: "text" },
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
const Template: ComponentStory<typeof LiskAvatar> = (args) => <LiskAvatar {...args} />;

export const Primary: ComponentMeta<typeof LiskAvatar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  address: "lsk00000000111111222222",
  username: true
};

export const NoUsername: ComponentMeta<typeof LiskAvatar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoUsername.args = {
  address: "lsk00000000111111222222",
};