import { ValueFormatter } from "../../../valueFormatter";
import { ColumnProps } from "./index";

export const GridColumn = ({ values }: ColumnProps) => {
  console.log(Math.floor(values.length / 2))
  const rows = Array(Math.ceil(values.length / 2), 1);
  console.log(values.slice(2, 4), rows)
  return (
    <div className={"flex"}>
      {rows.map((v, i) => (
        <div className={"flex"}>
          {values.slice(i * 2, 2 + (i * 2)).map((value, index) => (
            <div className={`${index % 2 === 1 ? "grow" : ""}`}>
              <ValueFormatter
                key={`${value._key}-${value.value}`}
                value={value.value}
                {...value.format}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
