import { SanityDocument } from "@sanity/types/src";
import { evaluate, parse } from "groq-js";

const indexedDocuments = new Map<string, SanityDocument>();
let documents: SanityDocument[] = [];

export const setSanitySSRSnapshot = (snapshot: {
  result: SanityDocument[];
}) => {
  documents = snapshot.result;
  // snapshot.result.forEach((doc) => indexedDocuments.set(doc._id, doc));
};

export const sanitySsrQuery = async <R = any>(
  groqQuery: string,
  params?: Record<string, unknown>
): Promise<R> => {
  if (documents.length === 0) {
    return new Promise((resolve) =>
      setTimeout(
        async () => resolve(await await sanitySsrQuery(groqQuery, params)),
        40
      )
    );
  }
  const tree = parse(groqQuery, { params });
  const result = await evaluate(tree, {
    dataset: documents,
    params,
  });
  return result.get();
};
