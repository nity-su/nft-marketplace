const { override, addWebpackAlias, addBabelPlugins } = require("customize-cra");
const path = require("path");

const ignoreWarnings = (value) => (config) => {
  config.ignoreWarnings = value;
  return config;
};

module.exports = override(
  ignoreWarnings([/Failed to parse source map/]),
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src", "components"),
    "@assets": path.resolve(__dirname, "src", "assets"),
    "@pages": path.resolve(__dirname, "src", "pages"),
  }),
  ...addBabelPlugins(["babel-plugin-styled-components"])
);
