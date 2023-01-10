import React from "react";
import {Header} from "../../organisms/header/header";
import {Table} from "../../organisms/table/table";
import {AccountHeader} from "../../organisms/accountHeader/accountHeader";
import {AccountDataType} from "@moosty/lisk-service-provider";
import {AccountDetails} from "../../organisms/accountDetails/accountDetails";
import {Footer} from "../../organisms/footer/footer";
import {TopBarProps} from "../../organisms/topBar/topBar";

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
  topBarData: TopBarProps
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
  topBarData,
}: AccountProps) => {

  const footerData = [
    {
      category: "Liskscan",
      items: [
        {
          label: "Read the blog",
          link: "https://lisk.com/blog/announcement/replacing-lisk-explorer",
        },
        {
          label: "About the project team",
          link: "https://moosty.com",
        },
      ],
    },
    {
      category: "Lisk",
      items: [
        {
          label: "What is Lisk?",
          link: "https://lisk.com/what-is-lisk",
        },
        {
          label: "What is blockchain?",
          link: "https://lisk.com/what-is-blockchain",
        },
        {
          label: "Lisk SDK documentation",
          link: "https://lisk.com/documentation/lisk-sdk/index.html",
        },
        {
          label: "Join Lisk chat",
          link: "https://lisk.chat",
        },
      ],
    },
    {
      category: "Moosty",
      items: [
        {
          label: "About the team",
          link: "https://moosty.com/",
        },
        {
          label: "See projects",
          link: "https://moosty.com/lisk-ecosystem/",
        },
        {
          label: "Get in touch",
          link: "https://moosty.com/contact/",
        },
      ],
    },
  ]

  return (
    <>
     {/* <Header topBarData={topBarData}/>*/}
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
          legacy={legacy}
          copyNoteText={copyNoteText}
          setCopyNoteText={setCopyNoteText}
          transactionsCount={transactions}
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
      <Footer footerData={footerData} />
    </>
  )
}