import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ValueFormatter } from "./valueFormatter";

export default {
  title: "Atoms/ValueFormatter",
  component: ValueFormatter,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    className: { control: "text" },
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

const Template: ComponentStory<typeof ValueFormatter> = (args) => {
  return (
    <div className={"h-[100vh] w-[100vw] flex justify-center items-center p-8"}>
      <ValueFormatter {...args} />
    </div>
  )
}

export const Currency: ComponentMeta<typeof ValueFormatter> = Template.bind({});
Currency.args = {
  value: "123456788990",
  type: "string",
  format: "currency",
};