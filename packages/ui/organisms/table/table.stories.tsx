import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "./table";
import Column from "../../atoms/column/column.stories";
import {TableBody} from "../../molecules/tableBody/tableBody";
import {Row as TableRow} from "../../molecules/row/row";
import {Column as TableCol} from "../../atoms/column/column";
import {TableHead} from "../../molecules/tableHead/tableHead";
import {HeadColumn as HeadCol, TableHeadColProps} from "../../atoms/headColumn/headColumn";

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
  args: {
    style: {color: "white"},
  }
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
    },
  ],
  rows: [
    {
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