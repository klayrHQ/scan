import { defineType } from "sanity";
import { SanityValue } from "../layout/value";

export default defineType({
  name: "accountHeader",
  type: "document",
  title: "Account Header",
  fields: [
    {
      name: "id",
      type: "string",
      title: "Name (not used)",
    },
    {
      name: "values",
      type: "object",
      title: "values",
      fields: SanityValue,
    },
  ],
});
