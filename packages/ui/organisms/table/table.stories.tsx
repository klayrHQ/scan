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
    fullWidth: { control: "boolean", defaultValue: false },
    rounded: { control: "boolean", defaultValue: false },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {
    oddClassName: "bg-surface-2",
    evenClassName: "bg-surface-1",
    headClassName: "bg-surface-3",
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
          },
        ]
      }
    ],
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

};

export const FullWidth: ComponentMeta<typeof Table> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FullWidth.args = {
  fullWidth: true,
};

export const Rounded: ComponentMeta<typeof Table> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rounded.args = {
  rounded: true,
};

export const AlignRight: ComponentMeta<typeof Table> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AlignRight.args = {
  headCols: [
    {
      ...Column.args,
      value: "head column 1",
      align: "right",
    },
    {
      ...Column.args,
      value: "head column 2",
      align: "right",
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
          align: "right",
        },
        {
          ...HeadColumn.args,
          value: "column 2",
          align: "right",
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
          align: "right",
        },
        {
          ...Column.args,
          value: "column 2",
          align: "right",
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

export const AlignCenter: ComponentMeta<typeof Table> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AlignCenter.args = {
  headCols: [
    {
      ...Column.args,
      value: "head column 1",
      align: "center",
    },
    {
      ...Column.args,
      value: "head column 2",
      align: "center",
    },
    {
      ...Column.args,
      value: "head column 3",
      align: "center",
    },
  ],
  rows: [
    {
      id: "0",
      cols: [
        {
          ...HeadColumn.args,
          value: "column 1",
          align: "center",
        },
        {
          ...HeadColumn.args,
          value: "column 2",
          align: "center",
        },
        {
          ...HeadColumn.args,
          value: "column 3",
          align: "center",
        },
      ]
    },
    {
      id: "1",
      cols: [
        {
          ...Column.args,
          value: "column 1",
          align: "center",
        },
        {
          ...Column.args,
          value: "column 2",
          align: "center",
        },
        {
          ...Column.args,
          value: "column 3",
          align: "center",
        },
      ]
    }
  ],
};