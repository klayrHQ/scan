
export const jsonItem = {
  name: "jsonItem",
  type: "document",
  title: "JsonItem",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "src",
      type: "string",
      title: "Object or Array",
    },
    {
      name: "classNames",
      type: "object",
      title: "ClassNames",
      fields: [
        {
          name: "className",
          type: "string",
          title: "Classname",
        },
        {
          name: "childClassName",
          type: "string",
          title: "Child Classname",
        },
        {
          name: "expanderClassName",
          type: "string",
          title: "Expander Classname",
        },
        {
          name: "labelClassName",
          type: "string",
          title: "Label Classname",
        },
        {
          name: "nullClassName",
          type: "string",
          title: "Null Classname",
        },
        {
          name: "undefinedClassName",
          type: "string",
          title: "Undefined Classname",
        },
        {
          name: "numberClassName",
          type: "string",
          title: "Number Classname",
        },
        {
          name: "stringClassName",
          type: "string",
          title: "String Classname",
        },
        {
          name: "booleanClassName",
          type: "string",
          title: "Boolean Classname",
        },
      ]
    },
  ]
}
