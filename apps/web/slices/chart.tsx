"use client"
import {PieChart} from "../components/data/charts/pieChart";
import {DonutChart} from "../components/data/charts/donutChart";
import {ColumnsChart} from "../components/data/charts/columnsChart";
import {useEffect, useState} from "react";
import {DoubleColumnsChart} from "../components/data/charts/doubleColumnsChart";
import {convertBeddowsToLSK} from "../lib/queries/lisk";

export type FlexibleArrayType = {
  [key: string]: number | string;
};

const chartList = {
  pie: PieChart,
  donut: DonutChart,
  columns: ColumnsChart,
  doubleColumns: DoubleColumnsChart,
}

export const ChartSlice = ({
  id,
  queryData,
  chartType,
  chartDataKey,
  labelKey,
  valueKey,
  valueKey2,
  chartTitle,
  className,
  height,
}: {
  id: string;
  queryData: any;
  chartType?: "pie" | "donut" | "columns" | "doubleColumns";
  chartDataKey: string;
  labelKey?: string;
  valueKey?: string;
  valueKey2?: string;
  chartTitle?: string;
  className?: string;
  height?: string;
}) => {
  const [chartData, setChartData] = useState<{ [key: string]: string | number }[] | undefined>()

  useEffect(() => {
    const chartDataKeyArray = chartDataKey.split(".");
    const extractedData = getValueByNestedIndex(queryData, chartDataKeyArray);

    //const extractedData = getFromDottedKey(chartDataKey, "", {}, queryData)

    if (chartType !== "doubleColumns") {
      if (extractedData) {
        const chartDataArray = Object.entries(extractedData).map(([key, value]) => {
          let modifiedLabelKey = key.replace(/^[^:]+:/, "").replace(/([A-Z])/g, " $1");
          // Start the string with a capital letter
          modifiedLabelKey = modifiedLabelKey.charAt(0).toUpperCase() + modifiedLabelKey.slice(1);
          modifiedLabelKey = modifiedLabelKey.replace(/_/g, "-");

          return {
            [labelKey || "labelKey"]: modifiedLabelKey,
            [valueKey || "valueKey"]: Number(value),
          }
        });

        setChartData(chartDataArray)
      }
    } else {
      if (extractedData) {
        const sortedData = extractedData
          .slice() // Create a copy to avoid modifying the original array
          .sort((a: (string | number | Date)[], b: (string | number | Date)[]) => {
            if (a[0] && b[0]) {
              const dateA = new Date(a[0]);
              const dateB = new Date(b[0]);
              return dateA.getTime() - dateB.getTime();
            }
            return 0;
          });

        const chartDataArray = sortedData.map((item: { [x: string]: string; }) => {
          const values = Object.entries(item)
          const date = new Date(values[0][1]);
          const day = date.toLocaleDateString("en-US", { weekday: "short" }).substring(0, 2);

          const lsk = Number(Number(convertBeddowsToLSK(String(values[2][1]))).toFixed(2))
          return {
            [labelKey || values[0][0]]: day,
            [valueKey || values[1][0]]: values[1][1],
            [valueKey2|| values[2][0]]: lsk,
          };
        });

        setChartData(chartDataArray)
      }
    }

    //console.log("keyLabel", labelKey)
    console.log("beddowsToLskTest", convertBeddowsToLSK(String(1809221654001)))
    console.log("chartData", chartData)
  }, [queryData]);

  const getValueByNestedIndex = (data: any, keys: string[]): any => {
    if (keys.length === 0) {
      return data;
    }

    const currentKey = keys.shift();
    if (data && typeof data === "object" && currentKey && currentKey in data) {
      return getValueByNestedIndex(data[currentKey], keys);
    }

    return undefined;
  };

  if (chartData) {
      if(chartType) {
        const Component = chartList[chartType]
        return <Component
          chartData={chartData}
          className={className}
          height={height}
          id={id}
          labelKey={labelKey || "labelKey"}
          title={chartTitle}
          valueKey={valueKey || "valueKey"}
        />
      }

      return <div />
  }

  return <div />
}