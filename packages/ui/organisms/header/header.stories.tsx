import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./header";
import {compactString} from "../../assets/utils";
import {TopBarMockup} from "../topBar/topBar.stories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/Header",
  component: Header,
  argTypes: {
    className: { control: "text" },
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
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary: ComponentMeta<typeof Header> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

export const HeaderMockup: ComponentStory<typeof Header> = () => {
  return (
    <Header
      status={"connected"}
      topBar={TopBarMockup}
    />
  )
};