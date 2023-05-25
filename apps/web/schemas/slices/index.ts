import titleBox from "./titleBox";
import tableSlice from "./table";
import grid from "./grid";
import {kpi} from "./kpi";
import tabs from "./tabs";

export const slices = [titleBox, tableSlice, grid, kpi, tabs];
export const sliceDocumentNames: string[] = slices.map((doc) => doc.name);
