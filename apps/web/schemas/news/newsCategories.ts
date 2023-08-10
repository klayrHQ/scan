import {defineType} from "sanity";

export default defineType({
  name: "newsCategories",
  type: "document",
  title: "Categories",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Category Title",
    },
  ],
});