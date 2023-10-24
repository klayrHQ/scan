"use client"
import {TitleBoxSlice} from "../../slices/titleBox";
import {Grid} from "ui";
import {useEffect, useState} from "react";
import {getData} from "../../lib/sanity.service";
import {TableSlice} from "../../slices/table";
import {tokenColumns} from "./tableColumns";
import {
  BlockchainAppsMetaResponse,
  NetworkStatusResponse
} from "@liskscan/lisk-service-client/lib/types";

export const Tokens = ({
  status,
  apps,
} : {
  status: NetworkStatusResponse;
  apps: BlockchainAppsMetaResponse;
}) => {

  const [tokens, setTokens] = useState<any>()
  const [appState, updateAppState] = useState<
    BlockchainAppsMetaResponse["data"][0] | undefined
    >(apps?.data?.find(({ chainID }) => chainID === status.data.chainID));

  useEffect(() => {
    const getTokens = async () => {
      const tokens = await getData("lisk-service", "get.blockchain.apps.meta.tokens", {limit: "100", network: appState?.networkType || "mainnet"})
      setTokens(tokens);
    };
    getTokens();
  }, [appState]);

  useEffect(() => {
    updateAppState(
      apps?.data?.find(({ chainID }) => chainID === status.data.chainID)
    );
  }, [apps, status?.data?.chainID]);

  return (
    <>
      <Grid className={"max-w-app w-app lg:w-full mx-auto"} columns={3}>
        <TitleBoxSlice
          description={{
            type: "literal",
            value: "Overview of all the tokens in the Lisk network."
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
            value: "Tokens",
          }}
        />
      </Grid>
      <Grid className={"mx-auto max-w-app w-app lg:w-full"}>
        <TableSlice
          queryData={{tokens: tokens}}
          table={{
            key: "tokens",
            columns: tokenColumns,
            sticky: false,
          }}
        />
      </Grid>
    </>
  )
}