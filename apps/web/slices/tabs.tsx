"use client";
import { cls, Container, Grid, Typography } from "ui";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Slicer } from "../components/slicer";
import useQueryParams, { QueryParams } from "../hooks/useQueryParams";
import { useEffect } from "react";

export const TabsSlice = ({
  queryData,
  id,
  staticTabs,
  dynamicTabs,
  name,
  queries,
  container,
  uri,
  ...props
}: any) => {
  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();
  const searchParams = useSearchParams();

  const activeTab =
    staticTabs.find(
      (tab: any) => searchParams?.get(tab.handle.current) === tab.queryKey
    ) || staticTabs[0];

  const className = [
    "hover:bg-surface-2",
    "text-onMenuButton",
    "active:bg-menuButton",
  ];

  const handleChange = (handle: string, value: string) => {
    setQueryParams({ [handle]: value });
  };
  return (
    <Container
      gap={2}
      className={[
        "w-full rounded",
        container ? "shadow p-4 w-app max-w-app mx-auto " : "",
      ].join(" ")}
    >
      <Grid flex gap={2} columns={2}>
        {staticTabs?.map(
          (
            { label, queryKey, content, handle: { current }, _key }: any,
            index: number
          ) => {
            const link = !queryKey
              ? `/${uri}`
              : id
              ? `/${uri}/${id}?${current}=${queryKey}`
              : `/${uri}?${current}=${queryKey}`;
            return (
              // <Link key={_key} href={link}>
              <Typography
                onClick={() => handleChange(current, queryKey)}
                tag={"span"}
                className={cls([
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
                  ...(searchParams?.get(current)
                    ? searchParams?.get(current) === queryKey
                      ? [
                          "bg-menuButton",
                          "text-onMenuButton",
                          "hover:text-onMenuButton",
                        ]
                      : ["", "text-onSurfaceHigh hover:bg-surface-1"]
                    : index === 0
                    ? [
                        "bg-menuButton",
                        "text-onMenuButton",
                        "hover:text-onMenuButton",
                      ]
                    : ["", "text-onSurfaceHigh hover:bg-surface-1"]),
                ])}
              >
                {label}
              </Typography>
              // </Link>
            );
          }
        )}
      </Grid>
      {activeTab.content && (
        <Slicer
          slices={[activeTab.content]}
          queryData={queryData}
          queries={queries}
        />
      )}
    </Container>
  );
};
