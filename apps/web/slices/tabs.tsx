import { cls, Container, Grid, Typography } from "ui";
import Link from "next/link";
import {getFromDottedKey} from "../lib/dotString";

export const TabsSlice = ({
  queryData,
  id,
  staticTabs,
  dynamicTabs,
  name,
  queries,
  uri,
  ...props
}: any) => {
  const keys = getFromDottedKey(dynamicTabs.label.value, "test", queryData, queryData) || []
  const handleClick = (handle: string) => {
    console.log(handle);
  };
  const className = ["hover:bg-menuButton", "hover:text-onMenuButton"];
  //: ["bg-menuButton", "text-onMenuButton"];
  return (
    <Container section className={"max-w-app"}>
      <Grid flex gap={2} columns={2}>
        {staticTabs?.map(
          ({ label, queryKey, content, handle: { current }, _key }: any) => {
            const link = !queryKey ? `/${uri}` : `/${uri}/${queryKey}`;
            return (
              <Link key={_key} href={link}>
                <Typography
                  tag={"span"}
                  onClick={() => handleClick(queryKey)}
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
                  ])}
                >
                  {label}
                </Typography>
              </Link>
            );
          }
        )}
        {keys?.map(
          (label: string) => {
            const link = `/${uri}/${label}`;
            return (
              <Link key={label} href={link}>
                <Typography
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
                  ])}
                >
                  {label}
                </Typography>
              </Link>
            );
          }
        )}
      </Grid>
    </Container>
  );
};
