import { RPCResponses } from "@liskscan/lisk-service-client/lib/types";
import { getFromDottedKey } from "./dotString";
import { ValueFormat } from "ui";
import util from "util";
import {getIterableData} from "./sanity.service";

export interface MakeTableProps {
  data: Record<string, RPCResponses<any>>;
  key: string;
  cols: {
    valueKeys: ValueFormat[];
    href?: {
      url: string;
      keys?: string[];
    };
  }[];
}

export const makeTable = ({
  key,
  cols,
  data,
}: MakeTableProps): { rows: (string | number)[][] } => {
  if (data[key]?.status === "success") {
    const parsedData = getIterableData(data[key]?.data)
    const rows = parsedData?.map((row: any) =>
      cols.map((col) =>
        col.valueKeys.map((valueFormat) => {
          let link = undefined;
          if (valueFormat.format?.link?.href) {
            link = {
              href: valueFormat.format.link.href,
              keys: [],
            };
          }
          if (
            valueFormat.format?.link?.keys &&
            valueFormat.format?.link?.keys?.length > 0 &&
            valueFormat.format?.link?.href
          ) {
            const keys = valueFormat.format.link.keys.map((k) =>
              getFromDottedKey(k, isMeta(key) ? "meta" : key, row, data)
            );

            link = {
              href: util.format(valueFormat.format.link.href, ...keys),
              keys,
            };
          }
          if (valueFormat.type === "key") {
            return {
              ...valueFormat,
              format: { ...valueFormat.format, link },
              symbol: row?.symbol || "kly",
              value: isMeta(valueFormat.value)
                ? getFromDottedKey(
                    valueFormat.value.replace("_meta", "meta") || "",
                    "meta",
                    row,
                    data
                  )
                : getFromDottedKey(valueFormat.value || "", key, row, data),
            };
          }
          if (valueFormat.type === "literal") {
            return {
              ...valueFormat,
              format: { ...valueFormat.format, link },
            };
          }
        })
      )
    );
    return { rows };
  }
  return {
    rows: [[]],
  };
};

const isMeta = (key?: string) =>
  key ? key.split(".")?.[1] === "_meta" : false;
