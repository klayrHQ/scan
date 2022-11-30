import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeadRow } from "./headRow";
import {HeadColumn as HeadCol, TableHeadColProps} from "../../atoms/headColumn/headColumn";
import HeadColumn from "../../atoms/headColumn/headColumn.stories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/HeadRow",
  component: HeadRow,
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
const Template: ComponentStory<typeof HeadRow> = (args) => {
  const {cols} = args;
  return (
    <HeadRow>
      {cols.map((col: JSX.IntrinsicAttributes & TableHeadColProps) =>  (
        <HeadCol {...col} />
      ))}
    </HeadRow>
  )
};

export const Primary: ComponentMeta<typeof HeadRow> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
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
  ],
};