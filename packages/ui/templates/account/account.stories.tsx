import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Account } from "./account";
import { compactString } from "../../assets/utils";
import {account, accountDetails, accountHeader} from "../../assets/mockupData/accountData";
import {Typography} from "../../atoms/typography/typography";

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
    copyNoteText: "",
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
    account: account,
    assetsData: [
      {
        name:
          <div className={"flex gap-2 items-center"}>
            <img className={"h-8 w-8"} src={"https://cryptologos.cc/logos/lisk-lsk-logo.png?v=025"} />
            <div className={"flex flex-col"}>
              <Typography tag={"span"} color={"primary"}>{"LSK"}</Typography>
              <Typography tag={"span"} size={"subBody"} color={"onSurfaceLow"}>{"Lisk Main Token"}</Typography>
            </div>
          </div>,
        amount: "100",
        total: "$100",
      },
      {
        name:
          <div className={"flex gap-2 items-center"}>
            <img className={"h-8 w-8"} src={"https://cryptologos.cc/logos/lisk-lsk-logo.png?v=025"} />
            <div className={"flex flex-col"}>
              <Typography tag={"span"} color={"primary"}>{"LSK"}</Typography>
              <Typography tag={"span"} size={"subBody"} color={"onSurfaceLow"}>{"Lisk Main Token"}</Typography>
            </div>
          </div>,
        amount: "100",
        total: "$100",
      },
      {
        name:
          <div className={"flex gap-2 items-center"}>
            <img className={"h-8 w-8"} src={"https://cryptologos.cc/logos/lisk-lsk-logo.png?v=025"} />
            <div className={"flex flex-col"}>
              <Typography tag={"span"} color={"primary"}>{"LSK"}</Typography>
              <Typography tag={"span"} size={"subBody"} color={"onSurfaceLow"}>{"Lisk Main Token"}</Typography>
            </div>
          </div>,
        amount: "100",
        total: "$100",
      },
      {
        name:
          <div className={"flex gap-2 items-center"}>
            <img className={"h-8 w-8"} src={"https://cryptologos.cc/logos/lisk-lsk-logo.png?v=025"} />
            <div className={"flex flex-col"}>
              <Typography tag={"span"} color={"primary"}>{"LSK"}</Typography>
              <Typography tag={"span"} size={"subBody"} color={"onSurfaceLow"}>{"Lisk Main Token"}</Typography>
            </div>
          </div>,
        amount: "100",
        total: "$100",
      },
      {
        name:
          <div className={"flex gap-2 items-center"}>
            <img className={"h-8 w-8"} src={"https://cryptologos.cc/logos/lisk-lsk-logo.png?v=025"} />
            <div className={"flex flex-col"}>
              <Typography tag={"span"} color={"primary"}>{"LSK"}</Typography>
              <Typography tag={"span"} size={"subBody"} color={"onSurfaceLow"}>{"Lisk Main Token"}</Typography>
            </div>
          </div>,
        amount: "100",
        total: "$100",
      },
      {
        name:
          <div className={"flex gap-2 items-center"}>
            <img className={"h-8 w-8"} src={"https://cryptologos.cc/logos/lisk-lsk-logo.png?v=025"} />
            <div className={"flex flex-col"}>
              <Typography tag={"span"} color={"primary"}>{"LSK"}</Typography>
              <Typography tag={"span"} size={"subBody"} color={"onSurfaceLow"}>{"Lisk Main Token"}</Typography>
            </div>
          </div>,
        amount: "100",
        total: "$100",
      },
      {
        name:
          <div className={"flex gap-2 items-center"}>
            <img className={"h-8 w-8"} src={"https://cryptologos.cc/logos/lisk-lsk-logo.png?v=025"} />
            <div className={"flex flex-col"}>
              <Typography tag={"span"} color={"primary"}>{"LSK"}</Typography>
              <Typography tag={"span"} size={"subBody"} color={"onSurfaceLow"}>{"Lisk Main Token"}</Typography>
            </div>
          </div>,
        amount: "100",
        total: "$100",
      },
      {
        name:
          <div className={"flex gap-2 items-center"}>
            <img className={"h-8 w-8"} src={"https://cryptologos.cc/logos/lisk-lsk-logo.png?v=025"} />
            <div className={"flex flex-col"}>
              <Typography tag={"span"} color={"primary"}>{"LSK"}</Typography>
              <Typography tag={"span"} size={"subBody"} color={"onSurfaceLow"}>{"Lisk Main Token"}</Typography>
            </div>
          </div>,
        amount: "100",
        total: "$100",
      },
    ],
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Account> = (args) => {
  const [showAllAssets, setShowAllAssets] = useState<boolean>(false)
  return (
    <Account {...args} showAllAssets={showAllAssets} setShowAllAssets={setShowAllAssets} />
  )
}

export const Primary: ComponentMeta<typeof Account> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

export const CopiedItem: ComponentMeta<typeof Account> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CopiedItem.args = {
  copyNoteText: "You have copied some text",
};