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
} from "../../assets/mockupData";
import {Footer} from "../../organisms/footer/footer";
import {Container} from "../../atoms/container/container";
import {statusType} from "../../types";
import {TopBarProps} from "../../organisms/topBar/topBar";

interface TransactionsProps {
  status: statusType
  topBarData: TopBarProps
}

export const Transactions: FC<TransactionsProps> = ({
  status,
  topBarData,
}) => {
  return(
    <Container className={"bg-background"}>
      <Header status={status} topBarData={topBarData} />
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