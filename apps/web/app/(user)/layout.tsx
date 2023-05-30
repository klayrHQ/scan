import React from "react";
import { draftMode } from "next/headers";
import { Footer } from "../../components/layout/footer";
import { getNav } from "../../lib/queries/getNav";
import { getSettings } from "../../lib/queries/getSettings";
import { getFooter } from "../../lib/queries/getFooter";
import { TopBarLayout } from "./topbar";
import { ServiceProvider } from "../../providers/service";
import { getAllData } from "../../lib/sanity.service";
import {
  BlockchainAppsMetaResponse,
  IndexStatusResponse,
  NetworkStatusResponse,
} from "@liskscan/lisk-service-client/lib/types";
import { LiskscanLogs } from "../../lib/logs.liskscan";
import { getInfoBarKPIS } from "../../lib/queries/getInfoBarKPIS";
import "../../global.css";
import { getLayoutContent } from "../../lib/queries/getLayoutContent";
import { draftsClient, sanityClient } from "../../lib/sanity.client";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDraftMode = draftMode().isEnabled;
  const client = isDraftMode ? draftsClient : sanityClient;

  // const startSanity = new Date().getTime()
  // const menuItems = await getNav();
  // const settings = await getSettings();
  // const footer = await getFooter();
  // const infoBar = await getInfoBarKPIS()
  // console.log("load speed (content): ", new Date().getTime() - startSanity, "ms")
  const startSanity = new Date().getTime();
  const { menuItems, settings, footer, infoBar } = await getLayoutContent(
    client
  );
  console.log(
    "load speed (content): ",
    new Date().getTime() - startSanity,
    "ms"
  );
  const start = new Date().getTime();
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
      serviceType: "lisk-service",
    },
  ]);
  console.log(
    "load speed (apps, status, index): ",
    new Date().getTime() - start,
    "ms"
  );
  const { status, apps, index } = result as {
    status: NetworkStatusResponse;
    apps: BlockchainAppsMetaResponse;
    index: IndexStatusResponse;
  };
  return (
    <html className={"dark"}>
      <LiskscanLogs />
      <head>
        <title>Liskscan - Lisk blockchain explorer</title>
        <link rel={"icon"} href={"/images/logo-dark.svg"} />
        <link rel={"shortcut icon"} href={"/images/logo-dark.svg"} />
        <link rel={"apple-touch-icon"} href={"/images/logo-dark.svg"} />
      </head>
      <body className={"bg-background"}>
        <ServiceProvider>
          <div
            className={
              "flex flex-col box-border bg-background space-y-8 w-full top-0 left-0 right-0"
            }
          >
            <TopBarLayout
              isDraftMode={isDraftMode}
              settings={settings}
              kpis={infoBar.kpis}
              apps={apps}
              index={index}
              status={status}
              menuItems={menuItems}
            />
            {children}
          </div>
          <Footer copyright={settings.copyright} lists={footer.lists} />
        </ServiceProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () { updateTheme() })()`,
          }}
        />
      </body>
    </html>
  );
}
