import { UpdateOn } from "../slices/table";
import { iconsListKeys } from "../../components/iconList";

export const SanityValue = [
  {
    name: "name",
    type: "string",
    title: "Name",
  },
  {
    name: "type",
    type: "string",
    title: "Type",
    options: {
      list: [
        { title: "Label", value: "literal" },
        { title: "Key", value: "key" },
        { title: "Calculated", value: "calculated" },
        { title: "Conditional", value: "conditional" },
      ],
    },
  },
  {
    name: "value",
    type: "string",
    title: "Value",
    description: "Used for label and key type only",
  },
  {
    name: "calculations",
    type: "array",
    title: "Calculated fields",
    description: "Used for calculated type only",
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
            description: "eg. %d / %d * 100",
          },
          {
            name: "keys",
            type: "array",
            title: "Keys",
            of: [
              {
                type: "string",
                name: "key",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "conditions",
    type: "array",
    title: "Conditional value",
    description: "Used for conditional type only",
    of: [
      {
        type: "object",
        name: "conditional",
        fields: [
          {
            title: "Conditions",
            name: "conditions",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  {
                    type: "string",
                    name: "operator",
                    title: "Operator",
                    options: {
                      list: [
                        { title: "(>) Value is bigger then: ", value: ">" },
                        {
                          title: "(>=) Value is bigger then or equal to: ",
                          value: ">=",
                        },
                        { title: "(==) Value equals: ", value: "==" },
                        {
                          title: "(<=) Value is smaller then or equal to: ",
                          value: "<=",
                        },
                        { title: "(<) Value is smaller then: ", value: "<" },
                        { title: "(!=) Value NOT equals: ", value: "!=" },
                      ],
                    },
                  },
                  {
                    type: "string",
                    name: "conditionValue",
                    title: "Condition Value",
                  },
                  {
                    type: "boolean",
                    name: "valueIsIndex",
                    title: "Use index as value",
                  },
                  { type: "string", name: "value", title: "Value" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "format",
    type: "object",
    title: "Formatting",
    fields: [
      {
        title: "Tag",
        type: "string",
        name: "tag",
        options: {
          list: [
            { title: "h1", value: "h1" },
            { title: "h2", value: "h2" },
            { title: "h3", value: "h3" },
            { title: "h4", value: "h4" },
            { title: "span", value: "span" },
            { title: "p", value: "p" },
            { title: "small", value: "small" },
            { title: "em", value: "em" },
            { title: "strong", value: "strong" },
            { title: "button", value: "button" },
            { title: "text", value: "text" },
          ],
        },
      },
      {
        title: "Typography Props",
        type: "array",
        name: "typography",
        of: [
          {
            type: "object",
            name: "typographyProp",
            title: "Typography Prop",
            fields: [
              { name: "key", title: "Key", type: "string" },
              { name: "value", title: "Value", type: "string" },
            ],
          },
        ],
      },
      {
        title: "Value type",
        type: "string",
        name: "type",
        options: {
          list: [
            { title: "string", value: "string" },
            { title: "number", value: "number" },
            { title: "beddows", value: "beddows" },
            { title: "boolean", value: "boolean" },
            { title: "float", value: "float" },
            { title: "timestamp", value: "timestamp" },
            { title: "hex", value: "hex" },
            { title: "object", value: "object" },
          ],
        },
      },
      {
        title: "Format",
        type: "string",
        name: "format",
        options: {
          list: [
            { title: "plain", value: "plain" },
            { title: "fromNow", value: "fromNow" },
            { title: "date", value: "date" },
            { title: "shortAddress", value: "shortAddress" },
            { title: "percentage", value: "percentage" },
            { title: "commission", value: "commission" },
            { title: "currency", value: "currency" },
            { title: "fee", value: "fee" },
            { title: "number", value: "number" },
            { title: "avatar", value: "avatar" },
            { title: "avatarAddress", value: "avatarAddress" },
            { title: "icon", value: "icon" },
          ],
        },
      },
      {
        title: "Tooltip",
        type: "object",
        name: "tooltip",
        fields: [
          { title: "Tooltip", name: "value", type: "string" },
          {
            title: "placement",
            name: "placement",
            type: "string",
            options: {
              list: [
                { title: "auto", value: "auto" },
                { title: "auto-start", value: "auto-start" },
                { title: "auto-end", value: "auto-end" },
                { title: "top", value: "top" },
                { title: "top-start", value: "top-start" },
                { title: "top-end", value: "top-end" },
                { title: "bottom", value: "bottom" },
                { title: "bottom-start", value: "bottom-start" },
                { title: "bottom-end", value: "bottom-end" },
                { title: "right", value: "right" },
                { title: "right-start", value: "right-start" },
                { title: "right-end", value: "right-end" },
                { title: "left", value: "left" },
                { title: "left-start", value: "left-start" },
                { title: "left-end", value: "left-end" },
              ],
            },
          },
          {
            title: "offset",
            name: "offset",
            type: "object",
            fields: [
              { title: "skidding", name: "skidding", type: "number" },
              { title: "distance", name: "distance", type: "number" },
            ],
          },
          {
            title: "Conditions",
            name: "conditions",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  {
                    type: "string",
                    name: "operator",
                    title: "Operator",
                    options: {
                      list: [
                        { title: "(>) Value is bigger then: ", value: ">" },
                        {
                          title: "(>=) Value is bigger then or equal to: ",
                          value: ">=",
                        },
                        { title: "(==) Value equals: ", value: "==" },
                        {
                          title: "(<=) Value is smaller then or equal to: ",
                          value: "<=",
                        },
                        { title: "(<) Value is smaller then: ", value: "<" },
                        { title: "(!=) Value NOT equals: ", value: "!=" },
                      ],
                    },
                  },
                  {
                    type: "string",
                    name: "conditionValue",
                    title: "Condition Value",
                  },
                  { type: "string", name: "tooltip", title: "Tooltip" },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Color",
        type: "object",
        name: "color",
        fields: [
          { title: "Color", name: "color", type: "string" },
          {
            title: "Conditions",
            name: "conditions",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  {
                    type: "string",
                    name: "operator",
                    title: "Operator",
                    options: {
                      list: [
                        { title: "(>) Value is bigger then: ", value: ">" },
                        {
                          title: "(>=) Value is bigger then or equal to: ",
                          value: ">=",
                        },
                        { title: "(==) Value equals: ", value: "==" },
                        {
                          title: "(<=) Value is smaller then or equal to: ",
                          value: "<=",
                        },
                        { title: "(<) Value is smaller then: ", value: "<" },
                        { title: "(!=) Value NOT equals: ", value: "!=" },
                      ],
                    },
                  },
                  {
                    type: "string",
                    name: "conditionValue",
                    title: "Condition Value",
                  },
                  { type: "string", name: "color", title: "Color" },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Icon",
        type: "object",
        name: "icon",
        fields: [
          {
            title: "Icon",
            name: "icon",
            type: "string",
            description: "https://heroicons.com/",
            options: {
              list: iconsListKeys.map((n) => ({
                value: n,
                title: n,
              })),
            },
          },
          { title: "Before?", name: "before", type: "boolean" },
          {
            type: "array",
            name: "iconProps",
            title: "Icon Props",
            of: [
              {
                type: "object",
                name: "iconProps",
                title: "Icon Prop",
                fields: [
                  { name: "key", title: "Key", type: "string" },
                  { name: "value", title: "Value", type: "string" },
                ],
              },
            ],
          },
          {
            title: "Conditions",
            name: "conditions",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  {
                    type: "string",
                    name: "operator",
                    title: "Operator",
                    options: {
                      list: [
                        { title: "(>) Value is bigger then: ", value: ">" },
                        {
                          title: "(>=) Value is bigger then or equal to: ",
                          value: ">=",
                        },
                        { title: "(==) Value equals: ", value: "==" },
                        {
                          title: "(<=) Value is smaller then or equal to: ",
                          value: "<=",
                        },
                        { title: "(<) Value is smaller then: ", value: "<" },
                        { title: "(!=) Value NOT equals: ", value: "!=" },
                      ],
                    },
                  },
                  {
                    type: "string",
                    name: "conditionValue",
                    title: "Condition Value",
                  },
                  {
                    type: "string",
                    name: "icon",
                    title: "Icon",
                    description: "https://heroicons.com/",
                    options: {
                      list: iconsListKeys.map((n) => ({
                        value: n,
                        title: n,
                      })),
                    },
                  },
                  {
                    type: "array",
                    name: "iconProps",
                    title: "Icon Props",
                    of: [
                      {
                        type: "object",
                        name: "iconProps",
                        title: "Icon Prop",
                        fields: [
                          { name: "key", title: "Key", type: "string" },
                          { name: "value", title: "Value", type: "string" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Link",
        type: "object",
        name: "link",
        fields: [
          {
            title: "Href",
            type: "string",
            name: "href",
            description: "eg. /account/%s",
          },
          {
            title: "Keys",
            type: "array",
            name: "keys",
            of: [{ type: "string" }],
          },
        ],
      },
    ],
  },
];
