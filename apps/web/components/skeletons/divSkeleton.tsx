import {cls} from "ui";

export const DivSkeleton = ({
  className,
}: {
  className: string
}) => {
  return (
    <div
      className={cls([
        className,
        "bg-surface-1 p-4 rounded shadow-xl h-[213px]",
      ])}
    />
  )
}