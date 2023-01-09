import React from "react";
import {TopBar} from "../../organisms/topBar/topBar";
import {Menu} from "../../molecules/menu/menu";
import {Logo} from "../../molecules/logo/logo";
import {LiskScanIcon} from "../../assets/icons/liskscanlogo";
import {Table} from "../../organisms/table/table";
import {AccountHeader} from "../../organisms/accountHeader/accountHeader";
import {AccountDataType} from "@moosty/lisk-service-provider";
import {AccountDetails} from "../../organisms/accountDetails/accountDetails";

interface AccountProps {
  account: AccountDataType,
  transactions: any,
  tsxHeadCols: any,
  menu: {label: string, link: string}[],
  favourites: any,
  tableFullWidth: boolean,
  saveFavourite: (address: string, balance: string, username?: string) => void
  unFavourite: (address: string) => void
  getAddressFromLisk32Address: any
  compactString: Function
  clean: Function
  setInput: Function
  legacy: any
  copyNoteText: string
  setCopyNoteText: Function
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
  getAddressFromLisk32Address,
  compactString,
  clean,
  setInput,
  legacy,
  copyNoteText,
  setCopyNoteText,
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
        <AccountDetails
          account={account}
          getAddressFromLisk32Address={getAddressFromLisk32Address}
          compactString={compactString}
          clean={clean}
          setInput={setInput}
          legacy={legacy}
          copyNoteText={copyNoteText}
          setCopyNoteText={setCopyNoteText}
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