import React from "react";
import {Sizes, Tags, Typography} from "../typography/typography";
import { cls } from "../..";
import { FooterLink } from "../../molecules/footerLinks/footerLinks";

interface ListProps {
  className?: string;
  itemClassname?: string;
  color?: string;
  size?: Sizes;
  tag?: Tags;
  listItems: FooterLink[];
}

export const List = ({
  className,
  itemClassname,
  color,
  size,
  tag,
  listItems,
}: ListProps) => (
  <ul className={cls(["pl-0 list-none", className])}>
    {listItems.map((item) => (
      <li key={item._key}>
        <Typography
          className={cls([itemClassname])}
          color={color || "current"}
          size={size || "body"}
          tag={tag || "span"}
          link={!!item.href}
        >
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-onFooter no-underline"
            >
              {item.label}
            </a>
          ) : (
            item.label
          )}
        </Typography>
      </li>
    ))}
  </ul>
);
