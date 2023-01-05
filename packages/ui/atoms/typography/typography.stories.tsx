import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "./typography";

export default {
  title: "Atoms/Typography",
  component: Typography,
  parameters: {
    status: {
      type: ["todo"],
    },
  },
  argTypes: {
    fullWidth: {
      type: 'boolean',
    },
  },
} as any;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Heading1: ComponentMeta<typeof Typography> = Template.bind({});
Heading1.args = {
  children: "colecti is de beste van allemaal",
  tag: "h1",
  size: "Heading1",
  bold: false,
  align: "center",
  className: "pointer",
};
export const Heading2: ComponentMeta<typeof Typography> = Template.bind({});
Heading2.args = {
  children: "colecti is de beste van allemaal",
  tag: "h2",
  size: "Heading2",
  bold: false,
  align: "left",
  className: "pointer",
};
export const Heading3: ComponentMeta<typeof Typography> = Template.bind({});
Heading3.args = {
  children: "colecti is de beste van allemaal",
  tag: "h2",
  size: "Heading3",
  bold: false,
  align: "left",
  className: "pointer",
};
export const Heading4: ComponentMeta<typeof Typography> = Template.bind({});
Heading4.args = {
  children: "Colecti is de beste van allemaal",
  tag: "h4",
  size: "Heading4",
  bold: false,
  align: "left",
  className: "pointer",
};

export const Button: ComponentMeta<typeof Typography> = Template.bind({});
Button.args = {
  children: "Colecti is de beste van allemaal",
  tag: "h4",
  size: "Button",
  bold: false,
  align: "center",
  className: "pointer",
};

export const ParagraphSmall: ComponentMeta<typeof Typography> = Template.bind({});
ParagraphSmall.args = {
  children: "Colecti is de beste van allemaal",
  tag: "span",
  size: "ParagraphSmall",
  bold: false,
  align: "left",
  className: "pointer",
};

export const ParagraphLarge: ComponentMeta<typeof Typography> = Template.bind({});
ParagraphLarge.args = {
  children: "colecti",
  tag: "span",
  align: "center",
  className: "pointer",
};

