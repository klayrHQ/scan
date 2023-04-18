import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TableBody } from "./tableBody";
import {rows} from "../../assets/mockupData";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/TableBody",
  component: TableBody,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableBody> = (args) => (
    <TableBody {...args} />
);

export const Primary: ComponentMeta<typeof TableBody> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  rows: rows,
};