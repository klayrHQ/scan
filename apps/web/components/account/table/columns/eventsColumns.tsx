export const eventsColumns = [
  {
    headValues: [
      {
        _key: "5268b2ced1d3",
        type: "literal",
        value: "Date"
      }
    ],
    _rev: "33wrGvNSrA0dK8VEFde6Gr",
    _type: "column",
    _id: "b0c64542-b332-4feb-b938-7fface5161bb",
    valueKeys: [
      {
        _key: "59d1eda27464",
        type: "key",
        value: "account-events.block.timestamp",
        format: {
          format: "date",
          type: "timestamp"
        },
        name: "date"
      }
    ],
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    _createdAt: "2023-06-01T07:20:35Z",
    showOn: "always",
    name: "date",
    _updatedAt: "2023-06-01T12:26:03Z"
  },
  {
    component: "DefaultHeadColumn",
    _rev: "74EWZw6nfCPMNG6YYlfzsu",
    _type: "column",
    name: "height",
    _updatedAt: "2023-06-01T12:27:45Z",
    headValues: [
      {
        name: "height",
        _key: "0e63ea62bafe",
        type: "literal",
        value: "Height"
      }
    ],
    _createdAt: "2023-06-01T12:27:45Z",
    showOn: "always",
    _id: "80ca7823-4d29-42a5-8d84-56c092edc760",
    valueKeys: [
      {
        name: "height",
        _key: "d101a471c016",
        type: "key",
        value: "account-events.block.height",
        format: {
          format: "number",
          type: "number"
        }
      }
    ],
    valueComponent: "PlainColumn"
  },
  {
    component: "DefaultHeadColumn",
    showOn: "always",
    _type: "column",
    name: "Module",
    _updatedAt: "2023-06-01T12:45:08Z",
    headValues: [
      {
        name: "module",
        _key: "0172d0400534",
        type: "literal",
        value: "Module"
      }
    ],
    _createdAt: "2023-06-01T12:28:57Z",
    _rev: "33wrGvNSrA0dK8VEFdsp3j",
    _id: "cfa4c2aa-df50-4b44-9724-1083b776b361",
    valueKeys: [
      {
        name: "Module",
        _key: "bcd50d5d2012",
        type: "key",
        value: "account-events.moduleParsed",
        format: {
          type: "string",
          typography: [
            {
              _type: "typographyProp",
              _key: "8bb60c669ec2",
              value: "capitalize",
              key: "className"
            }
          ],
          format: "plain"
        }
      }
    ],
    valueComponent: "PlainColumn"
  },
  {
    _createdAt: "2023-06-01T12:37:41Z",
    showOn: "always",
    _rev: "7IRnmrIkJgn5mOCna3AQcF",
    valueComponent: "PlainColumn",
    _updatedAt: "2023-06-01T12:42:38Z",
    valueKeys: [
      {
        type: "key",
        value: "account-events.event",
        format: {
          typography: [
            {
              _key: "cad601ffcc9d",
              value: "capitalize",
              key: "className",
              _type: "typographyProp"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "event",
        _key: "255b808750e5"
      }
    ],
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "event",
        _key: "8cab1fcf02d8",
        type: "literal",
        value: "Event"
      }
    ],
    _type: "column",
    name: "event",
    _id: "db39cb5d-1468-4d28-a12b-f18d13b9873b"
  },
  {
    headValues: [
      {
        name: "amount",
        _key: "b761abb0eede",
        type: "literal",
        value: "Amount"
      }
    ],
    _createdAt: "2023-06-01T12:33:12Z",
    _rev: "74EWZw6nfCPMNG6YYm6fhC",
    _id: "996b2677-92ad-4b21-abe5-4fa4b33ff172",
    _updatedAt: "2023-06-01T12:54:55Z",
    valueKeys: [
      {
        name: "amount",
        _key: "3196801f7295",
        type: "key",
        value: "account-events.data.amount",
        format: {
          format: "fee",
          type: "beddows"
        }
      },
      {
        name: "burntAmount",
        _key: "b5d5d361fc50",
        type: "key",
        value: "account-events.data.burntAmount",
        format: {
          format: "fee",
          type: "beddows",
          color: {
            color: "red"
          }
        }
      }
    ],
    valueComponent: "DoubleRowColumn",
    component: "DefaultHeadColumn",
    showOn: "always",
    _type: "column",
    name: "amount"
  }
]