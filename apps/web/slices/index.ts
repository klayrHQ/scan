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
import { JsonItemSlice } from "./jsonItem";
import { ChartSlice } from "./chart";
import {NewsGrid} from "./newsGrid";
import {CountryFlag} from "./countryFlag";

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
  jsonItem: JsonItemSlice,
  chart: ChartSlice,
  newsGrid: NewsGrid,
  countryFlag: CountryFlag,
};
export type SlicesTypes = keyof typeof Slices;
