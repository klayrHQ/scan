export interface FormattedColumnType {
  name: string
  valueKeys: ValueKey[]
  headValues: HeadValue[]
  valueComponent: string
  component: string
  showOn: string
  className?: string
}

export interface ValueKey {
  format: Format
  name: string
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
  iconProps: IconProp[]
  operator: string
  icon: string
  conditionValue: string
}

export interface IconProp {
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
  value: string
  key: string
}

export interface Tooltip2 {
  value: string
}

export interface Typography2 {
  value: string
  key: string
}


export const validatorColumns: FormattedColumnType[] = [
  {
    name: "Rank",
    valueKeys: [
      {
        format: {
          format: "number",
          type: "number"
        },
        name: "rank",
        type: "key",
        value: "validators.rank"
      }
    ],
    headValues: [
      {
        type: "literal",
        value: "#",
        name: "rank",
      }
    ],
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
    showOn: "always"
  },
  {
    name: "validatorName",
    headValues: [
      {
        type: "literal",
        value: "Validator",
        name: "ValidatorName",
      }
    ],
    valueKeys: [
      {
        format: {
          typography: [
            {
              value: "mr-2",
              key: "className"
            }
          ],
          format: "avatar",
          type: "string"
        },
        name: "avatar",
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
        type: "key",
        value: "validators.name"
      }
    ],
    valueComponent: "GridColumn",
    component: "DefaultHeadColumn",
    showOn: "always",
  },
  {
    name: "validators_status + next allocated time",
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
        type: "literal"
      }
    ],
    showOn: "always",
    valueKeys: [
      {
        name: "status",
        type: "key",
        value: "validators.status",
        format: {
          typography: [
            {
              key: "className"
            }
          ],
          format: "icon",
          icon: {
            conditions: [
              {
                iconProps: [
                  {
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
                iconProps: [
                  {
                    key: "className",
                    value: "text-info h-5 w-5"
                  }
                ]
              },
              {
                icon: "ChevronRightIconOutline",
                conditionValue: "ineligible",
                iconProps: [
                  {
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
              value: " w-full",
              key: "className"
            },
            {
              value: "body",
              key: "size"
            }
          ],
          format: "fromNow",
          type: "timestamp"
        },
        name: "nextAllocatedTime",
        type: "key"
      },
      {
        format: {
          format: "plain",
          type: "string"
        },
        name: "StatusLabel",
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
        type: "key"
      }
    ]
  },
  {
    name: "generatedBlocks",
    component: "DefaultHeadColumn",
    headValues: [
      {
        type: "literal",
        value: "Total Blocks",
        format: {
          typography: [
            {
              value: "w-full text-right",
              key: "className",
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
        type: "key",
        value: "validators.generatedBlocks",
        format: {
          typography: [
            {
              value: "text-right w-full font-bold",
              key: "className",
            }
          ],
          format: "number",
          type: "number"
        }
      }
    ],
    valueComponent: "PlainColumn",
    className: "text-right bold",
  },
  {
    name: "validatorWeight",
    showOn: "always",
    component: "DefaultHeadColumn",
    headValues: [
      {
        value: "Validator Weight",
        format: {
          typography: [
            {
              value: "w-full text-right",
              key: "className"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "Validator Weight",
        type: "literal"
      }
    ],
    valueKeys: [
      {
        type: "key",
        updateOn: "lastBlock",
        value: "validators.validatorWeight",
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
        name: "ValidatorVoteweight",
      }
    ],
    valueComponent: "PlainColumn"
  },
  {
    name: "ValidatorSelfStake",
    showOn: "always",
    valueKeys: [
      {
        type: "key",
        updateOn: "lastBlock",
        value: "validators.selfStake",
        format: {
          type: "beddows",
          typography: [
            {
              value: "text-right w-full",
              key: "className"
            }
          ],
          format: "currency"
        },
        name: "ValidatorSelfStake",
      }
    ],
    component: "DefaultHeadColumn",
    headValues: [
      {
        format: {
          typography: [
            {
              value: "w-full text-right",
              key: "className"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "ValidatorSelfStake",
        type: "literal",
        value: "Self Stake"
      }
    ],
    valueComponent: "PlainColumn"
  },
  {
    name: "TotalStake (desktop)",
    headValues: [
      {
        type: "literal",
        value: "Total Stake",
        format: {
          format: "plain",
          type: "string",
          typography: [
            {
              value: "w-full text-right",
              key: "className"
            }
          ]
        },
        name: "TotalStake",
      }
    ],
    showOn: "desktop",
    valueKeys: [
      {
        type: "key",
        updateOn: "lastBlock",
        value: "validators.totalStake",
        format: {
          type: "beddows",
          typography: [
            {
              value: "w-full text-right",
              key: "className",
            }
          ],
          format: "currency"
        },
        name: "Total Stake"
      }
    ],
    valueComponent: "PlainColumn",
    component: "DefaultHeadColumn",
  },
  {
    name: "commission",
    valueComponent: "PlainColumn",
    valueKeys: [
      {
        type: "key",
        value: "validators.commission",
        format: {
          type: "number",
          typography: [
            {
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
              value: "w-full text-right",
              key: "className"
            }
          ],
          format: "plain",
          type: "string"
        },
        name: "commission",
      }
    ],
    showOn: "always",
  },
  {
    name: "Rewards",
    valueComponent: "DoubleRowColumn",
    component: "DefaultHeadColumn",
    headValues: [
      {
        name: "Rewards",
        type: "literal",
        value: "Rewards",
        format: {
          icon: {
            icon: "InformationCircleIconSolid",
            iconProps: [
              {
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
              value: "w-full text-right flex items-center flex-row",
              key: "className",
            }
          ],
          format: "plain"
        }
      }
    ],
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
              value: "text-right w-full",
              key: "className"
            }
          ],
          format: "currency"
        },
        name: "Total Rewards",
      },
      {
        name: "totalSelfStakeRewards",
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
              value: "text-right w-full text-onSurfaceMedium"
            },
            {
              value: "subBody",
              key: "size"
            }
          ]
        }
      }
    ],
    showOn: "always",
  }
]