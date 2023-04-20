import React from "react";
import {Header} from "../../organisms/header/header";
import {Table} from "../../organisms/table/table";
import {AccountHeader} from "../../organisms/accountHeader/accountHeader";
import {AccountDataType} from "@moosty/lisk-service-provider";
import {AccountDetails} from "../../organisms/accountDetails/accountDetails";
import {Footer} from "../../organisms/footer/footer";
import {TopBarProps} from "../../organisms/topBar/topBar";
import {Container} from "../../atoms/container/container";
import {
  footerData,
  headcols,
  mobileHeadcols,
  mobileRows,
  rows,
  tabletHeadcols,
  tabletRows, topBarData
} from "../../assets/mockupData";
import {Grid} from "../../atoms/grid/grid";

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
  transactionsCount: {in: number, out: number}
}

export const Account = ({
  account,
  favourites,
  saveFavourite,
  unFavourite,
  getAddressFromLisk32Address,
  compactString,
  legacy,
  copyNoteText,
  setCopyNoteText,
  transactionsCount,
}: AccountProps) => {

  return (
    <Container className={"bg-background"}>
      <Header status={topBarData.status} topBarData={topBarData} />
      <Grid className={"m-auto max-w-app"}>
        <AccountHeader
          account={account}
          favourites={favourites}
          saveFavourite={saveFavourite}
          unFavourite={unFavourite}
        />
      </Grid>
      <Grid className={"m-auto max-w-app mt-6"}>
        <AccountDetails
          account={account}
          getAddressFromLisk32Address={getAddressFromLisk32Address}
          compactString={compactString}
          legacy={legacy}
          copyNoteText={copyNoteText}
          setCopyNoteText={setCopyNoteText}
          transactionsCount={transactionsCount}
        />
      </Grid>
      <Grid className={"m-auto max-w-app"}>
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
      </Grid>
      <Footer footerData={footerData} />
    </Container>
  )
}