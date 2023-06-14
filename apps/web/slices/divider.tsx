import {Divider, DividerProps} from "ui/atoms/divider/divider";

export const DividerSlice = ({
  className,
  color,
  width,
  borderWidth,
  borderStyle,
  align,
  marginY,
}: DividerProps) => {
  return (
    <Divider
      className={className}
      color={color}
      width={width}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      align={align}
      marginY={marginY}
    />
  )
}