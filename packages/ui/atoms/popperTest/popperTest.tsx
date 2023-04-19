import { usePopper } from "react-popper";
import React, {useRef} from "react";

interface PopperTestProps {
  className?: string
}

export const PopperTest = ({
  className,
                           }: PopperTestProps) => {
  const anchorRef = useRef(null)
  const popperRef = useRef(null)
  const {styles, attributes,} = usePopper(
    anchorRef.current,
    popperRef.current,
    {
      placement: "bottom",
    },
  )

  return (
    <div>
      <div
        className={["m-auto w-[200px] h-[300px] p-4 bg-blue rounded text-onTopbar", className].join("")}
        ref={anchorRef}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada nulla vel mauris malesuada tempor. Aenean ut hendrerit magna. Sed pulvinar augue nunc, eu auctor ex ornare nec. Curabitur tincidunt, urna nec porta vestibulum, nulla diam iaculis est, in molestie odio nulla ac justo. Nulla facilisi. Aliquam vitae odio eget ante tempor euismod.
      </div>
      <div className={"bg-red"} ref={popperRef} style={styles.popper} {...attributes.popper}>
        Popper test
      </div>
    </div>
  )
}