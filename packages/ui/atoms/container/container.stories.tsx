import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "./container";
import { Typography } from "../typography/typography";
import { Grid } from "../Grid/Grid";

export default {
  title: "Atoms/Container",
  component: Container,
  parameters: {
    status: {
      type: [
        // "todo",
        "building",
        // "testing",
        // "reviewing",
        // "released",
        // "deprecated",],
      ],
    },
  },
} as any;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const BgWhite: ComponentMeta<typeof Container> = Template.bind({});
BgWhite.args = {
  width: "80%",
  bgColor: "white",
  children: (
    <Typography className="p-8" tag={"h1"}>
      Dit is een tekst
    </Typography>
  ),
};

export const WithGrid: ComponentMeta<typeof Container> = Template.bind({});
WithGrid.args = {
  width: "80%",
  bgColor: "white",
  children: (
    <Grid columns={2} gap={0}>
      <Container bgColor={"surface-2"}>
        <Typography tag={"h1"}>test</Typography>
      </Container>
      <Container bgColor={"surface-1"}>
        <Grid columns={1}>
          <Typography tag={"h1"}>test1</Typography>{" "}
          <Typography tag={"h1"}>test1</Typography>
        </Grid>
      </Container>
    </Grid>
  ),
};
