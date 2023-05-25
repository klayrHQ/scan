import {sliceDocumentNames} from "../slices";

export default {
  name: "pages",
  type: "document",
  title: "Pages",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "uri",
      type: "string",
      title: "Url",
      description: "eg. /blocks",
      options: {
        unique: true,
      }
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "uri",
      },
    },
    {
      name: "queries",
      type: "array",
      title: "Queries",
      of: [
        {
          type: "reference",
          to: [{ type: "query" }],
        },
      ],
    },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        {
          type: "reference",
          to: [
            ...sliceDocumentNames.map(name => ({type: name,})),
          ],
        },
      ],
    },
    {
      type: "image",
      name: "screenshot",
      title: "Screenshot",
    },
  ],
};
