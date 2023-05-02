import React, {FC} from "react";
import {Typography} from "../typography/typography";
import {cls} from "../../assets/utils";

type tag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "span"
  | "p"
  | "small"
  | "em"
  | "strong"
  | "button"
  | "text";

type size =
  | "Heading1"
  | "Heading2"
  | "Heading3"
  | "Heading4"
  | "Heading5"
  | "Heading6"
  | "ParagraphLarge"
  | "ParagraphSmall"
  | "Paragraph6"
  | "menu"
  | "label"
  | "Button"
  | "body"
  | "subBody"
  | "blurbTitle";

interface ListProps {
  className?: string
  itemClassname?: string
  color?: string
  size?: size
  tag?: tag
  listItems: Array<{ label: string, href?: string, color?: string, size?: size, className?: string, tag?: tag }>
}

export const List: FC<ListProps> = ({
  className,
  itemClassname,
  color,
  size,
  tag,
  listItems,
}) => {
  return (
    <ul
      className={cls([
        "pl-8 list-none",
        className
      ])}
    >
      {
        listItems.map(item => (
          <li>
            <Typography
              className={cls([
                item.className,
                itemClassname,
              ])}
              color={item.color || color || "current"}
              size={item.size || size || "body"}
              tag={item.tag || tag || "span"}
            >
              {item.label}
            </Typography>
          </li>
        ))
      }
    </ul>
  )
}