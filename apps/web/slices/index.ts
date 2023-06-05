import {TitleBoxSlice} from "./titleBox";
import {TableSlice} from "./table";
import {GridSlice} from "./grid";
import {Kpi} from "./kpi";
import {TabsSlice} from "./tabs";
import {TransactionTabsSlice} from "./transactionTabs";
import {StakesAccount} from "./stakesAccount";

export const Slices = {
  titleBox: TitleBoxSlice,
  tableSlice: TableSlice,
  grid: GridSlice,
  kpi: Kpi,
  tabs: TabsSlice,
  transactionTabs: TransactionTabsSlice,
  stakesAccount: StakesAccount
};
export type SlicesTypes =  keyof typeof Slices
