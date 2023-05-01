import React from "react";
import {Avatar} from "../../atoms/avatar/avatar";
import {compactString, calculateTotalBalance, calculateVotes} from "../../assets/utils";
import { AccountDataType} from "@moosty/lisk-service-provider";
import {Typography} from "../../atoms/typography/typography";
import {FavouriteButton} from "../../atoms/favouriteButton/favouriteButton";
import {BalanceBlock} from "../../atoms/balanceBlock/balanceBlock";

interface AccountHeaderProps {
  account: {
    address: string
    owner: string
    username: string
    balance: string
    totalBalance: string
    unlocking: string
    sentVotes: string
    rank: number
    status: string
    description: string
  }
  favourites: {address: string, balance: string, username?: string}[] | null
  saveFavourite: (address: string, balance: string, username?: string) => void
  unFavourite: (address: string) => void
}

export const AccountHeader = ({
  account,
  favourites,
  saveFavourite,
  unFavourite,
}: AccountHeaderProps) => {

  return (
    <div
      className={
        "bg-transparent rounded md:grid grid-flow-col grid-cols-2 gap-2 text-sm"
      }
    >
      <div
        className={"flex flex-tableRow text-onBackgroundHigh items-center sm:block"}
      >
        <div className={"flex flex-tableRow items-center"}>
          <Avatar
            className={"m-3"}
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
      <div className="flex flex-col md:flex-row md:space-x-2"></div>
      <BalanceBlock
        title={"Total Balance"}
        amount={account.totalBalance}
        total={account.totalBalance}
        colorTitle={"text-onInfobar"}
        colorBg={"bg-primary"}
        colorText={"text-onPrimaryHigh"}
        noPercentage
      />
      <BalanceBlock
        title={"Total Available"}
        amount={account.balance}
        total={account.totalBalance}
        colorTitle={"text-onInfobar"}
        colorBg={"bg-success"}
        colorText={"text-onSuccess"}
      />
      {account.unlocking && (
        <BalanceBlock
          title={"Total Unlocking"}
          amount={account.unlocking}
          total={account.totalBalance}
          colorTitle={"text-onInfobar"}
          colorBg={"bg-warning"}
          colorText={"text-onWarning"}
        />
      )}
      {parseInt(account.sentVotes) > 0 && (
        <BalanceBlock
          title={"Total Locked"}
          amount={account.sentVotes}
          total={account.totalBalance}
          colorTitle={"text-onInfobar"}
          colorBg={"bg-error"}
          colorText={"text-onError"}
        />
      )}
    </div>
  )
}