import { defineType } from "sanity";

export const countryFlag = defineType({
  name: "countryFlag",
  type: "document",
  title: "Country Flag",
  fields: [
    {
      name: "countryCode",
      type: "string",
      title: "Country Code",
    },
    {
      name: "key",
      type: "string",
      title: "Key",
    },
  ]
})
