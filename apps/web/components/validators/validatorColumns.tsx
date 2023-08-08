export interface FormattedColumnType {
  name: string
  _id: string
  valueKeys: ValueKey[]
  headValues: HeadValue[]
  _type: string
  valueComponent: string
  component: string
  showOn: string
  className?: string
}

export interface ValueKey {
  format: Format
  name: string
  _key: string
  type: string
  value: string
  updateOn?: string
}

export interface Format {
  format: string
  type: string
  typography?: Typography[]
  link?: Link
  icon?: Icon
  tooltip?: Tooltip
}

export interface Typography {
  _type: string
  _key: string
  value?: string
  key: string
}

export interface Link {
  keys: string[]
  href: string
}

export interface Icon {
  conditions: Condition[]
}

export interface Condition {
  _key: string
  iconProps: IconProp[]
  operator: string
  icon: string
  conditionValue: string
}

export interface IconProp {
  _type: string
  _key: string
  value: string
  key: string
}

export interface Tooltip {
  placement: string
  value: string
}

export interface HeadValue {
  type: string
  value: string
  name: string
  _key: string
  format?: Format2
}

export interface Format2 {
  icon?: Icon2
  tooltip?: Tooltip2
  type: string
  typography?: Typography2[]
  format: string
}

export interface Icon2 {
  icon: string
  iconProps: IconProp2[]
}

export interface IconProp2 {
  _type: string
  _key: string
  value: string
  key: string
}

export interface Tooltip2 {
  value: string
}

export interface Typography2 {
  _key: string
  value: string
  key: string
  _type: string
}


