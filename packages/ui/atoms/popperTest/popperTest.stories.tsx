import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {PopperTest} from "./popperTest";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/PopperTest",
  component: PopperTest,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "quaternary",
        "search",
      ]
    },
  },
  parameters: {
    status: {
      type: [
        // "todo",
        "building",
        // "testing",
        // "reviewing",
        // "released",
        // "deprecated",
      ],
    },
  },
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PopperTest> = (args) => <PopperTest {...args} />;

export const Primary: ComponentMeta<typeof PopperTest> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};