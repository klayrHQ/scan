import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoBar } from "./infoBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/InfoBar",
  component: InfoBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    menu: {control: "object"},
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
const Template: ComponentStory<typeof InfoBar> = (args) => <InfoBar {...args}/>;

export const Primary: ComponentMeta<typeof InfoBar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

