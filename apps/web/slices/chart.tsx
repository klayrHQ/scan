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
  queryData,
  chartType,
  chartDataKey,
  keyLabel,
  valueLabel,
}: {
  queryData: any;
  chartType?: "pie" | "donut" | "columns";
  chartDataKey: string;
  keyLabel?: string;
  valueLabel?: string;
}) => {
  const [chartData, setChartData] = useState()

  useEffect(() => {
    //const chartDataKeyArray = chartDataKey.split(".");
    //const extractedData = getValueByNestedIndex(queryData, chartDataKeyArray);
    // TODO chartData met keyLabel en valueLabel tot chart geschikte array opmaken
    const extractedData = getFromDottedKey(chartDataKey, "", {}, queryData)

    if (extractedData) {
      /*const formattedArray = extractedData?.map((data, key) => (
        {
          keyLabel: key,
          valueLabel: data,
        }
      ))*/
      setChartData(extractedData)
    }

    console.log("chartData", chartData)
  }, [queryData]);

  /*const getValueByNestedIndex = (data: any, keys: string[]): any => {
    if (keys.length === 0) {
      return data;
    }

    const currentKey = keys.shift();
    if (data && typeof data === "object" && currentKey && currentKey in data) {
      return getValueByNestedIndex(data[currentKey], keys);
    }

    return undefined;
  };*/

  if (chartData) {
      if(chartType) {
        const Component = chartList[chartType]
        //return <Component chartData={chartData} />

      }

      return <div />
  }

  return <div />
}