import React from "react";
import {FooterType} from "../../lib/queries/getFooter";
import {Footer as UIFooter, Typography} from "ui"
export interface FooterProps extends FooterType {
  copyright: string;
}

const footerLists = [
  {
    title: "Klayr",
    items: [
      {
        label: "What is Klayr?",
        href: "https://klayr.xyz",
        _key: "0201"
      },
      {
        label: "Klayr SDK documentation",
        href: "https://klayr.xyz/documentation/klayr-sdk/index.html",
        _key: "0202"
      },
      {
        label: "Join Klayr chat",
        href: "https://klayr.chat",
        _key: "0203"
      },
    ],
  },
]

export const Footer = ({ copyright, }: FooterProps) => {
  return (
    <UIFooter footerContent={footerLists} copyrightContent={<Typography color={"onPrimary"} tag={"span"}>{copyright}</Typography>} />
  );
};
