
export default {
  name: "news",
  type: "document",
  title: "News Item",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{type: "newsCategories"}],
    },
    {
      name: "imgType",
      type: "string",
      title: "Image type",
      initialValue: "url",
      options: {
        list: [
          {title: "url", value: "url"},
          {title: "upload", value: "upload"},
        ],
        layout: "radio",
        direction: "horizontal",
      }
    },
    {
      name: "img",
      type: "image",
      title: "Image",
      hidden: ({ parent, value }: any) => !value && parent?.imgType !== "upload"
    },
    {
      name: "imgObj",
      type: "object",
      title: "Image",
      fields: [
        {
          name: "url",
          type: "string",
          title: "Image URL",
        },
        {
          name: "title",
          type: "string",
          title: "Image Title",
        },
        {
          name: "alt",
          type: "string",
          title: "Image Alt",
        },
      ],
      hidden: ({ parent, value }: any) => !value && parent?.imgType !== "url"
    },
    {
      name: "url",
      type: "string",
      title: "Link",
    }
  ],
};
