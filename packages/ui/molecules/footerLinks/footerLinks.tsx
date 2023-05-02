import React from "react"
import {List} from "../../atoms/list/list";

export interface FooterLinksProps {
  category: string
  items: {
    label: string
    link: string
  }[]
}

export const FooterLinks = ({
  category,
  items
}: FooterLinksProps) => {
  return (
    <div className="my-2 w-full h-auto">
      <div className=" font-medium text-onFooter uppercase mb-2">
        <b>{category}</b>
      </div>
      <List listItems={items} />
    </div>
  )
}