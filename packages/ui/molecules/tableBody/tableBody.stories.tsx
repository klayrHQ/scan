import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TableBody } from "./tableBody";
import {Column as TableCol, TableColProps} from "../../atoms/column/column";
import Column from "../../atoms/column/column.stories";
import {Row as TableRow} from "../row/row"
import Row from "../row/row.stories";
import {TableRowProps} from "../row/row";

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
const Template: ComponentStory<typeof TableBody> = (args) => {
  const {rows} = args;
  return (
    <TableBody>
      {rows && rows.map((row) =>  (
        <TableRow {...row}>
          {row.cols.map((col) => (
            <TableCol {...col} />
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
};

export const Primary: ComponentMeta<typeof TableBody> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  rows: [
    {
      ...Row.args,
      cols: [
        {
          ...Column.args,
          value: "column 1",
        },
        {
          ...Column.args,
          value: "column 2",
        },
        {
          ...Column.args,
          value: "column 3",
        },
      ]
    },
    {
      ...Row.args,
      cols: [
        {
          ...Column.args,
          value: "column 1",
        },
        {
          ...Column.args,
          value: "column 2",
        },
        {
          ...Column.args,
          value: "column 3",
        },
      ]
    }
  ],
};