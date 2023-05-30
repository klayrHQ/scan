import { Grid, Tags, Tooltip, TooltipPlacement, Typography } from "ui";
import { IconListTypes, iconsList } from "./iconList";
import { cloneElement, } from "react";
import Link from "next/link";
import { UpdateOnType } from "../schemas/slices/table";
import {CopyButton} from "./data/copy";
import {convertBeddowsToLSK} from "../lib/queries/lisk";
import {formatDistance} from "date-fns";

export type SanityProps = { key: string; value: string }[];
type ValueTypes =
  | "string"
  | "number"
  | "beddows"
  | "boolean"
  | "float"
  | "timestamp"
  | "hex";
type Operators = "==" | "!=" | "<=" | ">=" | "<" | ">";
type Icon = {
  conditions?: {
    conditionValue: string;
    operator: Operators;
    icon: IconListTypes;
    iconProps?: SanityProps;
  }[];
  icon?: string;
  before: boolean;
  iconProps?: SanityProps;
};
type Color = {
  conditions?: {
    conditionValue: string;
    operator: Operators;
    color: string;
  }[];
  color?: string;
};
type TooltipType = {
  conditions?: {
    conditionValue: string;
    operator: Operators;
    tooltip: string;
  }[];
  offset?: {
    distance?: number;
    skidding?: number;
  };
  placement?: TooltipPlacement;

  value?: string;
};
type Formats =
  | "plain"
  | "fromNow"
  | "date"
  | "shortAddress"
  | "percentage"
  | "commission"
  | "currency"
  | "number"
  | "avatar"
  | "icon";

export interface ValueFormatterProps {
  value: string;
  tag?: Tags;
  typography?: SanityProps;
  type?: ValueTypes;
  format?: Formats;
  tooltip?: TooltipType;
  icon?: Icon;
  color?: Color;
  link?: string;
  copy?: boolean;
}

export interface InnerValueProps {
  icon?: Icon;
  parsedIcon?: any;
  tag: Tags;
  parsedColor?: string;
  typographyProps?: Record<string, any>;
  format: Formats;
  parsedValue: any;
  copy?: boolean;
}

export interface InnerTooltipValueProps {
  icon?: Icon;
  parsedIcon?: any;
  tag: Tags;
  parsedColor?: string;
  typographyProps?: Record<string, any>;
  format: Formats;
  parsedValue: any;
  tooltip?: TooltipType;
  parsedTooltip?: any;
  copy?: boolean;
}

export interface ValueFormat {
  format?: {
    type?: ValueTypes;
    color?: Color;
    format?: Formats;
    tooltip?: TooltipType;
    icon?: Icon;
    link?: string;
    tag?: Tags;
  };
  name?: string;
  type?: "literal" | "key";
  updateOn?: UpdateOnType;
  value?: any;
  copy?: boolean;
  _key?: string
}

export const ValueFormatter = ({
  value,
  typography,
  type = "string",
  format = "plain",
  tag = "span",
  tooltip,
  color,
  icon,
  link,
  copy,
}: ValueFormatterProps) => {
  const typographyProps = parseProps(typography);
  const parsedValue = parseValue(type, value);
  const parsedTooltip = parseTooltip(tooltip, parsedValue);

  const parsedColor =
    color && color.conditions && color.conditions?.length > 0
      ? parseColor(color, parsedValue)
      : color?.color || "onPrimary";
  const parsedIcon =
    icon && icon.conditions && icon.conditions?.length > 0 ? (
      parseIcon(icon, parsedValue)
    ) : icon?.icon ? (
      getIcon(icon?.icon, icon?.iconProps)
    ) : (
      <></>
    );
  return (
    <>
      {link && (
        <Link href={link}>
          <InnerTooltip
            {...{
              icon,
              parsedIcon,
              tag,
              parsedColor,
              typographyProps,
              format,
              parsedValue,
              parsedTooltip,
              tooltip,
              copy,
            }}
          />
        </Link>
      )}
      {!link && (
        <InnerTooltip
          {...{
            icon,
            parsedIcon,
            tag,
            parsedColor,
            typographyProps,
            format,
            parsedValue,
            parsedTooltip,
            tooltip,
            copy,
          }}
        />
      )}
    </>
  );
};

const getIcon = (icon?: IconListTypes, iconProps?: Icon["iconProps"]) => {
  if (!icon) {
    return <></>;
  }
  const Icon = iconsList[icon];
  const props = iconProps ? parseProps(iconProps) : {};
  return Icon ? cloneElement(Icon, { ...props }) : <></>;
};

