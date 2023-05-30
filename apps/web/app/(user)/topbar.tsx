"use client";
import { TopBarClient } from "../../components/layout/topbar";
import React, { useEffect, useState } from "react";
import {
  Cog6ToothIcon as CogIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { Grid, Tooltip, KeyValueRow, InfoBar, Typography, cls } from "ui";
import { formatDistance } from "date-fns";
import { useService } from "../../providers/service";
import {
  BlockchainAppsMetaResponse,
  IndexStatusResponse,
  NetworkStatusResponse,
} from "@liskscan/lisk-service-client/lib/types";
import { InfoBarKPISType } from "../../lib/queries/getInfoBarKPIS";
import { TopBar } from "ui/organisms/topBar/topBar";
import Image from "next/image";
import { SettingsType } from "../../lib/queries/getSettings";
import { KeyValueKPI } from "../../components/data/keyValueKPI";
import { MenuItem } from "../../components/layout/menuItem";
import Link from "next/link";
import { SubMenu } from "../../components/layout/subMenu";
import { BlocksResponse } from "@liskscan/lisk-service-client/lib/types/api/blocks";
import {getCurrentTheme, switchThemeMode, updateTheme} from "./theme";

export const TopBarLayout = ({
  status,
  apps,
  kpis,
  settings,
  index,
  menuItems,
}: {
  status: NetworkStatusResponse;
  apps: BlockchainAppsMetaResponse;
  kpis: InfoBarKPISType[];
  settings: SettingsType;
  index: IndexStatusResponse;
  menuItems: any[];
}) => {
  const { events, connected, lastUpdate } = useService();
  const [appState, updateAppState] = useState<
    BlockchainAppsMetaResponse["data"][0] | undefined
  >(apps?.data?.find(({ chainID }) => chainID === status.data.chainID));
  const [themeMode, updateThemeMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    updateThemeMode(getCurrentTheme());
    updateTheme();
  }, []);

  useEffect(() => {
    updateAppState(
      apps?.data?.find(({ chainID }) => chainID === status.data.chainID)
    );
  }, [apps, status?.data?.chainID]);

  useEffect(() => console.log(events), [events?.["new.block"]]);
  return (
    <TopBarClient>
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
            <Tooltip label="Dark mode" placement={"bottom"} offset={[0, 10]}>
              {themeMode === "dark" ? (
                <MoonIcon
                  onClick={() => {
                    switchThemeMode()
                    updateThemeMode("light")
                  }}
                  className="mt-1 w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow cursor-pointer flex-shrink-0 rounded-full border-0 outline-0"
                />
              ) : (
                <SunIcon
                  onClick={() => {
                    switchThemeMode()
                    updateThemeMode("dark")
                  }}
                  className="mt-1 w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow cursor-pointer flex-shrink-0 rounded-full border-0 outline-0"
                />
              )}
            </Tooltip>
          </div>,
        ]}
      />
      <TopBar
        menuItems={menuItems.map((item) =>
          item.items ? (
            <SubMenu key={item._key} label={item.label} items={item.items} />
          ) : (
            <Link href={item.link} key={item._key}>
              <MenuItem label={item.label} link={item.link} />
            </Link>
          )
        )}
        menuItemsRight={[]}
        logo={
          <div
            className={[
              "cursor-pointer",
              " text-lg md:text-2xl items-center flex font-bold",
            ].join(" ")}
          >
            <Image
              className={"mr-2"}
              width={24}
              height={24}
              src={"/images/logo.svg"}
              alt={"Liskscan logo"}
            />
            <Link href={"/"}>
              <Typography tag={"span"} bold color={"onInfobar"}>
                {settings.title}
              </Typography>
            </Link>
          </div>
        }
      />
    </TopBarClient>
  );
};
