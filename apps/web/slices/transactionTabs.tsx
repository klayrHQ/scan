"use client";
import { cls, Container, Grid, Typography } from "ui";
import Link from "next/link";
import { getFromDottedKey } from "../lib/dotString";
import { useState } from "react";
import { TableSlice } from "./table";
import {ConsoleLogTester} from "../components/consoleLogTester";
import {Select} from "ui/atoms/select/select";
import {usePathname, useRouter} from "next/navigation";

export const TransactionTabsSlice = ({
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

  const router = useRouter()
  const currentPath = usePathname()

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

  const filter = (value: string) => {
    router.push(`/transactions/${currentCategory}:${value}`)
  }

  return (
    <Container bgColor={"background"} section gap={2} className={"max-w-app"}>
      <Grid className={"hidden lg:flex"} flex gap={2} columns={2}>
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
                ? ["bg-menuButton", "text-onMenuButton", "hover:text-onMenuButton"]
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
                  ? ["bg-menuButton", "text-onMenuButton", "hover:text-onMenuButton"]
                  : ["", "text-onSurfaceHigh hover:bg-surface-1"]),
              ])}
            >
              {tab}
            </Typography>
          );
        })}
      </Grid>
      <Grid className={"hidden lg:flex"} flex gap={2} columns={2}>
        {subCategories?.[currentCategory]?.map((label: string) => {
          const link = `/transactions/${currentCategory}:${label}`;
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
                  ...(`${currentCategory}:${label}` === id
                    ? ["bg-menuButton", "text-onMenuButton", "hover:text-onMenuButton"]
                    : ["", "text-onSurfaceHigh hover:bg-surface-1"]),
                ])}
              >
                {label.split(/(?=[A-Z])/).join(" ")}
              </Typography>
            </Link>
          );
        })}
      </Grid>
      <Select
          className={"lg:hidden mx-auto"}
          id={"categories"}
          innerClassName={"border-surface-3 border-solid border-1"}
          placeholder={currentCategory || "All"}
          optionsList={categories.map(cat => {
            return {
              label: cat.charAt(0).toUpperCase() + cat.slice(1),
              value: cat
            }
          })}
          onChange={switchCategory}
          rounded
          width={"app"}
          zIndex={"40"}
      />
      {
        subCategories?.[currentCategory] &&
          <Select
            className={"lg:hidden mx-auto"}
            id={"subCategories"}
            innerClassName={"border-surface-3 border-solid border-1"}
            placeholder={currentPath?.split("/").pop()?.split(":").pop() || "Filter"}
            optionsList={subCategories?.[currentCategory]?.map(cat => {
              return {
                label: cat.charAt(0).toUpperCase() + cat.slice(1),
                value: cat,
              }
            })}
            onChange={filter}
            rounded
            width={"app"}
          />
      }
      <TableSlice
        {...dynamicTabs.content}
        queryData={queryData}
        queries={queries}
      />
    </Container>
  );
};
