import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tooltip } from "./tooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Tooltip",
  component: Tooltip,
  argTypes: {
    className: { control: "text" },
    backgroundColor: { control: "color" },
    color: { control: "color" },
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
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args}>{args.children}</Tooltip>;

export const Primary: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "test",
  label: "test tooltip",
  positionBottom: true,
  wrapperClassName: "w-max m-auto text-white",
  backgroundColor: "white",
  color: "black",
};