const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const favicon_path = "src/assets/favicon.png";

require("./generate_song_list");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: favicon_path,
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "404.html",
      favicon: favicon_path,
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
        include: path.resolve(__dirname, "../database/bundled"),
        type: "asset/source",
      },
      {
        test: /\.*/,
        include: path.resolve(__dirname, "../database/lazy"),
        type: "asset/resource",
      },
      {
        test: /\.(png|jpe?g|webp|tiff?)$/i,
        use: [
          "file-loader",
          {
            loader: "webpack-image-resize-loader",
            options: {
              width: 1000,
            },
          },
        ],
      },
    ],
  },
};
