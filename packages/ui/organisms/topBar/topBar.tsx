import React from "react";
import {Logo} from "../../molecules/logo/logo";
import {LiskScanIcon} from "../../assets/icons";
import {Menu} from "../../molecules/menu/menu";

export interface TopBarProps {
  menu: {
    label: string
    link: string
  }[]
  subMenu: {
    title: string
    items: {
      label: string
      subLabel: string
      link: string
      icon: any
      disabled?: boolean
      badge?: string
    }[]
  }
  actions?: {
    title: string
    action: any
  }[]
  className: string
}

export const TopBar = ({
  className,
   menu,
   subMenu,
   actions,
}: TopBarProps) => (
  <>
    <nav
      className={[
        "bg-topbar text-onTopbar ",
        "z-40 w-full flex md:mb-4 items-center",
        className,
      ].join(" ")}
    >
      <div className="flex w-app max-w-app m-auto justify-between items-center h-16 px-4 w-full">
        <div>
          <Logo
            link={"#"}
            href={"#"}
            title={"Liskscan"}
            color={"text-onTopbar"}
            image={<LiskScanIcon className="cursor-pointer mr-2 fill-current text-onTopbar"/>}
          />
          <Menu menu={menu}/>
        </div>
        <div className="hidden relative lg:flex flex-row items-center space-x-4 lg:ml-4">
          {/*<FavouritesWindow  menuCloseFunction={() => console.log("close menu")}/>*/}
          {/*<SearchExtendedContainer />*/}
        </div>
      </div>
      {/*<MobileMenu menu={menu} subMenu={subMenu} />*/}
    </nav>
  </>
)