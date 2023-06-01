import { getAllData, ServiceQueries } from "./sanity.service";
import {
  ErrorResponse,
  RPCResponses,
} from "@liskscan/lisk-service-client/lib/types";

export interface GetQueriesProps {
  queries: ServiceQueries[];
  id?: string
}

export const getQueries = async ({
  queries,
  id
}: GetQueriesProps): Promise<
  Record<string, RPCResponses<any> | ErrorResponse>
> => (await getAllData(queries, undefined, id)) as RPCResponses<any>;
