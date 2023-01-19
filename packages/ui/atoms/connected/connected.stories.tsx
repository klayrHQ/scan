import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Connected } from "./connected";
import {compactString} from "../../assets/utils";

export default {
  title: "Atoms/Connected",
  component: Connected,
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

  }
} as any;

const Template: ComponentStory<typeof Connected> = (args) => <Connected {...args} />;

export const Primary: ComponentMeta<typeof Connected> = Template.bind({});
Primary.args = {

};
