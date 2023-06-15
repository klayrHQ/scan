import { TitleBoxSlice } from "./titleBox";
import { TableSlice } from "./table";
import { GridSlice } from "./grid";
import { Kpi } from "./kpi";
import { TabsSlice } from "./tabs";
import { TransactionTabsSlice } from "./transactionTabs";
import { StakesAccount } from "./stakesAccount";
import { FavoriteSlice } from "./favorite";
import { AccountHeader } from "./accountHeader";
import { DividerSlice } from "./divider";
import { ValidatorTabs } from "./validatorsTabs";

export const Slices = {
  titleBox: TitleBoxSlice,
  tableSlice: TableSlice,
  grid: GridSlice,
  kpi: Kpi,
  tabs: TabsSlice,
  transactionTabs: TransactionTabsSlice,
  stakesAccount: StakesAccount,
  favorite: FavoriteSlice,
  accountHeader: AccountHeader,
  divider: DividerSlice,
  validatorTabs: ValidatorTabs,
};
export type SlicesTypes = keyof typeof Slices;
