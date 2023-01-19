import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AdSection } from "./adSection";

export default {
  title: "Molecules/AdSection",
  component: AdSection,
  argTypes: {

  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
} as any;

const Template: ComponentStory<typeof AdSection> = (args) => <AdSection {...args} />;

export const Text: ComponentMeta<typeof AdSection> = Template.bind({});
Text.args = {
  ads: [
    {
      className: "bg-primary p-2 text-onPrimary",
      content: "test advert 1",
    },
    {
      className: "bg-primary p-2 text-onPrimary",
      content: "test advert 2",
    },
    {
      className: "bg-primary p-2 text-onPrimary",
      content: "test advert 3",
    },
  ]
};

export const Image: ComponentMeta<typeof AdSection> = Template.bind({});
Image.args = {
  ads: [
    {
      className: "bg-primary",
      content: <a href="#"><img className="block" src="https://picsum.photos/seed/a/200/150"/></a>,
    },
    {
      className: "bg-primary",
      content: <a href="#"><img className="block" src="https://picsum.photos/seed/b/200/150"/></a>,
    },
    {
      className: "bg-primary",
      content: <a href="#"><img className="block" src="https://picsum.photos/seed/c/200/150"/></a>,
    },
  ]
};

