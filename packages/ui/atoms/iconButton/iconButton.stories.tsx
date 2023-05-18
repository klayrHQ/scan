import React from "react";
import { iconVariants } from "../../types";
import { Grid} from "../grid/grid";
import { IconButton } from "./iconButton";

export default {
  title: "Atoms/Inputs/IconButton",
  component: IconButton,
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/WsV3Uv1J6H5yEMjVys7ZhY/Colecti_Design-Figma?node-id=0%3A10835&t=pu5q5kWwUJkSTKw6-4",
    },
    status: {
      type: ["released"],
    },
  },
} as any;


