import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"
import {Avatar} from "../../atoms/avatar/avatar";

interface AccountHeaderProps {
  account: any
  favourites: any
}

export const AccountHeader = ({
  account,
  favourites,
}: AccountHeaderProps) => {
  return (
    <div
      className={
        "w-app mx-auto md:max-w-app bg-transparent rounded md:grid grid-flow-col grid-cols-2 gap-2 text-sm"
      }
    >
      <div
        className={"flex flex-row text-onBackgroundHigh items-center sm:block"}
      >
        <div className={"flex flex-row items-center"}>
          <Avatar
            className={"m-3"}
            address={account?.summary?.address || ""}
            size={43}
          />
          <div className="flex flex-col">
            {account?.dpos?.delegate?.username || account?.knowledge?.owner ? (
              <span className={"flex flex-col"}>
                <span className="flex-row text-base md:text-xl text-onBackgroundHigh font-medium capitalize">
                  {account?.dpos?.delegate?.rank && (
                    <span className="">{account?.dpos?.delegate?.rank}. </span>
                  )}
                  {account?.dpos?.delegate?.username ||
                    account?.knowledge?.owner}
                </span>
              </span>
            ) : (
              <>
                <span className="text-base font-medium block text-onBackground ">
                  {compactString(account?.summary?.address, 30)}
                </span>
              </>
            )}
            <div className={"flex flex-row space-x-2"}>
              {account?.summary?.username ? (
                <span className="flex flex-row space-x-2 items-center"> <span
                  className={
                    "text-sm rounded -ml-0.5 px-2 py-1 mx-auto bg-surface-4 text-onSurfaceHigh font-medium"
                  }
                >
                  {account?.dpos?.delegate?.status} delegate
                </span>
                  {favourites && favourites?.findIndex(i => i.address === account?.summary.address) !== -1 ?
                    <StarIconSolid
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => {
                        unFavourite(account?.summary?.address)
                        //setFavourites(favouritesStorage)
                      }}
                    />
                    :
                    <StarIcon
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => {
                        saveFavourite(account?.summary?.address, totalBalance.toString(), account?.summary?.username)
                        //setFavourites(favouritesStorage)
                      }}
                    />
                  }
               </span>
              ) : (
                <span className="flex flex-row space-x-2 items-center">
                  <span
                    className={
                      "text-sm rounded -ml-0.5 px-2 py-1 mx-auto bg-surface-2 text-onSurfaceHigh font-medium"
                    }
                  >
                    Regular Account
                  </span>
                  {favourites?.findIndex(i => i.address === account?.summary.address) !== -1 ?
                    <StarIconSolid
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => {
                        unFavourite(account?.summary?.address)
                        //setFavourites(favouritesStorage)
                      }}
                    />
                    :
                    <StarIcon
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => {
                        saveFavourite(account?.summary?.address, totalBalance.toString(), account?.summary?.username)
                        //setFavourites(favouritesStorage)
                      }}
                    />
                  }
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

      {/*mobile*/}
      {/*<>*/}
      {/*<div className="flex block bg-primary md:hidden items-center flex-row w-full rounded ">*/}

      {/*    <div className="flex flex-row items-center rounded px-2 py-1">*/}
      {/*      <Avatar*/}
      {/*        className={"m-2"}*/}
      {/*        address={account?.summary?.address || ""}*/}
      {/*        size={30}*/}
      {/*      />*/}
      {/*      <span className={"flex flex-col"}>*/}

      {/*        {account?.dpos?.delegate?.username &&*/}
      {/*          <span className="text-xl text-onPrimaryHigh font-medium">{account?.dpos?.delegate?.rank}.<span className="capitalize"> {account?.dpos?.delegate?.username || account?.knowledge?.owner}</span></span>}*/}
      {/*          <span className="font-medium text-onSurfaceMedium text-sm">{compactString(account?.summary?.address, 30)}</span>*/}
      {/*          </span>*/}

      {/*   */}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*</>*/}
      <div className="flex flex-col md:flex-row md:space-x-2"></div>
      {/*<BalanceBlock
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
      )}*/}
    </div>
  )
}