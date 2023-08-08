export const stakesColumns = [
  {
    component: "DefaultHeadColumn",
    showOn: "always",
    name: "sent stakes",
    _id: "cf1fd23d-2d60-482a-a3c5-8cd1dc19485c",
    _updatedAt: "2023-06-11T15:32:17Z",
    valueKeys: [
      {
        format: {
          format: "shortAddress",
          type: "string"
        },
        name: "sent stakes",
        _key: "a19c9b12a34a",
        type: "key",
        value: "account-stakes-sent"
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
        _key: "e4d3945f63c0",
        type: "literal"
      }
    ],
    _createdAt: "2023-06-05T19:19:35Z",
    _rev: "M4jF4EPmh4d42Zsi8hCqzJ",
    _type: "column"
  },
  {
    _updatedAt: "2023-06-12T16:30:30Z",
    valueComponent: "PlainColumn",
    _type: "column",
    headValues: [
      {
        name: "Rank label",
        _key: "456ede6e4df4",
        type: "literal",
        value: "Rank"
      }
    ],
    _createdAt: "2023-06-12T16:30:30Z",
    showOn: "always",
    _rev: "RtlO6C2s96M1bJtYJF3Vho",
    name: "Account-outgoing-stakes-rank",
    _id: "f5040cf3-f7c2-40ab-98c7-b2ea03ccfd51",
    valueKeys: [
      {
        value: "account-stakes-sent.get_pos_validators_address.data.rank",
        format: {
          format: "plain",
          type: "number"
        },
        name: "rankKey",
        _key: "741fc73c2858",
        type: "key"
      }
    ],
    component: "DefaultHeadColumn"
  },
  {
    valueComponent: "PlainColumn",
    headValues: [
      {
        _key: "79d669110a55",
        type: "literal",
        value: "Validator Weight",
        format: {
          typography: [
            {
              _type: "typographyProp",
              _key: "b564bb72e409",
              value: "w-full text-right",
              key: "className"
            }
          ]
        },
        name: "validator weight"
      }
    ],
    _type: "column",
    _id: "c40b96a8-bc26-493d-9879-195ecc8855bb",
    _updatedAt: "2023-06-12T16:35:46Z",
    name: "Account-outgoing-stakes-validatorWeight",
    valueKeys: [
      {
        name: "weight ",
        _key: "23442a30580c",
        type: "key",
        value: "account-stakes-sent.get_pos_validators_address.data.validatorWeight",
        format: {
          typography: [
            {
              value: "w-full text-right",
              key: "className",
              _type: "typographyProp",
              _key: "bcb6749f87e7"
            }
          ],
          format: "currency",
          type: "beddows"
        }
      }
    ],
    component: "DefaultHeadColumn",
    _createdAt: "2023-06-12T16:31:56Z",
    showOn: "always",
    _rev: "RtlO6C2s96M1bJtYJF695s"
  },
  {
    component: "DefaultHeadColumn",
    _createdAt: "2023-06-12T12:19:48Z",
    valueComponent: "DoubleRowColumn",
    valueKeys: [
      {
        format: {
          typography: [
            {
              _type: "typographyProp",
              _key: "0dbd754ef073",
              value: "text-right w-full",
              key: "className"
            }
          ],
          format: "commission",
          type: "number"
        },
        name: "commission",
        _key: "3e59b4ff5852",
        type: "key",
        value: "account-stakes-sent.get_pos_validators_address.data.commission"
      },
      {
        type: "key",
        value: "account-stakes-sent.get_pos_validators_address.data.lastCommissionIncreaseTimestamp",
        format: {
          typography: [
            {
              _key: "1771f1bd5ce9",
              value: "text-onSurfaceMedium w-full text-right ",
              key: "className",
              _type: "typographyProp"
            },
            {
              _type: "typographyProp",
              _key: "258b4a40d2be",
              value: "subBody",
              key: "size"
            }
          ],
          format: "fromNow",
          type: "timestamp"
        },
        name: "time",
        _key: "ae5e3746f783"
      }
    ],
    headValues: [
      {
        value: "Commission",
        format: {
          typography: [
            {
              value: "text-right w-full",
              key: "className",
              _type: "typographyProp",
              _key: "9d68b2258b04"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "commission",
        _key: "9bbd499fc7fe",
        type: "literal"
      }
    ],
    showOn: "always",
    _rev: "AOW6EEZlN7nd2TAwMUUAD2",
    _type: "column",
    name: "Commission",
    _id: "0447100a-329c-4d53-a8da-e49726063729",
    _updatedAt: "2023-06-13T12:38:00Z"
  },
  {
    headValues: [
      {
        _key: "a72660f0df39",
        type: "literal",
        value: "Stake",
        format: {
          typography: [
            {
              key: "className",
              _type: "typographyProp",
              _key: "157360a6eda9",
              value: "w-full text-right"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "Stake Amount"
      }
    ],
    _createdAt: "2023-06-04T18:56:50Z",
    showOn: "always",
    _rev: "2EYbWfHFAYZXyVqHZYxuG6",
    name: "sent-stakes-amount",
    _updatedAt: "2023-06-12T16:34:32Z",
    component: "DefaultHeadColumn",
    _type: "column",
    _id: "68f074bd-ad78-4441-9a55-54fb4cf0e697",
    valueKeys: [
      {
        format: {
          typography: [
            {
              _type: "typographyProp",
              _key: "bc6df0aecc7e",
              value: "w-full text-right",
              key: "className"
            }
          ],
          format: "currency",
          type: "beddows"
        },
        name: "sent amounts",
        _key: "dfcb79ec67f8",
        type: "key",
        value: "account-stakes-sent.amount"
      }
    ],
    valueComponent: "PlainColumn"
  }
]

export const stakersColumns = [
  {
    headValues: [
      {
        name: "incoming staker",
        _key: "99b40f7ec9bc",
        type: "literal",
        value: "Account"
      }
    ],
    _updatedAt: "2023-06-12T13:59:41Z",
    _rev: "RtlO6C2s96M1bJtYJDufuy",
    _type: "column",
    name: "incoming staker",
    _id: "2ea05797-bf49-4dce-952f-a3fd6c5fc563",
    valueKeys: [
      {
        name: "incoming stakes accounts",
        _key: "e646a61ddf14",
        type: "key",
        value: "account-received-stakes",
        format: {
          format: "shortAddress",
          type: "string"
        }
      }
    ],
    component: "DefaultHeadColumn",
    _createdAt: "2023-06-12T13:21:44Z",
    showOn: "always",
    valueComponent: "AvatarColumn"
  },
  {
    headValues: [
      {
        name: "Stakes amount",
        _key: "dd5e8e82bd17",
        type: "literal",
        value: "Stakes Amount"
      }
    ],
    _type: "column",
    name: "Account-inconming-stakes-amount",
    _id: "02ddccce-70d4-4d6f-8dc8-2fed4f51654d",
    _updatedAt: "2023-06-12T17:04:14Z",
    component: "DefaultHeadColumn",
    _createdAt: "2023-06-12T17:04:14Z",
    showOn: "always",
    _rev: "2EYbWfHFAYZXyVqHZZNZi6",
    valueKeys: [
      {
        _key: "05d93f242646",
        type: "key",
        value: "account-received-stakes.amount",
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