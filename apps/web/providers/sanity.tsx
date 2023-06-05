"use client";
import { parse, evaluate } from "groq-js";
import { createContext, useContext } from "react";
import { SanityDocument } from "@sanity/types";

interface SanityStoreProviderProps {
  children: React.ReactNode;
  snapshot: { query: string; result: SanityDocument[] };
}

type SanityContextType = {
  query<R = any>(
    groqQuery: string,
    params?: Record<string, unknown>
  ): Promise<R>;
  indexedDocuments: Map<string, SanityDocument>;
};

const SanityContext = createContext<SanityContextType>({} as SanityContextType);
export const SanityStoreProvider = ({
  children,
  snapshot,
}: SanityStoreProviderProps) => {
  const indexedDocuments = new Map<string, SanityDocument>();
  snapshot.result.forEach((doc) => indexedDocuments.set(doc._id, doc));

  const query = async <R = any,>(
    groqQuery: string,
    params?: Record<string, unknown>
  ): Promise<R> => {
    const tree = parse(groqQuery);

    const result = await evaluate(tree, {
      dataset: indexedDocuments,
      params,
    });
    return result.get();
  };
  return (
    <SanityContext.Provider value={{ indexedDocuments, query }}>
      {children}
    </SanityContext.Provider>
  );
};
export const useSanity = () => useContext(SanityContext);
