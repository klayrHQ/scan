"use client"
import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {FlexibleArrayType} from "../../../slices/chart";
import {cls, Typography} from "ui";

const data = [{
  category: "Research",
  value1: 1000,
  value2: 588
}, {
  category: "Marketing",
  value1: 1200,
  value2: 1800
}, {
  category: "Sales",
  value1: 850,
  value2: 1230
}];

export const DoubleColumnsChart = ({
                               chartData,
                               id,
                               title,
                               className,
                               height,
                             }: {
  chartData: FlexibleArrayType[];
  id: string;
  title?: string;
  className?: string;
  height?: string;
}) => {
  useLayoutEffect(() => {

    let root = am5.Root.new(`${id}ChartDiv`);

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(chartData);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: Object.keys(chartData[0])[1].toString(),
        categoryXField: "category"
      })
    );
    series1.data.setAll(chartData);

    if(chartData[0][2]) {
      let series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: Object.keys(chartData[0])[2].toString(),
          categoryXField: "category"
        })
      );
      series2.data.setAll(chartData);
    }

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    return () => {
      root.dispose();
    };
  }, [chartData]);

  return (
    <div className={cls(["flex gap-4 flex-col", className])}>
      <Typography tag={"h2"} size={"Heading5"}>{title}</Typography>
      <div id={`${id}ChartDiv`} style={{width: "100%", height: height || "250px",}}/>
    </div>
  );
}