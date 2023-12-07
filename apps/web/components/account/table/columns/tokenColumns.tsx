export const tokenColumns = [
  {
    name: "chain-name",
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Chain",
        format: {
          format: "plain",
          type: "string"
        },
        name: "Chain",
      }
    ],
    showOn: "always",
    valueKeys: [
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "chain",
        type: "key",
        value: "tokens.chainName"
      }
    ]
  },{
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
    showOn: "tabletDesktop",
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
  },{
    name: "token-name",
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Token",
        format: {
          format: "plain",
          type: "string"
        },
        name: "Token",
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
        value: "tokens.symbol"
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
        value: "Available"
      }
    ],
    valueKeys: [
      {
        type: "key",
        value: "tokens.availableBalance",
        format: {
          format: "currencyNew",
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
    showOn: "always",
    valueKeys: [
      {
        name: "locked balance",
        type: "key",
        value: "tokens.lockedBalances.0.amount",
        format: {
          format: "currencyNew",
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
          format: "currencyNew",
          type: "beddows"
        },
        name: "claimable rewards",
        type: "key"
      }
    ],
    valueComponent: "PlainColumn",
    showOn: "always",

  }
]
