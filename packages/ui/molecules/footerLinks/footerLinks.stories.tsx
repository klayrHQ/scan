import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FooterLinks } from "./footerLinks";
import {compactString} from "../../assets/utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/FooterLinks",
  component: FooterLinks,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {
    footerData: [
      {
        category: "Liskscan",
        items: [
          {
            label: "Read the blog",
            link: "https://lisk.com/blog/announcement/replacing-lisk-explorer",
          },
          {
            label: "About the project team",
            link: "https://moosty.com",
          },
        ],
      },
      {
        category: "Lisk",
        items: [
          {
            label: "What is Lisk?",
            link: "https://lisk.com/what-is-lisk",
          },
          {
            label: "What is blockchain?",
            link: "https://lisk.com/what-is-blockchain",
          },
          {
            label: "Lisk SDK documentation",
            link: "https://lisk.com/documentation/lisk-sdk/index.html",
          },
          {
            label: "Join Lisk chat",
            link: "https://lisk.chat",
          },
        ],
      },
      {
        category: "Moosty",
        items: [
          {
            label: "About the team",
            link: "https://moosty.com/",
          },
          {
            label: "See projects",
            link: "https://moosty.com/lisk-ecosystem/",
          },
          {
            label: "Get in touch",
            link: "https://moosty.com/contact/",
          },
        ],
      },
    ]
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FooterLinks> = (args) => <FooterLinks {...args} />;

export const Primary: ComponentMeta<typeof FooterLinks> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
