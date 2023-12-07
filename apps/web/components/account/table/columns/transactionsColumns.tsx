export const transactionsColumns = [
  {
    name: "tx modal",
    headValues: [
      {
        type: "literal"
      }
    ],
    valueKeys: [
      {
        value: "transactions.executionStatus",
        format: {
          format: "icon",
          icon: {
            conditions: [
              {
                icon: "CheckCircleIconOutline",
                conditionValue: "success",
                iconProps: [
                  {
                    value: "w-3 h-3 text-sucess",
                    key: "className"
                  }
                ],
                operator: "=="
              }
            ]
          },
          type: "string"
        },
        name: "success icon",
        type: "key"
      },
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "status",
        type: "key",
        value: "transactions.executionStatus"
      },
      {
        format: {
          type: "string",
          format: "plain"
        },
        name: "Data",
        type: "key",
        value: "transactions.params.data"
      },
      {
        type: "key",
        value: "transactions.confirmations",
        format: {
          format: "number",
          type: "number"
        },
        name: "confirmations"
      }
    ],
    valueComponent: "TxPopoverColumn",
    component: "DefaultHeadColumn",
    showOn: "always",
  },
  {
    name: "tx id",
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Transaction ID",
        format: {
          format: "plain",
          tag: "span",
          type: "string"
        },
        name: "Transaction ID",
      }
    ],
    showOn: "tabletDesktop",
    valueKeys: [
      {
        format: {
          format: "shortAddress",
          link: {
            keys: [
              "transactions.id"
            ],
            href: "/transaction/%s"
          },
          tag: "span",
          type: "string",
          color: {
            color: "onSurfaceLinkMedium"
          }
        },
        name: "id",
        type: "key",
        value: "transactions.id"
      }
    ]
  },
  {
    name: "type",
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Type",
        format: {
          format: "plain",
          type: "string"
        },
        name: "type"
      }
    ],
    showOn: "always",
    className: "w-10",
    valueKeys: [
      {
        value: "transactions.txType",
        format: {
          typography: [
            {
              value: "capitalize w-full text-center border-1 rounded px-2 py-1 border-solid ring-tableHeaderBorder bg-surface-1",
              key: "className"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "Type",
        type: "key"
      }
    ],
    valueComponent: "PlainColumn",
  },
  {
    name: "date",
    showOn: "always",
    valueKeys: [
      {
        format: {
          format: "fromNow",
          type: "timestamp"
        },
        type: "key",
        value: "transactions.block.timestamp"
      }
    ],
    valueComponent: "PlainColumn",
    headValues: [
      {
        type: "literal",
        value: "Date",
        format: {
          format: "plain",
          type: "string"
        },
        name: "date",
      }
    ],
    component: "DefaultHeadColumn"
  },
  {
    name: "account-page-tx-sender",
    valueComponent: "AvatarColumn",
    valueKeys: [
      {
        value: "transactions.sender",
        format: {
          type: "string",
          format: "shortAddress",
          link: {
            keys: [
              "transactions.sender.address"
            ],
            href: "/account/%s"
          }
        },
        name: "account-page-tx-sender",
        type: "key"
      }
    ],
    showOn: "always",
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "Sender ",
        type: "literal",
        value: "From",
        format: {
          format: "plain",
          type: "string"
        }
      }
    ]
  },
  {
    name: "account-page-tx-recipient",
    valueKeys: [
      {
        type: "key",
        value: "transactions.meta.recipient",
        format: {
          link: {
            keys: [
              "transactions.meta.recipient.address"
            ],
            href: "/account/%s"
          }
        },
        name: "account-page-tx-recipient"
      }
    ],
    showOn: "always",
    valueComponent: "AvatarColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "To",
        type: "literal",
        value: "To"
      }
    ]
  },
  {
    name: "Amount",
    valueKeys: [
      {
        format: {
          format: "currency",
          type: "beddows"
        },
        name: "Balance",
        type: "key",
        value: "transactions.params.amount" || "transactions.params.rewards"
      }
    ],
    component: "DefaultHeadColumn",
    headValues: [
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "Amount",
        type: "literal",
        value: "Amount"
      }
    ],
    valueComponent: "PlainColumn",
    showOn: "always",
  },
  {
    name: "account-page-tx-fee1",
    valueKeys: [
      {
        type: "key",
        value: "transactions.fee",
        format: {
          format: "fee",
          type: "beddows"
        },
        name: "fee",
      }
    ],
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Fee",
        format: {
          format: "plain",
          type: "string"
        },
        name: "account-page-tx-fee"
      }
    ],
    showOn: "always",
    valueComponent: "PlainColumn",
  }
]