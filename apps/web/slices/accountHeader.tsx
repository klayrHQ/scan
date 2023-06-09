import { Grid, ValueFormatter } from "ui";
import { getFromDottedKey } from "../lib/dotString";
import { SlicerProps } from "../components/slicer";
import { useSaveFavourites } from "../providers/favourites";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Avatar } from "ui/atoms/avatar/avatar";

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
  console.log(value, "valueslog", values, "values");

  return (
    <Grid
      justifyBetween={justifyBetween}
      flex={isFlex}
      gap={gap}
      columns={cols}
      mobileColumns={mobileColumns}
    >
      <Grid columns={2} flex>
        <Avatar className={"mr-3"} address={value?.address || ""} size={43} />
        <Grid columns={2} flex>
          <Grid columns={1} flex>
            <ValueFormatter
              key={value.name}
              value={value.name}
              copy={copy === value.index}
              {...value.format}
              link={value.link}
            />
            <ValueFormatter
              key={value.address}
              value={value.address}
              copy={copy === value.index}
              {...value.format}
              link={value.link}
            />
          </Grid>
          {isInFavourites(id!) ? (
            <StarIcon className={"w-6 h-6"} onClick={() => handleClick()} />
          ) : (
            <StarIconOutline
              className={"w-6 h-6"}
              onClick={() => handleClick()}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
