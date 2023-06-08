export default {
  name: "tables",
  type: "document",
  title: "Tables",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "key",
      type: "string",
      title: "Iteration table",
      description: "What query should be generating the rows"
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    // {
    //   name: "queries",
    //   type: "array",
    //   title: "Queries",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "query" }],
    //     },
    //   ],
    // },
    {
      name: "sticky",
      type: "boolean",
      title: "Sticky Table-head",
    },
    {
      name: "columns",
      type: "array",
      title: "Columns",
      of: [
        {
          type: "reference",
          to: [{ type: "column" }],
        },
      ],
    },
  ],
};
