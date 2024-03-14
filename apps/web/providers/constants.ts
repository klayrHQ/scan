import {SettingType} from "./settings";

export const settings: SettingType[] = [
  {
    handle: "networks",
    label: "Network",
    optionType: "json",
    value: {
      default: true,
      id: "lisk",
      endpoint: [
        {
          host: "wss://mainnet-service.liskscan.com",
          type: "serviceRPC",
        },
        {
          host: "https://mainnet-service.liskscan.com",
          type: "serviceHTTP",
        },
      ],
    },
  },
  {
    handle: "decimals",
    label: "Mantissa size",
    optionType: "number",
    limits: {
      min: 0,
      max: 8,
    },
    value: 4,
  },
  {
    handle: "selectedCurrency",
    label: "Selected currency",
    optionType: "json",
    value: "dollar",
  },
  {
    handle: "convertCurrency",
    label: "Convert KLY to fiat",
    optionType: "boolean",
    value: false,
  },
  {
    handle: "symbolEnabled",
    label: "Show symbol",
    optionType: "boolean",
    value: "USD",
  },
  {
    handle: "signEnabled",
    label: "Show sign",
    optionType: "boolean",
    value: "$",
  },
  {
    handle: "trailingEnabled",
    label: "Trailing zeroes",
    optionType: "boolean",
    value: false,
  },
  {
    handle: "decimalSeparatorDot",
    label: "Decimal separator",
    optionType: "boolean",
    value: true,
  },
  {
    handle: "appWidth",
    label: "App width",
    optionType: "number",
    limits: {
      min: 1000,
      max: 9999,
    },
    value: 1280,
    apply: true,
  },
]

export const applySettings: any = {
  appWidth(newState: any) {
    typeof window !== "undefined" &&
      document.documentElement.style.setProperty(
        "--app-width",
        `${newState.value}px`,
      )
  },
}
