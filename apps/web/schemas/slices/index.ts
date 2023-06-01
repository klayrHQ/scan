import titleBox from "./titleBox";
import tableSlice from "./table";
import grid from "./grid";
import {kpi} from "./kpi";
import tabs from "./tabs";
import transactionTabs from "./transactionTabs";

export const slices = [titleBox, tableSlice, grid, kpi, tabs, transactionTabs];
export const sliceDocumentNames: string[] = slices.map((doc) => doc.name);
