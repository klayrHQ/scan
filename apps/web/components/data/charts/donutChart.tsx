"use client"
import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {FlexibleArrayType} from "../../../slices/chart";

export const DonutChart = ({chartData }: {chartData: FlexibleArrayType[]}) => {
  useLayoutEffect(() => {

    let root = am5.Root.new("chartdiv");
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {})
    );

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        categoryField: Object.keys(chartData[0])[0].toString(),
        valueField: Object.keys(chartData[0])[1].toString(),
        alignLabels: false,
        innerRadius: am5.percent(50),
      })
    );
    series.data.setAll(chartData);

    series.labels.template.set("forceHidden", true);
    series.ticks.template.set("visible", false);

    return () => {
      root.dispose();
    };
  }, [chartData]);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }} />
  );
}