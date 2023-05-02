import React, {useState} from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Grid, InformationCard, ModalFullHeight, NftCard} from "../..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Utils/ModalFullHeight",
  component: ModalFullHeight,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

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
const Template: ComponentStory<typeof ModalFullHeight> = (args) =>
{
  const [isOpen, setIsOpen] = useState(false)

  return(
    <>
      <ModalFullHeight {...args} isOpen={isOpen} setIsOpen={setIsOpen} />;
    </>
  )}


export const Primary: ComponentMeta<typeof ModalFullHeight> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children:
    <div>
      <Grid columns={1} gap={4}>
        <div className={"bg-surface-2 h-[10rem] w-full tablet:w-[20rem]"}/>
        <div className={"bg-surface-2 h-[10rem] w-full tablet:w-[20rem]"}/>
        <div className={"bg-surface-2 h-[10rem] w-full tablet:w-[20rem]"}/>
      </Grid>
    </div>
};
