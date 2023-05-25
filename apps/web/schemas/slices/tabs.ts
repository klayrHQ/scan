import { defineType } from "sanity";
import table from "./table";
import titleBox from "./titleBox";
import { kpi } from "./kpi";
import tabs from "./tabs";
import {SanityValue} from "../layout/value";

const sliceDocumentNames: {
  type: string;
}[] = [{ name: "tabs" }, table, titleBox, kpi, { name: "grid" }].map((doc) => ({
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
      name: "dynamicTabs",
      type: "object",
      title: "Dynamic Tabs",
      fields: [
        { type: "object", name: "label", title: "Label", fields: SanityValue },
        { type: "string", name: "idKey", title: "id key" },
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
});
