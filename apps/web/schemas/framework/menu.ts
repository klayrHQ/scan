import { defineType } from "sanity";
import { iconsListKeys } from "../../components/iconList";

export default defineType({
  name: "menu",
  type: "object",
  title: "Menu",
  fields: [
    {
      name: "items",
      type: "array",
      title: "Menu items",
      of: [
        {
          type: "object",
          name: "item",
          title: "Menu Item",
          fields: [
            { type: "string", name: "label", title: "Label" },
            { type: "string", name: "link", title: "Link" },
            {
              type: "array",
              name: "items",
              title: "SubMenu Items (optional)",
              of: [
                {
                  type: "object",
                  name: "item",
                  title: "SubMenu Item",
                  fields: [
                    { type: "string", name: "label", title: "Label" },
                    { type: "string", name: "subLabel", title: "Sub Label" },
                    { type: "string", name: "link", title: "Link" },
                    {
                      type: "string",
                      name: "icon",
                      title: "Icon",
                      description: "https://heroicons.com/",
                      options: {
                        list: iconsListKeys.map((n) => ({
                          value: n,
                          title: n,
                        })),
                      },
                    },
                    {
                      type: "string",
                      name: "badge",
                      title: "Badge (optional)",
                    },
                    { type: "boolean", name: "disabled", title: "Disabled" },
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
