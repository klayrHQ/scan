import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tooltip } from "./tooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Tooltip",
  component: Tooltip,
  argTypes: {
    className: { control: "text" },
    backgroundColor: { control: "color" },
    color: { control: "color" },
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
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args}>{args.children}</Tooltip>;

export const PositionBottom: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionBottom.args = {
  children: "test",
  label: "test tooltip",
  positionBottom: true,
  wrapperClassName: "w-max m-auto text-white",
};

export const PositionTop: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionTop.args = {
  children: "test",
  label: "test tooltip",
  positionTop: true,
  wrapperClassName: "w-max m-auto text-white",
};

export const PositionRight: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionRight.args = {
  children: "test",
  label: "test tooltip",
  positionRight: true,
  wrapperClassName: "w-max m-auto text-white",
};

export const PositionBottomRight: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionBottomRight.args = {
  children: "test",
  label: "test tooltip",
  positionBottom: true,
  positionRight: true,
  wrapperClassName: "w-max m-auto text-white",
};

export const PositionLeft: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionLeft.args = {
  children: "test",
  label: "test tooltip",
  positionLeft: true,
  wrapperClassName: "w-max m-auto text-white",
};

export const PositionBottomLeft: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionBottomLeft.args = {
  children: "test",
  label: "test tooltip",
  positionBottom: true,
  positionLeft: true,
  wrapperClassName: "w-max m-auto text-white",
};