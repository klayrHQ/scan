import {SanityValue} from "../layout/value";

export const kpi = {
  name: "kpi",
  type: "document",
  title: "KPI",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "values",
      type: "array",
      title: "Values",
      of: [
        {
          type: "object",
          name: "value",
          fields: SanityValue
        }
      ]
    },
    {
      name: "copy",
      type: "number",
      title: "Copy",
      description: "-1 is disabled",
      options: {
        defaultValue: -1
      }
    },
    {
      name: "className",
      type: "string",
      title: "className",
    },
    {
      name: "isFlex",
      type: "boolean",
      title: "Is flex",
    },
    {
      name: "justifyBetween",
      type: "boolean",
      title: "justifyBetween",
    },
    {
      name: "cols",
      type: "number",
      title: "Columns",
    },
    {
      name: "mobileColumns",
      type: "number",
      title: "Mobile Columns",
    },
    {
      name: "gap",
      type: "number",
      title: "Gap",
    },
  ]
}
