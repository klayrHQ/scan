"use client"
import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {FlexibleArrayType} from "../../../slices/chart";
import {cls, Typography} from "ui";
import {ColorSet} from "@amcharts/amcharts5";

export const DonutChart = ({
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
  className?: string
  height?: string;
  labelKey: string;
  valueKey: string;
}) => {
  useLayoutEffect(() => {

    let root = am5.Root.new(`${id}ChartDiv`, {
      tooltipContainerBounds: {
        top: 50,
        right: 100,
        bottom: 50,
        left: 100
      }
    });
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {})
    );

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        categoryField: labelKey,
        valueField: valueKey,
        alignLabels: false,
        innerRadius: am5.percent(50),
        tooltip: am5.Tooltip.new(root, {
          keepTargetHover: true
        })

      })
    );
    series.data.setAll(chartData);

    series.labels.template.set("forceHidden", true);
    series.ticks.template.set("visible", false);

    /*let colors = chart.get("colors") as ColorSet;
    colors?.set("colors", [
      am5.color(0xffffff),
      am5.color(0x087f8c),
      am5.color(0x5aaa95),
      am5.color(0x86a873),
      am5.color(0xbb9f06)
    ]);*/

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