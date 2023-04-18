import {tableRowsType} from "../types";
import {compactString} from "./utils";
import {Avatar} from "../atoms/avatar/avatar";
import {Currency} from "../atoms/currency/currency";
import React from "react";

export interface transactionType {
  id: string,
  status: string,
  date: string,
  transactionType: string,
  sender: string,
  recipient: string,
  amount: number,
  fee: number,
  description?: string,
}

export const transactions: Array<transactionType> = [
  {
    id: "007ee58362b72561d07da63fd8bfec150a2dd7ebcbe89e2a93ac21bd7105c896",
    status: "finalized",
    date: "19 Dec 22 01:33:00 PM",
    transactionType: "token | transfer",
    sender: "moosty",
    recipient: "raphael",
    amount: 10,
    fee: 0.03,
    description: "Moosty payout",
  },
  {
    id: "007ee58362b72561d07da63fd8bfec150a2dd7ebcbe89e2a93ac21bd7105c896",
    status: "finalized",
    date: "19 Dec 22 01:33:00 PM",
    transactionType: "token | transfer",
    sender: "lskqbtu9awukj59k9hsxy5tcmvp4h66vjchu9sn5e",
    recipient: "lsku4b476tktert6fbh52ap53v69n8wdpr5hjksq2",
    amount: 0.05,
    fee: 0.0014,
  },
  {
    id: "007ee58362b72561d07da63fd8bfec150a2dd7ebcbe89e2a93ac21bd7105c896",
    status: "finalized",
    date: "19 Dec 22 01:33:00 PM",
    transactionType: "token | transfer",
    sender: "moosty",
    recipient: "jurre",
    amount: 0.05,
    fee: 0.0014,
    description: "Moosty payout",
  },
  {
    id: "007ee58362b72561d07da63fd8bfec150a2dd7ebcbe89e2a93ac21bd7105c896",
    status: "finalized",
    date: "19 Dec 22 01:33:00 PM",
    transactionType: "token | transfer",
    sender: "moosty",
    recipient: "corbifex",
    amount: 0.05,
    fee: 0.0014,
    description: "Moosty payout",
  },
]

export const rows:tableRowsType = transactions.map((tsx, index) => {
  return {
    id: index.toString(),
    cols: [
      {
        value: tsx.status,
      },
      {
        value: compactString(tsx.id, 16, "middle"),
      },
      {
        value: tsx.date,
      },
      {
        value: tsx.transactionType,
      },
      {
        value:
          <span className={"flex gap-2"}>
            <Avatar address={"lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"} size={25}/>
            {compactString(tsx.sender, 20, "middle")}
          </span>,
      },
      {
        value:
          <span className={"flex gap-2"}>
            <Avatar address={"lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"} size={25}/>
            {compactString(tsx.recipient, 20, "middle")}
          </span>,
      },
      {
        value: tsx.description,
        className: "text-center",
      },
      {
        value: <Currency number={tsx.amount.toString()} symbol={true}/>,
        className: "text-right",
      },
      {
        value: <Currency number={tsx.fee.toString()} symbol={true}/>,
        className: "text-right",
      },
    ]
  }
})

export const tabletRows:tableRowsType = transactions.map((tsx, index) => {
  return {
    id: index.toString(),
    cols: [
      {
        value: tsx.status,
      },
      {
        value: compactString(tsx.id, 16, "middle"),
      },
      {
        value: tsx.date,
      },
      {
        value: tsx.transactionType,
      },
      {
        value:
          <span className={"flex gap-2"}>
            <Avatar address={"lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"} size={25}/>
            {compactString(tsx.sender, 20, "middle")}
          </span>,
      },
      {
        value:
          <span className={"flex gap-2"}>
            <Avatar address={"lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"} size={25}/>
            {compactString(tsx.recipient, 20, "middle")}
          </span>,
      },
      {
        value: tsx.description,
        className: "text-center",
      },
      {
        value:
          <span>
            <Currency number={tsx.amount.toString()} symbol={true}/>
            <br />
            <span className={"inline-flex gap-2"}>
              <Currency number={tsx.fee.toString()} symbol={true}/>
              {"Fee"}
            </span>
          </span>,
        className: "text-right",
      },
    ]
  }
})

export const headcols = [
  {
    value: "Status",
  },
  {
    value: "ID",
  },
  {
    value: "Date",
  },
  {
    value: "Transaction",
  },
  {
    value: "Sender",
  },
  {
    value: "Recipient",
  },
  {
    value: "Description",
  },
  {
    value: "Amount",
    className: "text-right",
  },
  {
    value: "Fee",
    className: "text-right",
  },
]

export const tabletHeadcols = [
  {
    value: "Status",
  },
  {
    value: "ID",
  },
  {
    value: "Date",
  },
  {
    value: "Transaction",
  },
  {
    value: "Sender",
  },
  {
    value: "Recipient",
  },
  {
    value: "Description",
  },
  {
    value: "Amount",
    className: "text-right",
  },
]