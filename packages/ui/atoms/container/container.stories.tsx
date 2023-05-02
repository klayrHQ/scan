import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Grid, Container, Typography, ImageCol} from "../..";

export default {
  title: "Atoms/Layout/Container",
  component: Container,
  argTypes: {
    bgColor: {
      options: [
        undefined,
        "azule",
        "azuleDark",
        "eerie",
        "lobster",
        "lobsterDark",
        "sand",
        "sandDark",
        "tulip",
        "volt",
        "voltDark",
        "white",
        "black",
        "eerieLight",
        "transparent",
        "background",
        "surface",
        "surface-1",
        "surface-2",
        "surface-3",
        "surface-4",
        "primary",
        "primaryAlt",
        "secondary",
        "secondaryAlt",
      ],
      control: {type: "select"},
    },
    type: {
      options: ["section", "card", "page", "nftCard", undefined],
      control: {type: "select"},
    }
  },
  parameters: {
    status: {
      type: ["reviewing"],
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

export const Section: ComponentMeta<typeof Container> = Template.bind({});
Section.args = {
  width: "80%",
  bgColor: "surface-3",
  section: true,
  children: (
    <Typography className="p-8" tag={"h1"}>
      Dit is een tekst
    </Typography>
  ),
};

export const Card: ComponentMeta<typeof Container> = Template.bind({});
Card.args = {
  width: "90%",
  bgColor: "surface-2",
  children: (
    <Typography className="p-8" tag={"h1"}>
      Dit is een tekst
    </Typography>
  ),
};

export const WithGrid: ComponentMeta<typeof Container> = Template.bind({});
WithGrid.args = {
  width: "80%",
  bgColor: "azule",
  children: (
    <Grid columns={2} gap={0}>
      <Container bgColor={"surface-2"}>
        <Typography tag={"h1"}>test</Typography>
      </Container>
      <Container section bgColor={"surface-1"}>
        <Grid columns={1}>
          <Typography tag={"h1"}>test1</Typography>{" "}
          <Typography tag={"h1"}>test1</Typography>
        </Grid>
      </Container>
    </Grid>
  ),
};

export const Playground: ComponentMeta<typeof Container> = Template.bind({});
Playground.args = {
  width: "80%",
  bgColor: "sand",
  shadow: true,
  rounded: true,
  children: (
    <Typography className="p-8" tag={"h1"}>
      Dit is een tekst
    </Typography>
  ),
};

export const ContentBlock: ComponentMeta<typeof Container> = Template.bind({});
ContentBlock.args = {
  width: "80%",
  colorVariant: "sand",
  shadow: true,
  children: (
    <>
      <ImageCol className="absolute top-0 left-0" type={"informationCardImage"}/>
      <div
        className={[
          "w-full relative flex flex-col mt-20",
        ].join(" ")}
      >
        <Typography className="leading-6 mb-10" tag={"h4"} color={"inherit"}>
          CATEGORY TITLE
        </Typography>
        <Typography className={" mb-10 leading-24"}
                    tag={"h4"} color={"inherit"}
        >
          TITLE
        </Typography>
        <div className={"h-collectionCard"}></div>
        <Typography className="w-7/12 opacity-60 leading-12 mb-20 " tag={"span"} color={"inherit"}>
          Text
          TextTextTextText

        </Typography>
        <Typography bold className=" leading-6 underline cursor-pointer"
                    tag={"h4"} color={"inherit"}
        >
          {'Read more'}
        </Typography>
      </div>
    </>
  ),
};
