import {JsonItem} from "../components/jsonItem";

export const JsonItemSlice = ({
  src,
  className,
  childClassName,
  expanderClassName,
  labelClassName,
  nullClassName,
  undefinedClassName,
  numberClassName,
  stringClassName,
  booleanClassName,
  copy,
} : {
  src: string
  className?: string
  childClassName?: string
  expanderClassName?: string
  labelClassName?: string
  nullClassName?: string
  undefinedClassName?: string
  numberClassName?: string
  stringClassName?: string
  booleanClassName?: string
  copy?: boolean
}) => {

  return (
    <JsonItem
      src={src}
      className={className}
      childClassName={childClassName}
      expanderClassName={expanderClassName}
      labelClassName={labelClassName}
      nullClassName={nullClassName}
      undefinedClassName={undefinedClassName}
      numberClassName={numberClassName}
      stringClassName={stringClassName}
      booleanClassName={booleanClassName}
    />
  )
}