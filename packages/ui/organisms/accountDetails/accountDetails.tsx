import React, {ReactNode} from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import {
  BlockDataType,
} from "@moosty/lisk-service-provider"
// @ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard"
import {Avatar} from "../../atoms/avatar/avatar";
import {Typography} from "../../atoms/typography/typography";
import {FavouriteButton} from "../../atoms/favouriteButton/favouriteButton";
import {BalanceBlock} from "../../atoms/balanceBlock/balanceBlock";
import {Grid} from "../../atoms/grid/grid";

interface AccountDetailsProps {
  account: {
    username?: string
    address: string
    legacyAddress?: string
    publicKey: string
    hexAddress: string
    isDelegate?: boolean
    status?: string
    isBanned?: boolean
    nonce?: string
    received?: number | null
    sent?: number | null
    owner: string
    balance: string
    totalBalance: string
    unlocking: string
    sentVotes: string
    rank: number
    description: string
  }
  compactString: Function
  favourites: {address: string, balance: string, username?: string}[] | null
  saveFavourite: (address: string, balance: string, username?: string) => void
  unFavourite: (address: string) => void
  assetsData?: Array<{name: string | ReactNode, amount: string, total: string}>
  showAllAssets?: boolean
  setShowAllAssets?: (show: boolean) => void
}

