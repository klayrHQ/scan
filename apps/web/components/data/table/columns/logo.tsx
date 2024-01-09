import { ColumnProps } from "./index";

export const LogoColumn = ({ values }: ColumnProps) => {
  const logoValue = values.find((value) => value?.value?.png || value?.value?.svg);
  const imageSource = logoValue
    ? logoValue.value.svg || logoValue.value.png
    : "placeholder.png";

  return (
    <img className={"w-5 h-5 items-center"} src={imageSource} alt="Logo" />
  );
};
