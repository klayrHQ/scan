import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./header";
import {compactString} from "../../assets/utils";
import {TopBarMockup} from "../topBar/topBar.stories";
import {Logo} from "../../molecules/logo/logo";
import {LiskScanIcon} from "../../assets/icons";
import {ads, favourites, menuItems} from "../../assets/mockupData/mockupData";
import {Popover} from "../../atoms/popover/popover";
import {Cog6ToothIcon as CogIcon, MagnifyingGlassIcon, StarIcon} from "@heroicons/react/24/solid";
import {Tooltip} from "../../atoms/tooltip/tooltip";
import {FavouritesWindow} from "../favouritesWindow/favouritesWindow";
import {SearchContainer} from "../searchContainer/searchContainer";
import {MobileMenu} from "../mobileMenu/mobileMenu";
import {Link} from "../../atoms/link/link";
import Status from "../../atoms/status/status";
import {Button} from "../../atoms";
import {Typography} from "../../atoms/typography/typography";
import {KeyValueRow} from "../../molecules/keyValueRow/keyValueRow";
import {MobileMenuMockup} from "../mobileMenu/mobileMenu.stories";
import {Grid} from "../../atoms/grid/grid";

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

};

export const HeaderMockup: ComponentStory<typeof Header> = () => {
  const [searchValue, setSearchValue] = useState<string>()

  return (
    <Header
      infoItemsLeft={[
        <Status status={"connected"} />,
        <Grid className={"gap-2"} flex columns={2} mobileColumns={1}>
          <KeyValueRow inline color={"onTopbar"} label={"chain:"} value={"Lisk"} valueBold/>
          <KeyValueRow inline color={"onTopbar"} label={"Network:"} value={"mainnet"} valueBold/>
          <KeyValueRow className={"hidden md:flex"} inline color={"onTopbar"} label={"Block height:"} value={"21,473,821"} valueBold/>
        </Grid>
      ]}
      infoItemsRight={[
        <KeyValueRow className={"hidden md:flex"} inline color={"onTopbar"} label={"MC:"} value={"141,141,816LSK"} valueBold />,
        <Tooltip
          label="Settings"
          placement={"bottom"}
          offset={[0,10]}
        >
          <CogIcon
            onClick={() => console.log("themes")}
            className="w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow cursor-pointer flex-shrink-0 rounded-full border-0"/>
        </Tooltip>,
      ]}
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
                <Typography tag={"span"} color={"onTopbar"}>Favourites</Typography>
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
                  <Typography tag={"span"} color={"onTopbar"}>Favourites</Typography>
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
        <MobileMenuMockup />,
      ]
    }
    />
  )
};