"use client";
import {
  EventsResponse,
  LiskService,
} from "@liskscan/lisk-service-client";
import { BlocksResponse } from "@liskscan/lisk-service-client/lib/types/api/blocks";
import { TransactionsResponse } from "@liskscan/lisk-service-client/lib/types/api/transactions";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  ErrorResponse,
  RPCResponses,
} from "@liskscan/lisk-service-client/lib/types";
import {client, getAllData, ServiceQueries} from "../lib/sanity.service";
import { UpdateOnType } from "../schemas/slices/table";

type ServiceContextType = {
  connected?: number;
  lastUpdate?: number;
  client: LiskService;
  lastBlock?: BlocksResponse["data"][0];
  lastTransactions?: TransactionsResponse;
  cache?: Record<string, RPCResponses<any> | ErrorResponse>;
  queries: ServiceQueries[];
  events: Record<string, EventsResponse | BlocksResponse["data"][0]>;
  setQueries(queries: ServiceQueries[]): void;
  setID(id?: string): void
  nextPage(queryKey?: string): void
};
const ServiceContext = createContext<ServiceContextType>(
  {} as ServiceContextType
);


export const ServiceProvider = ({ children }: { children: ReactNode }) => {
  const [id, setID] = useState<string | undefined>();
  const [queries, setQueries] = useState<ServiceQueries[]>([]);
  const [events, setEvents] = useState<Record<string, any>>({});
  const [event, setEvent] = useState<[UpdateOnType, number]>();
  const [lastBlock, setLastBlock] = useState<
    BlocksResponse["data"][0] | undefined
  >(undefined);
  const [connected, setConnected] = useState<undefined | number>();
  const [lastUpdate, setLastUpdate] = useState<undefined | number>();
  const [cache, setCache] = useState<
    Record<string, RPCResponses<any> | ErrorResponse> | undefined
  >();

  const updateQuery = async () => {
    //console.log("queries", JSON.stringify(queries))
    const response = await getAllData(queries, undefined, id);
    setCache((prevState) => ({ ...prevState, ...response }));
    setLastUpdate(new Date().getTime());
  };

  const nextPage = async (queryKey: string) => {
    // console.log(queries)
    const response = await getAllData(queries, undefined, id);
    setCache((prevState) => ({ ...prevState, ...response }));
    setLastUpdate(new Date().getTime());
  };

  const updateOnEvent = (event: UpdateOnType) => {
    return queries.filter((query) => query.updateOn === event);
  };

  const updateCache = async () => {
    if (event) {
      const updateQueries = updateOnEvent(event[0])
      const response = await getAllData(updateQueries, cache, id);
      setCache((prevState) => ({...prevState, ...response}));
      setLastUpdate(new Date().getTime());
    }
  };

  useEffect(() => {
    updateCache()
  }, [event])

  useEffect(() => {
    if (queries.length > 0) {
      updateQuery()
    }
  }, [queries]);

  // Subscribe to events
  useEffect(() => {
    client.subscribe("new.block", (block) => {
      setEvents((prevState) => ({ ...prevState, "new.block": block.data[0] }));
      setEvent(["lastBlock", new Date().getTime()])
    });
    client.subscribe("delete.block", (block) => {
      setEvents((prevState) => ({
        ...prevState,
        "delete.block": block.data[0],
      }));
      setEvent(["lastBlock", new Date().getTime()])
    });
    client.subscribe("new.transactions", (transactions) => {
      setEvents((prevState) => ({
        ...prevState,
        "new.transactions": transactions,
      }));
      setEvent(["lastTransactions",new Date().getTime()]);
    });
    client.subscribe("delete.transactions", (transactions) => {
      setEvents((prevState) => ({
        ...prevState,
        "delete.transactions": transactions,
      }));
      setEvent(["lastTransactions",new Date().getTime()]);
    });
    client.subscribe("update.round", (data) => {
      setEvents((prevState) => ({ ...prevState, "update.round": data }));
      setEvent(["lastRound",new Date().getTime()]);

    });
    client.subscribe("update.generators", (data) => {
      setEvents((prevState) => ({
        ...prevState,
        "update.generators": data,
      }));
      setEvent(["lastGenerators",new Date().getTime()]);
    });
    client.subscribe("update.fees_estimates", (data) => {
      setEvents((prevState) => ({
        ...prevState,
        "update.fees_estimates": data,
      }));
      setEvent(["lastFees",new Date().getTime()]);
    });
    client.subscribe("update.metadata", (data) => {
      setEvents((prevState) => ({ ...prevState, "update.metadata": data }));
      setEvent(["lastMeta",new Date().getTime()]);
    });
  }, []);

  useEffect(() => {
    const getInitialState = async () => {
      const start = new Date().getTime();
      const block = await client.rpc("get.blocks", {
        sort: "height:desc",
        limit: 1,
      });
      if (block.status === "success") {
        setConnected(new Date().getTime() - start);
        setLastUpdate(new Date().getTime());
        setEvents((prevState) => ({
          ...prevState,
          "new.block": block.data[0],
        }));
      }
    };
    getInitialState();
  }, []);
  return (
    <ServiceContext.Provider
      value={{
        connected,
        client,
        lastBlock,
        events,
        setQueries,
        queries,
        cache,
        lastUpdate,
        setID,
        nextPage,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
