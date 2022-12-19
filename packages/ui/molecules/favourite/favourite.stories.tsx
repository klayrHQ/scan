import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Favourite } from "./favourite";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Favourite",
  component: Favourite,
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
    balance: {number: "1000", decimals: "123"}
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Favourite> = (args) => <Favourite {...args} />;

export const Primary: ComponentMeta<typeof Favourite> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  className: "bg-blue-700 ",
  address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
  username: "Test"
};

export const NoUsername: ComponentMeta<typeof Favourite> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoUsername.args = {
  className: "bg-blue-700 ",
  address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
};