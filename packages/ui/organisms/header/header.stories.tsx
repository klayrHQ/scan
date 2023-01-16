import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./header";
import {compactString} from "../../assets/utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/Header",
  component: Header,
  argTypes: {
    className: { control: "text" },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary: ComponentMeta<typeof Header> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  topBarData: {
    menu: [
      {
        label: "Transactions",
        link: "#",
      },
      {
        label: "Delegates",
        link: "#",
      },
      {
        label: "Votes",
        link: "#",
      },
      {
        label: "Tools",
        link: "#",
      }
    ],
    favouritesWindowData: {
      favourites: [
        {
          address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
          username: "test",
        },
        {
          address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
          username: "moosty",
        },
        {
          address: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g",
        },
      ],
      menuCloseFunction: () => console.log("menu close function"),
      unFavourite: console.log("unfavourite"),
      hasFavourites: true,
      updateFavourites: console.log("update favourites"),
      compactString: compactString,
      parsedSettings: {}
    },
  },
};