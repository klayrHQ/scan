import { DoubleRowColumn } from "./doubleRow";
import { PlainColumn } from "./plain";
import { DefaultHeadColumn } from "./head";
import {DateColumn} from "./date";
import {ValueFormat, ValueFormatterProps} from "../../../valueFormatter";

export interface ColumnProps {
  params: Record<string, any>;
  values: ValueFormat[];
}

export const ColumnComponents = {
  PlainColumn: PlainColumn,
  DoubleRowColumn: DoubleRowColumn,
  DefaultHeadColumn: DefaultHeadColumn,
  DateColumn: DateColumn,
};

export type ColumnTypes = keyof typeof ColumnComponents;

export { DefaultHeadColumn, DoubleRowColumn, PlainColumn, DateColumn };
