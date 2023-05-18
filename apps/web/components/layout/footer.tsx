import React from "react";
import {FooterType} from "../../lib/queries/getFooter";
import { Footer as UIFooter} from "ui"

export interface FooterProps extends FooterType {
  copyright: string;
}

export const Footer = ({ lists, copyright, }: FooterProps) => {
  return (
    <UIFooter footerContent={lists} copyrightContent={copyright} />
  );
};
