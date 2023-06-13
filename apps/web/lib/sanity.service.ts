import {
  CallsRPC,
  CallTypesRPC,
  RPCCalls,
  RPCResponses,
} from "@liskscan/lisk-service-client/lib/types";
import { LiskService } from "@liskscan/lisk-service-client";
import { getDotString, getDottedKeyType, getFromDottedKey } from "./dotString";
import { parseProps } from "../../../packages/ui/atoms/valueFormatter/valueFormatter";
import { UpdateOnType } from "../schemas/slices/table";
import * as util from "util";

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
  url: "betanet-service.liskscan.com",
  // url: "betanet-service.lisk.com",
  disableTLS: false,
});

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
      if (query.calculations) {
        for (const calculation of query.calculations) {
          if (responses[query.key].data?.[0]) {
            // data array
            responses[query.key].data = responses[query.key].data.map(
              (row: any) => {
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
              }
            );
          } else {
            // data object
          }
        }
      }
    }
    if (query.subQueries && query.subQueries.length > 0) {
      for (const subQuery of query.subQueries) {
        if (subQuery.type === "forEach") {
          if (responses[query.key].status === "success") {
            const data = getIterableData(responses[query.key]?.data)
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
    return []
  }
  if (data[0]) {
    return data
  }
  const keys = Object.keys(data)
  for (const k of keys) {
    if (data[k][0]) {
      return data[k]
    }
  }
  return []
}

export const getData = async (
  serviceType: ServiceTypes,
  call: CallsRPC | string,
  params?: any
): Promise<RPCResponses<RPCCalls> & { data?: any }> => {
  // todo fix any data
  switch (serviceType) {
    default:
      return await client.rpc(call as CallsRPC, params);
  }
};

export const keyFromData = (
  findKey: string,
  data: Record<string, CallTypesRPC[CallsRPC]["response"]>
) => {
  const [key] = findKey.split(".");
};
