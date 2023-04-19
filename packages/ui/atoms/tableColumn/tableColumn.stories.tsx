import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TableColumn } from "./tableColumn";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/TableColumn",
  component: TableColumn,
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
const Template: ComponentStory<typeof TableColumn> = (args) => <TableColumn {...args} />;

export const Primary: ComponentMeta<typeof TableColumn> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: "Column",
};