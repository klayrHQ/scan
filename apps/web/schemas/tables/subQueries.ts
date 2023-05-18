import { defineType } from "sanity";
import {Methods} from "./methods";

export default defineType({
  name: "subQuery",
  type: "document",
  title: "Child Query",
  fields: [
    {
      name: "primaryKey",
      type: "string",
      title: "Primary key",
    },
    {
      name: "foreignKey",
      type: "string",
      title: "Foreign key",
    },
    {
      name: "call",
      type: "string",
      title: "Method",
      options: {
        list: Methods
      }
    },
    {
      name: "serviceType",
      type: "string",
      title: "Service",
      options: {
        list: [
          { title: "Lisk Service", value: "lisk-service" },
          { title: "Liskscan Usernames", value: "liskscan-usernames" },
          { title: "Liskscan Knowledge", value: "liskscan-knowledge" },
          { title: "Liskscan Votes", value: "liskscan-votes" },
          { title: "Liskscan Avatars", value: "liskscan-avatars" },
          { title: "Liskscan Favorites", value: "liskscan-favorites" },
          { title: "Liskscan Stats", value: "liskscan-stats" },
        ],
      },
    },
    {
      name: "type",
      type: "string",
      title: "Query Type",
      options: {
        list: [
          {title: "For every row (forEach)", value: "forEach"},
          {title: "Match by key (singleMatch)", value: "singleMatch"}
        ]
      }
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
  ],
});
