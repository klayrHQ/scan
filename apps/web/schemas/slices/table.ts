import { defineType } from "sanity";

export type UpdateOnType =
  | "never"
  | "lastBlock"
  | "lastTransactions"
  | "lastEvents"
  | "lastRound"
  | "lastGenerators"
  | "lastFees"
  | "lastMeta";

export const UpdateOn: { title: string; value: UpdateOnType }[] = [
  { title: "Never", value: "never" },
  { title: "New block", value: "lastBlock" },
  { title: "New transactions", value: "lastTransactions" },
  { title: "New events", value: "lastEvents" },
  { title: "Update round", value: "lastRound" },
  { title: "Update generators", value: "lastGenerators" },
  { title: "Update fee estimates", value: "lastFees" },
  { title: "Update meta data", value: "lastMeta" },
];
export default defineType({
  name: "tableSlice",
  type: "document",
  title: "Table",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "table",
      type: "reference",
      title: "Table",
      to: [{ type: "tables" }],
    },
  ],
});
