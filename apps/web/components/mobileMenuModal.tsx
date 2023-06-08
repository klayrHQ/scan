"use client"
import React, {useEffect, useState} from "react";
import {ModalFullHeight} from "ui/atoms/modalFullHeight/modalFullHeight";
import {Button, cls, Grid, InfoBar, KeyValueRow, Tooltip} from "ui";
import {
  Bars3Icon as MenuIcon,
  Cog6ToothIcon as CogIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon as XIcon
} from "@heroicons/react/24/solid";
import {MobileMenu} from "ui/organisms/mobileMenu/mobileMenu";
import {FavouritesModal} from "./favouritesModal";
import {SearchModal} from "./searchModal";
import {MenuItem} from "./layout/menuItem";
import Link from "next/link";
import {formatDistance} from "date-fns";
import {KeyValueKPI} from "./data/keyValueKPI";
import {BlocksResponse} from "@liskscan/lisk-service-client/lib/types/api/blocks";
import {switchThemeMode} from "../app/(user)/theme";
import RefreshButton from "../app/(user)/refreshButton";
import {InfoBarKPISType} from "../lib/queries/getInfoBarKPIS";
import {IndexStatusResponse} from "@liskscan/lisk-service-client/lib/types";


export const MobileMenuModal = ({
  menuItems,
  connected,
  lastUpdate,
  kpis,
  index,
  appState,
  events,
  themeMode,
  updateThemeMode,
}: {
  menuItems: Array<any>
  connected: number | undefined
  lastUpdate: number | undefined
  kpis: InfoBarKPISType[]
  index: IndexStatusResponse
  appState: any
  events: any
  themeMode: string
  updateThemeMode: (themeMode: "dark" | "light") => void
}) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    console.log(submenu)
  }, [menuItems])

  const extractSubmenu = (items: Array<any>) => {
    let tempSubMenu: any[] = []
    items.map((item) => {
      if (item.items) {
        item.items.map((subItem: any) => {
          tempSubMenu.push(subItem);
        })
      }
    });

    if (tempSubMenu) return tempSubMenu;
  };

  const submenu: Array<any> = extractSubmenu(menuItems) || [];

  return (
    <ModalFullHeight
      containerClassname={"md:hidden"}
      button={
        <Button
          className="inline-flex items-center justify-center px-2 rounded-md text-gray-400 bg-transparent border-none hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          label={
            <>
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-5 w-5"/>
            </>
          }
        />
      }
      closeButton={
        <Button
          className="inline-flex items-center justify-center px-2 focus:outline-none top-[3rem]"
          aria-controls="mobile-menu"
          aria-expanded="false"
          label={
            <>
              <span className="sr-only">Close main menu</span>
              <XIcon className="h-5 w-5" />
            </>
          }
          type={"transparent"}
        />
      }
      setIsOpen={setOpen}
      isOpen={open}
      hideBackdrop
    >
      <InfoBar
        infoItemsLeft={[
          <Grid
            key={"asdf"}
            className={"gap-2"}
            gap={2}
            flex
            columns={2}
            mobileColumns={1}
          >
            <Tooltip
              placement={"left"}
              label={
                connected
                  ? `Connection established in ${connected}ms${
                    lastUpdate
                      ? `, last update was: ${formatDistance(
                        new Date(lastUpdate),
                        new Date(),
                        {
                          addSuffix: true,
                          includeSeconds: true,
                        }
                      )}`
                      : ""
                  }`
                  : "Connecting to service"
              }
            >
              <span
                key={"status-icon"}
                className={cls([
                  connected ? "bg-success" : "bg-error",
                  "rounded-full w-4 h-4 flex aspect-square mr-2",
                ])}
              />
            </Tooltip>
            {kpis &&
              kpis?.map(({ key, label, backup, _key }) => (
                <KeyValueKPI
                  key={_key}
                  dottedKey={key}
                  label={label}
                  backupKey={backup}
                  lastBlock={events["new.block"] as BlocksResponse["data"][0]}
                  data={{
                    index,
                    status,
                    app: appState,
                    lastBlock: events["new.block"],
                  }}
                />
              ))}
          </Grid>,
        ]}
        infoItemsRight={[
          <div
            key={"dfgssddfg"}
            className={
              "justify-end w-app md:w-auto space-x-2 md:space-x-4 items-center false flex sm:flex-row sm:gap-0 flex-row gap-0"
            }
          >
            <KeyValueRow
              inline
              color={"onTopbar"}
              label={"MC:"}
              value={"108,614,363 EUR"}
              valueBold
            />
            <Tooltip label="Settings" placement={"bottom"} offset={[0, 10]}>
              <CogIcon className="mt-1 w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow cursor-pointer flex-shrink-0 rounded-full border-0 outline-0" />
            </Tooltip>
            <Tooltip
              label={themeMode === "dark" ? "Dark mode" : "Light mode"}
              placement={"bottom"}
              offset={[0, 10]}
            >
              {themeMode === "dark" ? (
                <MoonIcon
                  onClick={() => {
                    switchThemeMode();
                    updateThemeMode("light");
                  }}
                  className="mt-1 w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow cursor-pointer flex-shrink-0 rounded-full border-0 outline-0"
                />
              ) : (
                <SunIcon
                  onClick={() => {
                    switchThemeMode();
                    updateThemeMode("dark");
                  }}
                  className="mt-1 w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow cursor-pointer flex-shrink-0 rounded-full border-0 outline-0"
                />
              )}
            </Tooltip>
          </div>,
        ]}
      />
      <MobileMenu
        menuItems={
          menuItems.map(item =>
            !item.items &&
            <Link className={"text-onSurfaceHigh"} href={item.link} key={item._key} onClick={() => setOpen(false)}>
              <MenuItem label={item.label} link={item.link} />
            </Link>
          )
        }
        subMenu={
          submenu.map(item =>
            <Link className={"text-onSurfaceLow"} href={item.link} key={item._key} onClick={() => setOpen(false)}>
              <MenuItem label={item.label} link={item.link} />
            </Link>
          )
        }
        menuItemsTop={[
          <div className="w-app mx-auto flex justify-end mb-3">
            <SearchModal menuCloseFunction={() => setOpen(false)} mobile={true} />
          </div>,
          <div className="w-app mx-auto flex justify-end mb-3">
            <FavouritesModal menuCloseFunction={() => setOpen(false)} mobile={true} />
          </div>
        ]}
      />
    </ModalFullHeight>
  )
}