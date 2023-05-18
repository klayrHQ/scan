import { defineType } from "sanity";

export default defineType({
  name: "column",
  type: "document",
  title: "Column",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name (Descriptive)"
    },
    {
      name: "headValues",
      type: "array",
      title: "Head label",
      of: [
        {
          type: "string"
        }
      ]
    },
    {
      name: "component",
      type: "string",
      title: "Column component",
      options: {
        list: [
          {title: "Default head column", value: "DefaultHeadColumn"},
        ]
      }
    },
    {
      name: "showOn",
      type: "string",
      title: "Show",
      options: {
        list: [
          {title: "Always", value: "always"},
          {title: "Only on mobile", value: "mobile"},
          {title: "Only on tablet", value: "tablet"},
          {title: "Only on desktop", value: "desktop"},
          {title: "On Mobile and Tablet", value: "mobileTablet"},
          {title: "On Tablet and Desktop", value: "tabletDesktop"},
          {title: "On Mobile and Desktop", value: "mobileDesktop"},
        ]
      }
    },
    {
      name: "className",
      type: "string",
      title: "className",
    },
    {
      name: "valueComponent",
      type: "string",
      title: "Value component",
      options: {
        list: [
          {title: "Plain", value: "PlainColumn"},
          {title: "Double row", value: "DoubleRowColumn"},
          {title: "Date", value: "DateColumn"},
        ]
      }
    },
    {
      name: "valueKeys",
      type: "array",
      title: "Value keys",
      of: [
        { type: "string" }
      ]
    }
  ],
});
