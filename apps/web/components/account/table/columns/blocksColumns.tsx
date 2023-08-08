export const blocksColumns = [
  {
    _id: "5e6d073a-bb11-4002-85e5-f79d7398ed2f",
    component: "DefaultHeadColumn",
    headValues: [
      {
        value: "ID",
        name: "id",
        _key: "efeac2993dd3",
        type: "literal"
      }
    ],
    _createdAt: "2023-06-03T12:44:45Z",
    showOn: "always",
    _rev: "7IRnmrIkJgn5mOCnaHcQHT",
    _type: "column",
    name: "id",
    valueKeys: [
      {
        _key: "ad1530bfb9a7",
        type: "key",
        value: "account-id-blocks.id",
        format: {
          format: "shortAddress",
          link: {
            keys: [
              "account-id-blocks.id"
            ],
            href: "/block/%s"
          },
          type: "string"
        },
        name: "id"
      }
    ],
    _updatedAt: "2023-06-03T12:44:45Z",
    valueComponent: "PlainColumn"
  },
  {
    showOn: "always",
    _rev: "AOW6EEZlN7nd2TAwMUYzuR",
    name: "height",
    _updatedAt: "2023-06-13T12:41:33Z",
    valueKeys: [
      {
        format: {
          format: "number",
          type: "number"
        },
        name: "height",
        _key: "f63525d18d1e",
        type: "key",
        value: "account-id-blocks.height"
      }
    ],
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Height",
        _key: "e22b682d125f"
      }
    ],
    _createdAt: "2023-06-13T12:41:33Z",
    _type: "column",
    _id: "648ce1ba-cf54-4973-83f3-565a938e5b64"
  },
  {
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        _key: "f17242c1b29d",
        type: "literal",
        value: "Date"
      }
    ],
    _createdAt: "2023-06-13T12:43:11Z",
    _type: "column",
    _updatedAt: "2023-06-13T12:43:11Z",
    valueKeys: [
      {
        format: {
          type: "timestamp",
          format: "fromNow"
        },
        _key: "72a02dfe1ce5",
        type: "key",
        value: "account-id-blocks.timestamp"
      }
    ],
    showOn: "always",
    _rev: "AOW6EEZlN7nd2TAwMUahh9",
    name: "date",
    _id: "aba724fb-cb0b-4a83-9101-74b6cbcb1990"
  },
  {
    name: "txs",
    _id: "7a442891-7b61-46a8-86a0-8b4c3bea112f",
    valueKeys: [
      {
        format: {
          format: "number",
          type: "number"
        },
        _key: "79f5d7c6f9fd",
        type: "key",
        value: "account-id-blocks.transactions"
      }
    ],
    _createdAt: "2023-06-13T12:47:11Z",
    headValues: [
      {
        _key: "0d674cc1b7c6",
        type: "literal",
        value: "Transactions"
      }
    ],
    showOn: "always",
    _rev: "AOW6EEZlN7nd2TAwMUed50",
    _type: "column",
    _updatedAt: "2023-06-13T12:47:11Z",
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn"
  },
  {
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Reward",
        _key: "1a0f0a8c880d"
      }
    ],
    _rev: "AOW6EEZlN7nd2TAwMUlHUK",
    _type: "column",
    _updatedAt: "2023-06-13T12:53:21Z",
    valueComponent: "PlainColumn",
    _createdAt: "2023-06-13T12:52:21Z",
    showOn: "always",
    name: "rewards",
    _id: "a1a7d280-3766-4215-8112-c6edbb9bd536",
    valueKeys: [
      {
        format: {
          format: "fee",
          type: "string"
        },
        _key: "6282a7b3885c",
        type: "key",
        value: "account-id-blocks.reward"
      }
    ]
  }
]