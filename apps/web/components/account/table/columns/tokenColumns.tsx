export const tokenColumns = [
  {
    _rev: "E0vulMwINU3H9ETBqUjPml",
    name: "token-id",
    _id: "82a7668d-8d4d-4bc2-bda8-968dcb1e8d6f",
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
        _key: "e236a776e287"
      }
    ],
    _createdAt: "2023-05-24T07:26:56Z",
    showOn: "always",
    _type: "column",
    _updatedAt: "2023-05-24T07:26:56Z",
    valueKeys: [
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "token-id",
        _key: "c5a9bb516249",
        type: "key",
        value: "account-id-balances.tokenID"
      }
    ]
  },
  {
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "available balance",
        _key: "b45fbc0d1547",
        type: "literal",
        value: "Available balance"
      }
    ],
    _type: "column",
    _id: "9c53f8d5-bb91-40ec-8e2c-d67fdf22fd5a",
    valueKeys: [
      {
        type: "key",
        value: "account-id-balances.availableBalance",
        format: {
          format: "currency",
          type: "beddows"
        },
        name: "available-balance",
        _key: "341ae6636f01"
      }
    ],
    valueComponent: "PlainColumn",
    _createdAt: "2023-05-24T07:28:09Z",
    _rev: "E0vulMwINU3H9ETBr8J6jn",
    name: "available-balance",
    _updatedAt: "2023-05-26T21:34:02Z"
  },
  {
    _id: "8ed5c819-c6b2-48ed-8d24-cca8a1ce1ae0",
    _updatedAt: "2023-06-03T17:16:41Z",
    component: "DefaultHeadColumn",
    headValues: [
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "Locked",
        _key: "65a5ef68d3fd",
        type: "literal",
        value: "Locked"
      }
    ],
    _rev: "33wrGvNSrA0dK8VEG8uLdt",
    _type: "column",
    valueComponent: "PlainColumn",
    _createdAt: "2023-06-03T13:22:31Z",
    showOn: "always",
    name: "Account_Locked_Balance",
    valueKeys: [
      {
        name: "locked balance",
        _key: "f303718bad3e",
        type: "key",
        value: "account-id-balances.lockedBalances.0.amount",
        format: {
          format: "currency",
          type: "beddows"
        }
      }
    ]
  },
  {
    showOn: "always",
    _rev: "33wrGvNSrA0dK8VEGIBUHx",
    _type: "column",
    name: "Account_Rewards_claimable",
    _id: "d2f7ed53-cf58-42b2-8c9d-13ced7626003",
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
    _createdAt: "2023-06-04T15:10:49Z",
    valueKeys: [
      {
        value: "account-rewards-claimable.data.0.reward",
        format: {
          format: "currency",
          type: "beddows"
        },
        name: "claimable rewards",
        _key: "40958a0b16cc",
        type: "key"
      }
    ],
    _updatedAt: "2023-06-04T15:29:23Z",
    valueComponent: "PlainColumn"
  }
]