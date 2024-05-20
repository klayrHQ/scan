
export default {
  name: "newsGrid",
  type: "document",
  title: "News Grid",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name (descriptive)",
    },
    {
      name: "newsItems",
      type: "array",
      title: "News Items",
      of: [
        {
          name: "news",
          type: "reference",
          title: "News Item",
          to: [{type: "news"}]
        },
      ]
    }
  ],
};
