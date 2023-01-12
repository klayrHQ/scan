import React, { FC, useEffect, useState } from "react"
import { Paper} from "../paper/paper";
import { ChevronUpIcon} from "@heroicons/react/24/solid";
import { useHotkeys } from "react-hotkeys-hook"

interface GotoTopProps {

}

export const GotoTop = ({

}: GotoTopProps) => {
  const [visible, setVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToBottom = () => {
    window.scrollBy({
      top: 5500,
      behavior: "smooth",
    })
  }
  useHotkeys("shift+up", () => scrollToTop(), [scrollToTop])
  useHotkeys("shift+down", () => scrollToBottom(), [scrollToBottom])
  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      if (window.pageYOffset > 400) {
        setVisible(true)
      }
      if (window.pageYOffset < 500) {
        setVisible(false)
      }
    })
  }, [])
  return (
    <div onClick={scrollToTop}>
      <Paper
        surface={3}
        shadow={4}
        className={[

          !visible && "hidden",
          "fixed right-10 bottom-10",
          "rounded  p-3 z-40 cursor-pointer",
        ].join(" ")}
      >
        <ChevronUpIcon className={"w-6 h-6"} />
      </Paper>
    </div>
  )
}
