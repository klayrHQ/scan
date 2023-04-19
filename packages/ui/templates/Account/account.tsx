import React from "react";
import {Header} from "../../organisms/header/header";
import {Table} from "../../organisms/table/table";
import {AccountHeader} from "../../organisms/accountHeader/accountHeader";
import {AccountDataType} from "@moosty/lisk-service-provider";
import {AccountDetails} from "../../organisms/accountDetails/accountDetails";
import {Footer} from "../../organisms/footer/footer";
import {TopBarProps} from "../../organisms/topBar/topBar";
import {Container} from "../../atoms/container/container";
import {headcols, mobileHeadcols, mobileRows, rows, tabletHeadcols, tabletRows} from "../../assets/mockupData";

interface AccountProps {
  account: AccountDataType,
  menu: {label: string, link: string}[],
  favourites: any,
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
  status: "connected" | "warning" | "error"
  transactionsCount: {in: number, out: number}
}

export const Account = ({
  account,
  menu,
  favourites,
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
  status,
  transactionsCount,
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
    <div className={"bg-background"}>
      <Header status={status} topBarData={topBarData} />
      <Container className={"m-auto max-w-app"}>
        <AccountHeader
          account={account}
          favourites={favourites}
          saveFavourite={saveFavourite}
          unFavourite={unFavourite}
        />
      </Container>
      <Container className={"m-auto max-w-app mt-6"}>
        <AccountDetails
          account={account}
          getAddressFromLisk32Address={getAddressFromLisk32Address}
          compactString={compactString}
          legacy={legacy}
          copyNoteText={copyNoteText}
          setCopyNoteText={setCopyNoteText}
          transactionsCount={transactionsCount}
        />
      </Container>
      <Container className={"m-auto max-w-app"}>
        <Table
          oddClassName={"bg-surface-1"}
          evenClassName={"bg-surface-0"}
          hoverClassName={"bg-surface-3"}
          headClassName={"bg-surface-4"}
          rows={rows}
          tabletRows={tabletRows}
          mobileRows={mobileRows}
          headCols={headcols}
          tabletHeadCols={tabletHeadcols}
          mobileHeadCols={mobileHeadcols}
          fullWidth
        />
      </Container>
      <Footer footerData={footerData} />
    </div>
  )
}