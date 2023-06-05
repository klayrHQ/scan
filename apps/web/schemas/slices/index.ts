import titleBox from "./titleBox";
import tableSlice from "./table";
import grid from "./grid";
import {kpi} from "./kpi";
import tabs from "./tabs";
import transactionTabs from "./transactionTabs";
import {stakesAccount} from "./stakesAccount";

export const slices = [titleBox, tableSlice, grid, kpi, tabs, transactionTabs, stakesAccount];
export const sliceDocumentNames: string[] = slices.map((doc) => doc.name);
