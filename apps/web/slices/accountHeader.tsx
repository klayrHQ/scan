import { Grid, Typography, ValueFormatter } from "ui";
import { getFromDottedKey } from "../lib/dotString";
import { SlicerProps } from "../components/slicer";
import { useSaveFavourites } from "../providers/favourites";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Avatar } from "ui/atoms/avatar/avatar";
import { CopyButton } from "../components/data/copy";

export const AccountHeader = ({
  queryData,
  queries,
  name,
  values,
  gap,
  justifyBetween,
  cols,
  mobileColumns,
  isFlex,
  copy = -1,
}: SlicerProps & {
  name: string;
  values: any;
  justifyBetween: boolean;
  gap: number;
  cols: number;
  mobileColumns: number;
  isFlex: boolean;
  copy: number;
}) => {
  const shortenAddress = (value: string) =>
    value
      ? value.length > 11
        ? value.slice(0, 8) + "..." + value.slice(-7)
        : value
      : "";

  const { isInFavourites, saveFavourite, unFavourite } = useSaveFavourites();
  const path = usePathname();
  const [uri, id] = path?.split("/").slice(1) || [undefined, undefined];
  const handleClick = async () => {
    if (isInFavourites(id!)) {
      unFavourite(id!);
    } else {
      saveFavourite(
        id!,
        queryData["account-id-balances"].data[0].availableBalance,
        queryData["account-auth"].meta?.name
      );
    }
  };
  useEffect(() => console.log(uri, id, "props"), [uri, id]);
  const value =
    getFromDottedKey(values.value, "row", queryData, queryData) || "-";
  const rank =
    getFromDottedKey(
      "account-validator-id.data.0.rank",
      "row",
      queryData,
      queryData
    ) || "-";
  const status =
    getFromDottedKey(
      "account-validator-id.data.0.status",
      "row",
      queryData,
      queryData
    ) || "-";
  return (
    <Grid
      justifyBetween={justifyBetween}
      flex={isFlex}
      gap={gap}
      columns={cols}
      mobileColumns={mobileColumns}
      className={"relative"}
    >
      <Grid gap={2} className={"items-center relative"} columns={2} flex>
        <span className={"relative"}>
          <Avatar className={"mr-3"} address={value?.address || ""} size={43} />
          {isInFavourites(id!) ? (
            <StarIcon
              className={
                "w-6 h-6 text-yellow absolute -top-2 -left-2 bg-surface-1 shadow rounded-full p-1"
              }
              onClick={() => handleClick()}
            />
          ) : (
            <StarIconOutline
              className={
                "w-6 h-6 text-onSurfaceMedium absolute -top-2 -left-2 bg-surface-1 shadow rounded-full p-1"
              }
              onClick={() => handleClick()}
            />
          )}
        </span>
        <Grid gap={1} columns={1} flex>
          <Grid columns={1} flex>
            <Typography
              size={"body"}
              bold
              tag={"span"}
              className={"capitalize font-semibold  "}
            >
              {rank}. {value.name}
            </Typography>
            <Typography
              size={"subBody"}
              bold
              tag={"span"}
              className={"items-center flex flex-row "}
            >
              {shortenAddress(value.address)}
              <CopyButton value={value.address} />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        className={
          "absolute top-0 right-0 bg-surface-2 shadow rounded px-2 py-0.5 text-onSurfaceHigh font-semibold"
        }
        tag={"span"}
        size={"subBody"}
      >
        {status}
      </Typography>
    </Grid>
  );
};
