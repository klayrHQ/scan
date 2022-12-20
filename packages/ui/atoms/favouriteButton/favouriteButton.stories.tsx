import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FavouriteButton } from "./favouriteButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/FavouriteButton",
  component: FavouriteButton,
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
    favourites: [
      {
        address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        username: "test",
        balance: {number: "1000", decimals: "123"}
      },
      {
        address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
        username: "moosty",
        balance: {number: "1000", decimals: "123"}
      },
      {
        address: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g",
        balance: {number: "1000", decimals: "123"}
      },
    ],
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FavouriteButton> = (args) => <FavouriteButton {...args} />;

export const Primary: ComponentMeta<typeof FavouriteButton> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};