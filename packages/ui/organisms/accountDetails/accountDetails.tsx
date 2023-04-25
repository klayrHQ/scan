import React, { FC, useEffect, useState } from "react"
import {
  ArrowSmallUpIcon as ArrowSmUpIcon,
  ArrowDownIcon,
  ExclamationCircleIcon,
  DocumentDuplicateIcon as DuplicateIcon,
} from "@heroicons/react/24/solid"
import {
  AccountDataType,
  BlockDataType,
  Envelope,
  useLiskService,
} from "@moosty/lisk-service-provider"
// @ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard"
import copy from "copy-to-clipboard"
import {CopyHotKey} from "../../atoms/copyHotKey/copyHotKey";
import {Snackbar} from "../../atoms/snackbar/snackbar";
import {Paper} from "../../atoms/paper/paper";
import {KeyValueRow} from "../../molecules/keyValueRow/keyValueRow";
import {IconButton} from "../../atoms/iconButton/iconButton";

interface AccountDetailsProps {
  account: AccountDataType
  compactString: Function
  received?: number | null
  send?: number | null
  lastBlock?: BlockDataType | null
  legacy: any
  copyNoteText: any
  setCopyNoteText: any
  transactionsCount: {in: number, out: number}
}

export const AccountDetails = ({
  account,
  compactString,
  send,
  received,
  lastBlock,
  legacy,
  copyNoteText,
  setCopyNoteText,
  transactionsCount,
}: AccountDetailsProps) => {

  return (
    <Paper
      className="lg:grid lg:mx-auto lg:grid-cols-2 lg:grid-flow-col lg:gap-x-10  max-w-app flex-grow text-onSurfaceHigh p-2 md:p-5 w-full mb-4"
      surface={1}
    >
      <CopyHotKey
        message={"Username copied"}
        hotkey={"c+u"}
        action={() =>
          account?.summary?.username && copy(account?.summary?.username)
        }
        deps={[account]}

      />
      <CopyHotKey
        message={"Address copied"}
        hotkey={"c+a"}
        action={() =>
          account?.summary?.address && copy(account?.summary?.address)
        }
        deps={[account]}
      />
      <CopyHotKey
        message={"Public key copied"}
        hotkey={"c+p"}
        action={() =>
          account?.summary?.publicKey && copy(account?.summary?.publicKey)
        }
        deps={[account]}
      />
      {account?.summary?.username && (
        <KeyValueRow
          label="Owner"
          value={
            <span className=" text-onSurfaceLight ">
              {account?.summary?.username || account?.summary?.address}
            </span>
          }
          className={" whitespace-nowrap lg:col-start-1 "}
          icon={
            <CopyToClipboard
              text={account?.summary?.username || account?.summary?.address}
            >
              <IconButton
                onClick={() => setCopyNoteText("Username copied")}
                className=" focus:text-accentPrimary text-surfacePrimaryDark "
              >
                <DuplicateIcon className="h-4 w-4 hover:text-onSurfacePrimaryMedium focus:text-accentPrimary text-surfacePrimaryDark text-xs" />
              </IconButton>
            </CopyToClipboard>
          }
          compactString={compactString}
        />
      )}
      {account?.summary?.address && (
        <KeyValueRow
          label="Address"
          value={
            <div>
              <span className="hidden md:block">
                {account?.summary?.address}
              </span>
              <span className="text-onSurfaceLight md:hidden block">
                {compactString(account?.summary?.address, 30)}
              </span>
            </div>
          }
          className={" whitespace-nowrap lg:col-start-2 "}
          icon={
            <CopyToClipboard text={account?.summary?.address || ""}>
              <IconButton
                onClick={() => setCopyNoteText("Address copied")}
                className=" focus:text-accentPrimary text-surfacePrimaryDark "
              >
                <DuplicateIcon className="h-4 w-4 hover:text-onSurfacePrimaryMedium focus:text-accentPrimary text-surfacePrimaryDark text-xs" />
              </IconButton>
            </CopyToClipboard>
          }
          compactString={compactString}
        />
      )}
      <KeyValueRow
        label="PublicKey"
        value={compactString(account?.summary?.publicKey, 25) || "unknown"}
        className={"lg:col-start-1"}
        icon={
          account?.summary?.publicKey ? (
            <CopyToClipboard text={account?.summary?.publicKey || ""}>
              <IconButton
                onClick={() => setCopyNoteText("Public key copied")}
                className=" focus:text-accentPrimary text-surfacePrimaryDark "
              >
                <DuplicateIcon className="h-4 w-4 hover:text-onSurfacePrimaryMedium focus:text-accentPrimary text-surfacePrimaryDark text-xs" />
              </IconButton>
            </CopyToClipboard>
          ) : (
            <div />
          )
        }
        compactString={compactString}
      />
      {/*<KeyValueRow
        label="Hex Address (Binary Address)"
        value={
          <div>
            <span className="hidden md:block">
              {account?.summary?.address &&
                Buffer.from(
                  getAddressFromLisk32Address(account?.summary?.address, "lsk"),
                ).toString("hex")}
            </span>
            <span className="block md:hidden">
              {account?.summary?.address &&
                compactString(
                  Buffer.from(
                    getAddressFromLisk32Address(
                      account?.summary?.address,
                      "lsk",
                    ),
                  ).toString("hex"),
                  30,
                )}
            </span>
          </div>
        }
        className={" whitespace-nowrap lg:col-start-2 "}
        icon={
          <CopyToClipboard
            text={
              account?.summary?.address &&
              Buffer.from(
                getAddressFromLisk32Address(account?.summary?.address, "lsk"),
              ).toString("hex")
            }
          >
            <IconButton
              onClick={() => setCopyNoteText("Hex address copied")}
              className=" focus:text-accentPrimary text-surfacePrimaryDark "
            >
              <DuplicateIcon className="h-4 w-4 hover:text-onSurfacePrimaryMedium focus:text-accentPrimary text-surfacePrimaryDark text-xs" />
            </IconButton>
          </CopyToClipboard>
        }
        compactString={compactString}
      />*/}
      {account?.summary?.isDelegate && (
        <KeyValueRow
          label="Status"
          value={
            account?.dpos?.delegate?.status
              ? account?.dpos?.delegate?.status
              : "no status"
          }
          className={"lg:col-start-1"}
          compactString={compactString}
        />
      )}
      {legacy && (
        <KeyValueRow
          label="Legacy Address"
          value={
            <a
              href={`https://legacy-explorer.lisk.com/address/${legacy}`}
              target={"_blank"}
              rel={"noopener nofollow noreferrer"}
            >
              {legacy}
            </a>
          }
          className={"text-center whitespace-nowrap lg:col-start-2"}
          icon={
            <CopyToClipboard text={legacy}>
              <IconButton
                onClick={() => setCopyNoteText("Legacy address copied")}
                className=" focus:text-accentPrimary text-surfacePrimaryDark "
              >
                <DuplicateIcon className="h-4 w-4 hover:text-onSurfacePrimaryMedium focus:text-accentPrimary text-surfacePrimaryDark text-xs" />
              </IconButton>
            </CopyToClipboard>
          }
          compactString={compactString}
        />
      )}

      {account?.summary?.isDelegate && (
        <KeyValueRow
          label="is Banned"
          value={
            account?.dpos?.delegate?.isBanned ? (
              <div className="flex flex-row-reverse">
                <ExclamationCircleIcon className="w-5 h-5 text-error" />
                <span>Banned</span>
              </div>
            ) : (
              "false"
            )
          }
          className={" lg:col-start-1 "}
          compactString={compactString}
        />
      )}

      <KeyValueRow
        label="Transactions"
        value={
          <div className={"flex flex-tableRow"}>
            <ArrowSmUpIcon className="text-error h-5 w-5 float-left" />
            <span>{transactionsCount?.out || send}</span>
            <ArrowDownIcon className="text-success h-5 w-5 float-left" />
            <span>{transactionsCount?.in || received}</span>
          </div>
        }
        className={" lg:col-start-2 "}
        compactString={compactString}
      />
      <KeyValueRow
        label="Nonce:"
        value={account?.sequence?.nonce}
        className={" lg:col-start-1 "}
        compactString={compactString}
      />

      {account?.summary?.isDelegate && (
        <KeyValueRow
          label="Last seed reveal"
          value={lastBlock?.seedReveal || "0"}
          className={" lg:col-start-2 "}
          compactString={compactString}
        />
      )}
      {copyNoteText !== "" && (
        <Snackbar message={copyNoteText} toggleState={setCopyNoteText} />
      )}
    </Paper>
  )
}
