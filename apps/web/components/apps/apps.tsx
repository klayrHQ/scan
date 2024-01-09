"use client"
import {TitleBoxSlice} from "../../slices/titleBox";
import {Grid} from "ui";
import {useEffect, useState} from "react";
import {getData} from "../../lib/sanity.service";
import {TableSlice} from "../../slices/table";
import {ConsoleLogTester} from "../consoleLogTester";
import {columns} from "./appsColumns";
import {AppsTable} from "./appsTable";

export const Apps = () => {

  const [apps, setApps] = useState<any>()
  const [appsNew, setAppsNew] = useState<any>()

  useEffect(() => {
    const getApps = async () => {
      const fetchedApps = await getData("lisk-service", "get.blockchain.apps")

      setApps(fetchedApps);
    };
    getApps();
  }, []);

  useEffect(() => {

    const getLogo = async () => {

      const appsData = await Promise.all(apps.data.map(async (app: any) => {
        const meta = await getData("lisk-service", "get.blockchain.apps.meta", { chainName: app.chainName });
        const logo = meta?.data[0]?.logo;

        const generator = await getData("lisk-service", "get.validator", { address: app.address });

        return {
          logo: logo,
          generator: generator?.meta,
          ...app,
        };
      }));

      setAppsNew(appsData);
    }

    getLogo();
  }, [apps]);

  return (
    <>
      <Grid className={"max-w-app w-app lg:w-full mx-auto"} columns={3}>
        <TitleBoxSlice
          description={{
            type: "literal",
            value: "Overview of all the Apps in the Lisk network."
          }}
          title={{
            format: {
              // @ts-ignore
              typography: [
                {
                  value: "Heading3",
                  key: "size"
                }
              ],
              tag: "h2"
            },
            type: "literal",
            value: "Apps",
          }}
        />
      </Grid>
      <ConsoleLogTester label={"Apps"} data={appsNew} />
      <Grid className={"mx-auto max-w-app w-app lg:w-full"}>
        {/*<TableSlice
          queryData={{"blockchain-apps": {data: appsNew || apps}}}
          table={{
            key: "apps",
            columns: columns,
            sticky: false,
          }}
        />*/}
      <AppsTable apps={appsNew || apps?.data} />
      </Grid>
    </>
  )
}