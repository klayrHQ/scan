import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer } from "./footer";
import {compactString} from "../../assets/utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "organisms/Footer",
  component: Footer,
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
    footerContent: [
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
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary: ComponentMeta<typeof Footer> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  copyrightContent:
    <p className="text-base text-onBackgroundLow font-bold mb-2">
      &copy;{new Date().getFullYear()} by{" "}
      <a
        className={"text-secondary"}
        target="_blank"
        rel="noopener noreferrer"
        href="https://moosty.com"
      >
        MOOSTY
      </a>
      <span className={"text-onBackgroundMedium mx-2"}>I|I</span>
      <span className={"text-onBackgroundLow"}>
        -
      </span>
    </p>,
};
