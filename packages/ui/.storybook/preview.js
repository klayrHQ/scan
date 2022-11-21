import "../global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Docs",
        [
          "Atomic Design Methodology",
          "Atoms",
          "Molecules",
          "Organisms",
          "Templates",
          "Pages",
        ],
        "Style Guide",
        "Atoms",
        "Molecules",
        "Organisms",
        "Templates",
        "Pages",
      ],
    },
  },
  backgrounds: {
    default: "Zodiac Blue",
    values: [
      {
        name: "Zodiac Blue",
        value: "rgb(12,20,45)",
      },
      {
        name: "ultramarineBlue",
        value: "rgb(53,95,212)",
      },
      {
        name: "inkBlue",
        value: "rgb(37,71,152)",
      },
      {
        name: "silverGray",
        value: "rgb(196,206,227)",
      },
      {
        name: "platinumGray",
        value: "rgb(222,229,242)",
      },
      {
        name: "athensWhite",
        value: "rgb(248,250,252)",
      },
      {
        name: "ufoGreen",
        value: "rgb(41,214,122)",
      },
      {
        name: "copacabanaYellow",
        value: "rgb(247,227,110)",
      },
      {
        name: "candyPink",
        value: "rgb(255,209,210)",
      },
      {
        name: "furyRed",
        value: "rgb(255,71,90)",
      },
    ],
  },
  status: {
    statuses: {
      todo: {
        background: "#b4b4b4",
        color: "#000000",
        description: "This component is not yet started",
      },
      building: {
        background: "#ffdc00",
        color: "#151515",
        description: "This component is being build",
      },
      testing: {
        background: "#0000ff",
        color: "#ffffff",
        description: "This component is in testing",
      },
      reviewing: {
        background: "#ff9100",
        color: "#000000",
        description: "This component needs to be reviewed",
      },
      released: {
        background: "#1aff00",
        color: "#000000",
        description: "This component is stable and released",
      },
      deprecated: {
        background: "#6c6c6c",
        color: "#ffffff",
        description: "This component is deprecated",
      },
    },
  },
};
