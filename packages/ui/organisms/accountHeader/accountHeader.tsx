import React from "react";
import {Avatar} from "../../atoms/avatar/avatar";
import {compactString, calculateTotalBalance, calculateVotes} from "../../assets/utils";
import { AccountDataType} from "@moosty/lisk-service-provider";
import {Typography} from "../../atoms/typography/typography";
import {FavouriteButton} from "../../atoms/favouriteButton/favouriteButton";
import {BalanceBlock} from "../../atoms/balanceBlock/balanceBlock";

interface AccountHeaderProps {
  account: AccountDataType
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
  const totalBalance =
    BigInt(calculateTotalBalance(account)) +
    BigInt(calculateVotes(account?.dpos?.unlocking))

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
            address={account?.summary?.address || ""}
            size={43}
          />
          <div className="flex flex-col">
            {account?.dpos?.delegate?.username || account?.knowledge?.owner ? (
              <Typography tag={"span"} className={"flex flex-col"}>
                <span className="flex-row text-base md:text-xl text-onBackgroundHigh font-medium capitalize">
                  {account?.dpos?.delegate?.rank && (
                    <span className="">{account?.dpos?.delegate?.rank}. </span>
                  )}
                  {account?.dpos?.delegate?.username ||
                    account?.knowledge?.owner}
                </span>
              </Typography>
            ) : (
              <>
                <Typography tag={"span"} className="text-base font-medium block text-onBackground ">
                  {compactString(account?.summary?.address, 30)}
                </Typography>
              </>
            )}

            <div className={"flex flex-tableRow space-x-2"}>
              {account?.summary?.username ? (
                <Typography tag={"span"} className="flex flex-row space-x-2 items-center">
                  <span
                    className={
                      "text-sm rounded -ml-0.5 px-2 py-1 mx-auto bg-surface-4 text-onSurfaceHigh font-medium"
                    }
                  >
                    {account?.dpos?.delegate?.status} delegate
                  </span>
                  <FavouriteButton
                    favourited={favourites?.findIndex(i => i.address === account?.summary?.address) !== -1}
                    unFavourite={() => unFavourite(account?.summary?.address)}
                    saveFavourite={() => saveFavourite(account?.summary?.address, totalBalance.toString(), account?.summary?.username)}
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
                  <FavouriteButton
                    favourited={favourites?.findIndex(i => i.address === account?.summary?.address) !== -1}
                    unFavourite={() => unFavourite(account?.summary?.address)}
                    saveFavourite={() => saveFavourite(account?.summary?.address, totalBalance.toString(), account?.summary?.username)}
                  />
                </span>
              )}
              {account?.knowledge?.description && (
                <span
                  className={
                    "text-sm rounded -ml-0.5 px-2 py-1 mx-auto bg-surface-2 text-onSurfaceHigh font-medium"
                  }
                >
                  {account?.knowledge?.description}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-2"></div>
      <BalanceBlock
        title={"Total Balance"}
        amount={(
          BigInt(calculateTotalBalance(account)) +
          BigInt(calculateVotes(account?.dpos?.unlocking))
        ).toString()}
        total={totalBalance.toString()}
        colorTitle={"text-onInfobar"}
        colorBg={"bg-primary"}
        colorText={"text-onPrimaryHigh"}
        noPercentage
      />
      <BalanceBlock
        title={"Total Available"}
        amount={account?.summary?.balance}
        total={totalBalance.toString()}
        colorTitle={"text-onInfobar"}
        colorBg={"bg-success"}
        colorText={"text-onSuccess"}
      />
      {account?.dpos?.unlocking && (
        <BalanceBlock
          title={"Total Unlocking"}
          amount={calculateVotes(account?.dpos?.unlocking)}
          total={totalBalance.toString()}
          colorTitle={"text-onInfobar"}
          colorBg={"bg-warning"}
          colorText={"text-onWarning"}
        />
      )}
      {parseInt(calculateVotes(account?.dpos?.sentVotes)) > 0 && (
        <BalanceBlock
          title={"Total Locked"}
          amount={calculateVotes(account?.dpos?.sentVotes)}
          total={totalBalance.toString()}
          colorTitle={"text-onInfobar"}
          colorBg={"bg-error"}
          colorText={"text-onError"}
        />
      )}
    </div>
  )
}