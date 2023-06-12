import React from "react";
import { draftMode } from "next/headers";
import { Footer } from "../../components/layout/footer";
import { TopBarLayout } from "./topbar";
import { ServiceProvider } from "../../providers/service";
import { getAllData } from "../../lib/sanity.service";
import {
  BlockchainAppsMetaResponse,
  IndexStatusResponse,
  NetworkStatusResponse,
} from "@liskscan/lisk-service-client/lib/types";
import { LiskscanLogs } from "../../lib/logs.liskscan";
import "../../global.css";
import { getLayoutContent } from "../../lib/queries/getLayoutContent";
import { draftsClient, sanityClient } from "../../lib/sanity.client";
import { SanityStoreProvider } from "../../providers/sanity";
import { sanitySsrQuery, setSanitySSRSnapshot } from "../../lib/sanity.groq";
import { SanityDocument } from "@sanity/types";
import {FavouritesProvider} from "../../providers/favourites";
import {RecentSearchesProvider} from "../../providers/recentSearches";
import {FloatingMenuContainer} from "../../components/floatingMenuContainer";

const getSanitySnapshot = async (): Promise<{
  result: SanityDocument[];
  query: string;
}> => {
  const snapshotResponse = await fetch(
    "https://s0i2hzjh.api.sanity.io/v2021-10-21/data/query/production?query=*",
    { next: { tags: ["revalidate"] } }
  );
  console.log("Sanity snapshot taken");
  return snapshotResponse.json();
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const snapshot = await getSanitySnapshot();
  setSanitySSRSnapshot(snapshot);
  const isDraftMode = draftMode().isEnabled;
  const client = isDraftMode ? draftsClient.fetch : sanitySsrQuery;

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
        <SanityStoreProvider snapshot={snapshot}>
          <ServiceProvider>
            <FavouritesProvider>
              <RecentSearchesProvider>
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
                <Footer copyright={settings.copyright} lists={footer.lists}/>
                <FloatingMenuContainer menuItems={menuItems} />
              </RecentSearchesProvider>
            </FavouritesProvider>
          </ServiceProvider>
        </SanityStoreProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () { 
              const updateTheme = () => {
                switch (getCurrentTheme()) {
                  case "dark":
                    document.documentElement.classList.add("dark");
                    document.documentElement.classList.remove("light");
                    document.documentElement.setAttribute("color-theme", "dark");
                    break;
                  default:
                    document.documentElement.classList.remove("dark");
                    document.documentElement.classList.add("light");
                    document.documentElement.setAttribute("color-theme", "light");
                }
              };
              updateTheme() 
            })()`,
          }}
        />
      </body>
    </html>
  );
}
