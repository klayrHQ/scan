import { DoubleRowColumn } from "./doubleRow";
import { PlainColumn } from "./plain";
import { DefaultHeadColumn } from "./head";
import { DateColumn } from "./date";
import { ValueFormat } from "../../../../../../packages/ui/atoms/valueFormatter/valueFormatter";
import { GridColumn } from "./grid";
import { AvatarColumn } from "./avatar";
import { ValidatorStatusColumn } from "./validatorStatus";
import { NrColumn } from "./nr";
import { StakesColumn } from "./stakes";
import { OrColumn } from "./or";
import {StakesAccountColumn} from "./stakesAccount";

export interface ColumnProps {
  params: Record<string, any>;
  values: ValueFormat[];
  index: number;
  queryData: Record<string, any>;
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
  StakesColumn: StakesColumn,
  OrColumn: OrColumn,
  StakesAccountColumn: StakesAccountColumn,
};

export type ColumnTypes = keyof typeof ColumnComponents;

export {
  DefaultHeadColumn,
  DoubleRowColumn,
  PlainColumn,
  DateColumn,
  GridColumn,
  AvatarColumn,
  ValidatorStatusColumn,
  NrColumn,
  StakesColumn,
  OrColumn,
  StakesAccountColumn
};
