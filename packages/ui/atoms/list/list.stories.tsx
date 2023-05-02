import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { List } from "./list";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/List",
  component: List,
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
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Primary: ComponentMeta<typeof List> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: "white",
  listItems: [
    {
      label: "test 1",
    },
    {
      label: "test 2",
    },
    {
      label: "test 3",
    },
    {
      label: "test 4",
    },
  ]
};
