import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MobileMenu } from "./mobileMenu";
import {SearchContainer} from "../searchContainer/searchContainer";
import {FavouritesWindow} from "../favouritesWindow/favouritesWindow";
import {ads, favourites} from "../../assets/mockupData";
import {Popover} from "../../atoms/popover/popover";
import {MagnifyingGlassIcon, StarIcon} from "@heroicons/react/24/solid";
import {Tooltip} from "../../atoms/tooltip/tooltip";
import {Link} from "../../atoms/link/link";

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

  }
} as any;

const Template: ComponentStory<typeof MobileMenu> = (args) => <MobileMenu {...args} />;

export const Primary: ComponentMeta<typeof MobileMenu> = Template.bind({});
Primary.args = {
  menuItems: Array.from(Array(5).keys()).map(
    (index) => (
      <>
        <Link key={`menu-item-${index + 1}`} color={"inherit"} href={"#"} link={"#"}>{`Menu Item ${index + 1}`}</Link>
      </>
    )
  ),
  subMenu: Array.from(Array(8).keys()).map(
    (index) => (
      <>
        <Link key={`menu-item-${index + 1}`} color={"inherit"} href={"#"} link={"#"}>{`Submenu Item ${index + 1}`}</Link>
      </>
    )
  ),
  menuItemsTop: [
    <div className="w-app mx-auto flex justify-end mb-3">
      <Popover
        className={"max-w-full w-full"}
        containerWidth={"full"}
        button={
          <div className="group bg-background text-onSurfacePrimaryLow rounded inline-flex items-center text-base font-medium focus:outline-none w-full relative w-full cursor-pointer" >
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
        }
      >
        <SearchContainer
          ads={ads}
          searching={false}
          recentSearches={favourites}
          searchFunction={() => console.log("searching")}
          setSearchValue={() => console.log("search value")}
        />
      </Popover>
    </div>,
    <div className="w-app mx-auto flex justify-end mb-3">
      <Popover
        className={"max-w-full w-full"}
        containerWidth={"full"}
        button={
          favourites.length > 0 ? (
            <div
              className={`cursor-pointer w-full flex flex-row font-medium rounded pl-3 lg:pl-2 pr-3 py-1 lg:py-2 items-center`}
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
