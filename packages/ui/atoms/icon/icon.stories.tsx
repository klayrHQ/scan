import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "./icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/DataDisplay/Icon",
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/WsV3Uv1J6H5yEMjVys7ZhY/Colecti_Design-Figma?node-id=0%3A10835&t=pu5q5kWwUJkSTKw6-4",
    },
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
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
export const IconPrimary: ComponentMeta<typeof Icon> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconPrimary.args = {
  icon: "menu",
  type: "primary",
};
