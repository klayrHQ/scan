import {
  CallsRPC,
  CallTypesRPC,
  RPCCalls,
  RPCResponses,
} from "@liskscan/lisk-service-client/lib/types";
import { LiskService } from "@liskscan/lisk-service-client";
import { getDotString, getDottedKeyType, getFromDottedKey } from "./dotString";
import { parseProps } from "ui";
import { UpdateOnType } from "../schemas/slices/table";
import * as util from "util";

export const serviceURL =
  process.env.NEXT_PUBLIC_SERVICE_URL || "testnet-service.lisk.com";

export type ServiceTypes =
  | "lisk-service"
  | "liskscan-usernames"
  | "liskscan-knowledge"
  | "liskscan-history"
  | "liskscan-votes"
  | "liskscan-avatars"
  | "liskscan-favorites";

export interface ServiceQueries {
  key: string;
  serviceType: ServiceTypes;
  call: CallsRPC | string;
  params?: any;
  subQueries?: {
    type: "forEach" | "singleMatch";
    serviceType: ServiceTypes;
    call: CallsRPC | string;
    primaryKey: string;
    foreignKey: string;
    params?: any;
  }[];
  calculations?: {
    _key: string;
    calculation: string;
    keys: string[];
    name: string;
  }[];
  updateOn?: UpdateOnType;
}

export const client = new LiskService({
  // url: "51.15.142.42:9901",
  // url: "51.158.162.30:9901",
  // url: "51.158.244.16:9901",
  url: serviceURL,
  // url: "betanet-service.lisk.com",
  disableTLS: false,
});
let timestamps: Record<number, number> = {};
export const getTimestamp = async (height: number): Promise<number> => {
  if (timestamps[height]) {
    return timestamps[height];
  }
  const response = await getData("lisk-service", "get.blocks", {
    height: height.toString(),
  });
  // console.log(response)
  if (response.status === "success") {
    // console.log(response.data)
    if (response.data.length === 0) {
      timestamps[height] = 1695731780;
      return 1695731780;
    }
    timestamps[height] = response.data?.[0]?.timestamp || 1695731780;
    return response.data[0]?.timestamp || 1695731780;
  }
  return 0;
};

export const needsTimestampImport = (call: ServiceQueries["call"]) => {
  if (call === "get.pos.validators") {
    return true;
  }
  return false;
};

export const getTimestampHeightKeys = (call: ServiceQueries["call"]) => {
  if (call === "get.pos.validators") {
    return ["lastGeneratedHeight", "lastCommissionIncreaseHeight"];
  }
};

