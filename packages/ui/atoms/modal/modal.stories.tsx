import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Modal, Button, Typography, Grid} from "../..";

const children = (
  <>
    <Typography color={"inherit"} size={"Heading2"} tag={"h2"}>Congratulations on your first NFT!</Typography>
    <Typography color={"inherit"} size={"ParagraphSmall"} tag={"h2"}>What an amazing NFT you just bought! Well done. </Typography>
    <Grid columns={2}>
      <Button fullWidth key={1} type={"secondary"} label={"Secondary"} />
      <Button fullWidth key={2} type={"primary"} label={"Primary"} />
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

export const secondary: ComponentMeta<typeof Modal> = Template.bind({});
secondary.args = {
  type: "secondary",
};

export const tertiary: ComponentMeta<typeof Modal> = Template.bind({});
tertiary.args = {
  type: "tertiary",
};

export const quaternary: ComponentMeta<typeof Modal> = Template.bind({});
quaternary.args = {
  type: "quaternary",
};

export const search: ComponentMeta<typeof Modal> = Template.bind({});
search.args = {
  type: "search",
};

export const CloseButton: ComponentStory<typeof Modal> = (args) => (
  <Grid columns={5}>
    <Modal {...args} closeButton type={"primary"} />
    <Modal {...args} closeButton type={"secondary"}/>
    <Modal {...args} closeButton type={"tertiary"}/>
    <Modal {...args} closeButton type={"quaternary"}/>
    <Modal {...args} closeButton type={"search"}/>
  </Grid>
)
