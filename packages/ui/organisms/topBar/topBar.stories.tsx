import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TopBar } from "./topBar";
import {LiskScanIcon} from "../../assets/icons";
import {Logo} from "../../molecules/logo/logo";
import {FavouritesWindow} from "../favouritesWindow/favouritesWindow";
import {ads, favourites, menuItems} from "../../assets/mockupData";
import {compactString} from "../../assets/utils";
import {Popover} from "../../atoms/popover/popover";
import {SearchContainer} from "../searchContainer/searchContainer";
import {MagnifyingGlassIcon, StarIcon} from "@heroicons/react/24/solid";
import {MobileMenu} from "../mobileMenu/mobileMenu";
import {Tooltip} from "../../atoms/tooltip/tooltip";
import {Link} from "../../atoms/link/link";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/TopBar",
  component: TopBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    menu: {control: "object"},
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
const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args} />;

export const Primary: ComponentMeta<typeof TopBar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  className: "h-20"
};

export const TopBarMockup: ComponentStory<typeof TopBar> = () => {
  const [searchValue, setSearchValue] = useState<string>()

  return (
    <TopBar
      logo={
        <Logo
          link={"#"}
          href={"#"}
          title={"Liskscan"}
          color={"onTopbar"}
          image={<LiskScanIcon className="cursor-pointer mr-2 fill-current text-onTopbar"/>}
        />
      }
      menuItems={menuItems}
      menuItemsRight={[
        <Popover
          containerClassName={"hidden md:block"}
          className={"top-0 w-screen max-w-full lg:max-w-xl"}
          placement={"right"}
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
        </Popover>,
        <Popover
          containerClassName={"hidden md:block"}
          containerWidth={"full"}
          className={"top-0 w-screen max-w-full lg:max-w-xl"}
          placement={"right"}
          button={
              <div className="group bg-background text-onSurfacePrimaryLow rounded inline-flex items-center text-base font-medium focus:outline-none w-full relative cursor-pointer">
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
            recentSearches={favourites}
            searchFunction={() => console.log("search")}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            searching={false}
          />
        </Popover>,
        <MobileMenu
          status={"connected"}
          menuItems={Array.from(Array(5).keys()).map(
            (index) => (
              <>
                <Link key={`menu-item-${index + 1}`} color={"inherit"} href={"#"} link={"#"}>{`Menu Item ${index + 1}`}</Link>
              </>
            )
          )}
          subMenu={Array.from(Array(8).keys()).map(
            (index) => (
              <>
                <Link key={`menu-item-${index + 1}`} color={"inherit"} href={"#"} link={"#"}>{`Submenu Item ${index + 1}`}</Link>
              </>
            )
          )}
          menuItemsTop={[
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
          ]}
        />
      ]}
    />
  );
}
