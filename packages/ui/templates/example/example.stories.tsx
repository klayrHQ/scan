import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Template } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/Example",
  component: Template,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateComp: ComponentStory<typeof Template> = (args) => (
  <Template {...args} />
);

export const Primary: ComponentMeta<typeof Template> = TemplateComp.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};
