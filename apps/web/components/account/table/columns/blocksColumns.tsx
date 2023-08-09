export const blocksColumns = [
  {
    name: "id",
    component: "DefaultHeadColumn",
    headValues: [
      {
        value: "ID",
        name: "id",
        type: "literal"
      }
    ],
    showOn: "always",
    valueKeys: [
      {
        type: "key",
        value: "blocks.id",
        format: {
          format: "shortAddress",
          link: {
            keys: [
              "blocks.id"
            ],
            href: "/block/%s"
          },
          type: "string"
        },
        name: "id"
      }
    ],
    valueComponent: "PlainColumn"
  },
  {
    name: "height",
    showOn: "always",
    valueKeys: [
      {
        format: {
          format: "number",
          type: "number"
        },
        name: "height",
        type: "key",
        value: "blocks.height"
      }
    ],
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Height",
      }
    ],
  },
  {
    name: "date",
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Date"
      }
    ],
    valueKeys: [
      {
        format: {
          type: "timestamp",
          format: "fromNow"
        },
        type: "key",
        value: "blocks.timestamp"
      }
    ],
    showOn: "always",
  },
  {
    name: "txs",
    valueKeys: [
      {
        format: {
          format: "number",
          type: "number"
        },
        type: "key",
        value: "blocks.transactions"
      }
    ],
    headValues: [
      {
        type: "literal",
        value: "Transactions"
      }
    ],
    showOn: "always",
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn"
  },
  {
    name: "rewards",
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Reward",
      }
    ],
    valueComponent: "PlainColumn",
    showOn: "always",
    valueKeys: [
      {
        format: {
          format: "fee",
          type: "string"
        },
        type: "key",
        value: "blocks.reward"
      }
    ]
  }
]