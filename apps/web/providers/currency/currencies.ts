import { NextApiRequest, NextApiResponse } from "next"
import {CurrencyCategory} from "./CurrencyProvider";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json(categories)
}

export const categories: CurrencyCategory[] = [
  {
    category: "Popular Currencies",
    currencies: [
      {
        id: 1214,
        name: "Lisk",
        sign: "Ⱡ", // other options: Ŀ ȴ Ƚ ƚ ł Ł ŀ Ŀ ľ Ľ ļ Ļ ĺ Ĺ ⁁ ℄ ℒ ℓ
        symbol: "LSK",
        default: {
          sign: false,
          symbol: true,
          fractions: 4,
        },
      },
      {
        id: 2790,
        name: "Euro",
        sign: "€",
        symbol: "EUR",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2781,
        name: "United States Dollar",
        sign: "$",
        symbol: "USD",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2785,
        name: "Swiss Franc",
        sign: "Fr",
        symbol: "CHF",
        default: {
          sign: false,
          symbol: true,
          fractions: 2,
        },
      },
      {
        id: 2797,
        name: "Japanese Yen",
        sign: "¥",
        symbol: "JPY",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2798,
        name: "South Korean Won",
        sign: "₩",
        symbol: "KRW",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 1,
        name: "Bitcoin",
        sign: "₿",
        symbol: "BTC",
        default: {
          sign: true,
          symbol: false,
          fractions: 8,
        },
      },
      {
        id: 2805,
        name: "Polish Złoty",
        sign: "zł",
        symbol: "PLN",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
    ],
  },
  {
    category: "Crypto",
    currencies: [
      {
        id: 1214,
        name: "Lisk",
        sign: "Ⱡ", // other options: Ŀ ȴ Ƚ ƚ ł Ł ŀ Ŀ ľ Ľ ļ Ļ ĺ Ĺ ⁁ ℄ ℒ ℓ
        symbol: "LSK",
        default: {
          sign: false,
          symbol: true,
          fractions: 4,
        },
      },
      // {
      //   id: 2,
      //   name: "Beddows",
      //   sign: "₻", // ḃ ƀэ Ɓэ Ƃ ƃ Ƅ ƅ Ƀ Ḃ ḃ Ϧ Ъ ъ ь Ѣ ѣ Ҍ ҍ ₻ 	৳
      //   symbol: "BWS",
      //   flag: LSK,
      // default: {
      //   sign: true,
      //   symbol: false,
      //   fractions: 2,
      // },
      // },
      {
        id: 1,
        name: "Bitcoin",
        sign: "₿",
        symbol: "BTC",
        default: {
          sign: true,
          symbol: false,
          fractions: 8,
        },
      },
      // {
      //   id: 4,
      //   name: "Satoshi",
      //   sign: "$@",
      //   symbol: "SAT",
      //   flag: BTC,
      // default: {
      //   sign: true,
      //   symbol: false,
      //   fractions: 2,
      // },
      // },
    ],
  },
  {
    category: "Fiat Currencies",
    currencies: [
      {
        id: 2783,
        name: "Brazilian Real",
        sign: "R$",
        symbol: "BRL",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2787,
        name: "Chinese Yuan",
        sign: "¥",
        symbol: "CNY",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2794,
        name: "Indonesian Rupiah",
        sign: "Rp",
        symbol: "IDR",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2796,
        name: "Indian Rupee",
        sign: "₹",
        symbol: "INR",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2805,
        name: "Polish Złoty",
        sign: "zł",
        symbol: "PLN",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2790,
        name: "Euro",
        sign: "€",
        symbol: "EUR",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2781,
        name: "United States Dollar",
        sign: "$",
        symbol: "USD",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2785,
        name: "Swiss Franc",
        sign: "₣",
        symbol: "CHF",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2797,
        name: "Japanese Yen",
        sign: "¥",
        symbol: "JPY",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2798,
        name: "South Korean Won",
        sign: "₩",
        symbol: "KRW",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2791,
        name: "Pound Sterling",
        sign: "£",
        symbol: "GBP",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
      {
        id: 2792,
        name: "Hong Kong Dollar",
        sign: "$",
        symbol: "HKD",
        default: {
          sign: false,
          symbol: true,
          fractions: 2,
        },
      },
      {
        id: 2806,
        name: "Russian Ruble",
        sign: "₽",
        symbol: "RUB",
        default: {
          sign: true,
          symbol: false,
          fractions: 2,
        },
      },
    ].sort((b, a) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0)),
  },
  {
    category: "Metals",
    currencies: [
      {
        id: 3574,
        name: "Silver Troy Ounce",
        symbol: "XAG",
        sign: "Ag",
        default: {
          sign: false,
          symbol: true,
          fractions: 4,
        },
      },
      {
        id: 3575,
        name: "Gold Troy Ounce",
        symbol: "XAU",
        sign: "Au",
        default: {
          sign: false,
          symbol: true,
          fractions: 4,
        },
      },
      {
        id: 3576,
        name: "Palladium Ounce",
        symbol: "XPD",
        sign: "Pd",
        default: {
          sign: false,
          symbol: true,
          fractions: 4,
        },
      },
      {
        id: 3577,
        name: "Platinum Ounce",
        symbol: "XPT",
        sign: "Pt",
        default: {
          sign: false,
          symbol: true,
          fractions: 4,
        },
      },
    ],
  },
]
