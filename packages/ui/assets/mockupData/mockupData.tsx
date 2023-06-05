import {tableRowsType} from "../../types";
import {compactString} from "../utils";
import {Avatar} from "../../atoms/avatar/avatar";
import {Currency} from "../../atoms/currency/currency";
import React from "react";
import {Typography} from "../../atoms/typography/typography";
import Status from "../../atoms/status/status";

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
        // @ts-ignore
        value: <span className={"inline-flex"}><Status status={tsx.status} /></span>,
        className: "text-center",
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
        // @ts-ignore
        value: <span className={"inline-flex"}><Status status={tsx.status} /></span>,
        className: "text-center",
      },
      {
        value:
          <span className={"flex flex-col"}>
            <Typography tag={"span"} color={"primary"}>{compactString(tsx.id, 16, "middle")}</Typography>
            <span>{tsx.date}</span>
            <Typography tag={"span"} size={"subBody"}>{tsx.transactionType}</Typography>
          </span>,
      },
      {
        value:
          <>
            <span className={"flex gap-2"}>
              <Avatar address={"lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"} size={25}/>
              {compactString(tsx.sender, 16, "middle")}
              <span className={"ml-auto"}>{"->"}</span>
            </span>
            <span className={"flex gap-2"}>
              <Avatar address={"lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"} size={25}/>
              {compactString(tsx.recipient, 16, "middle")}
              <span className={"ml-auto"}>{"<-"}</span>
            </span>
            <Typography tag={"span"} size={"subBody"}>
              {tsx.description}
            </Typography>
          </>,
      },
      {
        value:
          <span>
            <Currency number={tsx.amount.toString()} symbol={true}/>
            <br />
            <Typography tag={"span"} size={"subBody"} className={"inline-flex gap-2"}>
              <Currency number={tsx.fee.toString()} symbol={true}/>
              {"Fee"}
            </Typography>
          </span>,
        className: "text-right",
      },
    ]
  }
})

export const mobileRows:tableRowsType = transactions.map((tsx, index) => {
  return {
    id: index.toString(),
    cols: [
      {
        value:
          <span className={"flex flex-col"}>
            <Typography className={"inline-flex gap-2 items-center"} tag={"span"} color={"primary"}>
              {/* @ts-ignore */}
              <Status status={tsx.status} />
              {compactString(tsx.id, 16, "middle")}
            </Typography>
            <span>{tsx.date}</span>
            <Typography tag={"span"} size={"subBody"}>{tsx.transactionType}</Typography>
          </span>,
      },
      {
        value:
          <span className={"flex flex-col"}>
            <span className={"flex gap-2"}>
              <Avatar address={"lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"} size={25}/>
              {compactString(tsx.sender, 10, "middle")}
              <span className={"ml-auto"}>{"->"}</span>
            </span>
            <span className={"flex gap-2"}>
              <Avatar address={"lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"} size={25}/>
              {compactString(tsx.recipient, 10, "middle")}
              <span className={"ml-auto"}>{"<-"}</span>
            </span>
            <span className={"inline-flex flex-col text-right"}>
              <Currency number={tsx.amount.toString()} symbol={true}/>
              <Typography tag={"span"} size={"subBody"} className={"inline-flex gap-2 justify-end"}>
                <Currency number={tsx.fee.toString()} symbol={true}/>
                  {"Fee"}
              </Typography>
            </span>
          </span>,
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
    value: "Details",
  },
  {
    value: "From - To",
  },
  {
    value: "Amount",
    className: "text-right",
  },
]

export const mobileHeadcols = [
  {
    value: "Details",
  },
  {
    value: "From - To",
  },
]

export const footerData = [
  {
    category: "Liskscan",
    items: [
      {
        label: "Read the blog",
        link: "https://lisk.com/blog/announcement/replacing-lisk-explorer",
      },
      {
        label: "About the project team",
        link: "https://moosty.com",
      },
    ],
  },
  {
    category: "Lisk",
    items: [
      {
        label: "What is Lisk?",
        link: "https://lisk.com/what-is-lisk",
      },
      {
        label: "What is blockchain?",
        link: "https://lisk.com/what-is-blockchain",
      },
      {
        label: "Lisk SDK documentation",
        link: "https://lisk.com/documentation/lisk-sdk/index.html",
      },
      {
        label: "Join Lisk chat",
        link: "https://lisk.chat",
      },
    ],
  },
  {
    category: "Moosty",
    items: [
      {
        label: "About the team",
        link: "https://moosty.com/",
      },
      {
        label: "See projects",
        link: "https://moosty.com/lisk-ecosystem/",
      },
      {
        label: "Get in touch",
        link: "https://moosty.com/contact/",
      },
    ],
  },
]

export const favourites = [
  {
    address: compactString("lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke", 15),
    username: "test",
    balance: <Currency number={"1000"} decimals={"123"} />,
    avatar: <Avatar address={"lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"} size={20} />
  },
  {
    address: compactString("lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294", 15),
    username: "moosty",
    balance: <Currency number={"1000"} decimals={"123"} />,
    avatar: <Avatar address={"lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"} size={20} />
  },
  {
    address: compactString("lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g", 15),
    balance: <Currency number={"1000"} decimals={"123"} />,
    avatar: <Avatar address={"lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g"} size={20} />
  },
]

export const menuItems = [
  <span>{"transactions"}</span>,
  <span>{"validators"}</span>,
  <span>{"blocks"}</span>,
  <span>{"graphs"}</span>,
  <span>{"test"}</span>,
]

export const search = {
  setSearch: (searchInput: string) => console.log(searchInput),
  searching: false,
  results: {
    results: [
      {
        cols: [{value: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"}],
        type: "account",
        id: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        username: "test",
      },
      {
        cols: [{value: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"}],
        type: "account",
        id: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
        username: "moosty",
      },
      {
        cols: [{value: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g"}],
        type: "account",
        id: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g",
      },
    ],
    quickResult: {

    }
  }
}

export const ads = [
  {
    className: "bg-primary",
    content: <a href="#"><img className="block" src="https://picsum.photos/seed/a/150/100"/></a>,
  },
  {
    className: "bg-primary",
    content: <a href="#"><img className="block" src="https://picsum.photos/seed/b/150/100"/></a>,
  },
  {
    className: "bg-primary",
      content: <a href="#"><img className="block" src="https://picsum.photos/seed/c/150/100"/></a>,
  },
]

export const saveSearch = {
  saveSearch: () => console.log("saved search"),
  recentSearches: [
    {
      address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
      username: "test"
    },
    {
      address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
      username: "moosty"
    },
  ],
  recentSearchesStorage: [
    {
      address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
      username: "test"
    },
    {
      address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
      username: "moosty"
    },
  ]
}