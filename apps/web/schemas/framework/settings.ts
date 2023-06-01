export default {
  name: "settings",
  type: "object",
  title: "Settings",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Site sub title",
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
      options: {
        hotspot: true,
      },
    },
    {
      name: "copyright",
      type: "string",
      title: "Footer copyright",
    },
  ],
};
