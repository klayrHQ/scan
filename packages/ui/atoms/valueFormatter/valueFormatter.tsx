import React from "react";
import { Grid, Tags, Tooltip, TooltipPlacement, Typography } from "../index";
import { IconListTypes, iconsList } from "liskscan/components/iconList";
import { cloneElement } from "react";
import Link from "next/link";
import { CopyButton } from "liskscan/components/data/copy";
import { convertBeddowsToLSK } from "liskscan/lib/queries/lisk";
import { Avatar } from "../avatar/avatar";
import { dayjs } from "../../utils/time";
import {CurrencyClient} from "liskscan/components/currencyClient";

export type SanityProps = { key: string; value: string }[];
export type ValueTypes =
  | "string"
  | "number"
  | "height"
  | "beddows"
  | "boolean"
  | "float"
  | "timestamp"
  | "hex"
  | "object";
type Operators = "==" | "!=" | "<=" | ">=" | "<" | ">";
export type Icon = {
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
export type Formats =
  | "plain"
  | "fromNow"
  | "date"
  | "shortAddress"
  | "shortenAddressEnd"
  | "percentage"
  | "commission"
  | "currency"
  | "currencyNew"
  | "avatarAddress"
  | "fee"
  | "number"
  | "height"
  | "avatar"
  | "icon";

export interface ValueFormatterProps {
  value: string | {};
  tag?: Tags;
  typography?: SanityProps;
  type?: ValueTypes;
  format?: Formats;
  tooltip?: TooltipType;
  icon?: Icon;
  color?: Color;
  link?: {
    href?: string;
    keys?: string[];
  };
  copy?: boolean;
  symbol?: string;
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
  symbol?: string;
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
  symbol?: string;
}

export interface ValueFormat {
  format?: {
    type?: ValueTypes;
    color?: Color;
    format?: Formats;
    tooltip?: TooltipType;
    typography?: any;
    icon?: Icon;
    link?: {
      href?: string;
      keys?: string[];
    };
    tag?: Tags;
  };
  name?: string;
  type?: "literal" | "key";
  value?: any;
  copy?: boolean;
  _key?: string;
  symbol?: string;
}

export const ValueFormatter = ({
  value,
  typography,
  type,
  format = "plain",
  tag = "span",
  tooltip,
  color,
  icon,
  link,
  copy,
  symbol,
}: ValueFormatterProps) => {
  const typographyProps = parseProps(typography);
  const parsedValue = parseValue(type, value);
  const parsedTooltip = parseTooltip(tooltip, parsedValue);

  // const dayjs = require("dayjs");

  const parsedColor =
    color && color.conditions && color.conditions?.length > 0
      ? parseColor(color, parsedValue)
      : color?.color || "onBackgroundMedium";
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
      {link?.href && (
        <Link href={link.href} prefetch={false}>
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
              symbol,
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
            symbol,
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
  height: (value?: string) => parseInt(value || "0", 10),
  float: (value?: string) => parseFloat(value || "0"),
  beddows: (value?: string) => value, //BigInt(value || "0"),
  timestamp: (value?: string) => parseInt(value || "0") * 1000, //value ? new Date(value + 1000) : new Date(),
  boolean: (value?: boolean) => value === true,
  hex: (value?: string) => Buffer.from(value || "", "hex"),
  object: (value?: any) => value,
};

const formatters = {
  plain: (value: any) => value?.toString(),
  shortAddress: (value: any) => shortenAddress(value),
  shortenAddressEnd: (value: any) => shortenAddressEnd(value),
  commission: (value: any) => {
    return value != 0 ? value / 100 + "%" : "0%";
  },
  percentage: (value: any) => parseFloat(value).toFixed(2) + "%",
  currency: (value: any, typographyProps?: Record<string, any>) =>
    value
      ? <CurrencyClient beddows={value} typography={typographyProps} />
      : "-",
    /*`${
      value
        ? parseFloat(convertBeddowsToLSK(value)).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }) +
          " LSK"
        : "-"
    }`,*/
  currencyNew: (value: any, typographyProps?: Record<string, any>) =>
    value
      ? <CurrencyClient beddows={value} typography={typographyProps} />
      : "0",
    /*`${
      value
        ? parseFloat(convertBeddowsToLSK(value)).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }) + ` ${symbol}`
        : `0 ${symbol}`
    }`,*/
  fee: (value: any) =>
    `${
      value ? parseFloat(convertBeddowsToLSK(value)).toFixed(5) + " KLY" : ""
    }`,
  number: (value: any) => value?.toLocaleString(),
  height: (value: any) => (value > 0 ? value.toLocaleString() : "Pending"),
  avatar: (value: any) => <Avatar address={value} size={20} />,
  avatarAddress: (value: any) => (
    <Grid
      columns={2}
      flex
      mobileColumns={2}
      className={"space-x-2 items-center"}
    >
      {value?.address && <Avatar size={20} address={value.address} />}
      <Grid columns={1} mobileColumns={1}>
        <Typography tag={"span"} size={"body"}>
          {value.name || (
            <ValueFormatter
              value={value.address}
              typography={[{ key: "size", value: "subBody" }]}
              format={"shortAddress"}
            />
          )}
        </Typography>
      </Grid>
    </Grid>
  ),
  icon: (value: any) => "",
  date: (value: any) => new Date(value).toLocaleString(),
  // fromNow: (value: any) =>
  //   new Date().getTime() - new Date(value).getTime() > 60 * 60 * 1000
  //     ? new Date(value).toLocaleString()
  //     : formatDistance(new Date(value), new Date(), {
  //         addSuffix: true,
  //         includeSeconds: true,
  //       }),

  fromNow: (value: any) => {
    if (!value) {
      return "N/A";
    }
    const date = dayjs(value);

    if (dayjs().diff(date, "hour") >= 1) {
      return date.format("DD MMM 'YY HH:mm");
    }

    return date.fromNow();
  },
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
  symbol,
}: InnerValueProps) => {
  const value = formatters[format](parsedValue, typographyProps);
  return (
    <Grid
      className={"flex flex-row items-center"}
      gap={1}
      columns={2}
      mobileColumns={2}
      flex
    >
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
  symbol,
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
          symbol,
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
        symbol,
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

const parseValue = (type?: ValueTypes, value?: any) =>
  type ? parsers[type](value) : value;
const shortenAddress = (value: string) =>
  value
    ? value.length > 11
      ? value.slice(0, 6) + "..." + value.slice(-5)
      : value
    : "";

const shortenAddressEnd = (value: string) =>
  value ? (value.length > 28 ? value.slice(0, 25) + "..." : value) : "";

export const parseProps = (props?: SanityProps, id?: string) =>
  props
    ? props.reduce(
        (obj: Record<string, any>, item) => (
          (obj[item.key] = item.value === "id" ? id : item.value), obj
        ),
        {}
      )
    : {};
// const parseProps = (props?: SanityProps): Record<string, any> => {
//   const parsedProps: Record<string, any> = {};
//   props?.map(({ key, value }) => (parsedProps[key] = value));
//   return parsedProps;
// };
