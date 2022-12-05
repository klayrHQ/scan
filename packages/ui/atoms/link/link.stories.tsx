import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from "./link";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Link",
  component: Link,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    fullWidth: { control: "boolean", defaultValue: false }
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
const Template: ComponentStory<typeof Link> = (args) => <Link {...args}>{args.children}</Link>;

export const Primary: ComponentMeta<typeof Link> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Link"
};

