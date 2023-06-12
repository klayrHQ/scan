import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FloatingMenu } from "./floatingMenu";

export default {
  title: "Atoms/Filters/FloatingMenu",
  component: FloatingMenu,
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
} as any;

const Template: ComponentStory<typeof FloatingMenu> = (args) => <FloatingMenu {...args} />;

export const Primary: ComponentMeta<typeof FloatingMenu> = Template.bind({});
Primary.args = {
  buttons: [
    <span>Home</span>,
    <span>Transactions</span>,
    <span>Validators</span>,
    <span>Stakes</span>,
  ],
};