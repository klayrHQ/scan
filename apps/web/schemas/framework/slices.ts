import {defineType} from 'sanity'

export default defineType({
  name: "slices",
  type: "document",
  title: "Slices",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",

      },
    },
    {
      name: "slice",
      type: "string",
      title: "Slice component",
    },
    {
      type: "image",
      name: "screenshot",
      title: "Screenshot",
      options: {
        hotspot: true,
      },
    },
  ],
});
