import { defineType } from "sanity";

export const divider = defineType({
  name: "divider",
  type: "document",
  title: "Divider",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "className",
      type: "string",
      title: "Classname",
    },
    {
      name: "color",
      type: "string",
      title: "Color",
    },
    {
      name: "width",
      type: "string",
      title: "Width",
    },
    {
      name: "borderWidth",
      type: "string",
      title: "Divider thickness",
    },
    {
      name: "borderStyle",
      type: "string",
      title: "Divider style (solid, dotted, etc.)",
    },
    {
      name: "align",
      type: "string",
      title: "Alignment",
    },
    {
      name: "marginY",
      type: "string",
      title: "Margin top and bottom",
    },
  ]
})
