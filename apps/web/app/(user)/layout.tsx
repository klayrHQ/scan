import React from "react";
import { Footer } from "../../components/layout/footer";
import { getNav } from "../../lib/queries/getNav";
import { getSettings } from "../../lib/queries/getSettings";
import { getFooter } from "../../lib/queries/getFooter";
import { TopBarLayout } from "./topbar";
import { ServiceProvider } from "../../providers/service";
import { getAllData } from "../../lib/sanity.service";
import {
  BlockchainAppsMetaResponse, IndexStatusResponse,
  NetworkStatusResponse,
} from "@liskscan/lisk-service-client/lib/types";
import { BlocksResponse } from "@liskscan/lisk-service-client/lib/types/api/blocks";
import { LiskscanLogs } from "../../lib/logs.liskscan";
import {getInfoBarKPIS} from "../../lib/queries/getInfoBarKPIS";
import "../../global.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = await getNav();
  const settings = await getSettings();
  const footer = await getFooter();
  const infoBar = await getInfoBarKPIS()
  const start = new Date().getTime()
  const result = await getAllData([
    {
      key: "status",
      call: "get.network.status",
      serviceType: "lisk-service",
    },
    {
      key: "apps",
      call: "get.blockchain.apps.meta",
      serviceType: "lisk-service",
    },
    {
      key: "index",
      call: "get.index.status",
      serviceType: "lisk-service"
    }
  ]);
  console.log(new Date().getTime() - start, "ms")
  const { status, apps, index, blocks } = result as {
    status: NetworkStatusResponse;
    apps: BlockchainAppsMetaResponse;
    blocks: BlocksResponse;
    index: IndexStatusResponse
  };

  return (
    <html>
      <LiskscanLogs />
      <head>
        <title>Blocks | Liskscan - Lisk blockchain explorer</title>
        <link rel={"icon"} href={"/images/logo-dark.svg"}/>
        <link rel={"shortcut icon"} href={"/images/logo-dark.svg"}/>
        <link rel={"apple-touch-icon"} href={"/images/logo-dark.svg"}/>
      </head>
      <body className={"bg-background"}>
        <ServiceProvider>
          <div
            className={
              "flex flex-col box-border bg-background space-y-8 w-full top-0 left-0 right-0"
            }
          >
            <TopBarLayout
              settings={settings}
              kpis={infoBar.kpis}
              apps={apps}
              index={index}
              status={status}
              height={status.status === "success" ? status?.data?.height : 0}
            />
            {children}
          </div>
          <Footer copyright={settings.copyright} lists={footer.lists} />
        </ServiceProvider>
      </body>
    </html>
  );
}
