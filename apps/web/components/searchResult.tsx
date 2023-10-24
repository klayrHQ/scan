import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {Avatar} from "ui/atoms/avatar/avatar";
import {Grid, Typography} from "ui";

export const SearchResult = ({
  saveSearch,
  setOpen,
  menuCloseFunction,
  type,
  data,
}: {
  type: "account" | "transaction" | "event" | "block" | "stake";
  data: { value: string; label: string };
  saveSearch: Function;
  setOpen: (state: boolean) => void;
  menuCloseFunction?: () => void;
}) => {
  const router = useRouter();

  const goToResult = (address?: string, username?: string) => {
    // router.push(`/${type}/${data.value}`);
    saveSearch(data.value, data.label);
    // setOpen(false);
    // menuCloseFunction && menuCloseFunction();
  };
  return (
    <Link className={"w-full px-4 py-2 inline-block hover:bg-surface-2 rounded"} href={`/${type}/${data.value}`}>
      {
        type === "account" ?
          <Grid className={"items-center"} flex columns={2} mobileColumns={2} gap={4} onClick={() => goToResult()}>
            <Avatar address={data.value} size={24} />
            <Grid flex gap={2}>
              <Typography color={"onPrimary"} tag={"span"}>{data.label}</Typography>
              {data.value !== data.label && <Typography color={"onSurfaceMedium"} size={"subBody"} tag={"span"}>{data.value}</Typography>}
            </Grid>
          </Grid>
          :
          <Typography color={"onPrimary"} tag={"span"}>{data.label}</Typography>
      }
    </Link>
  );
};
