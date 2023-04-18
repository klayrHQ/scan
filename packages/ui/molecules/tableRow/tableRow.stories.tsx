import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TableRow } from "./tableRow";
import {TableColumn as Col, TableColProps} from "../../atoms/tableColumn/tableColumn";
import Column from "../../atoms/tableColumn/tableColumn.stories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/TableRow",
  component: TableRow,
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
const Template: ComponentStory<typeof TableRow> = (args) => {
  const {cols} = args;
  return (
    <TableRow>
      {cols.map((col: JSX.IntrinsicAttributes & TableColProps) =>  (
        <Col {...col} />
      ))}
    </TableRow>
  )
};

export const Primary: ComponentMeta<typeof TableRow> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  cols: [
    {
      ...Column.args,
      value: "tableColumn 1",
    },
    {
      ...Column.args,
      value: "tableColumn 2",
    },
    {
      ...Column.args,
      value: "tableColumn 3",
    },
  ],
};