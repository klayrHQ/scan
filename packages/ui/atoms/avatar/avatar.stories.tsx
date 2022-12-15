import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Avatar",
  component: Avatar,
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
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary: ComponentMeta<typeof Avatar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  address: "lsk00000000111111222222",
  username: true
};

export const NoUsername: ComponentMeta<typeof Avatar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoUsername.args = {
  address: "lsk00000000111111222222",
};