import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MobileMenu } from "./mobileMenu";
import {compactString} from "../../assets/utils";
import {SearchContainer} from "../searchContainer/searchContainer";
import {FavouritesWindow} from "../favouritesWindow/favouritesWindow";
import {ads, favourites} from "../../assets/mockupData";
import {Popover} from "../../atoms/popover/popover";
import {StarIcon} from "@heroicons/react/24/solid";
import {Tooltip} from "../../atoms/tooltip/tooltip";

export default {
  title: "Organisms/MobileMenu",
  component: MobileMenu,
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

const Template: ComponentStory<typeof MobileMenu> = (args) => <MobileMenu {...args} />;

export const Primary: ComponentMeta<typeof MobileMenu> = Template.bind({});
Primary.args = {
  menuItemsTop: [
    <div className="w-app mx-auto flex justify-end mb-3">
      <SearchContainer
        ads={ads}
        searching={false}
        recentSearches={favourites}
        searchFunction={() => console.log("searching")}
        setSearchValue={() => console.log("search value")}
      />
    </div>,
    <div className="w-app mx-auto flex justify-end mb-3">
      <Popover
        className={"max-w-full w-full"}
        containerWidth={"full"}
        button={
          favourites.length > 0 ? (
            <div
              className={`cursor-pointer w-full hover:bg-menuButton flex flex-row font-medium rounded pl-3 lg:pl-2 pr-3 py-1 lg:py-2 items-center`}
            >
              <StarIcon className="w-4 lg:w-5 h-4 lg:h-5 mr-1 text-onSurfaceHigh lg:text-onTopbar" />
              <span className="">Favourites</span>
            </div>
          ) : (
            <Tooltip
              label="No favorites set"
              placement={"bottom"}
            >
              <div
                className={`cursor-default hover:bg-topbar cursor-pointer hover:bg-menuButton flex flex-row font-medium rounded pl-3 lg:pl-2 pr-3 py-1 lg:py-2 items-center`}
              >
                <StarIcon className="w-4 lg:w-5 h-4 lg:h-5 mr-1 text-onSurfaceHigh lg:text-onTopbar" />
                <span className="">Favourites</span>
              </div>
            </Tooltip>
          )
        }
      >
        <FavouritesWindow
          favourites={favourites}
          unFavourite={() => console.log("unfavourited")}
          onClick={() => console.log("route to favourite account")}
        />
      </Popover>
    </div>
  ]
};
