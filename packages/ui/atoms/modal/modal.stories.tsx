import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Grid} from "../grid/grid";
import {Modal} from "./modal";
import {Typography} from "../typography/typography";
import {Button} from "../button/button";

const children = (
  <>
    <Typography color={"inherit"} size={"Heading2"} tag={"h2"}>Congratulations on your first NFT!</Typography>
    <Typography color={"inherit"} size={"ParagraphSmall"} tag={"h2"}>What an amazing NFT you just bought! Well done. </Typography>
    <Grid columns={2}>
      <Button width={"full"} key={1} type={"secondary"} label={"Secondary"} />
      <Button width={"full"} key={2} type={"primary"} label={"Primary"} />
    </Grid>
  </>
)

export default {
  title: "Atoms/Utils/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: {control: "color",},
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
  args: {
    children: children,
  }
} as any;

const Template: ComponentStory<typeof Modal> = (args) => (
  <>
    <Modal {...args} />
  </>
)

export const Primary: ComponentMeta<typeof Modal> = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Base: ComponentMeta<typeof Modal> = Template.bind({});
Base.args = {
  type: "base",
};

export const CloseButton: ComponentStory<typeof Modal> = (args) => (
  <Grid columns={5}>
    <Modal {...args} type={"primary"} />
    <Modal {...args} type={"base"}/>
  </Grid>
)
