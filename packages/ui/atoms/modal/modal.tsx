"use client"
import React, {cloneElement, FC, ReactElement, ReactNode, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {cva} from "class-variance-authority";
import {cls} from "../../assets/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string;
  button?: ReactElement;
  children: ReactNode;
  closeButton?: ReactElement;
  type?: "base" | "primary";
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const modalCVA = cva(
  ["w-full  max-w-md max-w-max", "rounded", "transform overflow-hidden", "text-left align-middle shadow-xl transition-all"],
  {
    variants: {
      type: {
        primary: "text-onPrimary bg-primary",
        base: "text-body bg-background",
      },
    },
  },
);

export const Modal:FC<Props> = ({
  children,
  button,
  type= "base",
  className,
  padding,
  closeButton,
  isOpen,
  setIsOpen,
}) => {

  return (
    <>
      <div className="flex items-center justify-center">
        {button ? (
          cloneElement(button, {
            className: cls([
              button.props.className,
              "cursor-pointer",
            ]),
            onClick: () => setIsOpen(!isOpen),
          })
        ) : (
          <div
            className={"cursor-pointer"}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {"Open"}
          </div>
        )}
      </div>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog as="div" className="relative z-50" onClose={() => {
          setIsOpen(false)
        }}
        >
          <Transition.Child
            enter="ease-in duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-40"
            leave="ease-in duration-300"
            leaveFrom="opacity-40"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className="fixed inset-0 bg-black transition duration-300"
              onClick={() => setIsOpen(false)}
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={[
                "flex",
                "min-h-full",
                "items-center justify-center p-4 text-center box-border",
              ].join(" ")}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={modalCVA({
                    className: [
                      "box-border",
                      padding ? `p-${padding}` : "",
                      className,
                    ],
                    type,
                  })}
                >
                  {
                    closeButton &&
                      <div
                        className={
                          "absolute right-3 top-3 text-white cursor-pointer"
                        }
                      >
                        {cloneElement(closeButton, {
                          onClick: () => setIsOpen(false),
                        })}
                      </div>
                  }
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
