import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TableHead } from "./tableHead";
import {TableHeadColumn as HeadCol, TableHeadColProps} from "../../atoms/tableHeadColumn/tableHeadColumn";
import HeadColumn from "../../atoms/tableHeadColumn/tableHeadColumn.stories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/TableHead",
  component: TableHead,
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
const Template: ComponentStory<typeof TableHead> = (args) => {
  const {cols} = args;
  return (
    <TableHead>
      {cols.map((col: JSX.IntrinsicAttributes & TableHeadColProps) =>  (
        <HeadCol {...col} />
      ))}
    </TableHead>
  )
};

export const Primary: ComponentMeta<typeof TableHead> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  cols: [
    {
      ...HeadColumn.args,
      value: "tableColumn 1",
    },
    {
      ...HeadColumn.args,
      value: "tableColumn 2",
    },
    {
      ...HeadColumn.args,
      value: "tableColumn 3",
    },
  ],
};