import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Favourites } from "./favourites";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/Favourites",
  component: Favourites,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    className: { control: "text" },
    fullWidth: { control: "boolean", defaultValue: false }
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Favourites> = (args) => <Favourites {...args} />;

export const Primary: ComponentMeta<typeof Favourites> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  favourites: [
    {
      address: "lsk00000000111111222222",
      username: "test 1",
    },
    {
      address: "lsk11111122222223333333",
      username: "test 2",
    },
    {
      address: "lsk22222223333334444444",
      username: "test 3",
    },
  ]

};