"use client"
import {useAddressConverter} from "../hooks/AddressConverter";
import {useEffect, useState} from "react";
import {AccountDataType} from "@moosty/lisk-connection-provider";
import {getData} from "../lib/sanity.service";
import axios from "axios";
import {convertBeddowsToLSK} from "../lisk-client";
import Link from "next/link";
import {Grid, KeyValueRow, Typography, ValueFormatter} from "ui";
import {Input} from "ui/atoms/input/input";

export const AccountAnalyzer = () => {
  const { publicKey, lisk32, address, legacy, setInput, error } =
    useAddressConverter()
  const [balance, setBalance] = useState<string>()
  const [accountStatus, setAccountStatus] = useState<any>("")
  const [newFundOwner, setNewFundOwner] = useState<AccountDataType>()

  useEffect(() => {
    console.log(
      "pub",
      publicKey,
      "add",
      address,
      "leg",
      legacy,
      "32",
      lisk32,
      "error",
      error,
    )
    if (lisk32 || legacy) {
      const getAccount = async () => {
        setNewFundOwner({} as AccountDataType)
        const { data } = (await getData("lisk-service", "get.generators", {
          address: lisk32,
          limit: 1,
        })) as { data?: AccountDataType[] }
        if (data?.[0]?.token?.balance) {
          setBalance(data?.[0]?.token?.balance)
          setAccountStatus("ok!")
        } else {
          if (legacy) {
            const getLegacyAccount = async () => {
              const { data } = await axios(
                `https://legacy-explorer.lisk.com/api/getAccount?address=${legacy}`,
              )
              if (publicKey && data.publicKey && data.publicKey !== publicKey) {
                setAccountStatus("This account is collision attacked")
                const getNewFundOwner = async () => {
                  const accountData = (await getData(
                    "lisk-service",
                    "get.generators",
                    { publicKey: data?.publicKey },
                  )) as { data?: AccountDataType[] }
                  if (accountData?.data?.[0]?.summary) {
                    setNewFundOwner(accountData.data[0])
                  }
                }
                getNewFundOwner()
              }
              const accountResponse = await fetch(`https://api.liskscan.com/reclaimed/legacy`)
              const account = (await accountResponse.json()).find((account: any) => account.legacyAddress === legacy)
              if (account) {
                setAccountStatus(
                  <Typography tag={"p"} className={"text-right"}>
                    <span>{`This account has reclaimed ${convertBeddowsToLSK(account.amount)} LSK`}</span><br />
                    {"By "}<Link href={`/account/${account.address}`}>{account.address}</Link>
                  </Typography>,
                )
              }
              if (!account && parseInt(data.balance) > 0 && !data.publicKey) {
                setAccountStatus(
                  <><Typography tag={"span"}>{" This account can reclaim "}</Typography><ValueFormatter value={data?.balance} type={"beddows"} format={"currency"} /></>
                )
              }
              if (data.publicKey && !publicKey) {
                const getNewFundOwner = async () => {
                  const accountData = (await getData(
                    "lisk-service",
                    "get.generators",
                    { publicKey: data?.publicKey },
                  )) as { data?: AccountDataType[] }
                  if (accountData?.data?.[0]?.summary) {
                    if (
                      lisk32 &&
                      accountData.data[0]?.summary?.address !== lisk32
                    ) {
                      setAccountStatus("This account is collision attacked")
                    } else {
                      setAccountStatus(<Typography tag={"p"}><b>{"unknown"}</b>{" - please enter your public key or new address"}</Typography>)
                    }
                    setNewFundOwner(accountData.data[0])
                  }
                }
                getNewFundOwner()
              }
              if (!data.success) {
                setAccountStatus("Account not found")
              }
            }
            getLegacyAccount()
          }
          setBalance("")
          setAccountStatus("Account not found")
        }
      }
      getAccount()
    }
  }, [publicKey, address, legacy, lisk32, error])

  const onPast = (input: string) => {
    setInput(input)
  }
  return (
    <Grid className={"w-full max-w-app mx-auto bg-surface-2 rounded p-8"} flex gap={4}>
      <label
        htmlFor="lisk-address"
        className="block text-base font-medium text-onSurfaceLight"
      >
        <Typography tag={"span"}>{"Legacy address, Lisk32, Address or Public key"}</Typography>
      </label>
      <div className="mt-1">
        <Input
          onChange={(e) => onPast(e.target.value)}
          fieldType="text"
          name="lisk-address"
          id="lisk-address"
          className="shadow-sm w-full"
          placeholder="Paste: Legacy address, Lisk32, Address or PublicKey here"
        />
      </div>
      {error && (
        <div className="bg-error">
          <Typography tag={"span"}>
            {error}
            <br />
            {"Input is not a valid Legacy address, Lisk32 address, Address or PublicKey"}
          </Typography>
        </div>
      )}
      {legacy && (
        <div className="mt-10 mb-5 w-full">
          {publicKey && (
            <KeyValueRow
              label={"Public Key"}
              value={
                <Link
                  href={`/account/${lisk32}`}
                >
                  <Typography tag={"span"}>{publicKey}</Typography>
                </Link>
              }
            />
          )}
          {lisk32 && (
            <KeyValueRow
              label={"Address"}
              value={
                <Link
                  href={`/account/${lisk32}`}
                >
                  <Typography tag={"span"}>{lisk32}</Typography>
                </Link>
              }
            />
          )}
          {address && (
            <KeyValueRow
              label={"Hex Address (Binary Address)"}
              value={
                <Link
                  href={`/account/${lisk32}`}
                >
                  <Typography tag={"span"}>{address}</Typography>
                </Link>
              }
            />
          )}
          {legacy && (
            <KeyValueRow
              label={"Legacy address"}
              value={
                <a
                  className={"text-info"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  href={`https://legacy-explorer.lisk.com/address/${legacy}`}
                >
                  <Typography tag={"span"}>{legacy}</Typography>
                </a>
              }
            />
          )}
          {accountStatus && (
            <KeyValueRow
              label={"Account Status"}
              value={<Typography tag={"span"}>{accountStatus}</Typography>}
            />
          )}
          {balance && (
            <KeyValueRow
              label={"Account Balance"}
              value={<ValueFormatter value={balance} type={"beddows"} format={"currency"} />}
            />
          )}
          {newFundOwner?.summary?.address && (
            <KeyValueRow
              label={"Tokens are owned by"}
              value={
                <Link
                  href={`/account/${newFundOwner?.summary?.address}`}
                >
                  <Typography tag={"span"}>{newFundOwner?.summary?.address}</Typography>
                </Link>
              }
            />
          )}

          <br />
        </div>
      )}
    </Grid>
  )
}