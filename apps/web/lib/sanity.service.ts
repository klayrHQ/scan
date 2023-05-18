import {CallsRPC, CallTypesRPC, RPCCalls, RPCResponses} from "@liskscan/lisk-service-client/lib/types";
import {LiskService} from "@liskscan/lisk-service-client";
import {getDotString} from "./dotString";
export type ServiceTypes = "lisk-service" | "liskscan-usernames" | "liskscan-knowledge" | "liskscan-history" | "liskscan-votes" | "liskscan-avatars" | "liskscan-favorites"
export interface ServiceQueries {
  key: string;
  serviceType: ServiceTypes
  call: CallsRPC | string;
  params?: any;
  subQueries?: {
    type: "forEach" | "singleMatch"
    serviceType: ServiceTypes
    call: CallsRPC | string
    primaryKey: string
    foreignKey: string
    params?: any
  }[]
}

const client = new LiskService({
  url: "51.15.142.42:9901",
  disableTLS: true,
})

export const getAllData = async (queries: ServiceQueries[]): Promise<Record<string, RPCResponses<RPCCalls>>> => {
  const responses: Record<string, RPCResponses<RPCCalls> & { data?: any[] | any }> = {}
  for (const query of queries) {
    if (query.serviceType === "lisk-service") {
      responses[query.key] = await getData(query.serviceType, query.call, query.params)
    }
    if (query.subQueries && query.subQueries.length > 0) {
      for (const subQuery of query.subQueries) {
        if (subQuery.type === "forEach") {
          if (responses[query.key].status === "success") {
            for (const index in responses[query.key].data) {
              const childRequest = responses[query.key].data[index]
              const foreignKey = getDotString(subQuery.foreignKey.split("."), childRequest)
              if (!responses[`${foreignKey}_${subQuery.call}`]) {
                const response = await getData(subQuery.serviceType, subQuery.call, {
                  [subQuery.primaryKey]: foreignKey
                })
                if (response.status === "success") {
                  // @ts-ignore
                  responses[`${foreignKey}_${subQuery.call}`] = {...response, data: response.data && response.data.length > 0 ? response.data[0] : response.data }
                }
              }
              responses[query.key].data[index][`${subQuery.call.replaceAll(".", "_")}_${subQuery.foreignKey.replaceAll(".", "_")}`] = responses[`${foreignKey}_${subQuery.call}`]
            }
          }
        }
        if (subQuery.type === "singleMatch" && !responses[`${subQuery.call}_${subQuery.primaryKey}`]) {
          responses[`${subQuery.call.replaceAll(".", "_")}_${subQuery.primaryKey}`] = await getData(subQuery.serviceType, subQuery.call, subQuery.params)
        }
      }
    }
  }
  return responses
};

export const getData = async (serviceType: ServiceTypes, call: CallsRPC | string, params?: any) => {
  switch (serviceType) {

    default:
      return await client.rpc(call as CallsRPC, params) as RPCResponses<RPCCalls>
  }
}

export const keyFromData = (findKey: string, data: Record<string, CallTypesRPC[CallsRPC]["response"]>) => {
  const [key] = findKey.split(".")
}
