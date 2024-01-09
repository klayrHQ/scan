export const columns = [
  {
    component: "DefaultHeadColumn",
    _createdAt: "2023-12-04T16:07:44Z",
    _rev: "MdJNnecXd69E69qlCTIuk5",
    _type: "column",
    valueKeys: [
      {
        name: "Logo",
        _key: "1fb9ee9d78a2",
        type: "key",
        value: "blockchain-apps.logo"
      }
    ],
    valueComponent: "LogoColumn",
    headValues: [
      {
        name: "Logo",
        _key: "47711ee78bca",
        type: "literal",
        value: "Logo",
        format: {
          type: "string",
          format: "plain",
          tag: "span"
        }
      }
    ],
    name: "Blockchain-apps-logo",
    _id: "e9b39e32-240c-4301-a704-5c251a830661",
    _updatedAt: "2024-01-04T15:04:30Z"
  },
  {
    valueKeys: [
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "Name",
        _key: "1e95aa6f7dfc",
        type: "key",
        value: "blockchain-apps.chainName"
      }
    ],
    valueComponent: "PlainColumn",
    _createdAt: "2023-06-07T09:14:23Z",
    showOn: "always",
    name: "Blockchain-apps-name",
    _updatedAt: "2024-01-04T15:05:32Z",
    _id: "fbd1a802-ed02-4eb2-bf53-3136f92b19c4",
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Name",
        format: {
          type: "string",
          format: "plain"
        },
        name: "Name",
        _key: "b7abb0e3ba34"
      }
    ],
    _rev: "46xKmhW6eYvW6TyYv8bkWQ",
    _type: "column"
  },
  {
    _id: "4766b24e-a2fd-409f-908d-5cfb06f21207",
    _updatedAt: "2024-01-04T15:05:47Z",
    valueComponent: "PlainColumn",
    name: "Apps-ChainId",
    valueKeys: [
      {
        _key: "0fbdc095b6f5",
        type: "key",
        value: "blockchain-apps.chainID",
        format: {
          format: "plain",
          type: "string"
        },
        name: "Chain Id key"
      }
    ],
    component: "DefaultHeadColumn",
    headValues: [
      {
        _key: "554103f2ad2b",
        type: "literal",
        value: "Chain Id",
        name: "Chain Id"
      }
    ],
    _createdAt: "2023-06-13T06:14:37Z",
    showOn: "always",
    _rev: "XqAi32IHlx6w0gbR9is6Rp",
    _type: "column"
  },
  {
    headValues: [
      {
        value: "Status",
        name: "Status",
        _key: "82c4839030bf",
        type: "literal"
      }
    ],
    showOn: "always",
    name: "blakchain-apps-status",
    _id: "1a45cb3b-8f6a-46b6-89a3-f25e292e7f23",
    valueKeys: [
      {
        _key: "cc8e17865fd3",
        type: "key",
        value: "blockchain-apps.status",
        format: {
          format: "plain",
          type: "string"
        },
        name: "status"
      }
    ],
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    _rev: "46xKmhW6eYvW6TyYv8btOm",
    _type: "column",
    _updatedAt: "2024-01-04T15:05:56Z",
    _createdAt: "2023-06-07T09:16:27Z"
  },
  {
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "Address",
        _key: "1c1e531a57d9",
        type: "literal",
        value: "Created by"
      }
    ],
    _createdAt: "2023-06-07T09:18:55Z",
    showOn: "always",
    _rev: "GNG1Hi27KnfJAHfVnFCyWn",
    _type: "column",
    _id: "81da8d57-8df9-4bc3-a3f5-1d2805dc3816",
    _updatedAt: "2023-12-04T16:55:01Z",
    valueComponent: "PlainColumn",
    name: "Blockchain-apps-address",
    valueKeys: [
      {
        format: {
          format: "avatarAddress",
          type: "object"
        },
        name: "address",
        _key: "770b3568ef48",
        type: "key",
        value: "blockchain-apps.get_pos_validators_address.0.address"
      }
    ]
  },
  {
    _rev: "2EYbWfHFAYZXyVqHZeNfR8",
    _type: "column",
    name: "apps-escrow-balance",
    _id: "42cd329d-44f3-4074-9d6d-38055af7b672",
    _updatedAt: "2023-06-13T06:18:05Z",
    component: "DefaultHeadColumn",
    _createdAt: "2023-06-13T06:18:05Z",
    showOn: "always",
    headValues: [
      {
        name: "escrow label",
        _key: "d083fc8607f0",
        type: "literal",
        value: "Escrow Balance",
        format: {
          format: "plain",
          type: "string"
        }
      }
    ],
    valueKeys: [
      {
        format: {
          format: "currency",
          type: "beddows"
        },
        name: "escrow amount key",
        _key: "3b770a8cd0b9",
        type: "key",
        value: "blockchain-apps.escrow.0.amount"
      }
    ],
    valueComponent: "PlainColumn"
  },
  {
    _createdAt: "2023-06-13T06:07:26Z",
    showOn: "always",
    _type: "column",
    _id: "c274e5a9-65d3-4750-a695-185d1e980159",
    _updatedAt: "2023-06-13T06:09:36Z",
    headValues: [
      {
        name: "Last certificate height",
        _key: "c96cd7c7506e",
        type: "literal",
        value: "Last Certificate Height"
      }
    ],
    _rev: "RtlO6C2s96M1bJtYJKyGy8",
    name: "Apps-Last-certificateHeight",
    valueKeys: [
      {
        format: {
          format: "plain",
          type: "number"
        },
        name: "last certificate height",
        _key: "57e96942b93e",
        type: "key",
        value: "blockchain-apps.lastCertificateHeight"
      }
    ],
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn"
  },
  {
    valueKeys: [
      {
        type: "key",
        value: "blockchain-apps.lastUpdated",
        format: {
          type: "timestamp",
          format: "fromNow"
        },
        name: "last updated key",
        _key: "fb3cdb8577c5"
      }
    ],
    headValues: [
      {
        name: "Last updated Label",
        _key: "2ad035b0945d",
        type: "literal",
        value: "Last Updated"
      }
    ],
    _createdAt: "2023-06-13T06:09:05Z",
    showOn: "always",
    _id: "c3384078-e27b-4abf-a220-382a81842ece",
    _updatedAt: "2023-06-15T15:09:51Z",
    component: "DefaultHeadColumn",
    _rev: "AOW6EEZlN7nd2TAwNHJLTr",
    _type: "column",
    name: "Apps-Last-updated",
    valueComponent: "PlainColumn"
  }
]