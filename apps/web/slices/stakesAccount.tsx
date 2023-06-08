import { Avatar } from "ui/atoms/avatar/avatar";
import Link from "next/link";
import { SlicerProps } from "../components/slicer";
import { ValueFormatter } from "../../../packages/ui/atoms/valueFormatter/valueFormatter";
import { getFromDottedKey } from "../lib/dotString";
import util from "util";
import {PoSStakesResponse} from "@liskscan/lisk-service-client";



export const StakesAccount = ({
  queryData,
  values,

  copy = -1,
}: SlicerProps & {
  name: string;
  values: any[];
  justifyBetween: boolean;
  gap: number;
  cols: number;
  mobileColumns: number;
  isFlex: boolean;
  copy: number;
}) => {
  return (
    <span
      className={"grid grid-cols-2 gap-2 space-y-2 p-2 rounded align-right  "}
    >

      {values?.map((value, index) => {
        let v: PoSStakesResponse["data"]["stakes"] = [];
        if (value.type === "key") {
          v = getFromDottedKey<PoSStakesResponse["data"]["stakes"]>(value.value, "row", queryData, queryData);
        }
        let link = undefined;
        if (value.format?.link?.href) {
          link = {
            href: value.format.link.href,
            keys: [],
          };
        }
        if (value.format?.link?.keys?.length > 0 && value.format?.link?.href) {
          const keys = value.format.link.keys.map((key: string) =>
            getFromDottedKey(key, "row", queryData, queryData)
          );
          link = {
            href: util.format(value.format.link.href, ...keys),
            keys,
          };
        }
        return v.map(({ address, name, amount }) => {
          return (
            <Link href={`/account/${address}`}>
              <span
                className={
                  "flex flex-col w-full justify-between space-y-2 bg-surface-1 p-2 rounded items-center"
                }
                key={`${values[0]._key}-${index}`}
              >
                <span className={"flex flex-row space-x-2 items-center"}>
                  <Avatar address={address} size={20} />
                  <ValueFormatter value={name} {...values[0].format} />
                </span>

                <ValueFormatter
                  value={amount}
                  {...values[0].format}
                  format={"currency"}
                />
              </span>
            </Link>
          );
        });
      })}
    </span>
  );
};
