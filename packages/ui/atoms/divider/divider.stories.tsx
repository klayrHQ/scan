import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Divider} from "./divider"
import {Grid} from "../grid/grid";

export default {
  title: "Atoms/Utils/Divider",
  component: Divider,
  parameters: {
    status: {
      type: ["todo"],
    },
  },
  argTypes: {
    className: {control: "text"},
    color: {control: "text"},
    width: {control: "text"},
    borderWidth: {control: "text"},
    borderStyle: {control: "text"},
    align: {control: "select", options: ["left", "center", "right"]},
    marginY: {control: "text"},
  }
} as any;

const Template: ComponentStory<typeof Divider> = (args) => (
    <div className={"w-1/2 mx-auto mt-10"}>
      <Divider {...args} />
    </div>
)


export const Base: ComponentMeta<typeof Divider> = Template.bind({});
Base.args = {
 borderWidth: "2",
};

export const Colors: ComponentStory<typeof Divider> = (args) => (
  <Grid flex columns={1} gap={4} className={"w-1/2 mx-auto mt-10"}>
    <Divider {...args} color="body" />
    <Divider {...args} color="surface" />
    <Divider {...args} color="surface-2" />
    <Divider {...args} color="surface-3" />
    <Divider {...args} color="surface-4" />
    <Divider {...args} color="primary" />
    <Divider {...args} color="secondary" />
    <Divider {...args} color="tertiary" />
  </Grid>
)

export const Alignments: ComponentStory<typeof Divider> = (args) => (
  <Grid flex columns={1} gap={4} className={"w-full mx-auto mt-10"}>
    <Divider {...args} color="body" width={"1/2"} align={"center"}/>
    <Divider {...args} color="body" width={"1/2"} align={"left"}/>
    <Divider {...args} color="body" width={"1/2"} align={"right"}/>
  </Grid>
)
