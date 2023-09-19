"use client"
import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {FlexibleArrayType} from "../../../slices/chart";
import {cls, Typography} from "ui";
import {ColorSet} from "@amcharts/amcharts5";

export const LineChart = ({
  chartData,
  id,
  title,
  className,
  height,
  labelKey,
  valueKey,
}: {
  chartData: FlexibleArrayType[];
  id: string;
  title?: string;
  className?: string;
  height?: string;
  labelKey: string;
  valueKey: string;
}) => {
  useLayoutEffect(() => {

    let root = am5.Root.new(`${id}LineDiv`);

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        pinchZoomX: false
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("forceHidden", true);

    // Generate random data
    let date = new Date();
    date.setHours(0, 0, 0, 0);

    let value = 20;
    function generateData() {
      value = am5.math.round(Math.random() * 10 - 4.8 + value, 1);
      if (value < 0) {
        value = Math.random() * 10;
      }

      if (value > 100) {
        value = 100 - Math.random() * 10;
      }
      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        valueLocked: value
      };
    }

    function generateDatas(count: number) {
      let data = [];
      for (var i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }

    // Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {
        stroke: am5.color("#335ed4"),
      }),
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));


    // Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: labelKey,
      valueXField: valueKey,
      tooltip: am5.Tooltip.new(root, {
        labelText: `${labelKey}: {valueY}\n${valueKey}: {date.formatDate("dd-MM-YYYY")}`
      })
    }));

    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true
    });

    // Set data
    let data = generateDatas(300);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartData]);

  return (
    <div className={cls(["flex gap-4 flex-col", className])}>
      <Typography tag={"h2"} size={"Heading5"}>{title}</Typography>
      <div id={`${id}LineDiv`} style={{width: "100%", height: height || "250px",}}/>
    </div>
  );
}