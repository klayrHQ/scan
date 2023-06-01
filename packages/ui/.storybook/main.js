module.exports = {
  stories: [
    "../atoms/**/*.stories.@(js|jsx|ts|tsx)",
    "../molecules/**/*.stories.@(js|jsx|ts|tsx)",
    "../organisms/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../templates/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
    "@storybook/addon-backgrounds",
    "storybook-addon-theme-toggle",
    "@storybook/addon-measure",
    "@etchteam/storybook-addon-status",
    // "storybook-addon-next-router",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: true,
      },
    },
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
