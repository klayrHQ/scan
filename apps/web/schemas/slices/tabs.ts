import { defineType } from "sanity";
import table from "./table";
import titleBox from "./titleBox";
import { kpi } from "./kpi";
import tabs from "./tabs";
import { SanityValue } from "../layout/value";
import { stakesAccount } from "./stakesAccount";
import {divider} from "./divider";
import {jsonItem} from "./jsonItem";
import {chart} from "./chart";

const sliceDocumentNames: {
  type: string;
}[] = [
  { name: "tabs" },
  table,
  stakesAccount,
  titleBox,
  kpi,
  divider,
  jsonItem,
  chart,
  { name: "grid" },
].map((doc) => ({
  type: doc.name,
}));

export default defineType({
  name: "tabs",
  type: "document",
  title: "Tabs",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "staticTabs",
      type: "array",
      title: "Static Tabs",
      of: [
        {
          type: "object",
          name: "tab",
          fields: [
            { type: "string", name: "label", title: "Label" },
            {
              type: "slug",
              name: "handle",
              title: "Handle",
            },
            { type: "string", name: "queryKey", title: "query key" },
            {
              name: "content",
              title: "Content",
              type: "reference",
              to: [...sliceDocumentNames],
            },
          ],
        },
      ],
    },
    {
      name: "container",
      type: "boolean",
      title: "Outer container with shadow & padding",
    },
  ],
});
