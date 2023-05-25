import { RPCResponses } from "@liskscan/lisk-service-client/lib/types";
import { getFromDottedKey } from "./dotString";
import { ValueFormat } from "../components/valueFormatter";

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
    const rows = data[key]?.data?.map((row: any) =>
      cols.map((col) =>
        col.valueKeys.map((valueFormat) => {
          if (valueFormat.type === "key") {
            return {
              ...valueFormat,
              value: isMeta(valueFormat.value)
                ? getFromDottedKey(valueFormat.value || "", "meta", row, data)
                : getFromDottedKey(valueFormat.value || "", key, row, data),
            };
          }
          if (valueFormat.type === "literal") {
            return valueFormat;
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

const isMeta = (key?: string) => (key ? key.split(".")?.[1] === "meta" : false);
