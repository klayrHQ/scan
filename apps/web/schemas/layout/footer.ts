import { defineType } from "sanity";

export default defineType({
  name: "footer",
  type: "object",
  title: "Footer",
  fields: [
    {
      name: "lists",
      type: "array",
      title: "Lists",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "title", title: "Title", },
            {
              type: "array",
              name: "items",
              of: [
                {
                  type: "object",
                  name: "inline",
                  fields: [
                    { type: "string", name: "label", title: "Label", },
                    {
                      title: "Link",
                      type: "url",
                      name: "href",
                      validation: (Rule) =>
                        Rule.uri({
                          allowRelative: true,
                        }),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
