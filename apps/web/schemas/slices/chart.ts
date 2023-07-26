import { defineType } from "sanity";

export const chart = defineType({
  name: "chart",
  type: "document",
  title: "Chart",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "chartType",
      type: "string",
      title: "ChartType",
      initialValue: "donut",
      options: {
        list: [
          {title: "Donut Chart", value: "donut"},
          {title: "Pie Chart", value: "pie"},
          {title: "Columns Chart", value: "columns"},
        ],
      },
    },
    {
      name: "chartData",
      type: "string",
      title: "Chart Data",
    },
  ]
})
