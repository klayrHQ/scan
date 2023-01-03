import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Grid } from "./Grid";
import {Container} from "../container/container";
import {Typography} from "../typography/typography";

export default {
  title: "Atoms/Grid",
  component: Grid,
  parameters: {
    status: {
      type: ["released"],
    },
  },
} as any;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args} />
);

export const Base: ComponentMeta<typeof Grid> = Template.bind({});
Base.args = {};

export const Info: ComponentMeta<typeof Grid> = Template.bind({});
Info.args = {
  columns: 2,
  gap: 1,
  children: [
    <Container bgColor={"surface-2"}><Typography tag={"h1"}></Typography></Container>,
    <Container bgColor={"surface-2"}><Grid columns={1}><Typography tag={"h1"}></Typography> <Typography tag={"h1"}></Typography></Grid></Container>,
  ],
};
