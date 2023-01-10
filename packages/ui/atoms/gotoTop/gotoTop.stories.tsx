import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GotoTop } from "./gotoTop";
import {compactString} from "../../assets/utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/GotoTop",
  component: GotoTop,
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

  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GotoTop> = (args) => <GotoTop {...args} />;

export const Primary: ComponentMeta<typeof GotoTop> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
