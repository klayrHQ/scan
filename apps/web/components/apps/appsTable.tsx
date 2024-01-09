"use client";
import {cls, Grid, Typography} from "ui";
import {
  DefaultHeadColumn,
  DoubleRowColumn,
  GridColumn, PlainColumn,
  ValidatorStatusColumn,
} from "../data";
import { StaticPlainColumn } from "../data/table/columns/staticPlain";
import { ShowOnCell } from "../data/table/cell";
import React, { Suspense, useEffect, useState } from "react";
import {LogoColumn} from "../data/table/columns/logo";

const getShowClass = (showOn: ShowOnCell) => {
  switch (showOn) {
    case "mobile":
      return "table-cell md:hidden";
    case "tablet":
      return "hidden md:table-cell lg:hidden";
    case "desktop":
      return "hidden lg:table-cell";
    case "mobileTablet":
      return "table-cell lg:hidden";
    case "tabletDesktop":
      return "hidden md:table-cell";
    case "mobileDesktop":
      return "table-cell md:hidden lg:table-cell";
    default:
      return "table-cell";
  }
};

type App = {
  address: string;
  chainID: string;
  chainName: string;
  escrow: {amount: string, tokenID: string}[];
  escrowedLSK: string;
  generator?: { address: string, publicKey: string, name?: string }
  lastCertificateHeight: number;
  latsUpdated: number;
  logo: {png: string, svg: string};
  status: string;
};

