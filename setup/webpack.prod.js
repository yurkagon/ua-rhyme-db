const { merge } = require("webpack-merge");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[contenthash].bundle.js",
    publicPath: require("../package.json").homepage,
  },
});
