export const tokenColumns = [
  {
    valueKeys: [
      {
        type: "key",
        value: "tokens.logo",
        name: "logo",
      }
    ],
    showOn: "always",
    name: "token logo",
    valueComponent: "LogoColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "logo",
        type: "literal",
        value: "Logo"
      }
    ],
  },
  {
    name: "get-tokens.chainName",
    valueComponent: "PlainColumn",
    headValues: [
      {
        type: "literal",
        value: "Chain Name",
        name: "ChainName",
      }
    ],
    valueKeys: [
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "get.tokens.chainName",
        type: "key",
        value: "tokens.chainName"
      }
    ],
    component: "DefaultHeadColumn",
    showOn: "always",
  },
  {
    name: "get-tokens.tokenName",
    headValues: [
      {
        name: "Token Name",
        type: "literal",
        value: "Token Name"
      }
    ],
    valueKeys: [
      {
        value: "tokens.tokenName",
        format: {
          format: "plain",
          type: "string"
        },
        name: "get.tokens.data.tokenName",
        type: "key"
      }
    ],
    component: "DefaultHeadColumn",
    valueComponent: "PlainColumn",
    showOn: "always"
  },
  {
    name: "token description",
    headValues: [
      {
        name: "description",
        type: "literal",
        value: "description"
      }
    ],
    valueKeys: [
      {
        format: {
          typography: [
            {
              value: "subBody",
              key: "size"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "description",
        type: "key",
        value: "tokens.description"
      }
    ],
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    showOn: "always"
  },
  {
    name: "tokens.networktype",
    valueKeys: [
      {
        value: "tokens.networkType",
        format: {
          format: "plain",
          type: "string"
        },
        name: "network key",
        type: "key"
      }
    ],
    valueComponent: "PlainColumn",
    headValues: [
      {
        type: "literal",
        value: "Network",
        name: "Network",
      }
    ],
    showOn: "always",
    component: "DefaultHeadColumn"
  }
]