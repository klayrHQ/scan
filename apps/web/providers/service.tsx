"use client";
import { LiskService } from "@liskscan/lisk-service-client";
import { BlocksResponse } from "@liskscan/lisk-service-client/lib/types/api/blocks";
import { TransactionsResponse } from "@liskscan/lisk-service-client/lib/types/api/transactions";
import { createContext, ReactNode, useContext, useState } from "react";

type ServiceContextType = {
  client: LiskService
  lastBlock?: BlocksResponse
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

  const [lastBlock, setLastBlock] = useState<BlocksResponse | undefined>(undefined)
  const [lastTransactions, setLastTransactions] = useState<TransactionsResponse | undefined>(undefined)
  client.subscribe("new.block", (block) => setLastBlock(block))
  client.subscribe("new.transactions", (transactions) => setLastTransactions(transactions))

  return (
    <ServiceContext.Provider value={{ client, lastBlock, lastTransactions }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
