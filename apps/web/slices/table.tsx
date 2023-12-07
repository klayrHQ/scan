"use client";
import { makeTable } from "../lib/sanity.table";
import { Table } from "../components/data/table/table";
import React, { useEffect, useState } from "react";
import { processTable } from "../lib/queries/getTable";
import { useIsStuck } from "../hooks/useIsStuck";
import { ConsoleLogTester } from "../components/consoleLogTester";
import { getAllData } from "../lib/sanity.service";
import { BlockchainAppsMetaResponse } from "@liskscan/lisk-service-client/lib/types";
import { LiskService } from "@liskscan/lisk-service-client";
import { Pagination } from "../components/data/table/pagination";

const clients: Record<string, any> = {};
export const TableSlice = ({
  queryData,
  data,
  table,
  id,
  container,
  queries,
}: any) => {
  // const {lastBlock} = useService()
  const [tableState, updateTable] = useState<{
    table: any;
    rows: (string | number)[][];
  }>();
  // console.log(props)
  useEffect(() => {
    const getData = async () => {
      if (table.key === "tokens" && queryData.tokens.data.length === 1) {
        queryData.tokens.data.map((token: any, index: number) => {
          queryData.tokens.data[index] = { ...token, chainName: "lisk" };
        });
        const result = (await getAllData([
          {
            key: "meta",
            call: "get.blockchain.apps.meta",
            serviceType: "lisk-service",
          },
          {
            key: "tokens",
            call: "get.blockchain.apps.meta.tokens",
            serviceType: "lisk-service",
          },
        ])) as { meta: BlockchainAppsMetaResponse; tokens: any };
        const chainsMeta = result.meta.data.filter(
          (app) =>
            app.chainName !== "lisk_mainchain" && app.networkType === "mainnet"
        );
        for (const chainMeta of chainsMeta) {
          if (!clients[chainMeta.chainName]) {
            clients[chainMeta.chainName] = new LiskService({
              url: chainMeta.serviceURLs[0].http.replace("https://", ""),
              disableTLS: false,
            });
          }
          const tokensResponse = await clients[chainMeta.chainName].rpc(
            "get.token.balances",
            {
              address: queryData.tokens.meta.address,
            }
          );
          // const tokensResponse = await fetch(`${chainMeta.serviceURLs[0].http}/api/v3/token/balances?address=${queryData.tokens.meta.address}`)
          if (tokensResponse.status === "success") {
            // @ts-ignore
            tokensResponse.data.forEach((token) => {
              queryData.tokens.data.push({
                ...token,
                chainName: chainMeta.chainName,
              });
            });
          }
        }
        queryData.tokens.data = queryData.tokens.data.map((token: any) => {
          return {
            ...token,
            symbol:
              result.tokens.data.find((t: any) => t.tokenID === token.tokenID)
                ?.symbol || token.symbol,
          };
        });
      }

      const processedTable = processTable(table);
      const tableRows = makeTable({
        data: queryData,
        key: table.key,
        cols: table.columns,
      });

      // console.log("QDQDQ", tableRows, queryData.blocks?.data[0].height)
      // console.log(tableRows)
      updateTable({ rows: tableRows.rows, table: processedTable });
    };
    if (queryData[table.key]) {
      getData();
    }
  }, [queryData, table]);
  const [isStuck, stickyRef] = useIsStuck(28);
  return (
    <div
      className={[
        "max-w-app mx-auto w-full bg-background rounded",
        container ? "shadow-xl p-4 w-app mx-auto " : "",
        "overflow-x-auto md:overflow-x-visible",
        //!table.sticky ? "overflow-x-auto md:overflow-x-visible" : "",
      ].join(" ")}
    >
      {/*<ConsoleLogTester data={JSON.stringify(table.columns)} />*/}
      {/*<ConsoleLogTester label={"QueryData"} data={queryData} />*/}
      {/*<ConsoleLogTester label={"Table"} data={table} />*/}
      <Table
        key={id}
        queryData={queryData}
        // columns={processTable(props.table).columns}
        // rows={props?.data?.rows}
        columns={tableState?.table?.columns || processTable(table).columns}
        isStuck={isStuck}
        rows={
          tableState?.rows && tableState.rows.length > 0
            ? tableState?.rows
            : data?.rows
        }
        sticky={table.sticky}
        stickyMobile={table.stickyMobile}
        stickyRef={stickyRef}
      />
      {table?.pagination && (
        <Pagination
          href={""}
          current={
            queryData?.[table?.key]?.meta?.offset /
            queryData?.[table?.key]?.meta?.count
          }
          total={queryData?.[table?.key]?.meta?.total}
          pageLength={parseInt(
            queries?.[table?.key]?.params?.find((p: {key: string, value: string}) => p.key === "limit")
              ?.value || 20
          )}
        />
      )}
    </div>
  );
};