export const getAllData = async (
  queries: ServiceQueries[],
  preResponse: Record<
    string,
    RPCResponses<RPCCalls> & {
      data?: any[] | any;
    }
  > = {},
  id?: string
): Promise<Record<string, RPCResponses<RPCCalls>>> => {
  const responses: Record<
    string,
    RPCResponses<RPCCalls> & { data?: any[] | any }
  > = preResponse;
  if (!queries) {
    return {};
  }
  for (const query of queries) {
    if (query.serviceType === "lisk-service") {
      responses[query.key] = await getData(
        query.serviceType,
        query.call,
        parseProps(query.params, id)
      );
      if (needsTimestampImport(query.call)) {
        const keys = getTimestampHeightKeys(query.call);
        if (keys) {
          for (const index in responses[query.key]?.data) {
            for (const key of keys) {
              responses[query.key].data[index][
                key.replace("Height", "Timestamp")
              ] = await getTimestamp(responses[query.key]?.data[index][key]);
            }
          }
        }
      }
      if (query.calculations) {
        for (const calculation of query.calculations) {
          const d = getIterableData(responses[query.key].data);

          // data array
          responses[query.key].data = d?.map((row: any) => {
            const keys = calculation.keys.map((k) => {
              if (responses[getDottedKeyType(k)]) {
                return getFromDottedKey(k, "row", row, responses);
              }
              return getFromDottedKey("row." + k, "row", row, { row });
            });
            const parsedCalculation = util.format(
              calculation.calculation,
              ...keys
            );
            try {
              const result = eval(parsedCalculation);
              return { ...row, [calculation.name]: result };
            } catch (e) {
              return { ...row };
            }
          });
        }
      }
    }
    if (query.subQueries && query.subQueries.length > 0) {
      for (const subQuery of query.subQueries) {
        if (subQuery.type === "forEach") {
          if (responses[query.key].status === "success") {
            const data = getIterableData(responses[query.key]?.data);
            for (const index in data) {
              const childRequest = data[index];
              const foreignKey = getDotString(
                subQuery.foreignKey.split("."),
                childRequest
              );
              if (!responses[`${foreignKey}_${subQuery.call}`]) {
                const response = await getData(
                  subQuery.serviceType,
                  subQuery.call,
                  {
                    [subQuery.primaryKey]: foreignKey.toString(),
                  }
                );
                if (response.status === "success" && response?.data) {
                  if (needsTimestampImport(subQuery.call)) {
                    const keys = getTimestampHeightKeys(subQuery.call);
                    if (keys) {
                      for (const index in response?.data) {
                        for (const key of keys) {
                          response.data[index][
                            key.replace("Height", "Timestamp")
                          ] = await getTimestamp(response.data[index][key]);
                        }
                      }
                    }
                  }
                  responses[`${foreignKey}_${subQuery.call}`] = {
                    ...response,
                    data:
                      response?.data && response.data.length > 0
                        ? response.data[0]
                        : response.data,
                  };
                }
              }
              data[index][
                `${subQuery.call.replaceAll(
                  ".",
                  "_"
                )}_${subQuery.foreignKey.replaceAll(".", "_")}`
              ] = responses[`${foreignKey}_${subQuery.call}`];
            }
          }
        }
        if (
          subQuery.type === "singleMatch" &&
          !responses[`${subQuery.call}_${subQuery.primaryKey}`]
        ) {
          responses[
            `${subQuery.call.replaceAll(".", "_")}_${subQuery.primaryKey}`
          ] = await getData(
            subQuery.serviceType,
            subQuery.call,
            parseProps(subQuery.params)
          );
          if (
            responses[query.key].status === "success" &&
            responses[
              `${subQuery.call.replaceAll(".", "_")}_${subQuery.primaryKey}`
            ]?.data
          ) {
            if (needsTimestampImport(subQuery.call)) {
              const keys = getTimestampHeightKeys(subQuery.call);
              if (keys) {
                for (const index in responses[query.key].data) {
                  for (const key of keys) {
                    responses[query.key].data[index][
                      key.replace("Height", "Timestamp")
                    ] = await getTimestamp(
                      responses[query.key].data[index][key]
                    );
                  }
                }
              }
            }
            for (const index in responses[query.key].data) {
              try {
                const childRequest = responses[query.key].data[index];
                const found = responses[
                  `${subQuery.call.replaceAll(".", "_")}_${subQuery.primaryKey}`
                ]?.data?.find(
                  (d: any) =>
                    d[subQuery.primaryKey] === childRequest[subQuery.foreignKey]
                );
                if (found) {
                  responses[query.key].data[index][
                    `${subQuery.call.replaceAll(".", "_")}_${
                      subQuery.primaryKey
                    }`
                  ] = found;
                }
              } catch (e) {}
            }
          }
        }
      }
    }
  }
  return responses;
};

export const getIterableData = (data: any) => {
  if (!data) {
    return [];
  }
  if (data[0]) {
    return data;
  }
  const keys = Object.keys(data);
  for (const k of keys) {
    if (data[k][0]) {
      return data[k];
    }
  }
  return [];
};
const stats: {
  pages: Record<string, Record<string, number>>;
  requests: number;
} = {
  pages: {},
  requests: 0,
};

const responseCache: Record<
  string,
  Record<string, any | { response: any; ts: number }>
