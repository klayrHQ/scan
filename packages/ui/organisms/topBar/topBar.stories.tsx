import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TopBar } from "./topBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/TopBar",
  component: TopBar,
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
const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args}>{args.children}</TopBar>;

export const Primary: ComponentMeta<typeof TopBar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  backgroundColor: "rgb(29, 78, 216)",
  color: "white",
  className: "h-20"
};

