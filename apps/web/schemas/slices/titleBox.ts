import {SanityValue} from "../layout/value";

export default {
  name: "titleBox",
  type: "document",
  title: "Title description",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name (not used)",
    },
    {
      name: "title",
      type: "object",
      title: "Title",
      fields: SanityValue
    },
    {
      name: "description",
      type: "object",
      title: "Description",
      fields: SanityValue
    },
    {
      name: "info",
      type: "string",
      title: "Tooltip info text",
    },
  ],
};
