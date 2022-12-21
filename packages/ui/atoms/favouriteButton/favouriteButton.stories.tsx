import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FavouriteButton } from "./favouriteButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/FavouriteButton",
  component: FavouriteButton,
  argTypes: {
    iconColor: { control: "text" },
    favourited: { control: "boolean", default: false },
    saveFavourite: {
      table: {
        category: "Events",
        action: "saveFavourite",
      },
    },
    unFavourite: {
      table: {
        category: "Events",
        action: "unFavourite",
      },
    },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {
    iconColor: "primary",
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FavouriteButton> = (args) => <FavouriteButton {...args} />;

export const NotFavourited: ComponentMeta<typeof FavouriteButton> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotFavourited.args = {

};

export const Favourited: ComponentMeta<typeof FavouriteButton> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Favourited.args = {
  favourited: true,
};