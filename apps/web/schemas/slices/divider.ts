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
      name: "align",
      type: "string",
      title: "Alignment",
      initialValue: "center",
      options: {
        list: [
          {title: "None", value: ""},
          {title: "Left", value: "start"},
          {title: "Center", value: "center"},
          {title: "Right", value: "end"},
        ],
        layout: "radio",
      },
    },
    {
      name: "marginY",
      type: "string",
      title: "Margin top and bottom",
    },
  ]
})
