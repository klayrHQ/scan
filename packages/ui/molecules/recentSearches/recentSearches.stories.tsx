import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RecentSearches } from "./recentSearches";
import {compactString} from "../../assets/utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/RecentSearches",
  component: RecentSearches,
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
    compactString: compactString,
    menuCloseFunction: () => console.log("menu close function")
  }
} as any;

const Template: ComponentStory<typeof RecentSearches> = (args) => <RecentSearches {...args} />;

export const Primary: ComponentMeta<typeof RecentSearches> = Template.bind({});
Primary.args = {
  saveSearch: {
    saveSearch: (address, username) => console.log(address, "\n", username),
    recentSearches: [
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
    ]
  }
};

