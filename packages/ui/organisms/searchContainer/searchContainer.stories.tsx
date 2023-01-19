import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchContainer } from "./searchContainer";
import {compactString} from "../../assets/utils";

export default {
  title: "Organisms/SearchContainer",
  component: SearchContainer,
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
    search: {
      results: {
        results: [
          {
            cols: [{value: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"}],
            type: "account",
            id: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
            username: "test",
          },
          {
            cols: [{value: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"}],
            type: "account",
            id: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
            username: "moosty",
          },
          {
            cols: [{value: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g"}],
            type: "account",
            id: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g",
          },
        ]
      },
      setSearch: (searchInput: string) => console.log(searchInput),
      searching: false,
    },
  }
} as any;

const Template: ComponentStory<typeof SearchContainer> = (args) => <SearchContainer {...args} />;

export const Primary: ComponentMeta<typeof SearchContainer> = Template.bind({});
Primary.args = {

};

export const RecentSearch: ComponentMeta<typeof SearchContainer> = Template.bind({});
RecentSearch.args = {
  saveSearch: {
    saveSearch: () => console.log("saved search"),
    recentSearches: [
      {
        address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        username: "test"
      },
      {
        address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
        username: "moosty"
      },
    ],
    recentSearchesStorage: [
      {
        address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        username: "test"
      },
      {
        address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
        username: "moosty"
      },
    ]
  }
};

export const Ads: ComponentMeta<typeof SearchContainer> = Template.bind({});
Ads.args = {
  ads: [
    {
      className: "bg-primary",
      content: <a href="#"><img className="block" src="https://picsum.photos/seed/a/150/100"/></a>,
    },
    {
      className: "bg-primary",
      content: <a href="#"><img className="block" src="https://picsum.photos/seed/b/150/100"/></a>,
    },
    {
      className: "bg-primary",
      content: <a href="#"><img className="block" src="https://picsum.photos/seed/c/150/100"/></a>,
    },
  ]
};

export const Complete: ComponentMeta<typeof SearchContainer> = Template.bind({});
Complete.args = {
  saveSearch: {
    saveSearch: () => console.log("saved search"),
    recentSearches: [
      {
        address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        username: "test"
      },
      {
        address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
        username: "moosty"
      },
    ],
    recentSearchesStorage: [
      {
        address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        username: "test"
      },
      {
        address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
        username: "moosty"
      },
    ]
  },
  ads: [
    {
      className: "bg-primary",
      content: <a href="#"><img className="block" src="https://picsum.photos/seed/a/150/100"/></a>,
    },
    {
      className: "bg-primary",
      content: <a href="#"><img className="block" src="https://picsum.photos/seed/b/150/100"/></a>,
    },
    {
      className: "bg-primary",
      content: <a href="#"><img className="block" src="https://picsum.photos/seed/c/150/100"/></a>,
    },
  ]
};
