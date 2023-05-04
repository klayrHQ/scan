import React from "react"
import {
  ArrowSmallUpIcon as ArrowSmUpIcon,
  ArrowDownIcon,
  ExclamationCircleIcon,
  DocumentDuplicateIcon as DuplicateIcon,
} from "@heroicons/react/24/solid"
import {
  BlockDataType,
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
  accountDetails: {
    username?: string
    address: string
    legacyAddress?: string
    publicKey: string
    hexAddress: string
    isDelegate?: boolean
    status?: string
    isBanned?: boolean
    nonce?: string
    received?: number | null
    sent?: number | null
  }
  compactString: Function
  lastBlock?: BlockDataType | null
  copyNoteText: any
  setCopyNoteText: any
}

export const AccountDetailsOld = ({
  accountDetails,
  compactString,
  lastBlock,
  copyNoteText,
  setCopyNoteText,
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
          accountDetails.username && copy(accountDetails.username)
        }
        deps={[accountDetails]}

      />
      <CopyHotKey
        message={"Address copied"}
        hotkey={"c+a"}
        action={() =>
          accountDetails.address && copy(accountDetails.address)
        }
        deps={[accountDetails]}
      />
      <CopyHotKey
        message={"Public key copied"}
        hotkey={"c+p"}
        action={() =>
          accountDetails.publicKey && copy(accountDetails.publicKey)
        }
        deps={[accountDetails]}
      />
      {accountDetails.username && (
        <KeyValueRow
          label="Owner"
          value={
            <span className=" text-onSurfaceLight ">
              {accountDetails.username || accountDetails.address}
            </span>
          }
          className={" whitespace-nowrap lg:col-start-1 "}
          icon={
            <CopyToClipboard
              text={accountDetails.username || accountDetails.address}
            >
              <IconButton
                onClick={() => setCopyNoteText("Username copied")}
                className=" focus:text-accentPrimary text-surfacePrimaryDark "
              >
                <DuplicateIcon className="h-4 w-4 hover:text-onSurfacePrimaryMedium focus:text-accentPrimary text-surfacePrimaryDark text-xs" />
              </IconButton>
            </CopyToClipboard>
          }
        />
      )}
      {accountDetails.address && (
        <KeyValueRow
          label="Address"
          value={
            <div>
              <span className="hidden md:block">
                {accountDetails.address}
              </span>
              <span className="text-onSurfaceLight md:hidden block">
                {compactString(accountDetails.address, 30)}
              </span>
            </div>
          }
          className={" whitespace-nowrap lg:col-start-2 "}
          icon={
            <CopyToClipboard text={accountDetails.address || ""}>
              <IconButton
                onClick={() => setCopyNoteText("Address copied")}
                className=" focus:text-accentPrimary text-surfacePrimaryDark "
              >
                <DuplicateIcon className="h-4 w-4 hover:text-onSurfacePrimaryMedium focus:text-accentPrimary text-surfacePrimaryDark text-xs" />
              </IconButton>
            </CopyToClipboard>
          }
        />
      )}
      <KeyValueRow
        label="PublicKey"
        value={compactString(accountDetails.publicKey, 25) || "unknown"}
        className={"lg:col-start-1"}
        icon={
          accountDetails.publicKey ? (
            <CopyToClipboard text={accountDetails.publicKey || ""}>
              <IconButton
                onClick={() => setCopyNoteText("Public key copied")}
                className=" focus:text-accentPrimary text-surfacePrimaryDark "
              >
                <DuplicateIcon className="h-4 w-4 hover:text-onSurfacePrimaryMedium focus:text-accentPrimary text-surfacePrimaryDark text-xs" />
              </IconButton>
            </CopyToClipboard>
          ) : (
            " "
          )
        }
      />
      <KeyValueRow
        label="Hex Address (Binary Address)"
        value={
          <div>
            <span className="hidden md:block">
              {accountDetails.hexAddress}
            </span>
            <span className="block md:hidden">
              {compactString(accountDetails.hexAddress, 25)}
            </span>
          </div>
        }
        className={" whitespace-nowrap lg:col-start-2 "}
        icon={
          <CopyToClipboard
            text={accountDetails.hexAddress}
          >
            <IconButton
              onClick={() => setCopyNoteText("Hex address copied")}
              className=" focus:text-accentPrimary text-surfacePrimaryDark "
            >
              <DuplicateIcon className="h-4 w-4 hover:text-onSurfacePrimaryMedium focus:text-accentPrimary text-surfacePrimaryDark text-xs" />
            </IconButton>
          </CopyToClipboard>
        }
      />
      {accountDetails.isDelegate && (
        <KeyValueRow
          label="Status"
          value={
            accountDetails.status
              ? accountDetails.status
              : "no status"
          }
          className={"lg:col-start-1"}
          icon={" "}
        />
      )}
      {accountDetails.legacyAddress && (
        <KeyValueRow
          label="Legacy Address"
          value={
            <a
              href={`https://legacy-explorer.lisk.com/address/${accountDetails.legacyAddress}`}
              target={"_blank"}
              rel={"noopener nofollow noreferrer"}
            >
              {accountDetails.legacyAddress}
            </a>
          }
          className={"text-center whitespace-nowrap lg:col-start-2"}
          icon={
            <CopyToClipboard text={accountDetails.legacyAddress}>
              <IconButton
                onClick={() => setCopyNoteText("Legacy address copied")}
                className=" focus:text-accentPrimary text-surfacePrimaryDark "
              >
                <DuplicateIcon className="h-4 w-4 hover:text-onSurfacePrimaryMedium focus:text-accentPrimary text-surfacePrimaryDark text-xs" />
              </IconButton>
            </CopyToClipboard>
          }
        />
      )}

      {accountDetails.isDelegate && (
        <KeyValueRow
          label="is Banned"
          value={
            accountDetails.isBanned ? (
              <div className="flex flex-row-reverse">
                <ExclamationCircleIcon className="w-5 h-5 text-error" />
                <span>Banned</span>
              </div>
            ) : (
              "false"
            )
          }
          className={" lg:col-start-1 "}
          icon={" "}
        />
      )}

      <KeyValueRow
        label="Transactions"
        value={
          <div className={"flex flex-tableRow"}>
            <ArrowSmUpIcon className="text-error h-5 w-5 float-left" />
            <span>{accountDetails.sent}</span>
            <ArrowDownIcon className="text-success h-5 w-5 float-left" />
            <span>{accountDetails.received}</span>
          </div>
        }
        className={" lg:col-start-2 "}
        icon={" "}
      />
      <KeyValueRow
        label="Nonce:"
        value={accountDetails.nonce}
        className={" lg:col-start-1 "}
        icon={" "}
      />

      {accountDetails.isDelegate && (
        <KeyValueRow
          label="Last seed reveal"
          value={lastBlock?.seedReveal || "0"}
          className={" lg:col-start-2 "}
          icon={" "}
        />
      )}
      {copyNoteText !== "" && (
        <Snackbar message={copyNoteText} toggleState={setCopyNoteText} />
      )}
    </Paper>
  )
}
