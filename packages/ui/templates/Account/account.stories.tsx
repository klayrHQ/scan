import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Account } from "./account";
import {Currency} from "../../atoms/currency/currency";
import {Avatar} from "../../atoms/avatar/avatar";
import {compactString} from "../../assets/utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/Account",
  component: Account,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    className: { control: "text" },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {
    compactString: compactString,
    favourites: [
      {
        address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        username: "test",
        balance: {number: "1000", decimals: "123"}
      },
      {
        address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
        username: "moosty",
        balance: {number: "1000", decimals: "123"}
      },
      {
        address: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g",
        balance: {number: "1000", decimals: "123"}
      },
    ],
    menu: [
      {
        label: "Transactions",
        link: "#",
      },
      {
        label: "Delegates",
        link: "#",
      },
      {
        label: "Votes",
        link: "#",
      },
      {
        label: "Tools",
        link: "#",
      }
    ],
    tsxHeadCols: [
      {
        value: "status",
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
        value: "Amount",
      },
      {
        value: "Fee",
      },
    ],
    transactions: [
      {
        id: "0",
        cols: [
          {
            value: "Finalized",
          },
          {
            value: "012345",
          },
          {
            value: "19 Dec 22 01:33:00 PM",
          },
          {
            value: "token | transfer",
          },
          {
            value: <span className={"flex gap-2"}>
                <Avatar address={"lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"} size={25}/>
                lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294
              </span>,
          },
          {
            value: <span className={"flex gap-2"}>
                <Avatar address={"lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"} size={25}/>
                lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke
              </span>,
          },
          {
            value: <Currency number={"100"} symbol={true}/>,
          },
          {
            value: <Currency number={"10"} symbol={true}/>,
          },
        ]
      },
      {
        id: "2",
        cols: [
          {
            value: "Finalized",
          },
          {
            value: "012345",
          },
          {
            value: "19 Dec 22 01:33:00 PM",
          },
          {
            value: "token | transfer",
          },
          {
            value: <span className={"flex gap-2"}>
                <Avatar address={"lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"} size={25}/>
                lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke
              </span>,
          },
          {
            value: <span className={"flex gap-2"}>
                <Avatar address={"lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"} size={25}/>
                lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294
              </span>,
          },
          {
            value: <Currency number={"100"} symbol={true}/>,
          },
          {
            value: <Currency number={"10"} symbol={true}/>,
          },
        ]
      },
      {
        id: "2",
        cols: [
          {
            value: "Finalized",
          },
          {
            value: "012345",
          },
          {
            value: "19 Dec 22 01:33:00 PM",
          },
          {
            value: "token | transfer",
          },
          {
            value:
              <span className={"flex gap-2"}>
                <Avatar address={"lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"} size={25}/>
                lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke
              </span>,
          },
          {
            value: <span className={"flex gap-2"}>
                <Avatar address={"lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"} size={25}/>
                lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294
              </span>,
          },
          {
            value: <Currency number={"100"} symbol={true}/>,
          },
          {
            value: <Currency number={"10"} symbol={true}/>,
          },
        ]
      },
      {
        id: "3",
        cols: [
          {
            value: "Finalized",
          },
          {
            value: "012345",
          },
          {
            value: "19 Dec 22 01:33:00 PM",
          },
          {
            value: "token | transfer",
          },
          {
            value: <span className={"flex gap-2"}>
                <Avatar address={"lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"} size={25}/>
                lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294
              </span>,
          },
          {
            value: <span className={"flex gap-2"}>
                <Avatar address={"lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"} size={25}/>
                lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke
              </span>,
          },
          {
            value: <Currency number={"100"} symbol={true}/>,
          },
          {
            value: <Currency number={"10"} symbol={true}/>,
          },
        ]
      },

    ],
    tableFullWidth: true,
    account: {
      summary: {
        address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        balance: 6996629,
        username: "test",
      },
      dpos: {
        delegate: {
          status: "non-eligible",
          username: "test",
          rank: "1977",
        }
      }
    }
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Account> = (args) => <Account {...args} />;

export const Primary: ComponentMeta<typeof Account> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};