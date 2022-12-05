import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Menu } from "./menu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Menu",
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    menu: {control: "object"},
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
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args}/>;

export const Primary: ComponentMeta<typeof Menu> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  menu: [
    {
      label: "menu item 1",
      link: "/",
    },
    {
      label: "menu item 2",
      link: "/",
    },
    {
      label: "menu item 3",
      link: "/",
    },
    {
      label: "menu item 4",
      link: "/",
    }
  ],
  backgroundColor: "rgb(29, 78, 216)",
  color: "white",
  className: "hover:bg-blue-700"
};

