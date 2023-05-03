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
import {Modal} from "../../atoms/modal/modal";
import {FunnelIcon, XMarkIcon} from "@heroicons/react/24/solid";
import {FilterContainer} from "../../organisms/filterContainer/filterContainer";

interface TransactionsProps {
  openFilterModal: boolean
  setOpenFilterModal: (open: boolean) => void
}

export const Transactions: FC<TransactionsProps> = ({
  openFilterModal,
  setOpenFilterModal,
}) => {
  return(
    <Container className={"bg-background"}>
      {/* @ts-ignore */}
      <HeaderMockup />
      <Container section>
        <Grid flex className={"justify-between m-auto max-w-app w-full"} columns={2}>
          {/*vvvvv Filter buttons*/}
          <div/>

          <Modal
            isOpen={openFilterModal}
            setIsOpen={setOpenFilterModal}
            button={<FunnelIcon className={"h-4 w-4"}/>}
            closeButton={
              <XMarkIcon
                className="md:hidden text-onSurfaceHigh"
              />
            }
          >
            <FilterContainer/>
          </Modal>
        </Grid>
        <Grid className={"m-auto max-w-app w-full"}>
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
            {`&copy;${new Date().getFullYear()} by `}
            <a
              className={"text-secondary"}
              target="_blank"
              rel="noopener noreferrer"
              href="https://moosty.com"
            >
              {"MOOSTY"}
            </a>
            <span className={"text-onBackgroundMedium mx-2"}>{"I|I"}</span>
            <span className={"text-onBackgroundLow"}>
            {"-"}
            </span>
          </p>
        }
      />
    </Container>
  )
}