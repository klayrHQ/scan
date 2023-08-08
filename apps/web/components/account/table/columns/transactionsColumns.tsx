export const transactionsColumns = [
  {
    headValues: [
      {
        type: "literal",
        value: "Status",
        name: "status",
        _key: "cb374c9bae51"
      }
    ],
    _createdAt: "2023-05-31T08:29:47Z",
    _type: "column",
    _updatedAt: "2023-06-16T16:44:36Z",
    valueComponent: "GridColumn",
    component: "DefaultHeadColumn",
    showOn: "tabletDesktop",
    _rev: "2EYbWfHFAYZXyVqHaG4uai",
    name: "status-id-account-page-transactions",
    _id: "05bb666c-52c7-492d-98de-91f10338a4bf",
    valueKeys: [
      {
        name: "status",
        _key: "b86146f3fe38",
        type: "key",
        value: "transaction-moduleCommand.executionStatus",
        format: {
          format: "icon",
          icon: {
            before: false,
            conditions: [
              {
                iconProps: [
                  {
                    _type: "iconProps",
                    _key: "ecfd517e11db",
                    value: "h-6 w-6 text-success",
                    key: "className"
                  }
                ],
                operator: "==",
                icon: "CheckCircleIconOutline",
                conditionValue: "success",
                _key: "516411b3e59c"
              },
              {
                icon: "MinusCircleIconOutline",
                conditionValue: "fail",
                _key: "47d341b77a01",
                iconProps: [
                  {
                    key: "className",
                    _type: "iconProps",
                    _key: "daa918fa6962",
                    value: "text-error h-6 w-6"
                  }
                ],
                operator: "=="
              }
            ],
            iconProps: [
              {
                _type: "iconProps",
                _key: "abeb40e5b935",
                value: "h-6 w-6",
                key: "className"
              }
            ]
          },
          tag: "span",
          type: "string",
          typography: [
            {
              _type: "typographyProp",
              _key: "ae1db52c8110",
              key: "className"
            }
          ]
        }
      },
      {
        format: {
          type: "string",
          typography: [
            {
              _type: "typographyProp",
              _key: "ec511f187459",
              value: "max-w-max",
              key: "className"
            }
          ],
          color: {
            color: "onSurfaceLinkMedium"
          },
          format: "shortAddress"
        },
        name: "account-page-tx-id",
        _key: "3fa790455e46",
        type: "key",
        value: "account-id-transactions.id"
      }
    ]
  },
  {
    _updatedAt: "2023-06-02T11:24:55Z",
    component: "DefaultHeadColumn",
    headValues: [
      {
        _key: "87eca20fd04d",
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
    name: "type",
    className: "w-10",
    _id: "6b950b8d-558f-4d99-81c6-7989b14cdeaf",
    valueKeys: [
      {
        value: "account-id-transactions.txType",
        format: {
          typography: [
            {
              _type: "typographyProp",
              _key: "8c61a1a9b242",
              value: "capitalize w-full text-center border-1 rounded px-2 py-1 border-solid ring-tableHeaderBorder bg-surface-1",
              key: "className"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "Type",
        _key: "d876d3b2f5bd",
        type: "key"
      }
    ],
    valueComponent: "PlainColumn",
    _createdAt: "2023-05-30T12:28:29Z",
    _rev: "33wrGvNSrA0dK8VEFt80Pl",
    _type: "column"
  },
  {
    showOn: "always",
    name: "date",
    valueKeys: [
      {
        format: {
          format: "fromNow",
          type: "timestamp"
        },
        _key: "c55fb7f6366a",
        type: "key",
        value: "account-id-transactions.block.timestamp"
      }
    ],
    valueComponent: "PlainColumn",
    _createdAt: "2023-05-26T19:41:05Z",
    headValues: [
      {
        type: "literal",
        value: "Date",
        format: {
          format: "plain",
          type: "string"
        },
        name: "date",
        _key: "52a8724d94a1"
      }
    ],
    _rev: "E0vulMwINU3H9ETBsCq6O3",
    _type: "column",
    _id: "bd14c673-19db-40ea-8b21-ce829e1d2b23",
    _updatedAt: "2023-06-01T07:10:08Z",
    component: "DefaultHeadColumn"
  },
  {
    valueComponent: "AvatarColumn",
    _createdAt: "2023-06-02T11:14:52Z",
    valueKeys: [
      {
        value: "account-id-transactions.sender",
        format: {
          type: "string",
          format: "shortAddress",
          link: {
            keys: [
              "account-id-transactions.sender.address"
            ],
            href: "/account/%s"
          }
        },
        name: "account-page-tx-sender",
        _key: "aa31135457be",
        type: "key"
      }
    ],
    showOn: "always",
    _rev: "7IRnmrIkJgn5mOCnaHYlp9",
    _type: "column",
    name: "account-page-tx-sender",
    _id: "37df1e45-8f11-4620-a8e9-f7b24514c0b3",
    _updatedAt: "2023-06-03T12:21:45Z",
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "Sender ",
        _key: "815f1980b7a5",
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
    _type: "column",
    valueKeys: [
      {
        _key: "94af385e0b7a",
        type: "key",
        value: "account-id-transactions.meta.recipient",
        format: {
          link: {
            keys: [
              "account-id-transactions.meta.recipient.address"
            ],
            href: "/account/%s"
          }
        },
        name: "account-page-tx-recipient"
      }
    ],
    _createdAt: "2023-06-02T11:16:05Z",
    showOn: "always",
    _rev: "7IRnmrIkJgn5mOCnaHYdEt",
    _id: "46e9ada3-5b39-4857-90fd-eb7581e63501",
    _updatedAt: "2023-06-03T12:20:42Z",
    valueComponent: "AvatarColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "To",
        _key: "9d43e68b88d8",
        type: "literal",
        value: "To"
      }
    ],
    name: "account-page-tx-recipient"
  },
  {
    _createdAt: "2023-05-26T19:58:51Z",
    _type: "column",
    valueKeys: [
      {
        format: {
          format: "currency",
          type: "beddows"
        },
        name: "Balance",
        _key: "6ed3dc0ca853",
        type: "key",
        value: "account-id-transactions.params.amount"
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
        _key: "d08c0217e9ef",
        type: "literal",
        value: "Amount"
      }
    ],
    name: "Amount",
    _id: "fde4bf14-5c63-4f24-b1a3-fefa3b93f480",
    _updatedAt: "2023-06-02T13:31:54Z",
    valueComponent: "PlainColumn",
    showOn: "always",
    _rev: "7IRnmrIkJgn5mOCnaBajmh"
  },
  {
    _rev: "33wrGvNSrA0dK8VEFuyKxV",
    _type: "column",
    name: "account-page-tx-fee1",
    valueKeys: [
      {
        type: "key",
        value: "account-id-transactions.fee",
        format: {
          format: "fee",
          type: "beddows"
        },
        name: "fee",
        _key: "0e9b8b512dfd"
      }
    ],
    component: "DefaultHeadColumn",
    headValues: [
      {
        _key: "96101f236b48",
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
    _createdAt: "2023-06-02T13:28:58Z",
    _id: "128152e4-d74d-46d3-a04a-740a51079751",
    _updatedAt: "2023-06-02T14:17:45Z"
  }
]