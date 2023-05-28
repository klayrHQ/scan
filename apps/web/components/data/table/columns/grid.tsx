import { ValueFormatter } from "../../../valueFormatter";
import { ColumnProps } from "./index";

export const GridColumn = ({ values }: ColumnProps) => {
  const rows = Array(Math.ceil(values.length / 2), 1);
  return (
    <div>
      {rows.map((v, i) => (
        <div className={"flex flex-row"}>
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
