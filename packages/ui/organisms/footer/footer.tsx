import React from "react"
import { FooterLinks, FooterLinksProps } from "../../molecules/footerLinks/footerLinks";
import { LinkedinIcon, TwitterIcon } from "../../assets/icons"
import {useRouter} from "next/router";

interface FooterProps {
  className?: string
  footerData?: Array<FooterLinksProps>
}

export const Footer = ({
  className,
  footerData
}: FooterProps) => {
  const router = useRouter()

  return (
    <div className={`w-full h-auto block text-onFooter text-left mt-8 ${className}`}>
      <div className="relative top-0 bottom-0 w-full h-full bg-footer">
        <div className="container w-app max-w-app mx-auto px-6">
          <div className="sm:flex py-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              {footerData &&
                footerData.map((item) => (
                  <div key={`link-${item.category}`} className="flex flex-col">
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
      <div className="container mx-auto px-6">
        <div className=" border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-4">
            <p className="text-base text-onBackgroundLow font-bold mb-2">
              &copy;{new Date().getFullYear()} by{" "}
              <a
                className={"text-secondary"}
                target="_blank"
                rel="noopener noreferrer"
                href="https://moosty.com"
              >
                MOOSTY
              </a>
              <span className={"text-onBackgroundMedium mx-2"}>I|I</span>
              <span className={"text-onBackgroundLow"}>
              -{/*[{process?.env?.BUILD_ID?.substr(0, 7)}]*/}
            </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
