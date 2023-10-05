"use client";
import {cls, Grid, Typography,} from "ui";
import { FilterButtons } from "ui/atoms/filterButtons/filterButtons";
import {DefaultHeadColumn, DoubleRowColumn, GridColumn, ValidatorStatusColumn,} from "../data";
import {StaticPlainColumn} from "../data/table/columns/staticPlain";
import {ShowOnCell} from "../data/table/cell";
import {ConsoleLogTester} from "../consoleLogTester";
import {Input} from "ui/atoms/input/input";
import {Select} from "ui/atoms/select/select";
import useQueryParams, {QueryParams} from "../../hooks/useQueryParams";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {convertBeddowsToLSK} from "../../lib/queries/lisk";

const getShowClass = (showOn: ShowOnCell) => {
  switch (showOn) {
    case "mobile":
      return "table-cell md:hidden";
    case "tablet":
      return "hidden md:table-cell lg:hidden";
    case "desktop":
      return "hidden lg:table-cell";
    case "mobileTablet":
      return "table-cell lg:hidden";
    case "tabletDesktop":
      return "hidden md:table-cell";
    case "mobileDesktop":
      return "table-cell md:hidden lg:table-cell";
    default:
      return "table-cell";
  }
};


export const ValidatorsTable = ({
  validators,
  buttons,
  setActiveTab,
  activeTab,
}: {
  validators: any;
  buttons: { label: string; state: string }[];
  setActiveTab: any;
  activeTab: string;
}) => {
  const { setQueryParams } = useQueryParams<QueryParams>();
  const searchParams = useSearchParams();

  const [stakingRewardsAmount, setStakingRewardsAmount] = useState<string>(searchParams?.get("stakingAmount") || "1000");
  const [stakingRewardsPeriod, setStakingRewardsPeriod] = useState<string>(searchParams?.get("stakingPeriod") || "month");

  useEffect(() => {
    // @ts-ignore
    setQueryParams({ ["stakingPeriod"]: stakingRewardsPeriod });

    // @ts-ignore
    setQueryParams({ ["stakingAmount"]: stakingRewardsAmount });
  }, [stakingRewardsPeriod, stakingRewardsAmount])

  return (
    <Grid className={"max-w-app lg:w-app mx-auto min-h-50 mb-4 gap-4"} gap={4}>
      <Grid flex columns={2} className={"justify-between items-end"}>
        <FilterButtons
          buttons={buttons}
          // @ts-ignore
          onChange={setActiveTab}
          selection={activeTab}
        />
        <Grid className={"hidden md:grid"} columns={1} gap={1}>
          <Typography className={"text-left"} tag={"span"} size={"label"}>Staking Calculator</Typography>
          <Grid flex columns={2} className={"rounded bg-surface-1 items-center"}>
            <Typography className={"ml-2"} tag={"span"} size={"subBody"}>{"LSK"}</Typography>
            <Input
                className={"bg-transparent"}
                numbersOnly
                placeholder={"Staking amount"}
                value={stakingRewardsAmount}
                setValue={setStakingRewardsAmount}
            />
            <Select
                className={"relative before:absolute before:content-[''] before:-left-[1px] before:w-[1px] before:h-3/4  before:bg-surface-3 before:top-0 before:bottom-0 before:my-auto w-28"}
                defaultValue={stakingRewardsPeriod}
                innerClassName={"bg-surface-1"}
                id={"staking-rewards"}
                placeholder={"month"}
                optionsList={[
                  {
                    value: "block",
                    label: "Block",
                  }, {
                    value: "day",
                    label: "Day",
                  },
                  {
                    value: "month",
                    label: "Month",
                  },
                  {
                    value: "year",
                    label: "Year",
                  },
                ]}
                onChange={setStakingRewardsPeriod}
            />
          </Grid>
        </Grid>

      </Grid>
      <div
        className={[
          "max-w-app mx-auto w-full bg-background rounded",
          // "shadow-xl p-4 w-app mx-auto ",
          "overflow-x-auto md:overflow-x-visible",
          //!table.sticky ? "overflow-x-auto md:overflow-x-visible" : "",
        ].join(" ")}
      >
        <table className={"border-collapse rounded w-full"}>
          <thead
            className={
              "md:before:absolute md:before:left-0 md:before:right-0 md:before:-top-2 md:before:h-2 md:before:bg-background md:before:content-[''] md:sticky md:top-28 z-10"
            }
          >
            <tr
              className={cls([
                "border-b-1 rounded",
                "border-b-tableHeaderBorder bg-tableHeaderBG text-tableHeaderText p-4",
              ])}
            >
              <th
                className={cls([
                  "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium",
                  getShowClass("always"),
                ])}
              >
                <DefaultHeadColumn
                  values={[
                    {
                      type: "literal",
                      value: "#",
                      name: "rank",
                    },
                  ]}
                />
              </th>
              <th
                className={cls([
                  "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium",
                  getShowClass("always"),
                ])}
              >
                <DefaultHeadColumn
                  values={[
                    {
                      type: "literal",
                      value: "Validator",
                      name: "ValidatorName",
                    },
                  ]}
                />
              </th>
              <th
                className={cls([
                  "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium",
                  getShowClass("always"),
                ])}
              >
                <DefaultHeadColumn
                  values={[
                    {
                      value: "Status",
                      format: {
                        format: "plain",
                        type: "string",
                      },
                      name: "Status",
                      type: "literal",
                    },
                  ]}
                />
              </th>
              <th
                className={cls([
                  "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium",
                  getShowClass("always"),
                ])}
              >
                <DefaultHeadColumn
                  values={[
                    {
                      type: "literal",
                      value: "Total Blocks",
                      format: {
                        typography: [
                          {
                            value: "w-full text-right",
                            key: "className",
                          },
                        ],
                        format: "plain",
                        type: "string",
                      },
                      name: "Total Blocks",
                    },
                  ]}
                />
              </th>
              <th
                className={cls([
                  "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium",
                  getShowClass("always"),
                ])}
              >
                <DefaultHeadColumn
                  values={[
                    {
                      value: "Validator Weight",
                      format: {
                        typography: [
                          {
                            value: "w-full text-right",
                            key: "className",
                          },
                        ],
                        format: "plain",
                        type: "string",
                      },
                      name: "Validator Weight",
                      type: "literal",
                    },
                  ]}
                />
              </th>
              {/*<th*/}
              {/*  className={cls([*/}
              {/*    "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium",*/}
              {/*    getShowClass("always"),*/}
              {/*  ])}*/}
              {/*>*/}
              {/*  <DefaultHeadColumn*/}
              {/*    values={[*/}
              {/*      {*/}
              {/*        format: {*/}
              {/*          typography: [*/}
              {/*            {*/}
              {/*              value: "w-full text-right",*/}
              {/*              key: "className",*/}
              {/*            },*/}
              {/*          ],*/}
              {/*          format: "plain",*/}
              {/*          type: "string",*/}
              {/*        },*/}
              {/*        name: "ValidatorSelfStake",*/}
              {/*        type: "literal",*/}
              {/*        value: "Self Stake",*/}
              {/*      },*/}
              {/*    ]}*/}
              {/*  />*/}
              {/*</th>*/}
              <th
                className={cls([
                  "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium",
                ])}
              >
                <DefaultHeadColumn
                  values={[
                    {
                      type: "literal",
                      value: "Total Stake",
                      format: {
                        format: "plain",
                        type: "string",
                        typography: [
                          {
                            value: "w-full text-right",
                            key: "className",
                          },
                        ],
                      },
                      name: "SelfStake",
                    },
                  ]}
                />
              </th>
              <th
                className={cls([
                  "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium",
                  getShowClass("always"),
                ])}
              >
                <DefaultHeadColumn
                  values={[
                    {
                      type: "literal",
                      value: "Commission",
                      format: {
                        typography: [
                          {
                            value: "w-full text-right",
                            key: "className",
                          },
                        ],
                        format: "plain",
                        type: "string",
                      },
                      name: "commission",
                    },
                  ]}
                />
              </th>
              <th
                className={cls([
                  "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium",
                  getShowClass("always"),
                ])}
              >
                <DefaultHeadColumn
                  values={[
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
                              key: "className",
                            },
                          ],
                        },
                        tooltip: {
                          value:
                            "Total rewards earned by validator + Self stake rewards earned by validator",
                        },
                        type: "string",
                        typography: [
                          {
                            value:
                              "w-full text-right flex items-center flex-row",
                            key: "className",
                          },
                        ],
                        format: "plain",
                      },
                    },
                  ]}
                />
              </th><th
                className={cls([
                  "border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br text-body font-medium",
                  getShowClass("always"),
                ])}
              >
                <DefaultHeadColumn
                  values={[
                    {
                      name: "Rewards",
                      type: "literal",
                      value: "Staking Rewards",
                      format: {
                        icon: {
                          icon: "InformationCircleIconSolid",
                          iconProps: [
                            {
                              value: "h-4 w-4 text-onSurfaceHigh",
                              key: "className",
                            },
                          ],
                        },
                        tooltip: {
                          value:
                            `Rewards you earn per ${stakingRewardsPeriod} by staking ${stakingRewardsAmount} LSK for the validator + the APR (the yearly rate of return on staking)`,
                        },
                        type: "string",
                        typography: [
                          {
                            value:
                              "w-full text-right flex items-center flex-row",
                            key: "className",
                          },
                        ],
                        format: "plain",
                      },
                    },
                  ]}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {validators?.sort((a: any, b: any) => a.rank - b.rank).map((validator: any) => {
              const capacity = (validator.totalStake/ (validator.selfStake * 10) * 100);
              const RB = parseInt(validator.rewards.blockReward, 10)
              const RM = parseInt(validator.rewards.monthlyReward, 10)
              const RY = parseInt(validator.rewards.yearlyReward, 10)
              const RD = parseInt(validator.rewards.dailyReward, 10)
              const C = validator.commission/100
              const inputStake = (parseInt(stakingRewardsAmount) * 100000000)
              const S = parseFloat(validator.totalStake)+ inputStake

              const stakersRewardPerMonth = (RM:any, C:any, S:any) => RM * (1 - C / 100) * (inputStake / S);
              const stakersRewardPerDay = (RD:any, C:any, S:any) => RD * (1 - C / 100) * (inputStake / S);
              const stakersRewardPerYear = (RY:any, C:any, S:any) => RY * (1 - C / 100) * (inputStake / S);
              const stakersRewardPerBlock = (RB:any, C:any, S:any) => RB * (1 - C / 100) * (inputStake / S);
              const resultPerMonth = parseInt(stakersRewardPerMonth(RM, C, S).toString()).toString();
              const resultPerDay = parseInt(stakersRewardPerDay(RD, C, S).toString()).toString();
              // const resultPerMonthLSK = convertBeddowsToLSK(resultPerMonth)
              const resultPerBlock = parseInt(stakersRewardPerBlock(RB, C, S).toString()).toString();
              const resultPerYear = parseInt(stakersRewardPerYear(RY, C, S).toString()).toString();

              const resultPerPeriod =
                stakingRewardsPeriod === "block" ? resultPerBlock :
                stakingRewardsPeriod === "day" ? resultPerDay :
                  stakingRewardsPeriod === "month" ? resultPerMonth :
                    stakingRewardsPeriod === "year" ? resultPerYear :
                      resultPerYear

              const APR = (parseFloat(resultPerYear) / inputStake) * 100;
              return (


              <tr>
                <td
                  className={cls([
                    "border-b-1 p-2 pl-4 font-medium",
                    getShowClass("always"),
                  ])}
                >
                  <StaticPlainColumn
                    values={{
                      value: validator.rank,
                      format: {
                        format: "number",
                        type: "number",
                      },
                      type: "literal",
                    }}
                  />

                </td>
                <td  className={cls([
                  "border-b-1 p-2 pl-4 font-medium",
                  getShowClass("always"),
                ])}><GridColumn params={{}} index={1} queryData={[]} values={[
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
                    type: "literal",
                    value: validator.address
                  },
                  {
                    format: {
                      format: "plain",
                      link: {
                        keys: [
                          "validators.address"
                        ],
                        href: `/account/${validator.address}`
                      },
                      type: "string"
                    },
                    name: "validatorName",
                    type: "literal",
                    value: validator.name
                  }
                ]}/> </td>
                <td  className={cls([
                  "border-b-1 p-2 pl-4 font-medium",
                  getShowClass("always"),
                ])}>
                  <ValidatorStatusColumn key={validator.nextAllocatedTime - (new Date().getTime() / 10000)} params={{}} index={1} queryData={[]} values={ [
                    {
                      name: "status",
                      type: "literal",
                      value: validator.status,
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
                      value: validator.nextAllocatedTime,
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
                      type: "literal"
                    },
                    {
                      format: {
                        format: "plain",
                        type: "string"
                      },
                      name: "StatusLabel",
                      type: "literal",
                      value: validator.status
                    },
                    {
                      value: validator.consecutiveMissedBlocks,
                      format: {
                        format: "number",
                        type: "number"
                      },
                      name: "missedBlocks",
                      type: "literal"
                    }
                  ] as any}
                  />
                </td>
                <td  className={cls([
                  "border-b-1 p-2 pl-4 font-medium",
                  getShowClass("always"),
                ])}>
                  <StaticPlainColumn values={{
                    name: "generatedBlocks",
                    type: "literal",
                    value: validator.generatedBlocks,
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
                  }}/>
                </td>
                <td  className={cls([
                  "border-b-1 p-2 pl-4 font-medium",
                  getShowClass("always"),
                ])}>
                  <DoubleRowColumn
                      params={{}}
                      index={1}
                      queryData={[]}
                      values={[
                        {
                          type: "literal",
                          value: validator.validatorWeight,
                          format: {
                            tooltip: {
                              placement: "auto",
                              value: "Validator Weight, maximum of 10x Self Stake ",
                            },
                            type: "beddows",
                            typography: [
                              {
                                value: "text-right w-full",
                                key: "className",
                              },
                            ],
                            format: "currency",
                          },
                          name: "Total Rewards",
                        },
                        {
                          name: "Stake Capacity",
                          type: "literal",
                          value: capacity,
                          format: {
                            format: "percentage",
                            tooltip: {
                              placement: "auto",
                              value: " Stake Capacity",
                            },
                            type: "string",
                            typography: [
                              {
                                key: "className",
                                value: "text-right w-full text-onSurfaceMedium",
                              },
                              {
                                value: "subBody",
                                key: "size",
                              },
                            ],
                          },
                        },
                      ]}
                  />
                </td>
                <td  className={cls([
                  "border-b-1 p-2 pl-4 font-medium",
                  getShowClass("always"),
                ])}>
                  <DoubleRowColumn
                      params={{}}
                      index={1}
                      queryData={[]}
                      values={[
                        {
                          type: "literal",
                          value: validator.totalStake,
                          format: {
                            tooltip: {
                              placement: "auto",
                              value: "Validator total received stake ",
                            },
                            type: "beddows",
                            typography: [
                              {
                                value: "text-right w-full",
                                key: "className",
                              },
                            ],
                            format: "currency",
                          },
                          name: "Total received stake",
                        },
                        {
                          name: "total Self Stake",
                          type: "literal",
                          value: validator.selfStake,
                          format: {
                            format: "currency",
                            tooltip: {
                              placement: "auto",
                              value: " Total Self Stake",
                            },
                            type: "beddows",
                            typography: [
                              {
                                key: "className",
                                value: "text-right w-full text-onSurfaceMedium",
                              },
                              {
                                value: "subBody",
                                key: "size",
                              },
                            ],
                          },
                        },
                      ]}
                  />
                </td>
                {/*<td  className={cls([*/}
                {/*  "border-b-1 p-2 pl-4 font-medium",*/}
                {/*  getShowClass("always"),*/}
                {/*])}><StaticPlainColumn values={{*/}
                {/*  type: "literal",*/}
                {/*  value: validator.selfStake,*/}
                {/*  format: {*/}
                {/*    type: "beddows",*/}
                {/*    typography: [*/}
                {/*      {*/}
                {/*        value: "text-right w-full",*/}
                {/*        key: "className"*/}
                {/*      }*/}
                {/*    ],*/}
                {/*    format: "currency"*/}
                {/*  },*/}
                {/*  name: "ValidatorSelfStake",*/}
                {/*}}/> </td>*/}
                {/*<td  className={cls([*/}
                {/*  "border-b-1 p-2 pl-4 font-medium",*/}
                {/*  getShowClass("always"),*/}
                {/*])}><StaticPlainColumn values={{*/}
                {/*  type: "literal",*/}
                {/*  updateOn: "lastBlock",*/}
                {/*  value: validator.selfStake,*/}
                {/*  format: {*/}
                {/*    type: "beddows",*/}
                {/*    typography: [*/}
                {/*      {*/}
                {/*        value: "w-full text-right",*/}
                {/*        key: "className",*/}
                {/*      }*/}
                {/*    ],*/}
                {/*    format: "currency"*/}
                {/*  },*/}
                {/*  name: "Total Stake"*/}
                {/*}}/> </td>*/}
                <td className={cls([
                  "border-b-1 p-2 pl-4 font-medium",
                  getShowClass("always"),
                ])}><StaticPlainColumn values={
                  {
                    type: "literal",
                    value: `${validator.commission}%`,
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
                }/> </td>
                <td
                  className={cls([
                    "border-b-1 p-2 pl-4 font-medium",
                    getShowClass("always"),
                  ])}
                >
                  <DoubleRowColumn
                    params={{}}
                    index={1}
                    queryData={[]}
                    values={[
                      {
                        type: "literal",
                        value: validator.earnedRewards,
                        format: {
                          tooltip: {
                            placement: "auto",
                            value: "Total Rewards ",
                          },
                          type: "beddows",
                          typography: [
                            {
                              value: "text-right w-full",
                              key: "className",
                            },
                          ],
                          format: "currency",
                        },
                        name: "Total Rewards",
                      },
                      {
                        name: "DynamicBlockReward",
                        type: "literal",
                        value: validator.rewards.blockReward,
                        format: {
                          format: "fee",
                          tooltip: {
                            placement: "auto",
                            value: "Dynamic Block Reward",
                          },
                          type: "beddows",
                          typography: [
                            {
                              key: "className",
                              value: "text-right w-full text-onSurfaceMedium",
                            },
                            {
                              value: "subBody",
                              key: "size",
                            },
                          ],
                        },
                      },
                    ]}
                  />
                </td> <td
                  className={cls([
                    "border-b-1 p-2 pl-4 font-medium",
                    getShowClass("always"),
                  ])}
                >
                  <DoubleRowColumn
                    params={{}}
                    index={1}
                    queryData={[]}
                    values={[
                      {
                        type: "literal",
                        value: parseFloat(resultPerPeriod) > 0 ? resultPerPeriod : "-",
                        format: {
                          tooltip: {
                            placement: "auto",
                            value: `Staking Rewards per ${stakingRewardsAmount} LSK per ${stakingRewardsPeriod}`,
                          },
                          type: parseFloat(resultPerPeriod) > 0 ? "beddows" : "string",
                          typography: [
                            {
                              value: "text-right w-full",
                              key: "className",
                            },
                          ],
                          format: parseFloat(resultPerPeriod) > 0 ? "fee" : "plain",
                        },
                        name: "Total Rewards",
                      },
                      {
                        name: "APR",
                        type: "literal",
                        value: APR,
                        format: {
                          format: "percentage",
                          tooltip: {
                            placement: "auto",
                            value: `APR is the yearly rate of return on staking ${stakingRewardsAmount} LSK,`,
                          },
                          type: "string",
                          typography: [
                            {
                              key: "className",
                              value: "text-right w-full text-onSurfaceMedium",
                            },
                            {
                              value: "subBody",
                              key: "size",
                            },
                          ],
                        },
                      },
                    ]}
                  />
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
      {/*<TableSlice*/}
      {/*  id={"validatorsTable"}*/}
      {/*  queryData={{validators: { data: validators, status: "success" } }}*/}
      {/*  table={{*/}
      {/*    key: "validators",*/}
      {/*    columns: validatorColumns,*/}
      {/*    sticky: true,*/}
      {/*  }}*/}
      {/*/>*/}
    </Grid>
  );
};
