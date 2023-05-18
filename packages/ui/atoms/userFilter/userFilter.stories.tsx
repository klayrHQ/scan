import React, {useEffect, useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserFilter } from "./userFilter";
import {FiltersType} from "../../types";
import {search} from "../../assets/mockupData/mockupData";

export default {
  title: "Atoms/Filters/UserFilter",
  component: UserFilter,
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
    className: "w-10/12",
    results: search.results.results
  }
} as any;

const Template: ComponentStory<typeof UserFilter> = (args) => {
  const [filters, setFilters] = useState<FiltersType | undefined>({})
  const [type, setType] = useState<"sender" | "recipient">("sender")
  const [senderInput, setSenderInput] = useState<string>("")
  const [recipientInput, setRecipientInput] = useState<string>("")
  const setSearch = search.setSearch
  const [hide, setHide] = useState<boolean>(true)

  useEffect(() => {
    if (type === "recipient" && filters?.recipient) {
      setRecipientInput(filters.recipient)
    }

    if (type === "sender" && filters?.sender) {
      setSenderInput(filters.sender)
    }
  }, [filters?.recipient, filters?.sender])

  useEffect(() => {
    if (senderInput && senderInput.length > 2) {
      setSearch(senderInput)
    } else {
      setSearch("")
    }

    if (recipientInput && recipientInput.length > 2) {
      setSearch(recipientInput)
    } else {
      setSearch("")
    }
  }, [senderInput,recipientInput])

  return (
    <div className={"h-[100vh] w-[100vw] flex justify-center items-center p-8"}>
      <UserFilter
        {...args}
        filters={filters}
        setFilters={setFilters}
        type={type}
        setType={setType}
        hide={hide}
        setHide={setHide}
      />
    </div>
  )
}

export const Primary: ComponentMeta<typeof UserFilter> = Template.bind({});
Primary.args = {

};