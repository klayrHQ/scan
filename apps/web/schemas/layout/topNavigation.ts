
export default {
  name: "topNavigation",
  type: "document",
  title: "Topbar Navigation",
  fields: [
    {
      name: "menuItems",
      type: "array",
      title: "Menu Item",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "label", },
            {
              title: "Link",
              type: "url",
              name: "href",
              validation: (Rule: any) =>
                Rule.uri({
                  allowRelative: true,
                }),
            },
            {
              type: "string",
              name: "type",
              title: "Item type",
              options: {
                list: [
                  { title: "Default", value: "default", },
                  { title: "Button Primary", value: "primary", },
                  { title: "Button Secondary", value: "secondary", },
                ],
                layout: "radio",
              },
            },
          ],
        },
      ],
    },
  ],
};
