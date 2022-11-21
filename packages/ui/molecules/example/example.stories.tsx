import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Molecule } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Example Test",
  component: Molecule,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Molecule> = (args) => (
  <Molecule {...args} />
);

export const Primary: ComponentMeta<typeof Molecule> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};
