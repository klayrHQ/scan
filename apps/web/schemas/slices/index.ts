import titleBox from "./titleBox";
import tableSlice from "./table";
import grid from "./grid";
import { kpi } from "./kpi";
import tabs from "./tabs";
import transactionTabs from "./transactionTabs";
import { stakesAccount } from "./stakesAccount";
import { favorite } from "./favorite";
import accountHeader from "./accountHeader";

export const slices = [
  favorite,
  titleBox,
  tableSlice,
  grid,
  kpi,
  tabs,
  transactionTabs,
  stakesAccount,
  accountHeader,
];
export const sliceDocumentNames: string[] = slices.map((doc) => doc.name);
