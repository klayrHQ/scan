"use client"
import React, {useEffect, useState} from "react"
import {Currency} from "ui/atoms/currency/currency";



export const Price = () => {
  const [change, setChange] = useState(9999.9999)
  const [mc, setMc] = useState("9999.9999")
  const [price, setPrice] = useState(0)
  // useEffect(() => {
  //   const getKPI = async () => {
  //     try {
  //
  //       const kpis = await kpisResult.json()
  //       setMc(kpis?.circulatingSupply)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   getKPI()
  // }, [])
  useEffect(() => {
    const ws =
      typeof window !== "undefined"
        ? new WebSocket("wss://push.coinmarketcap.com/ws?device=web&client_source=coin_detail_page")
        : {
          onopen: () => {
          },
          onmessage: () => {
          },
          send(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
          },
        }
    ws.onopen = () => {
      // console.log("test")
      ws.send(
        JSON.stringify({
          method: "RSUBSCRIPTION",
          params: [
            "main-site@crypto_price_15s@{}@detail",
            "1214,1,1027,2010,1839"
          ]
          // id: "price",
          // data: {
          //   cryptoIds: [1214],
          //   index: "detail",
          // },
        }),
      )
    }

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data)
      // console.log(data)
      if (data?.d?.p24h === undefined) {
        // console.log(data)
        return
      }
      if (data.d.id === 1214) {
        setChange(data.d.p24h)
        setMc((data.d.mc / data.d.p).toFixed(0))
        setPrice(data.d.p)
      }
    }
  }, [])

  //
  // const cmc = io("wss://stream.coinmarketcap.com/price/latest", {transports:["websocket"]})
  // cmc.on("connect",() => {
  //   cmc.send(
  //     JSON.stringify({
  //       method: "subscribe",
  //       id: "price",
  //       data: {
  //         cryptoIds: [1214],
  //         index: "detail",
  //       },
  //     }),
  //   )
  // })
  // cmc.on("d", (e) => {
  //   console.log(e)
  //   const data = JSON.parse(e.data)
  //   console.log(data)
  // })
  return (
    <div className="rounded font-medium text-xs md:text-sm flex flex-row">
      <div
        className="flex flex-row   hover:text-onSecondary cursor-pointer rounded py-1 px-2 hover:bg-surfaceLight "
      >
        <Currency
          classes={{
            sign: "text-onInfoBar",
            symbol: "text-onInfoBar ",
            separator: "text-onInfoBar",
            number: "text-onInfoBar",
            decimals: "text-onInfoBar",
          }}
          parsedSettings={{
            selectedCurrency: {
              sign: "$"
          }}}
          number={price.toFixed(4)}
          sign={true}
          symbol={true}
          convert={true}
        />
        {change !== 9999.9999 && (
          <div
            className={[
              "font-bold ml-2 w-16 mr-2 whitespace-nowrap",
              change >= 0 ? "text-success" : "text-error",
              "",
            ].join(" ")}
          >
            {change > 0 ? "+" : ""}
            {change.toFixed(2)}%
          </div>
        )}
        {/*<ChevronDownIcon className="w-5 h-5  text-onInfobar" />*/}
      </div>
      {mc !== "9999.9999" && (
        <div className="hidden md:flex flex-row items-center space-x-2 ml-2">
          <span>MC:</span>
          <Currency
            classes={{
              sign: "text-onInfoBar font-bold",
              symbol: "text-onInfoBar font-bold ",
              separator: "text-onInfoBar font-bold",
              number: "text-onInfoBar font-bold",
              decimals: "text-onInfoBar font-bold",
            }}
            number={BigInt((parseInt(mc || "0")).toFixed(0)).toString()}
            sign={false}
            symbol={false}
            convert={false}
          />
          {/*<span className="text-sm py-1 w-10 text-center mx-auto   rounded text-onInfobar flex  items-center px-1 font-bold">#168</span>*/}
        </div>
      )}
    </div>
  )
}
export default Price
