import React from "react";
import {TopBar} from "../../organisms/topBar/topBar";
import {Menu} from "../../molecules/menu/menu";
import {Logo} from "../../molecules/logo/logo";
import {LiskScanIcon} from "../../assets/icons/liskscanlogo";
import {Table} from "../../organisms/table/table";

interface AccountProps {
  account: any,
  transactions: any,
  tsxHeadCols: any,
  menu: {label: string, link: string}[],
  favourites: any,
  tableFullWidth: boolean,
}

export const Account = ({
  account,
  transactions,
  tsxHeadCols,
  menu,
  favourites,
  tableFullWidth,
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