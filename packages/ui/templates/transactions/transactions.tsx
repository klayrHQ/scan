import React, {FC} from "react";
import {Header} from "../../organisms/header/header";
import {Grid} from "../../atoms/grid/grid";
import {Table} from "../../organisms/table/table";
import {
  footerData,
  headcols,
  mobileHeadcols,
  mobileRows,
  rows,
  tabletHeadcols,
  tabletRows
} from "../../assets/mockupData/mockupData";
import {Footer} from "../../organisms/footer/footer";
import {Container} from "../../atoms/container/container";
import {HeaderMockup} from "../../organisms/header/header.stories";

interface TransactionsProps {

}

export const Transactions: FC<TransactionsProps> = ({

}) => {
  return(
    <Container className={"bg-background"}>
      {/* @ts-ignore */}
      <HeaderMockup />
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