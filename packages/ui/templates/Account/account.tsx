import React from "react";
import {TopBar} from "../../organisms/topBar/topBar";
import {Menu} from "../../molecules/menu/menu";
import {Logo} from "../../molecules/logo/logo";
import {LiskScanIcon} from "../../assets/icons/liskscanlogo";
import {Table} from "../../organisms/table/table";
import {AccountHeader} from "../../organisms/accountHeader/accountHeader";
import {AccountDataType} from "@moosty/lisk-service-provider";

interface AccountProps {
  account: AccountDataType,
  transactions: any,
  tsxHeadCols: any,
  menu: {label: string, link: string}[],
  favourites: any,
  tableFullWidth: boolean,
  saveFavourite: (address: string, balance: string, username?: string) => void
  unFavourite: (address: string) => void
}

export const Account = ({
  account,
  transactions,
  tsxHeadCols,
  menu,
  favourites,
  tableFullWidth,
  saveFavourite,
  unFavourite,
}: AccountProps) => {
  return (
    <>
      <TopBar className={"h-16 px-4"}>
        <Logo
          link={"#"}
          href={"#"}
          title={"Liskscan"}
          color={"text-onTopbar"}
          image={<LiskScanIcon className="cursor-pointer mr-2 fill-current text-onTopbar" />}
        />
        <Menu menu={menu} />
      </TopBar>
      <div>
        <AccountHeader
          account={account}
          favourites={favourites}
          saveFavourite={saveFavourite}
          unFavourite={unFavourite}
        />
      </div>
      <div>
        <Table
          oddClassName={"bg-surface-1"}
          evenClassName={"bg-surface-0"}
          hoverClassName={"bg-surface-3"}
          headClassName={"bg-surface-4"}
          rows={transactions}
          headCols={tsxHeadCols}
          fullWidth={tableFullWidth}
        />
      </div>
    </>
  )
}