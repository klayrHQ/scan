"use client";
import React, {cloneElement, FC, Fragment, ReactElement, ReactNode} from "react";
import { Dialog, Transition } from "@headlessui/react";
import {cls} from "../../assets/utils";
import {cva} from "class-variance-authority";

interface ModalFullHeightProps {
  width?: string;
  button?: ReactElement;
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  closeButton?: ReactElement
  hideBackdrop?: boolean
  animation?: "fade" | "fromRight" | "fromLeft" | "fromTop" | "fromBottom"
  containerClassname?: string
}

const animations = cva(
  [],
  {
    variants: {
      animation: {
        fade: "opacity-0",
        fromRight: "translate-x-full",
        fromLeft: "-translate-x-full",
        fromBottom: "translate-y-full",
        fromTop: "-translate-y-full",
        undefined: "hidden",
      },
    },
  },
)

export const ModalFullHeight: FC<ModalFullHeightProps> = ({
  children,
  width,
  button,
  isOpen,
  setIsOpen,
  closeButton,
  hideBackdrop,
  animation= "fade",
  containerClassname,
}) => {

  return (
    <div className={containerClassname}>
      <div className="inset-0 flex items-center justify-center">
        {button ? (
          cloneElement(button, {
            onClick: () => setIsOpen(!isOpen),
          })
        ) : (
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {"Open dialog"}
          </div>
        )}
      </div>
      <div className={"absolute top-0 right-0"}>
        <Transition show={isOpen}>
          <Dialog
            as="div"
            className="relative z-50"
            onClose={() => {
              setIsOpen(false);
            }}
          >
            {
              !hideBackdrop &&
              <Transition.Child
                as={Fragment}
                enter="ease-in duration-300"
                enterFrom="bg-opacity-full"
                enterTo="bg-opacity-high "
                leave="ease-in duration-300"
                leaveFrom="bg-opacity-high "
                leaveTo="bg-opacity-full"
              >
                <Dialog.Overlay
                  className="fixed inset-0 transition bg-surface-4 duration-300"
                  onClick={() => setIsOpen(false)}
                />
              </Transition.Child>
            }
            <Transition.Child
              as={Fragment}
              enter={`ease-in ${animation === "fade" ? "duration-100" : "duration-300"}`}
              enterFrom={animations({
                animation
              })}
              enterTo=""
              leave={`ease-in ${animation === "fade" ? "duration-100" : "duration-300"}`}
              leaveFrom=""
              leaveTo={animations({
                animation
              })}
            >
              <Dialog.Panel
                className={[
                  width
                    ? `desktop:max-w-${width} desktop:w-${width}`
                    : "desktop:max-w-max",
                  "w-full h-full box-border",
                  "overflow-x-hidden overflow-y-auto",
                  "fixed top-0 right-0",
                  "bg-surface",
                  "text-left align-middle shadow-xl",
                ].join(" ")}
              >
                {children}
                {
                  closeButton &&
                    cloneElement(closeButton, {
                      className: cls([
                        closeButton.props.className,
                        "absolute top-3 right-0 z-50"
                      ]),
                      onClick: () => setIsOpen(false),
                    })
                }
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};
