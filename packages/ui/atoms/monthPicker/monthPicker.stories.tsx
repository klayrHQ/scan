import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MonthPicker } from "./monthPicker";

export default {
  title: "Atoms/MonthPicker",
  component: MonthPicker,
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

const Template: ComponentStory<typeof MonthPicker> = (args) => {
  const [fromValue, setFromValue] = useState<number>(0)
  const [toValue, setToValue] = useState<number>(100)

  return (
    <div className={"h-[100vh] w-[100vw] flex items-center p-8"}>
      <MonthPicker {...args} fromValue={fromValue} toValue={toValue} setFromValue={setFromValue} setToValue={setToValue}/>
    </div>
  )
}

export const Primary: ComponentMeta<typeof MonthPicker> = Template.bind({});
Primary.args = {

};