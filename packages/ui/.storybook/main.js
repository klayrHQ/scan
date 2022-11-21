module.exports = {
  stories: [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)",
    "../atoms/**/*.stories.@(js|jsx|ts|tsx)",
    "../molecules/**/*.stories.@(js|jsx|ts|tsx)",
    "../organisms/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../templates/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
    "@storybook/addon-backgrounds",
    "@storybook/addon-measure",
    "@etchteam/storybook-addon-status",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
