"use client"
import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { MarketPriceDataType } from "@moosty/lisk-service-provider"
import {useSettings} from "../settings";
import {convertBeddowsToLSK} from "../../lib/queries/lisk";
import {categories} from "./currencies";
import axios from "axios";

export interface CurrencyType {
  id: number
  symbol: string
  sign: string
  name: string
  flag?: string
  default: {
    sign: boolean
    symbol: boolean
    fractions: number
  }
}

export interface CurrencyCategory {
  category: string
  currencies: CurrencyType[]
}

export interface CurrencyProviderProps {
  currencies: CurrencyType[]
  categories: CurrencyCategory[]
  decimals: number
  selectedCurrency: CurrencyType
  price: MarketPriceDataType[]

  setSelectedCurrency(currency: CurrencyType): void

  parseBeddows(
    beddows: string,
    convert?: boolean,
    overRideDecimals?: number,
  ): {
    number: string
    decimals?: string
    lsk: string
  }

  formatNumber(number?: string): string

  switchConvert(): void
}

export const CurrencyContext = createContext<CurrencyProviderProps>(
  {} as CurrencyProviderProps,
)

export const useDecimals = () => useContext(CurrencyContext)

export const CurrencyProvider = ({ children }: {children: any}) => {
  const { parsedSettings, setSetting } = useSettings()
  const [price, setPrice] = useState<MarketPriceDataType[]>(
    [] as MarketPriceDataType[],
  )
  const [storageLoaded, setStorageLoaded] = useState<boolean>(false)

  const switchConvert = () => {
    const newState = !parsedSettings?.convertCurrency
    setSetting("convertCurrency", newState)
    if (!newState) {
      setSetting("signEnabled", false)
      setSetting("symbolEnabled", true)
    } else {
      setSetting("signEnabled", parsedSettings?.selectedCurrency?.default?.sign)
      setSetting(
        "symbolEnabled",
        parsedSettings?.selectedCurrency?.default?.symbol,
      )
      setSetting("convertCurrency", newState)
    }
  }

  const setSelectedCurrency = (newCurrency: CurrencyType) => {
    setSetting("selectedCurrency", newCurrency)
  }

  const getBeddowsRate = (rate?: string) => {
    return BigInt((parseFloat(rate || "1") * 100000000).toFixed(0))
  }

  const formatNumber = (number?: string) =>
    number?.replace(
      /(.)(?=(\d{3})+$)/g,
      `$1${parsedSettings?.decimalSeparatorDot ? "," : "."}`,
    ) || ""

  const getConvertedBeddows = (rate: bigint, beddows: string) => {
    return (BigInt(beddows) * rate) / BigInt(10 ** 8)
  }

  const convertCurrency = (beddows: string) => {
    const rate = getBeddowsRate(
      price.find(
        (p) => p.code === `KLY_${parsedSettings?.selectedCurrency?.symbol}`,
      )?.rate,
    )
    const convertedBeddows = getConvertedBeddows(rate, beddows)
    return convertBeddowsToLSK(convertedBeddows.toString().slice(0, 19))
  }

  const parseBeddows = (
    beddows: string,
    convert = true,
    overRideDecimals?: number,
  ) => {
    const roundedValue = parseFloat(
      convert ? convertCurrency(beddows) : convertBeddowsToLSK(beddows),
    ).toFixed(
      parsedSettings?.decimals !== undefined ? parsedSettings.decimals : 4,
    )
    const split = parsedSettings?.trailingEnabled
      ? roundedValue.split(".")
      : Number(roundedValue).toString().split(".")
    return {
      lsk: beddows,
      number: parseInt(split[0]).toLocaleString(
        !parsedSettings?.decimalSeparatorDot ? "de-DE" : "en-US",
        {
          maximumFractionDigits: 0,
        },
      ),
      decimals:
        (overRideDecimals ?? parsedSettings?.decimals) > 0
          ? split[1]
          : undefined,
    }
  }

  useEffect(() => {
    const getNewPrices = async () => {
      const result = await axios(
        `https://price-api.liskscan.com/prices`,
      )
      delete result.data.lastUpdate
      const parsedResults = Object.keys(result.data).map((code) => {
        return {
          code: `KLY_${code}`,
          from: "KLY",
          rate: result.data[code].price.toString(),
          to: code,
          updateTimestamp: 0,
          sources: ["coinmarketcap"],
        }
      })
      setPrice(parsedResults as MarketPriceDataType[])
    }

    getNewPrices()
  }, [])

  useEffect(() => {
    if (
      parsedSettings?.selectedCurrency &&
      storageLoaded &&
      parsedSettings?.convertEnabled
    ) {
      setSetting("signEnabled", parsedSettings?.selectedCurrency?.default?.sign)
      setSetting(
        "symbolEnabled",
        parsedSettings?.selectedCurrency?.default?.symbol,
      )
      setSetting(
        "decimals",
        parsedSettings?.selectedCurrency?.default?.fractions,
      )
    } else {
      setStorageLoaded(true)
    }
  }, [parsedSettings?.selectedCurrency])

  return (
    <CurrencyContext.Provider
      value={useMemo(
        () => ({
          currencies: [
            ...categories.map((category) => category.currencies).flat(),
          ],
          categories,
          decimals: parsedSettings?.decimals,
          selectedCurrency: parsedSettings?.selectedCurrency,
          setSelectedCurrency,
          price,
          parseBeddows,
          formatNumber,
          switchConvert,
        }),
        [
          categories,
          parsedSettings?.decimals,
          parsedSettings?.selectedCurrency,
          setSelectedCurrency,
          price,
          parseBeddows,
          formatNumber,
          switchConvert,
          categories,
        ],
      )}
    >
      {children}
    </CurrencyContext.Provider>
  )
}
