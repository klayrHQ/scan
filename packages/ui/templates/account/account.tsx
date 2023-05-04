import React, {ReactNode} from "react";
import {Table} from "../../organisms/table/table";
import {AccountHeader} from "../../organisms/accountHeader/accountHeader";
import {AccountDetailsOld} from "../../organisms/accountDetailsOld/accountDetailsOld";
import {Footer} from "../../organisms/footer/footer";
import {Container} from "../../atoms/container/container";
import {
  footerData,
  headcols,
  mobileHeadcols,
  mobileRows,
  rows,
  tabletHeadcols,
  tabletRows,
} from "../../assets/mockupData/mockupData";
import {Grid} from "../../atoms/grid/grid";
import {HeaderMockup} from "../../organisms/header/header.stories";
import {AccountDetails} from "../../organisms/accountDetails/accountDetails";
import {tableHeadColsType, tableRowsType} from "../../types";

interface AccountProps {
  account: any,
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
  assetsData?: Array<{name: string | ReactNode, amount: string, total: string}>
  showAllAssets?: boolean
  setShowAllAssets?: (show: boolean) => void
}

export const Account = ({
  account,
  favourites,
  saveFavourite,
  unFavourite,
  compactString,
  copyNoteText,
  setCopyNoteText,
  assetsData,
  showAllAssets,
  setShowAllAssets,
}: AccountProps) => {

  return (
    <Container className={"bg-background"}>
      {/* @ts-ignore*/}
      <HeaderMockup />
      <Container section>
        <Grid className={"m-auto w-full max-w-app"}>
          <AccountDetails
            account={account}
            compactString={compactString}
            favourites={favourites}
            saveFavourite={saveFavourite}
            unFavourite={unFavourite}
            assetsData={assetsData}
            showAllAssets={showAllAssets}
            setShowAllAssets={setShowAllAssets}
          />
        </Grid>
        <Grid className={"m-auto w-full max-w-app"}>
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
      </Container>
      <Footer
        footerContent={footerData}
        copyrightContent={
          <p className="text-base text-onBackgroundLow font-bold mb-2">
            &copy;{new Date().getFullYear()} by{" "}
            <a
            className={"text-secondary"}
            target="_blank"
            rel="noopener noreferrer"
            href="https://moosty.com"
            >
            MOOSTY
            </a>
            <span className={"text-onBackgroundMedium mx-2"}>I|I</span>
            <span className={"text-onBackgroundLow"}>
            -
            </span>
          </p>
        }
      />
    </Container>
  )
}