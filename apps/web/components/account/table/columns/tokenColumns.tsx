export const tokenColumns = [
  {
    name: "token-id",
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Token ID",
        format: {
          format: "plain",
          type: "string"
        },
        name: "Token ID",
      }
    ],
    showOn: "always",
    valueKeys: [
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "token-id",
        type: "key",
        value: "tokens.tokenID"
      }
    ]
  },
  {
    name: "available-balance",
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "available balance",
        _key: "b45fbc0d1547",
        type: "literal",
        value: "Available balance"
      }
    ],
    valueKeys: [
      {
        type: "key",
        value: "tokens.availableBalance",
        format: {
          format: "currency",
          type: "beddows"
        },
        name: "available-balance",
      }
    ],
    valueComponent: "PlainColumn",
  },
  {
    name: "Account_Locked_Balance",
    component: "DefaultHeadColumn",
    headValues: [
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "Locked",
        type: "literal",
        value: "Locked"
      }
    ],
    valueComponent: "PlainColumn",
    showOn: "tabletDesktop",
    valueKeys: [
      {
        name: "locked balance",
        type: "key",
        value: "tokens.lockedBalances.0.amount",
        format: {
          format: "currency",
          type: "beddows"
        }
      }
    ]
  },
  {
    name: "Account_Rewards_claimable",
    showOn: "tabletDesktop",
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "claimable rewards",
        _key: "af463b9760d6",
        type: "literal",
        value: "Claimable Rewards",
        format: {
          type: "string",
          format: "plain"
        }
      }
    ],
    valueKeys: [
      {
        value: "rewards.data.0.reward",
        format: {
          format: "currency",
          type: "beddows"
        },
        name: "claimable rewards",
        type: "key"
      }
    ],
    valueComponent: "PlainColumn"
  }
]