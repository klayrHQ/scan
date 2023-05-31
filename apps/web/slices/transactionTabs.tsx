"use client";
import { cls, Container, Grid, Typography } from "ui";
import Link from "next/link";
import { getFromDottedKey } from "../lib/dotString";
import { useState } from "react";
import {TableSlice} from "./table";

export const TransactionTabsSlice = ({
  queryData,
  id,
  staticTabs,
  dynamicTabs,
  name,
  queries,
  uri,
  ...props
}: any) => {
  const [currentCategory, setCurrentCategory] = useState(id?.split(":")[0]);
  // const currentCategory = id.split(":")[0]
  const keys =
    getFromDottedKey(dynamicTabs.label.value, "test", queryData, queryData) ||
    [];
  const handleClick = (handle: string) => {
    console.log(handle);
  };
  const switchCategory = (category: string) => {
    setCurrentCategory(category);
  };
  const className = ["hover:bg-menuButton", "hover:text-onMenuButton","active:bg-primary", "bg-surface-1", "text-onSurfaceMedium", "text-10"];
  //: ["bg-menuButton", "text-onMenuButton"];
  let subCategories: Record<string, string[]> = {};
  const categories: string[] = [...new Set(
      keys.map((k: string) => {
        const split = k.split(":");
        if (subCategories[split[0]]) {
          subCategories[split[0]].push(split[1]);
        } else {
          subCategories[split[0]] = [split[1]];
        }
        return split[0];
      })
    ),
  ] as string[];
  return (
    <Container section className={"max-w-app"}>
      <Grid flex gap={2} columns={2}>
        <Link key={"all"} href={"/transactions"}>
          <Typography
            size={"menu"}
            tag={"span"}
            className={cls([
              "capitalize",
              "block cursor-pointer text-onInfobar",
              "group",
              "px-3 py-2 mr-1",
              "rounded-md",
              "text-base no-underline",
              "font-medium",
              "flex flex-row",
              "border-transparent",
              "hover:border-2",
              ...className,
            ])}
          >
           All
          </Typography>
        </Link>
        {categories?.map((tab: string) => {
          return (
            <Typography
              size={"menu"}
              key={tab}
              tag={"span"}
              onClick={() => switchCategory(tab)}
              className={cls([
                "capitalize",
                "block cursor-pointer text-onInfobar",
                "group",
                "px-3 py-2 mr-1",
                "rounded-md",
                "text-base no-underline",
                "font-medium",
                "flex flex-row",
                "border-transparent",
                "hover:border-2",
                ...className,
              ])}
            >
              {tab}
            </Typography>
          );
        })}
      </Grid>
      <Grid flex gap={2} columns={2}>
        {subCategories?.[currentCategory]?.map((label: string) => {
          const link = `/transactions/${currentCategory}:${label}`;
          return (
            <Link key={label} href={link}>
              <Typography
                tag={"span"}
                size={"menu"}
                className={cls([
                  "capitalize",
                  "block cursor-pointer text-onInfobar",
                  "group",
                  "px-3 py-2 mr-1",
                  "rounded-md",
                  "text-base no-underline",
                  "font-medium",
                  "flex flex-row",
                  "border-transparent",
                  "hover:border-2",
                  ...className,
                ])}
              >
                {label.split(/(?=[A-Z])/).join(' ')}
              </Typography>
            </Link>
          );
        })}
      </Grid>
      <TableSlice {...dynamicTabs.content} queryData={queryData} queries={queries}  />
    </Container>
  );
};
