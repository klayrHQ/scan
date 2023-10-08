export const stakesColumns = [
  {
    name: "sent stakes",
    component: "DefaultHeadColumn",
    showOn: "always",
    valueKeys: [
      {
        format: {
          format: "shortAddress",
          type: "string"
        },
        name: "sent stakes",
        _key: "a19c9b12a34a",
        type: "key",
        value: "stakes"
      }
    ],
    valueComponent: "AvatarColumn",
    headValues: [
      {
        value: "Validator",
        format: {
          format: "plain",
          type: "string"
        },
        name: "sent stakes",
        type: "literal"
      }
    ],
  },
  {
    name: "Account-outgoing-stakes-rank",
    valueComponent: "PlainColumn",
    headValues: [
      {
        name: "Rank label",
        type: "literal",
        value: "Rank"
      }
    ],
    showOn: "always",
    valueKeys: [
      {
        value: "stakes.get_pos_validators_address.data.rank",
        format: {
          format: "plain",
          type: "number"
        },
        name: "rankKey",
        type: "key"
      }
    ],
    component: "DefaultHeadColumn"
  },
  {
    name: "Account-outgoing-stakes-validatorWeight",
    valueComponent: "PlainColumn",
    headValues: [
      {
        type: "literal",
        value: "Validator Weight",
        format: {
          typography: [
            {
              value: "w-full text-right",
              key: "className"
            }
          ]
        },
        name: "validator weight"
      }
    ],
    valueKeys: [
      {
        name: "weight ",
        type: "key",
        value: "stakes.get_pos_validators_address.data.validatorWeight",
        format: {
          typography: [
            {
              value: "w-full text-right",
              key: "className",
            }
          ],
          format: "currency",
          type: "beddows"
        }
      }
    ],
    component: "DefaultHeadColumn",
    showOn: "always",
  },
  {
    name: "Commission",
    component: "DefaultHeadColumn",
    valueComponent: "PlainColumn",
    valueKeys: [
      {
        format: {
          typography: [
            {
              value: "text-right w-full",
              key: "className"
            }
          ],
          format: "commission",
          type: "number"
        },
        name: "commission",
        type: "key",
        value: "stakes.get_pos_validators_address.data.commission"
      },
    ],
    headValues: [
      {
        value: "Commission",
        format: {
          typography: [
            {
              value: "text-right w-full",
              key: "className",
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "commission",
        type: "literal"
      }
    ],
    showOn: "always",
  },
  {
    name: "stakes",
    headValues: [
      {
        type: "literal",
        value: "Stake",
        format: {
          typography: [
            {
              key: "className",
              value: "w-full text-right"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "Stake Amount"
      }
    ],
    showOn: "always",
    component: "DefaultHeadColumn",
    valueKeys: [
      {
        format: {
          typography: [
            {
              value: "w-full text-right",
              key: "className"
            }
          ],
          format: "currency",
          type: "beddows"
        },
        name: "sent amounts",
        type: "key",
        value: "stakes.amount"
      }
    ],
    valueComponent: "PlainColumn"
  }
]

export const stakersColumns = [
  {
    name: "incoming staker",
    headValues: [
      {
        name: "incoming staker",
        type: "literal",
        value: "Account"
      }
    ],
    valueKeys: [
      {
        name: "incoming stakes accounts",
        type: "key",
        value: "stakers",
        format: {
          format: "shortAddress",
          type: "string"
        }
      }
    ],
    component: "DefaultHeadColumn",
    showOn: "always",
    valueComponent: "AvatarColumn"
  },
  {
    name: "Account-incoming-stakes-amount",
    headValues: [
      {
        name: "Stakes amount",
        type: "literal",
        value: "Stakes Amount"
      }
    ],
    component: "DefaultHeadColumn",
    showOn: "always",
    valueKeys: [
      {
        type: "key",
        value: "stakers.amount",
        format: {
          format: "currency",
          type: "beddows"
        },
        name: "stakes amount"
      }
    ],
    valueComponent: "PlainColumn"
  }
]