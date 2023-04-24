import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchContainer } from "./searchContainer";
import {compactString} from "../../assets/utils";
import {Popover} from "../../atoms/popover/popover";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

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

const Template: ComponentStory<typeof SearchContainer> = (args) => (
  <Popover
    button={
    <button className={"group bg-background text-onSurfacePrimaryLow rounded inline-flex items-center text-base font-medium focus:outline-none w-full"}>
      <div className="relative w-full cursor-pointer" >
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <MagnifyingGlassIcon />
        </div>
        <input
          id="search"
          name="search"
          className={[
            "block w-full pl-8 pr-3 py-2 border border-transparent rounded text-base cursor-pointer",
            "leading-5 bg-background text-onBackground placeholder-onSurfaceLow",
          ].join(" ")}
          type="search"
          readOnly={true}
          autoComplete="off"
          placeholder="Search"
        />
      </div>
    </button>
  }>
    <SearchContainer {...args} />
  </Popover>
);

export const Primary: ComponentMeta<typeof SearchContainer> = Template.bind({});
Primary.args = {

};

export const RecentSearch: ComponentMeta<typeof SearchContainer> = Template.bind({});
RecentSearch.args = {
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
