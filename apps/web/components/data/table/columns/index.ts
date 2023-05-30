import { DoubleRowColumn } from "./doubleRow";
import { PlainColumn } from "./plain";
import { DefaultHeadColumn } from "./head";
import {DateColumn} from "./date";
import {ValueFormat, ValueFormatterProps} from "../../../valueFormatter";
import {GridColumn} from "./grid";
import { AvatarColumn } from "./avatar";
import {ValidatorStatusColumn} from "./validatorStatus";
import {NrColumn} from "./nr";

export interface ColumnProps {
  params: Record<string, any>;
  values: ValueFormat[];
  index: number
}

export const ColumnComponents = {
  PlainColumn: PlainColumn,
  DoubleRowColumn: DoubleRowColumn,
  DefaultHeadColumn: DefaultHeadColumn,
  DateColumn: DateColumn,
  GridColumn: GridColumn,
  AvatarColumn: AvatarColumn,
  ValidatorStatusColumn: ValidatorStatusColumn,
  NrColumn: NrColumn,
};

export type ColumnTypes = keyof typeof ColumnComponents;

export { DefaultHeadColumn, DoubleRowColumn, PlainColumn, DateColumn, GridColumn, AvatarColumn,ValidatorStatusColumn, NrColumn };