export const AppsTable = ({
  apps,
}: {
  apps: App[];
}) => {

  return (
    <div
      className={[
        "max-w-app mx-auto w-full bg-background rounded",
        // "shadow-xl p-4 w-app mx-auto ",
        "overflow-x-auto md:overflow-x-visible",
        //!table.sticky ? "overflow-x-auto md:overflow-x-visible" : "",
      ].join(" ")}
    >
      <table className={"border-collapse rounded w-full"}>
        <thead
          className={
            "md:before:absolute md:before:left-0 md:before:right-0 md:before:-top-2 md:before:h-2 md:before:bg-background md:before:content-[''] md:sticky md:top-28 z-10"
          }
        >
        <tr
          className={cls([
            "border-b-1 rounded",
            "border-b-tableHeaderBorder bg-tableHeaderBG text-tableHeaderText p-4",
          ])}
        >
          <th
            className={cls([
              "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium whitespace-nowrap cursor-pointer hover:bg-opacity-50",
              getShowClass("always"),
            ])}
          >
            <Grid
              className={"items-center"}
              gap={2}
              columns={2}
              mobileColumns={2}
              flex
            >
              <DefaultHeadColumn
                values={[
                  {
                    type: "literal",
                    value: "Logo",
                    name: "logo",
                  },
                ]}
              />
            </Grid>
          </th>
          <th
            className={cls([
              "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium whitespace-nowrap cursor-pointer",
              getShowClass("always"),
            ])}
          >
            <Grid
              className={"items-center"}
              gap={2}
              columns={2}
              mobileColumns={2}
              flex
            >
              <DefaultHeadColumn
                values={[
                  {
                    type: "literal",
                    value: "Name",
                    name: "Name",
                  },
                ]}
              />
            </Grid>
          </th>
          <th
            className={cls([
              "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium whitespace-nowrap cursor-pointer",
              getShowClass("always"),
            ])}
          >
            <Grid
              className={"items-center"}
              gap={2}
              columns={2}
              mobileColumns={2}
              flex
            >
              <DefaultHeadColumn
                values={[
                  {
                    value: "Chain ID",
                    name: "Chain ID",
                    type: "literal",
                  },
                ]}
              />
            </Grid>
          </th>
          <th
            className={cls([
              "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium whitespace-nowrap cursor-pointer",
              getShowClass("always"),
            ])}
          >
            <Grid
              className={"items-center"}
              gap={2}
              columns={2}
              mobileColumns={2}
              flex
            >
              <DefaultHeadColumn
                values={[
                  {
                    type: "literal",
                    value: "Status",
                    name: "Status",
                  },
                ]}
              />
            </Grid>
          </th>
          <th
            className={cls([
              "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium whitespace-nowrap cursor-pointer",
              getShowClass("always"),
            ])}
          >
            <Grid
              className={"items-center"}
              gap={2}
              columns={2}
              mobileColumns={2}
              flex
            >
              <DefaultHeadColumn
                values={[
                  {
                    type: "literal",
                    value: "Created By",
                    name: "Created By",
                  },
                ]}
              />
            </Grid>
          </th>
          <th
            className={cls([
              "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium whitespace-nowrap cursor-pointer",
              getShowClass("always"),
            ])}
          >
            <Grid
              className={"items-center"}
              gap={2}
              columns={2}
              mobileColumns={2}
              flex
            >
              <DefaultHeadColumn
                values={[
                  {
                    type: "literal",
                    value: "Escrow Balance",
                    name: "Escrow Balance",
                  },
                ]}
              />
            </Grid>
          </th>
          <th
            className={cls([
              "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium whitespace-nowrap cursor-pointer",
              getShowClass("always"),
            ])}
          >
            <Grid
              className={"items-center"}
              gap={2}
              columns={2}
              mobileColumns={2}
              flex
            >
              <DefaultHeadColumn
                values={[
                  {
                    type: "literal",
                    value: "Last Certificate Height",
                    name: "Last Certificate Height",
                  },
                ]}
              />
            </Grid>
          </th>
          <th
            className={cls([
              "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium whitespace-nowrap cursor-pointer",
              getShowClass("always"),
            ])}
          >
            <Grid
              className={"items-center"}
              gap={2}
              columns={2}
              mobileColumns={2}
              flex
            >
              <DefaultHeadColumn
                values={[
                  {
                    type: "literal",
                    value: "Last Updated",
                    name: "Last Updated",
                  },
                ]}
              />
            </Grid>
          </th>
        </tr>
        </thead>
        <tbody>
        {apps?.map((app: any) => {
            return (
              <tr
                className={"hover:bg-surface-1 hover:bg-opacity-50"}
                key={app?.address}
              >
                <td
                  className={cls([
                    "border-b-1 p-2 pl-4 font-medium whitespace-nowrap",
                    getShowClass("always"),
                  ])}
                >
                  {app?.logo && <LogoColumn
                    params={{}}
                    index={1}
                    queryData={[]}
                    values={[{
                      value: app?.logo,
                      type: "literal",
                    }]}
                  />}
                </td>
                <td
                  className={cls([
                    "border-b-1 p-2 pl-4 font-medium whitespace-nowrap",
                    getShowClass("always"),
                  ])}
                >
                  <PlainColumn
                    params={{}}
                    index={1}
                    queryData={[]}
                    values={[{
                      value: app?.chainName,
                      type: "literal",
                    }]}
                  />
                </td>
                <td
                  className={cls([
                    "border-b-1 p-2 pl-4 font-medium whitespace-nowrap",
                    getShowClass("always"),
                  ])}
                >
                  <PlainColumn
                    params={{}}
                    index={1}
                    queryData={[]}
                    values={[{
                      value: app?.chainID,
                      type: "literal",
                    }]}
                  />
                </td>
                <td
                  className={cls([
                    "border-b-1 p-2 pl-4 font-medium whitespace-nowrap",
                    getShowClass("always"),
                  ])}
                >
                  <PlainColumn
                    params={{}}
                    index={1}
                    queryData={[]}
                    values={[{
                      value: app?.status,
                      type: "literal",
                    }]}
                  />
                </td>
                <td
                  className={cls([
                    "border-b-1 p-2 pl-4 font-medium whitespace-nowrap",
                    getShowClass("always"),
                  ])}
                >
                  {app?.generator && <PlainColumn
                    params={{}}
                    index={1}
                    queryData={[]}
                    values={[{
                      value: app?.generator,
                      type: "literal",
                      format: {
                        type: "object",
                        format: "avatarAddress"
                      }
                    }]}
                  />}
                </td>
                <td
                  className={cls([
                    "border-b-1 p-2 pl-4 font-medium whitespace-nowrap",
                    getShowClass("always"),
                  ])}
                >
                  <PlainColumn
                    params={{}}
                    index={1}
                    queryData={[]}
                    values={[{
                      value: app?.escrow[0]?.amount,
                      type: "literal",
                      format: {
                        type: "beddows",
                        format: "currency"
                      }
                    }]}
                  />
                </td>
                <td
                  className={cls([
                    "border-b-1 p-2 pl-4 font-medium whitespace-nowrap",
                    getShowClass("always"),
                  ])}
                >
                  <PlainColumn
                    params={{}}
                    index={1}
                    queryData={[]}
                    values={[{
                      value: app?.lastCertificateHeight,
                      type: "literal",
                      format: {
                        type: "number",
                        format: "plain"
                      }
                    }]}
                  />
                </td>
                <td
                  className={cls([
                    "border-b-1 p-2 pl-4 font-medium whitespace-nowrap",
                    getShowClass("always"),
                  ])}
                >
                  <PlainColumn
                    params={{}}
                    index={1}
                    queryData={[]}
                    values={[{
                      value: app?.lastUpdated,
                      type: "literal",
                      format: {
                        type: "timestamp",
                        format: "fromNow"
                      }
                    }]}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
