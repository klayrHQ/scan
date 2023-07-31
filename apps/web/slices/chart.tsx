"use client"
import {PieChart} from "../components/data/charts/pieChart";
import {DonutChart} from "../components/data/charts/donutChart";
import {ColumnsChart} from "../components/data/charts/columnsChart";
import {useEffect, useState} from "react";
import {getFromDottedKey} from "../lib/dotString";

export type FlexibleArrayType = {
  [key: string]: number | string;
};

const chartList = {
  pie: PieChart,
  donut: DonutChart,
  columns: ColumnsChart,
}

export const ChartSlice = ({
  id,
  queryData,
  chartType,
  chartDataKey,
  labelKey,
  valueKey,
  chartTitle,
  className,
  height,
}: {
  id: string;
  queryData: any;
  chartType?: "pie" | "donut" | "columns";
  chartDataKey: string;
  labelKey?: string;
  valueKey?: string;
  chartTitle?: string;
  className?: string;
  height?: string;
}) => {
  const [chartData, setChartData] = useState<{ [key: string]: string | number }[] | undefined>()

  useEffect(() => {
    const chartDataKeyArray = chartDataKey.split(".");
    const extractedData = getValueByNestedIndex(queryData, chartDataKeyArray);

    //const extractedData = getFromDottedKey(chartDataKey, "", {}, queryData)
    //const extractedData = queryData["transactions-statistics"]["data"]["distributionByAmount"]["0200000000000000"]
    if (extractedData) {
      const chartDataArray = Object.entries(extractedData).map(([key, value]) => {
        let modifiedLabelKey = key
        modifiedLabelKey = key.replace(/^[^:]+:/, "").replace(/([A-Z])/g, " $1");
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

    console.log("keyLabel", labelKey)
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