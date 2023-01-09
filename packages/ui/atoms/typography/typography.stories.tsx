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
  args: {
    children: "Typography example sentence",
  }
} as any;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Heading1: ComponentMeta<typeof Typography> = Template.bind({});
Heading1.args = {
  tag: "h1",
  bold: false,
  align: "center",
  className: "pointer",
};
export const Heading2: ComponentMeta<typeof Typography> = Template.bind({});
Heading2.args = {
  tag: "h2",
  bold: false,
  align: "left",
  className: "pointer",
};
export const Heading3: ComponentMeta<typeof Typography> = Template.bind({});
Heading3.args = {
  tag: "h2",
  bold: false,
  align: "left",
  className: "pointer",
};
export const Heading4: ComponentMeta<typeof Typography> = Template.bind({});
Heading4.args = {
  tag: "h4",
  bold: false,
  align: "left",
  className: "pointer",
};

export const Button: ComponentMeta<typeof Typography> = Template.bind({});
Button.args = {
  tag: "h4",
  bold: false,
  align: "center",
  className: "pointer",
};

export const ParagraphSmall: ComponentMeta<typeof Typography> = Template.bind({});
ParagraphSmall.args = {
  tag: "span",
  bold: false,
  align: "left",
  className: "pointer",
};

export const ParagraphLarge: ComponentMeta<typeof Typography> = Template.bind({});
ParagraphLarge.args = {
  tag: "span",
  align: "center",
  className: "pointer",
};

