import { DoubleRowColumn } from "./doubleRow";
import { PlainColumn } from "./plain";
import { DefaultHeadColumn } from "./head";
import {DateColumn} from "./date";
import {ValueFormat, ValueFormatterProps} from "../../../valueFormatter";
import {GridColumn} from "./grid";
import { AvatarColumn } from "./avatar";
import {ValidatorStatusColumn} from "./validatorStatus";

export interface ColumnProps {
  params: Record<string, any>;
  values: ValueFormat[];
}

export const ColumnComponents = {
  PlainColumn: PlainColumn,
  DoubleRowColumn: DoubleRowColumn,
  DefaultHeadColumn: DefaultHeadColumn,
  DateColumn: DateColumn,
  GridColumn: GridColumn,
  AvatarColumn: AvatarColumn,
  ValidatorStatusColumn: ValidatorStatusColumn,
};

export type ColumnTypes = keyof typeof ColumnComponents;

export { DefaultHeadColumn, DoubleRowColumn, PlainColumn, DateColumn, GridColumn, AvatarColumn,ValidatorStatusColumn };