const operators = {
  "==": (value: any, compareValue: any) => value == compareValue,
  "!=": (value: any, compareValue: any) => value != compareValue,
  "<=": (value: any, compareValue: any) => value <= compareValue,
  ">=": (value: any, compareValue: any) => value >= compareValue,
  ">": (value: any, compareValue: any) => value > compareValue,
  "<": (value: any, compareValue: any) => value < compareValue,
};

const parsers = {
  string: (value?: string) => value?.toString(),
  number: (value?: string) => parseInt(value || "0", 10),
  float: (value?: string) => parseFloat(value || "0"),
  beddows: (value?: string) => value, //BigInt(value || "0"),
  timestamp: (value?: string) => parseInt(value || "0"), //value ? new Date(value + 1000) : new Date(),
  boolean: (value?: boolean) => value === true,
  hex: (value?: string) => Buffer.from(value || "", "hex"),
};

const formatters = {
  plain: (value: any) => value?.toString(),
  shortAddress: (value: any) => shortenAddress(value),
  commission: (value: any) => value/100 + "%",
  percentage: (value: any) => value + "%",
  currency: (value: any) => convertBeddowsToLSK(value),
  number: (value: any) => value.toLocaleString(),
  avatar: (value: any) => value,
  icon: (value: any) => "",
  date: (value: any) => new Date(value).getTime(),
  fromNow: (value: any) => new Date().getTime() - new Date(value * 1000).getTime() > 60 * 60 * 1000 ? new Date(value * 1000).toLocaleString() : formatDistance(
    new Date(value * 1000),
    new Date(),
    {
      addSuffix: true,
      includeSeconds: true,
    }
  ),
};

const InnerValue = ({
  icon,
  parsedIcon,
  tag,
  parsedColor,
  typographyProps,
  format,
  parsedValue,
  copy,
}: InnerValueProps) => {
  const value = formatters[format](parsedValue);
  return (
      <Grid gap={1} columns={2} mobileColumns={2} flex>
        {icon && icon.before && parsedIcon}
        <Typography color={parsedColor} tag={tag} {...typographyProps}>
          {value}
        </Typography>
        {copy && <CopyButton value={value} />}
        {icon && !icon.before && parsedIcon}
      </Grid>
  );
};


const InnerTooltip = ({
  icon,
  parsedIcon,
  tag,
  parsedColor,
  typographyProps,
  format,
  parsedValue,
  parsedTooltip,
  tooltip,
  copy,
}: InnerTooltipValueProps) => {
  return tooltip && parsedTooltip ? (
    <Tooltip
      label={parsedTooltip}
      placement={tooltip.placement || "top"}
      offset={
        tooltip.offset?.skidding && tooltip.offset?.distance
          ? [tooltip.offset?.skidding, tooltip.offset?.distance]
          : undefined
      }
    >
      <InnerValue
        {...{
          icon,
          parsedIcon,
          tag,
          parsedColor,
          typographyProps,
          format,
          parsedValue,
          copy,
        }}
      />
    </Tooltip>
  ) : (
    <InnerValue
      {...{
        icon,
        parsedIcon,
        tag,
        parsedColor,
        typographyProps,
        format,
        parsedValue,
        copy,
      }}
    />
  );
};

const parseColor = (color: Color, value: any) => {
  let result = undefined;
  color.conditions?.forEach((condition) => {
    if (operators[condition.operator](value, condition.conditionValue)) {
      result = condition.color;
      return;
    }
  });
  return result || color.color || ("onPrimary" as string);
};

const parseIcon = (icon: Icon, value: any) => {
  let result = undefined;
  icon.conditions?.forEach((condition) => {
    if (operators[condition.operator](value, condition.conditionValue)) {
      result = getIcon(condition.icon, condition.iconProps);
      return;
    }
  });
  return result || getIcon(icon.icon, icon.iconProps);
};

const parseTooltip = (tooltip?: TooltipType, value?: any) => {
  if (!tooltip) {
    return "";
  }
  let result = undefined;
  tooltip.conditions?.forEach((condition) => {
    if (operators[condition.operator](value, condition.conditionValue)) {
      result = condition.tooltip;
      return;
    }
  });
  return result || tooltip.value || "";
};

const parseValue = (type: ValueTypes, value?: any) => parsers[type](value);
const shortenAddress = (value: string) =>
  value ? value.length > 11 ? value.slice(0, 6) + "..." + value.slice(-5) : value : "";

export const parseProps = (props?: SanityProps, id?: string) =>
  props
    ? props.reduce(
        (obj: Record<string, any>, item) => ((obj[item.key] = item.value === "id" ? id : item.value), obj),
        {}
      )
    : {};
// const parseProps = (props?: SanityProps): Record<string, any> => {
//   const parsedProps: Record<string, any> = {};
//   props?.map(({ key, value }) => (parsedProps[key] = value));
//   return parsedProps;
// };
