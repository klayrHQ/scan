import { getAllData, ServiceQueries } from "./sanity.service";
import { RPCResponses } from "@liskscan/lisk-service-client/lib/types";
import { getFromDottedKey } from "./dotString";

export interface MakeTableProps {
  queries: ServiceQueries[];
  key: string;
  head: {
    label: string;
    colspan: number;
    styling: any;
  }[];
  cols: {
    keys: string[];
    href?: {
      url: string;
      keys?: string[];
    };
  }[];
}

export const makeTable = async ({
  key,
  cols,
  queries,
  head,
}: MakeTableProps): Promise<{ rows: (string | number)[][] }> => {
  const data = (await getAllData(queries)) as RPCResponses<any>;
  if (data[key]?.status === "success") {
    const rows = data[key].data.map((row: any) =>
      cols.map((col) =>
        col.keys.map((k) => getFromDottedKey(k, key, row, data))
      )
    );
    return { rows };
  }
  return {
    rows: [[]],
  };
};
