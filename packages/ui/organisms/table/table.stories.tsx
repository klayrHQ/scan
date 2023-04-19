import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "./table";
import Column from "../../atoms/tableColumn/tableColumn.stories";
import HeadColumn from "../../atoms/tableHeadColumn/tableHeadColumn.stories";
import {headcols, mobileHeadcols, mobileRows, rows, tabletHeadcols, tabletRows} from "../../assets/mockupData";

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
    headCols: headcols,
    tabletHeadCols: tabletHeadcols,
    mobileHeadCols: mobileHeadcols,
    rows: rows,
    tabletRows: tabletRows,
    mobileRows: mobileRows,
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
      value: "head tableColumn 1",
      align: "right",
    },
    {
      ...Column.args,
      value: "head tableColumn 2",
      align: "right",
    },
    {
      ...Column.args,
      value: "head tableColumn 3",
      align: "right",
    },
  ],
  rows: [
    {
      id: "0",
      cols: [
        {
          ...HeadColumn.args,
          value: "tableColumn 1",
          align: "right",
        },
        {
          ...HeadColumn.args,
          value: "tableColumn 2",
          align: "right",
        },
        {
          ...HeadColumn.args,
          value: "tableColumn 3",
          align: "right",
        },
      ]
    },
    {
      id: "1",
      cols: [
        {
          ...Column.args,
          value: "tableColumn 1",
          align: "right",
        },
        {
          ...Column.args,
          value: "tableColumn 2",
          align: "right",
        },
        {
          ...Column.args,
          value: "tableColumn 3",
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
      value: "head tableColumn 1",
      align: "center",
    },
    {
      ...Column.args,
      value: "head tableColumn 2",
      align: "center",
    },
    {
      ...Column.args,
      value: "head tableColumn 3",
      align: "center",
    },
  ],
  rows: [
    {
      id: "0",
      cols: [
        {
          ...HeadColumn.args,
          value: "tableColumn 1",
          align: "center",
        },
        {
          ...HeadColumn.args,
          value: "tableColumn 2",
          align: "center",
        },
        {
          ...HeadColumn.args,
          value: "tableColumn 3",
          align: "center",
        },
      ]
    },
    {
      id: "1",
      cols: [
        {
          ...Column.args,
          value: "tableColumn 1",
          align: "center",
        },
        {
          ...Column.args,
          value: "tableColumn 2",
          align: "center",
        },
        {
          ...Column.args,
          value: "tableColumn 3",
          align: "center",
        },
      ]
    }
  ],
};