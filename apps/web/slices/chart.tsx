import {PieChart} from "../components/data/charts/pieChart";
import {DonutChart} from "../components/data/charts/donutChart";
import {ColumnsChart} from "../components/data/charts/columnsChart";

export type FlexibleArrayType = {
  [key: string]: number | string;
};

const chartList = {
  pie: PieChart,
  donut: DonutChart,
  columns: ColumnsChart,
}

export const ChartSlice = ({
  chartType,
  chartData
}: {
  chartType?: "pie" | "donut" | "columns";
  chartData: FlexibleArrayType[];
}) => {
  if (chartData) {
      if(chartType) {
        const Component = chartList[chartType]
        return (
          <Component chartData={chartData} />
        )
      }

      return <div />
  }

  return <div />
}