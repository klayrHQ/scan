import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Container, Grid, InformationCard, Typography} from "../..";

export default {
  title: "Atoms/Layout/Grid",
  component: Grid,
  parameters: {
    status: {
      type: ["released"],
    },
  },
} as any;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Base: ComponentMeta<typeof Grid> = Template.bind({});
Base.args = {
  children: "Content"
};

export const Info: ComponentMeta<typeof Grid> = Template.bind({});
Info.args = {
  columns: 2,
  gap: 1,
  children: [
    <Container bgColor={"surface-2"} key={"container-a"}>
      <Typography tag={"h1"}>Grid 1</Typography>
    </Container>,
    <Container bgColor={"surface-2"} key={"container-b"}>
      <Grid columns={1}>
        <Typography tag={"h1"}>grid 2a</Typography>
        <Typography tag={"h1"}>grid 2b</Typography>
      </Grid>
    </Container>,
  ],
};

export const TwoOneTwo: ComponentMeta<typeof Grid> = Template.bind({});
TwoOneTwo.args = {
  columns: 3,
  gap: 2,
  children: [
    <Container bgColor={"surface-2"} key={"container-b"}>
      <Grid columns={2}>
        <Typography tag={"h1"}>grid 1a</Typography>
        <Typography tag={"h1"}>grid 1b</Typography>
      </Grid>
    </Container>,
    <Container bgColor={"surface-2"} key={"container-a"}>
      <Typography tag={"h1"}>Grid 2</Typography>
    </Container>,
    <Container bgColor={"surface-2"} key={"container-b"}>
      <Grid columns={2}>
        <Typography tag={"h1"}>grid 3a</Typography>
        <Typography tag={"h1"}>grid 3b</Typography>
      </Grid>
    </Container>,
    <Container bgColor={"surface-2"} key={"container-b"}>
      <Grid columns={1}>
        <Typography tag={"h1"}>grid 1a</Typography>
        <Typography tag={"h1"}>grid 1b</Typography>
      </Grid>
    </Container>,
    <Container bgColor={"surface-2"} key={"container-a"}>
      <Typography tag={"h1"}>Grid d</Typography>
    </Container>,
    <Container bgColor={"surface-2"} key={"container-b"}>
      <Grid columns={3}>
        <Typography tag={"h1"}>grid 3a</Typography>
        <Typography tag={"h1"}>grid 3b</Typography>
        <Typography tag={"h1"}>grid 3c</Typography>
      </Grid>
    </Container>,
  ],
};

export const Carousel: ComponentMeta<typeof Grid> = Template.bind({});
Carousel.args = {
  swipeable: "both",
  columns: 3,
  gap: 4,
  fullWidth: false,
  children: [
    <InformationCard
      number={"01"}
      type={"dark"}
      text={"Cool Cats FC ('Football Club') is a collection of 3,000 NFTs created by Cool Cats, Animoca Brands, and OneFootball Labs. Earn rewards and NFT upgrades for holding the best teams as they advance through the world's largest football tournament."}
      title={"Welcome to our documentation section"}
    />,
    <InformationCard
      number={"02"}
      type={"dark"}
      text={"Cool Cats FC ('Football Club') is a collection of 3,000 NFTs created by Cool Cats, Animoca Brands, and OneFootball Labs. Earn rewards and NFT upgrades for holding the best teams as they advance through the world's largest football tournament."}
      title={"Welcome to our carousel section"}
    />,
    <InformationCard
      number={"03"}
      type={"dark"}
      text={"Cool Cats FC ('Football Club') is a collection of 3,000 NFTs created by Cool Cats, Animoca Brands, and OneFootball Labs. Earn rewards and NFT upgrades for holding the best teams as they advance through the world's largest football tournament."}
      title={"Welcome to our test section"}
    />,
    <InformationCard
      number={"04"}
      type={"dark"}
      text={"Cool Cats FC ('Football Club') is a collection of 3,000 NFTs created by Cool Cats, Animoca Brands, and OneFootball Labs. Earn rewards and NFT upgrades for holding the best teams as they advance through the world's largest football tournament."}
      title={"Welcome to our colecti section"}
    />,
    <InformationCard
      number={"05"}
      type={"dark"}
      text={"Cool Cats FC ('Football Club') is a collection of 3,000 NFTs created by Cool Cats, Animoca Brands, and OneFootball Labs. Earn rewards and NFT upgrades for holding the best teams as they advance through the world's largest football tournament."}
      title={"Welcome to our website section"}
    />,
    <InformationCard
      number={"06"}
      type={"dark"}
      text={"Cool Cats FC ('Football Club') is a collection of 3,000 NFTs created by Cool Cats, Animoca Brands, and OneFootball Labs. Earn rewards and NFT upgrades for holding the best teams as they advance through the world's largest football tournament."}
      title={"Welcome to our page section"}
    />,
    <InformationCard
      number={"07"}
      type={"dark"}
      text={"Cool Cats FC ('Football Club') is a collection of 3,000 NFTs created by Cool Cats, Animoca Brands, and OneFootball Labs. Earn rewards and NFT upgrades for holding the best teams as they advance through the world's largest football tournament."}
      title={"Welcome to our card section"}
    />,
    <InformationCard
      number={"08"}
      type={"dark"}
      text={"Cool Cats FC ('Football Club') is a collection of 3,000 NFTs created by Cool Cats, Animoca Brands, and OneFootball Labs. Earn rewards and NFT upgrades for holding the best teams as they advance through the world's largest football tournament."}
      title={"Welcome to our gallery section"}
    />,
    <InformationCard
      number={"09"}
      type={"dark"}
      text={"Cool Cats FC ('Football Club') is a collection of 3,000 NFTs created by Cool Cats, Animoca Brands, and OneFootball Labs. Earn rewards and NFT upgrades for holding the best teams as they advance through the world's largest football tournament."}
      title={"Welcome to our marketplace section"}
    />,
    <InformationCard
      number={"10"}
      type={"dark"}
      text={"Cool Cats FC ('Football Club') is a collection of 3,000 NFTs created by Cool Cats, Animoca Brands, and OneFootball Labs. Earn rewards and NFT upgrades for holding the best teams as they advance through the world's largest football tournament."}
      title={"Welcome to our account section"}
    />,
  ]
};
