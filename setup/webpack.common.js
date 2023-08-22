const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const favicon_path = "src/assets/header_logo.png";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "main.bundle.js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: favicon_path
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "404.html",
      favicon: favicon_path
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.*/,
        include: path.resolve(__dirname, "../database"),
        type: "asset/source",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  }
};
