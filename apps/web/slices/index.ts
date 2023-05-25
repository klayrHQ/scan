import {TitleBoxSlice} from "./titleBox";
import {TableSlice} from "./table";
import {GridSlice} from "./grid";
import {Kpi} from "./kpi";
import {TabsSlice} from "./tabs";

export const Slices = {
  titleBox: TitleBoxSlice,
  tableSlice: TableSlice,
  grid: GridSlice,
  kpi: Kpi,
  tabs: TabsSlice,
};
export type SlicesTypes =  keyof typeof Slices
