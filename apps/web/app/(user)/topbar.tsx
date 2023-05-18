"use client";
import { TopBarClient } from "../../components/layout/topbar";
import React, { useEffect, useState } from "react";
import { Cog6ToothIcon as CogIcon } from "@heroicons/react/24/solid";
import {Grid, Tooltip, KeyValueRow, InfoBar, Typography, cls} from "ui";

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

export const TopBarLayout = ({
  status,
  apps,
  kpis,
  settings,
  index,
}: {
  status: NetworkStatusResponse;
  apps: BlockchainAppsMetaResponse;
  kpis: InfoBarKPISType[];
  settings: SettingsType;
  index: IndexStatusResponse;
}) => {
  const { client, lastBlock } = useService();
  const [appState, updateAppState] =
    useState<BlockchainAppsMetaResponse["data"][0] | undefined>(apps?.data?.find(({ chainID }) => chainID === status.data.chainID));

  useEffect(() => {
    updateAppState(
      apps?.data?.find(({ chainID }) => chainID === status.data.chainID)
    );
  }, [apps, status.data.chainID]);
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
            <span
              key={"status-icon"}
              className={cls([
                lastBlock && client.socket.connected ? "bg-success" : "bg-error",
                "rounded-full w-4 h-4 flex aspect-square mr-2"
              ])}
            />
            {kpis &&
              kpis?.map(({ key, label, backup }) => (
                <KeyValueKPI
                  key={key}
                  dottedKey={key}
                  label={label}
                  backupKey={backup}
                  lastBlock={lastBlock}
                  data={{
                    index,
                    status,
                    app: appState,
                    lastBlock: lastBlock,
                  }}
                />
              ))}
          </Grid>,
        ]}
        infoItemsRight={[
          <div
            key={"dfgsdfg"}
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
              <CogIcon className="w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow cursor-pointer flex-shrink-0 rounded-full border-0 outline-0" />
            </Tooltip>
          </div>,
        ]}
      />
      <TopBar
        menuItems={
          []
          // [
          //   {
          //     label: "Validators",
          //     link: "/validators",
          //   },
          //   {
          //     label: "Transactions",
          //     link: "/transactions",
          //   },
          //   {
          //     label: "Events",
          //     link: "/events",
          //   },
          //   {
          //     label: "Votes",
          //     link: "/votes",
          //   },
          //   {
          //     label: "More",
          //     link: "#",
          //   },
          // ]
        }
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
            <Typography tag={"span"} bold={true}>
              {settings.title}
            </Typography>
          </div>
        }
      />
    </TopBarClient>
  );
};
