import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tooltip } from "./tooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Tooltip",
  component: Tooltip,
  argTypes: {
    placement: { control: "select" },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {
    children: <div className="mx-auto mt-20 w-max text-onSurfaceHigh">Test</div>
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args}>{args.children}</Tooltip>;

export const PositionBottom: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionBottom.args = {
  label: "test tooltip",
  placement: "bottom",
};

export const PositionBottomLeft: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionBottomLeft.args = {
  label: "test tooltip",
  placement: "bottom-end"
};

export const PositionBottomRight: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionBottomRight.args = {
  label: "test tooltip",
  placement: "bottom-start"
};

export const PositionTop: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionTop.args = {
  label: "test tooltip",
  placement: "top",
};

export const PositionTopLeft: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionTopLeft.args = {
  label: "test tooltip",
  placement: "top-end"
};

export const PositionTopRight: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionTopRight.args = {
  label: "test tooltip",
  placement: "top-start"
};

export const PositionRight: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionRight.args = {
  label: "test tooltip",
  placement: "right",
};

export const PositionLeft: ComponentMeta<typeof Tooltip> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PositionLeft.args = {
  label: "test tooltip",
  placement: "left"
};

