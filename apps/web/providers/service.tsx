"use client";
import { LiskService } from "@liskscan/lisk-service-client";
import { BlocksResponse } from "@liskscan/lisk-service-client/lib/types/api/blocks";
import { TransactionsResponse } from "@liskscan/lisk-service-client/lib/types/api/transactions";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";

type ServiceContextType = {
  client: LiskService
  lastBlock?: BlocksResponse["data"][0]
  lastTransactions?: TransactionsResponse
};
const ServiceContext = createContext<ServiceContextType>(
  {} as ServiceContextType
);
const client = new LiskService({
  url: "51.15.142.42:9901",
  disableTLS: true,
});
export const ServiceProvider = ({ children }: { children: ReactNode }) => {

  const [lastBlock, setLastBlock] = useState<BlocksResponse["data"][0] | undefined>(undefined)
  const [lastTransactions, setLastTransactions] = useState<TransactionsResponse | undefined>(undefined)
  client.subscribe("new.block", (block) => setLastBlock(block.data[0]))
  client.subscribe("new.transactions", (transactions) => setLastTransactions(transactions))
  useEffect(() => {
    const getInitialState = async () => {
      const block = await client.rpc("get.blocks", {sort: "height:desc", limit: 1})
      if (block.status === "success") {
        setLastBlock(block.data[0])
      }
    }
    getInitialState()
  }, [])
  return (
    <ServiceContext.Provider value={{ client, lastBlock, lastTransactions }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
