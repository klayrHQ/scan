"use client";
import { cls, Container, Grid, Typography } from "ui";
import Link from "next/link";
import { getFromDottedKey } from "../lib/dotString";
import { useState } from "react";
import { TableSlice } from "./table";

export const ValidatorTabs = ({
  queryData,
  id,
  staticTabs,
  dynamicTabs,
  name,
  queries,
  uri,
}: any) => {
  const [currentCategory, setCurrentCategory] = useState(id?.split(":")[0]);
  const keys =
    getFromDottedKey(dynamicTabs.label.value, "test", queryData, queryData) ||
    [];

  const switchCategory = (category: string) => {
    setCurrentCategory(category);
  };
  const className = [
    "hover:bg-menuButton",
    "hover:text-onSurfaceHigh",
    "text-10",
  ];
  //: ["bg-menuButton", "text-onMenuButton"];
  let subCategories: Record<string, string[]> = {};
  const categories: string[] = [
    ...new Set(
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
    <Container bgColor={"background"} section gap={2} className={"max-w-app"}>
      <Grid flex gap={2} columns={2}>
        <Link key={"all"} href={"/transactions"}>
          <Typography
            size={"menu"}
            tag={"span"}
            className={cls([
              "capitalize",
              "block cursor-pointer",
              "group",
              "px-3 py-2 mr-1",
              "rounded-md",
              "text-base no-underline",
              "font-medium",
              "flex flex-row",
              "border-transparent",
              "hover:border-2",
              ...className,
              ...("all" === currentCategory || !currentCategory
                ? [
                    "bg-menuButton",
                    "text-onMenuButton",
                    "hover:text-onMenuButton",
                  ]
                : ["", "text-onSurfaceHigh hover:bg-surface-1"]),
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
                "block cursor-pointer",
                "group",
                "px-3 py-2 mr-1",
                "rounded-md",
                "text-base no-underline",
                "font-medium",
                "flex flex-row",
                "border-transparent",
                "hover:border-2",
                ...className,
                ...(tab === currentCategory
                  ? [
                      "bg-menuButton",
                      "text-onMenuButton",
                      "hover:text-onMenuButton",
                    ]
                  : ["", "text-onSurfaceHigh hover:bg-surface-1"]),
              ])}
            >
              {tab}
            </Typography>
          );
        })}
      </Grid>
      <Grid flex gap={2} columns={2}>
        {subCategories?.[currentCategory]?.map((label: string) => {
          const link = `/validators/${currentCategory}:${label}`;
          return (
            <Link key={label} href={link}>
              <Typography
                tag={"span"}
                size={"menu"}
                className={cls([
                  "capitalize",
                  "block cursor-pointer",
                  "group",
                  "px-3 py-2 mr-1",
                  "rounded-md",
                  "text-base no-underline",
                  "font-medium",
                  "flex flex-row",
                  "border-transparent",
                  "hover:border-2",
                  ...className,
                  ...(`${currentCategory}` === id
                    ? [
                        "bg-menuButton",
                        "text-onMenuButton",
                        "hover:text-onMenuButton",
                      ]
                    : ["", "text-onSurfaceHigh hover:bg-surface-1"]),
                ])}
              ></Typography>
            </Link>
          );
        })}
      </Grid>
      <TableSlice
        {...dynamicTabs.content}
        queryData={queryData}
        queries={queries}
      />
    </Container>
  );
};