export const validatorColumns: FormattedColumnType[] = [
  {
    name: "Rank",
    _id: "50247db1-a938-42a9-8381-b1a983df5ee5",
    valueKeys: [
      {
        format: {
          format: "number",
          type: "number"
        },
        name: "rank",
        _key: "10e3cb69fce8",
        type: "key",
        value: "validators.rank"
      }
    ],
    headValues: [
      {
        type: "literal",
        value: "#",
        name: "rank",
        _key: "dff3ee34bc53"
      }
    ],
    _type: "column",
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    showOn: "always"
  },
  {
    name: "validatorName",
    _id: "d0e75815-213a-48d7-bf54-a0ba7ed55ca4",
    headValues: [
      {
        type: "literal",
        value: "Validator",
        name: "ValidatorName",
        _key: "945961ab7059"
      }
    ],
    _type: "column",
    valueKeys: [
      {
        format: {
          typography: [
            {
              _type: "typographyProp",
              _key: "d29cd0d2b3d3",
              value: "mr-2",
              key: "className"
            }
          ],
          format: "avatar",
          type: "string"
        },
        name: "avatar",
        _key: "fde8ac00bf70",
        type: "key",
        value: "validators.address"
      },
      {
        format: {
          format: "plain",
          link: {
            keys: [
              "validators.address"
            ],
            href: "/account/%s"
          },
          type: "string"
        },
        name: "validatorName",
        _key: "74e2be6a10f7",
        type: "key",
        value: "validators.name"
      }
    ],
    valueComponent: "GridColumn",
    component: "DefaultHeadColumn",
    showOn: "always",
  },
  {
    valueComponent: "ValidatorStatusColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        value: "Status",
        format: {
          format: "plain",
          type: "string"
        },
        name: "Status",
        _key: "79790ef26c43",
        type: "literal"
      }
    ],
    name: "validators_status + next allocated time",
    _id: "ea6d9e50-6abb-4fee-94e2-6796ee41f8ff",
    showOn: "always",
    _type: "column",
    valueKeys: [
      {
        name: "status",
        _key: "6ccfab456dd6",
        type: "key",
        value: "validators.status",
        format: {
          typography: [
            {
              _type: "typographyProp",
              _key: "f001870efc75",
              key: "className"
            }
          ],
          format: "icon",
          icon: {
            conditions: [
              {
                _key: "074302636331",
                iconProps: [
                  {
                    _type: "iconProps",
                    _key: "f01f06a6af7d",
                    value: "text-success h-5 w-5",
                    key: "className"
                  }
                ],
                operator: "==",
                icon: "CheckCircleIconSolid",
                conditionValue: "active"
              },
              {
                operator: "==",
                icon: "MinusCircleIconOutline",
                conditionValue: "standby",
                _key: "ef4d9ba46a21",
                iconProps: [
                  {
                    key: "className",
                    _type: "iconProps",
                    _key: "e5b227214663",
                    value: "text-info h-5 w-5"
                  }
                ]
              },
              {
                icon: "ChevronRightIconOutline",
                conditionValue: "ineligible",
                _key: "a0105e514850",
                iconProps: [
                  {
                    _type: "iconProps",
                    _key: "82c17004501d",
                    value: "text-info h-4 w-4",
                    key: "className"
                  }
                ],
                operator: "=="
              }
            ]
          },
          type: "string"
        }
      },
      {
        value: "validators.get_generators_address.nextAllocatedTime",
        format: {
          typography: [
            {
              _type: "typographyProp",
              _key: "b469ccef4a86",
              value: " w-full",
              key: "className"
            },
            {
              _type: "typographyProp",
              _key: "3654155f1549",
              value: "body",
              key: "size"
            }
          ],
          format: "fromNow",
          type: "timestamp"
        },
        name: "nextAllocatedTime",
        _key: "f3bfa841cafc",
        type: "key"
      },
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "StatusLabel",
        _key: "0185740e6926",
        type: "key",
        value: "validators.status"
      },
      {
        value: "validators.consecutiveMissedBlocks",
        format: {
          format: "number",
          type: "number"
        },
        name: "missedBlocks",
        _key: "d9680d16a239",
        type: "key"
      }
    ]
  },
  {
    component: "DefaultHeadColumn",
    headValues: [
      {
        _key: "71676ff3a3dc",
        type: "literal",
        value: "Total Blocks",
        format: {
          typography: [
            {
              _key: "fa534b938785",
              value: "w-full text-right",
              key: "className",
              _type: "typographyProp"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "Total Blocks"
      }
    ],
    showOn: "always",
    valueKeys: [
      {
        name: "generatedBlocks",
        _key: "e73d945c21eb",
        type: "key",
        value: "validators.generatedBlocks",
        format: {
          typography: [
            {
              _key: "f5e015259511",
              value: "text-right w-full font-bold",
              key: "className",
              _type: "typographyProp"
            }
          ],
          format: "number",
          type: "number"
        }
      }
    ],
    valueComponent: "PlainColumn",
    _type: "column",
    name: "generatedBlocks",
    className: "text-right bold",
    _id: "437762e5-9904-4dc6-9afe-2aebfa53a8ab",
  },
  {
    showOn: "always",
    _id: "bfc1fbd6-d1be-43b6-adde-7ecca0f684ef",
    component: "DefaultHeadColumn",
    headValues: [
      {
        value: "Validator Weight",
        format: {
          typography: [
            {
              _type: "typographyProp",
              _key: "fe8427560564",
              value: "w-full text-right",
              key: "className"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "Validator Weight",
        _key: "2e339babe14b",
        type: "literal"
      }
    ],
    _type: "column",
    name: "validatorWeight",
    valueKeys: [
      {
        type: "key",
        updateOn: "lastBlock",
        value: "validators.validatorWeight",
        format: {
          typography: [
            {
              _type: "typographyProp",
              _key: "c7fae826ccfa",
              value: "w-full text-right",
              key: "className"
            }
          ],
          format: "currency",
          type: "beddows"
        },
        name: "ValidatorVoteweight",
        _key: "c251f3c14258"
      }
    ],
    valueComponent: "PlainColumn"
  },
  {
    showOn: "always",
    _type: "column",
    name: "ValidatorSelfStake",
    valueKeys: [
      {
        type: "key",
        updateOn: "lastBlock",
        value: "validators.selfStake",
        format: {
          type: "beddows",
          typography: [
            {
              _type: "typographyProp",
              _key: "6464fc5a8fde",
              value: "text-right w-full",
              key: "className"
            }
          ],
          format: "currency"
        },
        name: "ValidatorSelfStake",
        _key: "72c08d3cb410"
      }
    ],
    component: "DefaultHeadColumn",
    headValues: [
      {
        format: {
          typography: [
            {
              _type: "typographyProp",
              _key: "2f76dfcc6cd1",
              value: "w-full text-right",
              key: "className"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "ValidatorSelfStake",
        _key: "e2a3f4bcec31",
        type: "literal",
        value: "Self Stake"
      }
    ],
    _id: "d8a79070-3201-49e5-a9bc-7f1837726621",
    valueComponent: "PlainColumn"
  },
  {
    _id: "16072b70-f5ba-49bf-a1a1-8733088595c1",
    headValues: [
      {
        type: "literal",
        value: "Total Stake",
        format: {
          format: "plain",
          type: "string",
          typography: [
            {
              _type: "typographyProp",
              _key: "d088b34c0f61",
              value: "w-full text-right",
              key: "className"
            }
          ]
        },
        name: "TotalStake",
        _key: "f68728a31526"
      }
    ],
    showOn: "desktop",
    _type: "column",
    valueKeys: [
      {
        _key: "cc609e70e129",
        type: "key",
        updateOn: "lastBlock",
        value: "validators.totalStake",
        format: {
          type: "beddows",
          typography: [
            {
              value: "w-full text-right",
              key: "className",
              _type: "typographyProp",
              _key: "d2b82915ba13"
            }
          ],
          format: "currency"
        },
        name: "Total Stake"
      }
    ],
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    name: "TotalStake (desktop)",
  },
  {
    valueComponent: "PlainColumn",
    name: "commission",
    _id: "087a32a2-d821-4ff6-856a-4550308c4402",
    valueKeys: [
      {
        _key: "7f70bb0524fb",
        type: "key",
        value: "validators.commission",
        format: {
          type: "number",
          typography: [
            {
              _type: "typographyProp",
              _key: "d3777acc60c8",
              value: "w-full text-right",
              key: "className"
            }
          ],
          format: "commission",
          tooltip: {
            placement: "top-start",
            value: "Set commission by validator"
          }
        },
        name: "commission %"
      }
    ],
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Commission (%)",
        format: {
          typography: [
            {
              _type: "typographyProp",
              _key: "53458bd1936f",
              value: "w-full text-right",
              key: "className"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "commission",
        _key: "c8b4e209cfa4"
      }
    ],
    showOn: "always",
    _type: "column"
  },
  {
    valueComponent: "DoubleRowColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "Rewards",
        _key: "d3fc92d07452",
        type: "literal",
        value: "Rewards",
        format: {
          icon: {
            icon: "InformationCircleIconSolid",
            iconProps: [
              {
                _type: "iconProps",
                _key: "873df2c0e4b6",
                value: "h-4 w-4 text-onSurfaceHigh",
                key: "className"
              }
            ]
          },
          tooltip: {
            value: "Total rewards earned by validator + Self stake rewards earned by validator"
          },
          type: "string",
          typography: [
            {
              _key: "43e3c87f4770",
              value: "w-full text-right flex items-center flex-row",
              key: "className",
              _type: "typographyProp"
            }
          ],
          format: "plain"
        }
      }
    ],
    _type: "column",
    name: "Rewards",
    valueKeys: [
      {
        type: "key",
        value: "validators.earnedRewards",
        format: {
          tooltip: {
            placement: "auto",
            value: "Total Rewards "
          },
          type: "beddows",
          typography: [
            {
              _type: "typographyProp",
              _key: "b991f61a9f7b",
              value: "text-right w-full",
              key: "className"
            }
          ],
          format: "currency"
        },
        name: "Total Rewards",
        _key: "e2167cb47f74"
      },
      {
        name: "totalSelfStakeRewards",
        _key: "f15a3e3c4b09",
        type: "key",
        value: "validators.totalSelfStakeRewards",
        format: {
          format: "currency",
          tooltip: {
            placement: "auto",
            value: "total Self Stake Rewards"
          },
          type: "beddows",
          typography: [
            {
              key: "className",
              _type: "typographyProp",
              _key: "45f694aac33d",
              value: "text-right w-full text-onSurfaceMedium"
            },
            {
              _type: "typographyProp",
              _key: "57f5f9dcd670",
              value: "subBody",
              key: "size"
            }
          ]
        }
      }
    ],
    showOn: "always",
    _id: "ef95af00-b8ad-41cf-b4f0-cebc8ba47cd9"
  }
]