export const AccountDetails = ({
  account,
  compactString,
  favourites,
  saveFavourite,
  unFavourite,
  assetsData,
  showAllAssets,
  setShowAllAssets,
}: AccountDetailsProps) => {

  return (
    <Grid
      flex
      className={"gap-8"}
      columns={2}
      gap={8}
    >
      <Grid
        className={
          "bg-surface-2 rounded text-sm p-6 shadow gap-4 h-full w-1/3"
        }
        flex
        columns={1}
      >
        <div className={"flex flex-tableRow text-onBackgroundHigh items-center sm:block"}>
          <div className={"flex flex-tableRow items-center"}>
            <Avatar
              className={"mr-3"}
              address={account?.address || ""}
              size={43}
            />
            <div className="flex flex-col">
              {account.username || account.owner ? (
                <Typography tag={"span"} className={"flex flex-col"}>
                <span className="flex-row text-base md:text-xl text-onBackgroundHigh font-medium capitalize">
                  {account.rank && (
                    <span className="">{account.rank}. </span>
                  )}
                  {account.username ||
                    account.owner}
                </span>
                </Typography>
              ) : (
                <>
                  <Typography tag={"span"} className="text-base font-medium block text-onBackground ">
                    {compactString(account.address, 30)}
                  </Typography>
                </>
              )}

              <div className={"flex flex-tableRow space-x-2"}>
                {account.username ? (
                  <Typography tag={"span"} className="flex flex-row space-x-2 items-center">
                  <span
                    className={
                      "text-sm rounded -ml-0.5 px-2 py-1 mx-auto bg-surface-4 text-onSurfaceHigh font-medium"
                    }
                  >
                    {account.status} delegate
                  </span>
                    {account.description && (
                      <span
                        className={
                          "text-sm rounded -ml-0.5 px-2 py-1 mx-auto bg-surface-2 text-onSurfaceHigh font-medium"
                        }
                      >
                      {account.description}
                    </span>
                    )}
                    <FavouriteButton
                      favourited={favourites?.findIndex(i => i.address === account.address) !== -1}
                      unFavourite={() => unFavourite(account.address)}
                      saveFavourite={() => saveFavourite(account.address, account.totalBalance, account.username)}
                    />
                  </Typography>
                ) : (
                  <span className="flex flex-row space-x-2 items-center">
                  <span
                    className={
                      "text-sm rounded -ml-0.5 px-2 py-1 mx-auto bg-surface-2 text-onSurfaceHigh font-medium"
                    }
                  >
                    Regular Account
                  </span>
                    {account.description && (
                      <span
                        className={
                          "text-sm rounded -ml-0.5 px-2 py-1 mx-auto bg-surface-2 text-onSurfaceHigh font-medium"
                        }
                      >
                      {account.description}
                    </span>
                    )}
                    <FavouriteButton
                      favourited={favourites?.findIndex(i => i.address === account.address) !== -1}
                      unFavourite={() => unFavourite(account.address)}
                      saveFavourite={() => saveFavourite(account.address, account.totalBalance, account.username)}
                    />
                </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <Grid flex columns={1} className={"gap-2"}>
          <Grid flex>
            <Typography className={"font-bold"} tag={"span"} color={"primary"}>{"Address"}</Typography>
            <Typography tag={"span"} color={"onSurfaceLow"}>{account.address}</Typography>
          </Grid>
          <Grid flex>
            <Typography className={"font-bold"} tag={"span"} color={"primary"}>{"Total Transactions"}</Typography>
            <Typography tag={"span"} color={"onSurfaceLow"}>{account.address}</Typography>
          </Grid>
        </Grid>
        <div className={"mt-auto"}>
          <BalanceBlock
            className={"items-end"}
            title={"Account Total Value"}
            amount={account.totalBalance}
            total={account.totalBalance}
            colorTitle={"text-onInfobar"}
            colorBg={"bg-primary"}
            colorText={"text-onPrimaryHigh"}
            noPercentage
            width={"full"}
          />
        </div>
      </Grid>
      <Grid flex gap={4} className={"rounded shadow w-2/3 p-6 gap-4"}>
        <Grid flex columns={2} className={"justify-between"}>
          <Typography tag={"h2"} size={"Heading5"}>
            {"Assets"}
          </Typography>
          <div className={"flex gap-4"}>
            <div
              className={"ml-auto border-surface-3 border-solid border-[1px] rounded px-2 h-8 flex items-center gap-2"}>
              <MagnifyingGlassIcon className={"w-3 h-3"}/>
              <input className={"border-none focus:outline-none"} placeholder={"Search Assets"}/>
            </div>
            <div
              className={"ml-auto rounded py-2 px-1 flex items-center gap-2"}>
              <label htmlFor={"sort"}>
                <Typography tag={"span"} color={"onSurfaceLow"}>
                  {"Sort Type"}
                </Typography>
              </label>
              <select>
                <option>{"total value"}</option>
                <option>{"lowest value"}</option>
                <option>{"abc"}</option>
              </select>
            </div>
          </div>
        </Grid>
        <Grid className={"gap-2"} flex>
          <div className={"flex px-4"}>
            <div style={{flexGrow: "2"}}>{"Name"}</div>
            <div className={"text-right"} style={{flexGrow: "1"}}>{"Amount"}</div>
            <div className={"text-right"} style={{flexGrow: "1"}}>{"Total Value"}</div>
          </div>
          {
            assetsData && assetsData.slice(0,3).map(row => (
              <div className={"flex p-4 border-solid border-[1px] border-surface-3 rounded items-center"}>
                <div style={{flexGrow: "2"}}>{row.name}</div>
                <div className={"text-right"} style={{flexGrow: "1"}}>{row.amount}</div>
                <div className={"text-right"} style={{flexGrow: "1"}}>{row.total}</div>
              </div>
            ))
          }
          {
            showAllAssets && assetsData && assetsData.slice(3,assetsData.length).map(row => (
              <div className={"flex p-4 border-solid border-[1px] border-surface-3 rounded items-center"}>
                <div style={{flexGrow: "2"}}>{row.name}</div>
                <div className={"text-right"} style={{flexGrow: "1"}}>{row.amount}</div>
                <div className={"text-right"} style={{flexGrow: "1"}}>{row.total}</div>
              </div>
            ))
          }
          <div
            className={"flex p-4 border-solid border-[1px] border-surface-3 rounded items-center bg-surface-2 cursor-pointer hover:bg-surface-1"}
            onClick={() => setShowAllAssets &&  setShowAllAssets(!showAllAssets)}
          >
            <div style={{flexGrow: "2"}}><Typography tag={"span"} color={"onSurfaceLow"}>{`${assetsData && (assetsData.length - 3)} other tokens`}</Typography></div>
            <div className={"text-right"} style={{flexGrow: "1"}}>{""}</div>
            <div className={"text-right"} style={{flexGrow: "1"}}>{"$1000"}</div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}
