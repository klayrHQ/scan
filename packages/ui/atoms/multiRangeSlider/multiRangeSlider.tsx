import React, { FC } from "react";
import {cls} from "../../assets/utils";
import "./sliderStyles.css";

interface MultiRangeSliderProps {
  min: number
  max: number
  className?: string
  trackClassName?: string
  trackColor?: string
  fillClassName?: string
  fillColor?: string
  fromValue: number
  setFromValue: (value: number) => void
  toValue: number
  setToValue: (value: number) => void
  steps?: number
}

export const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  className,
  trackClassName,
  trackColor= "surface-2",
  fillClassName,
  fillColor= "primary",
  setFromValue,
  setToValue,
  fromValue,
  toValue,
  steps
}) => {

  return (
    <div className={cls(["relative", className])}>
      <input
        className="absolute w-full h-1/3 top-0 bottom-0 m-auto slider min-slider text-primary"
        type="range"
        min={min}
        max={max}
        step={steps || 1}
        onChange={({ target }) => {
          parseInt(target.value) < (max) &&
          setFromValue(parseInt(target.value))
          parseInt(target.value) >= toValue && toValue < max &&
          setToValue(parseInt(target.value) + (steps ? steps : 1))
        }}
        value={fromValue}
      />
      <input
        className="absolute w-full h-1/3 top-0 bottom-0 m-auto slider max-slider text-primary"
        type="range"
        min={min}
        max={max}
        step={steps || 1}
        onChange={({ target }) => {
          parseInt(target.value) > (min) &&
          setToValue(parseInt(target.value))
          parseInt(target.value) <= fromValue && fromValue > min &&
          setFromValue(parseInt(target.value) - (steps ? steps : 1))
        }}
        value={toValue}
      />

      <div
        className={cls([
          "w-full absolute m-auto top-0 bottom-0 slider-track pointer-events-none min-h-[0.5rem]",
          trackClassName,
          trackColor && `bg-${trackColor}`,
        ])}
      >
        <div
          style={{
            left: `${(fromValue / max) * 100}%`,
            right: `${100 - (toValue / max) * 100}%`,
          }}
          className={cls([
            "absolute m-auto top-0 bottom-0 border-primary border-2 pointer-events-none min-h-[0.5rem]",
            fillClassName,
            fillColor && `bg-${fillColor}`,
          ])}
        >
          <div className="w-full h-full bg-primary opacity-30">

          </div>
        </div>
      </div>
    </div>
  )
}
