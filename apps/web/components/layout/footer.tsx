import React from "react";
import {FooterType} from "../../lib/queries/getFooter";
import {Footer as UIFooter, Typography} from "ui"
export interface FooterProps extends FooterType {
  copyright: string;
}

const footerLists = [
  {
    title: "Klayr Explorer",
    items: [
      {
        label: "Read the blog",
        href: "https://klayr.xyz/blog",
        _key: "0101"
      },
      {
        label: "About the project team",
        href: "https://klayr.xyz/about",
        _key: "0102"
      },
    ],
  },
  {
    title: "Klayr",
    items: [
      {
        label: "What is Klayr?",
        href: "https://klayr.xyz/learn/about-klayr/what-is-klayr",
        _key: "0201"
      },
      {
        label: "What is blockchain?",
        href: "https://klayr.xyz/learn/about-web3/what-is-a-blockchain",
        _key: "0202"
      },
      {
        label: "Klayr SDK documentation",
        href: "https://klayr.xyz/documentation/klayr-sdk/index.html",
        _key: "0203"
      },
      {
        label: "Join Klayr chat",
        href: "https://klayr.chat",
        _key: "0204"
      },
    ],
  },
  {
    title: "About",
    items: [
      {
        label: "Klayr",
        href: "https://klayr.xyz",
        _key: "0301",
      },
    ],
  }
]

export const Footer = ({ lists, copyright, }: FooterProps) => {
  return (
    <UIFooter footerContent={footerLists} copyrightContent={<Typography color={"onPrimary"} tag={"span"}>{copyright}</Typography>} />
  );
};
