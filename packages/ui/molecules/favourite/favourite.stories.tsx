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
const Template: ComponentStory<typeof Favourite> = (args) => <Favourite {...args} />;

export const Primary: ComponentMeta<typeof Favourite> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  address: "lsk00000000111111222222"
};