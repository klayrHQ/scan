import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MultiRangeSlider } from "./multiRangeSlider";

export default {
  title: "Atoms/MultiRangeSlider",
  component: MultiRangeSlider,
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
    min: 0,
    max: 100,
    steps: 5,
    className: "w-full",
  }
} as any;

const Template: ComponentStory<typeof MultiRangeSlider> = (args) => {
  const [fromValue, setFromValue] = useState<number>(0)
  const [toValue, setToValue] = useState<number>(100)

  return (
    <div className={"h-[100vh] w-[100vw] flex justify-center items-center p-8"}>
      <MultiRangeSlider {...args} fromValue={fromValue} toValue={toValue} setFromValue={setFromValue} setToValue={setToValue}/>
    </div>
  )
}

export const Primary: ComponentMeta<typeof MultiRangeSlider> = Template.bind({});
Primary.args = {

};