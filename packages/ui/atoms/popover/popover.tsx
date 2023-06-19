import React, {
  cloneElement,
  FC,
  Fragment,
  HTMLAttributes,
  ReactElement,
  ReactNode, useEffect,
  useState,
} from "react";
import { Popover as HuiPopover, Dialog, Transition } from "@headlessui/react";
import { cva } from "class-variance-authority";
import {cls} from "../../assets/utils";

interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  setOpen: (open: boolean) => void;
  disabled?: boolean;
  containerClassName?: string;
  button: ReactNode;
  buttonOnClick?: () => void;
  type?:
    | "primary"
    | "secondary";
  padding?: string;
  style?: any;
  mobileSlideIn?: false | "right" | "top" | "bottom" | "left" | "belowTopBar";
  containerWidth?: string
  width?: string;
  mobileWidth?: string;
  closeIcon?: ReactElement;
  mobileChildren?: ReactNode | ReactNode[] | ReactElement;
  roundedMobile?: boolean;
  hideMobileBackdrop?: boolean;
  placement?: "left" | "right" | "center"
}

const popover = cva(
  ["border-none", "rounded", "absolute", "z-20", "flex", "box-border"],
  {
    variants: {
      type: {
        primary: "text-body bg-primary",
        secondary: "text-body bg-background",
      },
      roundedMobile: {
        true: "rounded",
        false: "tablet:rounded",
      },
      placement: {
        left: "left-0",
        right: "right-0",
        center: "left-0 right-0 mx-auto",
      },
    },
  },
);

const slideIn = cva(
  ["border-none", "z-20", "flex", "box-border"],
  {
    variants: {
      type: {
        primary: "text-body bg-primary",
        secondary: "text-body bg-background",
      },
      mobileSlideIn: {
        right: "right-0",
        top: "right-0 left-0",
        bottom: "right-0 left-0",
        left: "left-0",
        belowTopBar: "right-0 left-0",
        false: "",
      },
      roundedMobile: {
        true: "rounded",
        false: "tablet:rounded",
      },
    },
  },
);

export const Popover: FC<PopoverProps> = ({
  className,
  containerClassName,
  children,
  button,
  buttonOnClick,
  type = "secondary",
  padding,
  style,
  mobileSlideIn,
  containerWidth,
  width,
  mobileWidth,
  mobileChildren,
  closeIcon,
  roundedMobile = true,
  hideMobileBackdrop,
  placement= "left",
  open,
  setOpen,
  disabled,
  ...props
}) => {

  return (
    <>
      <HuiPopover
        className={cls([
          "text-center relative",
          containerClassName,
          mobileSlideIn && "hidden tablet:block",
          containerWidth ? `w-${containerWidth}` : "w-max",
        ])}
      >
        <HuiPopover.Button
          className={
            "p-0 w-full border-none outline-none bg-transparent rounded-small"
          }
          disabled={disabled}
          onClick={buttonOnClick}
        >
          {button}
        </HuiPopover.Button>
        <HuiPopover.Panel
          className={popover({
            className: cls([
              className,
              "w-max tablet:w-auto",
              width && mobileWidth
                ? `tablet:w-${width}`
                : width && !mobileWidth && `w-${width}`,
              mobileWidth && `w-${mobileWidth}`,
              "box-border z-50",
              "absolute",
              "popper-box",
            ]),
            type,
            roundedMobile,
            placement,
          })}
          {...props}
        >
          {children}
        </HuiPopover.Panel>
      </HuiPopover>
      {mobileSlideIn && (
        <div className={"tablet:hidden"}>
          <div
            onClick={() => {
              setOpen(!open);
              buttonOnClick;
            }}
          >
            {button}
          </div>
          <div className={"absolute top-0"}>
            <Transition show={open}>
              <Dialog
                as="div"
                onClose={() => {
                  setOpen(false);
                }}
              >
                {
                  !hideMobileBackdrop &&
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in duration-300"
                        enterFrom="bg-opacity-full"
                        enterTo="bg-surface-4 bg-opacity-high "
                        leave="ease-in duration-300"
                        leaveFrom="bg-surface-4 bg-opacity-high "
                        leaveTo="bg-opacity-full"
                    >
                        <Dialog.Overlay
                            className="fixed inset-0 transition duration-300 z-40"
                            onClick={() => setOpen(false)}
                        />
                    </Transition.Child>
                }
                <Transition.Child
                  as={Fragment}
                  enter="ease-in duration-300"
                  enterFrom={
                    mobileSlideIn === "right" ? "translate-x-full" :
                      mobileSlideIn === "left" ? "-translate-x-full" :
                        mobileSlideIn === "bottom" || mobileSlideIn === "belowTopBar" ? "translate-y-full" :
                          "-translate-y-full"
                  }
                  enterTo=""
                  leave="ease-in duration-300"
                  leaveFrom=""
                  leaveTo={
                    mobileSlideIn === "right" ? "translate-x-full" :
                      mobileSlideIn === "left" ? "-translate-x-full" :
                        mobileSlideIn === "bottom" || mobileSlideIn === "belowTopBar" ? "translate-y-full" :
                          "-translate-y-full"
                  }
                >
                  <Dialog.Panel
                    className={slideIn({
                      type,
                      roundedMobile,
                      mobileSlideIn,
                      className: cls([
                        mobileWidth ? `w-${mobileWidth}` : "w-10/12",
                        "min-h-5/6 h-screen box-border",
                        "fixed top-0 z-50",
                        "bg-surface",
                        "text-left align-middle shadow-xl",
                        "rounded-r-none",
                        closeIcon && "pt-12",
                      ]),
                    })}
                    style={style}
                    {...props}
                  >
                    {closeIcon && (
                      <div
                        className={
                          "absolute right-3 top-3 text-white cursor-pointer"
                        }
                      >
                        {cloneElement(closeIcon, {
                          onClick: () => setOpen(false),
                        })}
                      </div>
                    )}
                    {mobileChildren || children}
                  </Dialog.Panel>
                </Transition.Child>
              </Dialog>
            </Transition>
          </div>
        </div>
      )}
    </>
  );
};
