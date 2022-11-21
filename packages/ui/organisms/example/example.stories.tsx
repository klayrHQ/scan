import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Organism } from "./example";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/Example",
  component: Organism,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Organism> = (args) => (
  <Organism {...args} />
);

export const Primary: ComponentMeta<typeof Organism> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};
