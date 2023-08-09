export const eventsColumns = [
  {
    name: "date",
    headValues: [
      {
        type: "literal",
        value: "Date"
      }
    ],
    valueKeys: [
      {
        type: "key",
        value: "events.block.timestamp",
        format: {
          format: "date",
          type: "timestamp"
        },
        name: "date"
      }
    ],
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    showOn: "always",
  },
  {
    name: "height",
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "height",
        type: "literal",
        value: "Height"
      }
    ],
    showOn: "always",
    valueKeys: [
      {
        name: "height",
        type: "key",
        value: "events.block.height",
        format: {
          format: "number",
          type: "number"
        }
      }
    ],
    valueComponent: "PlainColumn"
  },
  {
    name: "Module",
    component: "DefaultHeadColumn",
    showOn: "always",
    headValues: [
      {
        name: "module",
        type: "literal",
        value: "Module"
      }
    ],
    valueKeys: [
      {
        name: "Module",
        type: "key",
        value: "events.module",
        format: {
          type: "string",
          typography: [
            {
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
    name: "event",
    showOn: "always",
    valueComponent: "PlainColumn",
    valueKeys: [
      {
        type: "key",
        value: "events.name",
        format: {
          typography: [
            {
              value: "capitalize",
              key: "className",
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "event",
      }
    ],
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "event",
        type: "literal",
        value: "Event"
      }
    ],
  },
  {
    name: "amount",
    headValues: [
      {
        name: "amount",
        type: "literal",
        value: "Amount"
      }
    ],
    valueKeys: [
      {
        name: "amount",
        type: "key",
        value: "events.data.amount",
        format: {
          format: "fee",
          type: "beddows"
        }
      },
      {
        name: "burntAmount",
        type: "key",
        value: "events.data.burntAmount",
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
    showOn: "always"
  }
]