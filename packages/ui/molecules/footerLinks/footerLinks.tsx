import React from "react"

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
      <ul className="list-reset leading-normal">
        {items &&
          items.map((item) => (
            <li
              key={`link-${item.label}`}
              className=" cursor-pointer  text-base text-onFooter hover:underline "
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-onFooter"
              >
                {item.label}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}