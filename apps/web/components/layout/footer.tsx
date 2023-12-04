import React from "react";
import {FooterType} from "../../lib/queries/getFooter";
import {Footer as UIFooter, Typography} from "ui"

export interface FooterProps extends FooterType {
  copyright: string;
}

export const Footer = ({ lists, copyright, }: FooterProps) => {
  return (
    <UIFooter footerContent={lists} copyrightContent={<Typography color={"onPrimary"} tag={"span"}>{copyright}</Typography>} />
  );
};
