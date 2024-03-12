import React, {FC, ReactNode} from "react"
import { FooterLinks } from "../../molecules/footerLinks/footerLinks";
import { LinkedinIcon, TwitterIcon } from "../../assets/icons"
import {Container} from "../../atoms/container/container";

export interface FooterProps {
  className?: string
  footerContent?: Array<{title: string, items: { label: string, href: string, _key: string }[]}>
  copyrightContent?: string | ReactNode
}

export const Footer: FC<FooterProps> = ({
  className,
  footerContent,
  copyrightContent,
}) => {
  return (
    <div className={`w-full h-auto block text-onFooter text-left mt-auto ${className}`}>
      <div className="relative top-0 bottom-0 w-full h-full bg-footer mt-8">
        <div className="container w-app max-w-app mx-auto px-6">
          <div className="sm:flex py-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              {footerContent &&
                footerContent.map((item) => (
                  <div key={`link-${item.title}`} className="flex flex-col">
                    <FooterLinks {...item} />
                  </div>
                ))}
              <div className="flex flex-col">
                <div className=" font-normal text-base mb-2 mt-4 uppercase ">
                  <b>Socials</b>
                </div>
                <div className="w-full justify-center flex flex-row space-x-3">
                  <a
                    href={"https://www.linkedin.com/company/moosty/"}
                    target={"_blank"}
                    rel={"noopener nofollow noreferrer"}
                  >
                    <LinkedinIcon className="cursor-pointer text-onFooter" />
                  </a>
                  <a
                    href={"https://twitter.com/Liskscan"}
                    target={"_blank"}
                    rel={"noopener nofollow noreferrer"}
                  >
                    <TwitterIcon className="cursor-pointer text-onFooter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="w-full px-6 bg-footer">
        <div className=" border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-4">
            {copyrightContent}
          </div>
        </div>
      </Container>
    </div>
  )
}
