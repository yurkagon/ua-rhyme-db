const { merge } = require("webpack-merge");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "../public"),
    },
    compress: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map'
});
