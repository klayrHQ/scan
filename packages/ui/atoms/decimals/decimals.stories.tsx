import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Decimals } from "./decimals";

export default {
  title: "Atoms/Currency/Decimals",
  component: Decimals,
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

const Template: ComponentStory<typeof Decimals> = (args) => {
  return(
    <Decimals {...args}/>
  )
};

export const Primary: ComponentMeta<typeof Decimals> = Template.bind({});
Primary.args = {
  minMax: { min: 1, max: 100000 },
  switchConvert: () => console.log("switchConvert"),
  setSetting: (handle: string, newState: any) => console.log("handle")
};