> = {
  "get.blocks.assets": {},
  "get.validator": {},
};

const saveStat = (call: string, params: any) => {
  if (!stats.pages[call]) {
    stats.pages[call] = {};
  }
  if (!stats.pages[call][JSON.stringify(params)]) {
    stats.pages[call][JSON.stringify(params)] = 0;
  }
  stats.pages[call][JSON.stringify(params)]++;
  stats.requests++;
};

export const doCache = async (
  call: string,
  key: string,
  params: any,
  duration = -1
) => {
  if (!responseCache[call]) {
    responseCache[call] = {};
  }
  if (
    !responseCache[call][key] ||
    (duration > 0 && responseCache[call][key].ts < Date.now() - 1000 * duration)
  ) {
    responseCache[call][key] = {
      response: await client.rpc(call as CallsRPC, params),
      ts: Date.now(),
    };
    saveStat(call, key);
  }
  return responseCache[call][key].response;
};

export const getData = async (
  serviceType: ServiceTypes,
  call: CallsRPC | string,
  params?: any
): Promise<RPCResponses<RPCCalls> & { data?: any; meta?: any }> => {
  switch (call) {
    case "get.blocks.assets":
      return await doCache(call, params.blockID, params, 60 * 60);
    case "get.validator":
      return await doCache(call, params.address, params, 60 * 5);
    case "get.blockchain.apps.meta":
      return await doCache(call, "meta", params, 60 * 5);
    case "get.pos.validators":
      return await doCache(
        call,
        params.address || params.limit,
        params,
        60 * 5
      );
    case "get.transactions":
      if (params.address || params.blockID || params.transactionID) {
        return await doCache(
          call,
          params.address || params.blockID || params.transactionID,
          params,
          60 * 5
        );
      }
      break;
    case "get.pos.stakes":
      return await doCache(call, params.address, params, 60 * 5);
    case "get.pos.stakers":
      return await doCache(call, params.address, params, 60 * 5);
    case "get.token.balances":
      return await doCache(call, params.address, params, 60);
    case "get.network.status":
      return await doCache(call, params.address, params, 10);
    case "get.auth":
      return await doCache(call, params.address, params, 60 * 5);
    case "get.network.peers":
      return await doCache(call, "peers", params, 60 * 5);
    case "get.token.balances.top":
      return await doCache(call, "top", params, 60 * 5);
    case "get.pos.rewards.claimable":
      return await doCache(call, params.address, params, 60 * 5);
    case "get.pos.unlocks":
      return await doCache(call, params.address, params, 60 * 5);
    case "get.events":
      if (params.senderAddress || params.transactionID || params.blockID) {
        return await doCache(
          call,
          params.senderAddress || params.transactionID || params.blockID,
          params,
          60
        );
      } else {
        return await doCache(
          call,
          params.limit,
          params,
          10
        );
      }
    case "get.blocks":
      if (params.generatorAddress || params.blockID || params.height) {
        return await doCache(
          call,
          params.generatorAddress || params.blockID || params.height,
          params,
          60
        );
      }
      if (params.limit) {
        return await doCache(call, params.limit, params, 10);
      }
      break;
    default:
      saveStat(call, params);
      if (stats.requests % 1000 === 0) {
        console.log(stats);
      }
  }
  if (stats.requests % 100) {
    console.log(`Requests done: ${stats.requests}`)
  }
  return await client.rpc(call as CallsRPC, params);
};

export const getNextData = async (
  serviceType: ServiceTypes,
  call: CallsRPC | string,
  params?: any
): Promise<RPCResponses<RPCCalls> & { data?: any }> => {
  const nextParams = {
    ...params,
    offset: (params?.offset || 0) + (params?.limit || 10),
  };
  return await getData(serviceType, call, nextParams);
};

export const keyFromData = (
  findKey: string,
  data: Record<string, CallTypesRPC[CallsRPC]["response"]>
) => {
  const [key] = findKey.split(".");
};
