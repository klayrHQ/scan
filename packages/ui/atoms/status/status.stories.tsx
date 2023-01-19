import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Status } from "./status";
import {compactString} from "../../assets/utils";

export default {
  title: "Atoms/Status",
  component: Status,
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

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Connected: ComponentMeta<typeof Status> = Template.bind({});
Connected.args = {
  status: "connected"
};

export const Warning: ComponentMeta<typeof Status> = Template.bind({});
Warning.args = {
  status: "warning"
};

export const Error: ComponentMeta<typeof Status> = Template.bind({});
Error.args = {
  status: "error"
};