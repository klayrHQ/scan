import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TableHeadColumn } from "./tableHeadColumn";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/TableHeadColumn",
  component: TableHeadColumn,
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
const Template: ComponentStory<typeof TableHeadColumn> = (args) => <TableHeadColumn {...args} />;

export const Primary: ComponentMeta<typeof TableHeadColumn> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: "HeadColumn",
};