import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BalanceBlock } from "./balanceBlock";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/BalanceBlock",
  component: BalanceBlock,
  argTypes: {
    className: { control: "text" },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {

  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BalanceBlock> = (args) => <BalanceBlock {...args} />;

export const Primary: ComponentMeta<typeof BalanceBlock> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};