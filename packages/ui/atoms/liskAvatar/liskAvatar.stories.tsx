import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {LiskAvatar} from "./liskAvatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/LiskAvatar",
  component: LiskAvatar,
  argTypes: {
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
    size: 25,
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LiskAvatar> = (args) => <LiskAvatar {...args} />;

export const Primary: ComponentMeta<typeof LiskAvatar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
  username: true
};

export const NoUsername: ComponentMeta<typeof LiskAvatar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoUsername.args = {
  address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
};