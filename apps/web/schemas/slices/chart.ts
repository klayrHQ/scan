import { defineType } from "sanity";
import {SanityValue} from "../layout/value";

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
      name: "labelKey",
      type: "string",
      title: "Label Key",
    },
    {
      name: "valueKey",
      type: "string",
      title: "Value Key",
    },
    {
      name: "chartDataKey",
      type: "string",
      title: "Chart Data Query",
      description: "What query should be generating the data to populate the chart",
    },
    /*{
      name: "chartData",
      type: "object",
      title: "Chart Data",
      fields: [
        {
          name: "label",
          type: "object",
          title: "Label",
          fields: [
            {
              name: "key",
              type: "string",
              title: "Key",
            },
            {
              name: "value",
              type: "string",
              title: "Value",
            },
          ]
        },
        {
          name: "value",
          type: "object",
          title: "Value",
          fields: [
            {
              name: "key",
              type: "string",
              title: "Key",
            },
            {
              name: "value",
              type: "string",
              title: "Value",
            },
          ]
        },
      ],
    },*/
  ]
})
