import { defineType } from "sanity";

export default defineType({
  name: "formats",
  type: "object",
  title: "Format",
  fields: [{ type: "string", name: "name", title: "Name" }],
});
