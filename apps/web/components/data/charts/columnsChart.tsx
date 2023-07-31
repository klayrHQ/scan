"use client"
import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {FlexibleArrayType} from "../../../slices/chart";
import {cls, Typography} from "ui";
import {ColorSet} from "@amcharts/amcharts5";

let data = [{
  country: "USA",
  value: 2025
}, {
  country: "China",
  value: 1882
}, {
  country: "Japan",
  value: 1809
}, {
  country: "Germany",
  value: 1322
}, {
  country: "UK",
  value: 1122
}, {
  country: "France",
  value: 1114
}, {
  country: "India",
  value: 984
}, {
  country: "Spain",
  value: 711
}, {
  country: "Netherlands",
  value: 665
}, {
  country: "South Korea",
  value: 443
}, {
  country: "Canada",
  value: 441
}];

export const ColumnsChart = ({
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

    let root = am5.Root.new(`${id}ChartDiv`);

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true
      })
    );

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
      maxHeight: 30,
      oversizedBehavior: "truncate",
    });

    xRenderer.grid.template.setAll({
      location: 1
    })

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: labelKey,
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));

// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: valueKey,
      sequencedInterpolation: true,
      categoryXField: labelKey,
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));

    xAxis.data.setAll(chartData);
    series.data.setAll(chartData);

    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
    series.columns.template.adapters.add("fill", function(fill, target) {
      const colors = chart.get("colors") as ColorSet;
      return colors.getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function(stroke, target) {
      const colors = chart.get("colors") as ColorSet;
      return colors.getIndex(series.columns.indexOf(target));
    });

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    /*// Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);*/

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