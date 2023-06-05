import { defineType } from "sanity";

export const favorite = defineType({
  name: "favorite",
  type: "document",
  title: "Favorite",
  fields: [
    {
      name: "name",
      type: "string",
      title: "ID",
    },
  ]
})
