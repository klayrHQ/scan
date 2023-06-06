"use client"
import React, {useState} from "react";
import {ModalFullHeight} from "ui/atoms/modalFullHeight/modalFullHeight";
import {Button} from "ui";
import {Bars3Icon as MenuIcon, XMarkIcon as XIcon} from "@heroicons/react/24/solid";
import {MobileMenu} from "ui/organisms/mobileMenu/mobileMenu";
import {FavouritesModalClient} from "./favouritesModal";
import {SearchModalClient} from "./searchModal";

export const MobileMenuClient = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <ModalFullHeight
      containerClassname={"md:hidden"}
      button={
        <Button
          className="inline-flex items-center justify-center px-2 rounded-md text-gray-400 bg-transparent border-none hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          label={
            <>
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-5 w-5"/>
            </>
          }
        />
      }
      closeButton={
        <Button
          className="inline-flex items-center justify-center px-2 focus:outline-none top-[3.3rem] right-2"
          aria-controls="mobile-menu"
          aria-expanded="false"
          label={
            <>
              <span className="sr-only">Close main menu</span>
              <XIcon className="h-5 w-5" />
            </>
          }
        />
      }
      setIsOpen={setOpen}
      isOpen={open}
      hideBackdrop
    >
      <MobileMenu
        menuItems={Array.from(Array(5).keys()).map(
          (index) => (
            <span>
              menu test {index}
            </span>
          )
        )}
        subMenu={Array.from(Array(8).keys()).map(
          (index) => (
            <span>
              submenu test {index}
            </span>
          )
        )}
        menuItemsTop={[
          <div className="w-app mx-auto flex justify-end mb-3">
            <SearchModalClient />
          </div>,
          <div className="w-app mx-auto flex justify-end mb-3">
            <FavouritesModalClient />
          </div>
        ]}
      />
    </ModalFullHeight>
  )
}