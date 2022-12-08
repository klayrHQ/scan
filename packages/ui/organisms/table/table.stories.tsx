import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "./table";
import Column from "../../atoms/column/column.stories";
import {TableBody} from "../../molecules/tableBody/tableBody";
import {Row as TableRow} from "../../molecules/row/row";
import {Column as TableCol} from "../../atoms/column/column";
import {TableHead} from "../../molecules/tableHead/tableHead";
import {HeadColumn as HeadCol, TableHeadColProps} from "../../atoms/headColumn/headColumn";
import HeadColumn from "../../atoms/headColumn/headColumn.stories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/Table",
  component: Table,
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
const Template: ComponentStory<typeof Table> = (args) => {
  return (
    <Table {...args}/>
  )
};

export const Primary: ComponentMeta<typeof Table> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  oddClassName: "bg-surface-2",
  evenClassName: "bg-surface-1",
  headClassName: "bg-surface-2",
  headCols: [
    {
      ...Column.args,
      value: "head column 1",
    },
    {
      ...Column.args,
      value: "head column 2",
    },
    {
      ...Column.args,
      value: "head column 3",
      align: "right",
    },
  ],
  rows: [
    {
      id: "0",
      cols: [
        {
          ...HeadColumn.args,
          value: "column 1",
        },
        {
          ...HeadColumn.args,
          value: "column 2",
        },
        {
          ...HeadColumn.args,
          value: "column 3",
          align: "right",
        },
      ]
    },
    {
      id: "1",
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
          align: "right",
        },
      ]
    }
  ],
};