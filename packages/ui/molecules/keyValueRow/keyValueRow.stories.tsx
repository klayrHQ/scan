import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {compactString} from "../../assets/utils";

import { KeyValueRow } from "./keyValueRow";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/KeyValueRow",
  component: KeyValueRow,
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
    compactString: compactString
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof KeyValueRow> = (args) => <KeyValueRow {...args} />;

export const Primary: ComponentMeta<typeof KeyValueRow> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "label",
  value: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
};
