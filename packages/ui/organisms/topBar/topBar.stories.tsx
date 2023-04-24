import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TopBar } from "./topBar";
import {LiskScanIcon} from "../../assets/icons";
import {Logo} from "../../molecules/logo/logo";
import {FavouritesWindow} from "../favouritesWindow/favouritesWindow";
import {favourites, menuItems} from "../../assets/mockupData";
import {compactString} from "../../assets/utils";
import {Popover} from "../../atoms/popover/popover";
import {SearchContainer} from "../searchContainer/searchContainer";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {MobileMenu} from "../mobileMenu/mobileMenu";

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
        <FavouritesWindow
          favourites={favourites}
          unFavourite={() => console.log("unfavourite")}
          onClick={() => console.log("route to favourite")}
        />,
        <Popover
          className={"md:hidden"}
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
        /*<MobileMenu
          settings={{}}
          status={}
          menu={}
          ads={}
          favouritesWindowData={}
          compactString={}
          search={}
        />*/
      ]}
    />
  );
}
