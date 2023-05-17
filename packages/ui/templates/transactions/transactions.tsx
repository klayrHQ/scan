import React, {FC, ReactNode} from "react";
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
import {FiltersType} from "../../types";
import {FilterButtons} from "../../atoms/filterButtons/filterButtons";

interface TransactionsProps {
  filters: FiltersType
  resetFilters: () => void
  openFilterModal: boolean
  setOpenFilterModal: (open: boolean) => void
  filterComponents?: ReactNode
  activeFilters?: Array<{ filterName: string, filterValue: string }>
  filterButtons?: Array<{ label: string, state: string }>
  filterButtonsOnChange?: (newState: string) => void
  activeFilterButton?: string
}

export const Transactions: FC<TransactionsProps> = ({
  filters,
  openFilterModal,
  setOpenFilterModal,
  filterComponents,
  activeFilters,
  filterButtons,
  resetFilters,
  filterButtonsOnChange,
  activeFilterButton,
}) => {
  return(
    <Container className={"bg-background"}>
      {/* @ts-ignore */}
      <HeaderMockup />
      <Container section>
        <Grid flex className={"justify-between m-auto max-w-app w-full"} columns={2}>
          {
            filterButtons && filterButtonsOnChange &&
            <FilterButtons
              className="md:flex md:flex-row md:flex-wrap"
              buttons={filterButtons}
              selection={activeFilterButton || "all"}
              onChange={filterButtonsOnChange}
              resetFilters={resetFilters}
            />
          }
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
            <FilterContainer
              filterComponents={filterComponents}
              filterFunction={() => console.log(filters)}
              resetFunction={(filter) => console.log(filter)}
              activeFilters={activeFilters}
            />
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