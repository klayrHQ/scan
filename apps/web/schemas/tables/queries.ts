import {Methods} from "./methods";
import {UpdateOn} from "../slices/table";

export default {
  name: "query",
  type: "document",
  title: "Query",
  fields: [
    {
      name: "key",
      type: "string",
      title: "Key/title",
    },
    {
      name: "call",
      type: "string",
      title: "Method",
      options: {
        list: [...Methods]
      }
    },
    {
      name: "serviceType",
      type: "string",
      title: "Service",
      options: {
        list: [
          { title: "Klayr Service", value: "lisk-service"},
          { title: "Liskscan Usernames", value: "liskscan-usernames"},
          { title: "Liskscan Knowledge", value: "liskscan-knowledge"},
          { title: "Liskscan Votes", value: "liskscan-votes"},
          { title: "Liskscan Avatars", value: "liskscan-avatars"},
          { title: "Liskscan Favorites", value: "liskscan-favorites"},
          { title: "Liskscan Stats", value: "liskscan-stats"},
        ]
      },
    },
    {
      name: "params",
      type: "array",
      title: "Params",
      of: [
        {
          type: "object",
          name: "inline",
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
          ],
        },
      ],
    },
    {
      name: "subQueries",
      type: "array",
      title: "Child Queries",
      of: [
        {
          type: "reference",
          to: [{ type: "subQuery" }],
        },
      ],
    },
    {
      name: "calculations",
      type: "array",
      title: "Calculated fields",
      of: [
        {
          type: "object",
          name: "calculation",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Field name",
            },
            {
              name: "calculation",
              type: "string",
              title: "Calculation",
              description: "eg. %d / %d * 100"
            },
            {
              name: "keys",
              type: "array",
              title: "Keys",
              of: [
                {
                  type: "string",
                  name: "key",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "updateOn",
      type: "string",
      title: "Update on",
      options: {
        list: UpdateOn,
      },
    },
  ],
};
