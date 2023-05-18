import React from "react"
import {List} from "../../atoms/list/list";
export interface FooterLink {
  _key: string
  label: string
  href: string
}
export interface FooterLinksProps {
  title: string
  items: FooterLink[]
}

export const FooterLinks = ({
  title,
  items
}: FooterLinksProps) => {
  return (
    <div className="my-2 w-full h-auto">
      <div className=" font-medium text-onFooter uppercase mb-2">
        <b>{title}</b>
      </div>
      <List listItems={items} />
    </div>
  )
}
