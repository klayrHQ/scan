import {SanityValue} from "../layout/value";

export const stakesAccount = {
  name: "stakesAccount",
  type: "document",
  title: "Stakes Account",
  fields: [
    {
      name: "name",
      type: "string",
      title: "ID",
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
